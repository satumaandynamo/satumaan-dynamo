import React, { useEffect, useState } from 'react'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
// import Masonry from 'react-masonry-component'
import Image from 'material-ui-image'
import { useFeed } from './feed-hook'

export const Tile = ({ src, height, width }) => {
  return (
    <div style={{ height: height, width: width }}>
      <Image src={src} imageStyle={{ width: width, height: height }} />
    </div>
  )
}

export const Feed = () => {
  const [images, { get }] = useFeed()

  useEffect(() => {
    get(10)
  }, [])

  return (
    <>
      <h3>Hello masonry!</h3>
      <Masonry>
        {images.data.map((image) => (
          <Tile src={image.src} height={image.height} width={image.width} />
        ))}
      </Masonry>
    </>
  )
}
