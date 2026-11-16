import { classes } from 'typestyle'
import styles from './videoplayer.styles'

type VideoPlayerProps = {
  width?: number
  height?: number
  url: string
  title: string
  isLarge?: boolean
}

const VideoPlayer = ({
  width,
  height,
  url,
  title,
  isLarge,
}: VideoPlayerProps) => {
  return (
    <div className={classes(styles.video, isLarge && styles.videoLarge)}>
      <iframe
        className={classes(styles.iframe, isLarge && styles.iframeLarge)}
        title={title}
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
