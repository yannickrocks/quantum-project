import { classes } from 'typestyle'
import styles from './videoplayer.styles'

type VideoPlayerProps = {
  width?: number
  height?: number
  url: string
  isLarge?: boolean
}

const VideoPlayer = ({ width, height, url, isLarge }: VideoPlayerProps) => {
  return (
    <div className={classes(styles.video, isLarge && styles.videoLarge)}>
      <iframe
        className={classes(styles.iframe, isLarge && styles.iframeLarge)}
        title="puzzle1"
        width={width}
        height={height}
        src={url}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        frameBorder="0"
        allowFullScreen
      />
    </div>
  )
}

export default VideoPlayer
