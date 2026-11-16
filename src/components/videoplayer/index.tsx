import { useEffect, useEffectEvent, useRef } from 'react'
import { classes } from 'typestyle'
import styles from './videoplayer.styles'

type YouTubeApi = {
  PlayerState: { ENDED: number; PLAYING: number }
  Player: new (
    element: HTMLIFrameElement,
    options: {
      events: {
        onReady(event: { target: { getPlayerState(): number } }): void
        onStateChange(event: { data: number }): void
        onError(): void
      }
    },
  ) => unknown
}

declare global {
  interface Window {
    YT?: YouTubeApi
    onYouTubeIframeAPIReady?: () => void
  }
}

const youTubeApiUrl = 'https://www.youtube.com/iframe_api'

const loadYouTubeApi = () =>
  new Promise<YouTubeApi>((resolve) => {
    if (window.YT?.Player) {
      resolve(window.YT)
      return
    }
    const previousReady = window.onYouTubeIframeAPIReady
    window.onYouTubeIframeAPIReady = () => {
      previousReady?.()
      resolve(window.YT!)
    }
    if (!document.querySelector(`script[src="${youTubeApiUrl}"]`)) {
      const script = document.createElement('script')
      script.src = youTubeApiUrl
      document.head.append(script)
    }
  })

type VideoPlayerProps = {
  width?: number
  height?: number
  url: string
  title: string
  isLarge?: boolean
} & (
  | { onEnded?: never; fallbackEndMs?: never }
  | { onEnded: () => void; fallbackEndMs: number }
)

const VideoPlayer = ({
  width,
  height,
  url,
  title,
  isLarge,
  onEnded,
  fallbackEndMs,
}: VideoPlayerProps) => {
  const iframe = useRef<HTMLIFrameElement>(null)
  const hasEndHandler = Boolean(onEnded)
  const reportEnd = useEffectEvent(() => onEnded?.())

  useEffect(() => {
    if (!hasEndHandler) return
    let isListening = true
    const end = () => {
      if (!isListening) return
      isListening = false
      clearTimeout(fallback)
      reportEnd()
    }
    const fallback = setTimeout(end, fallbackEndMs)
    loadYouTubeApi().then((YT) => {
      if (!isListening || !iframe.current) return
      const followState = (state: number) => {
        if (state === YT.PlayerState.PLAYING) clearTimeout(fallback)
        if (state === YT.PlayerState.ENDED) end()
      }
      new YT.Player(iframe.current, {
        events: {
          onReady: ({ target }) => followState(target.getPlayerState()),
          onStateChange: ({ data }) => followState(data),
          onError: end,
        },
      })
    })
    return () => {
      isListening = false
      clearTimeout(fallback)
    }
  }, [hasEndHandler, fallbackEndMs])

  return (
    <div className={classes(styles.video, isLarge && styles.videoLarge)}>
      <iframe
        ref={iframe}
        className={classes(styles.iframe, isLarge && styles.iframeLarge)}
        title={title}
        width={width}
        height={height}
        src={hasEndHandler ? `${url}&enablejsapi=1` : url}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        frameBorder="0"
        allowFullScreen
      />
    </div>
  )
}

export default VideoPlayer
