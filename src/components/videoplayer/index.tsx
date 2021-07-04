import React from 'react'
import styles from './videoplayer.styles'

type VideoPlayerProps = {
  width?: number
  height?: number
  url: string
}

const VideoPlayer = ({ width, height, url }: VideoPlayerProps) => {
  return (
    <>
      <div className={styles.video}>
        <iframe
          className={styles.iframe}
          title="puzzle1"
          width={width}
          height={height}
          src={url}
          allow="accelerometer1; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          frameBorder="0"
          allowFullScreen
        />
      </div>
    </>
  )
}

export default VideoPlayer
