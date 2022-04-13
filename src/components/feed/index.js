import React, { useEffect } from 'react'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import Image from 'material-ui-image'
import { useFeed } from './feed-hook'


export const FEED_TYPES = {
  bike_kitchen: 'bike_kitchen',
  events: 'events',
  latest: 'latest',
};

export const Tile = (props) => {
  const { message, image, imageWidth, imageHeight } = props;

  const aspect = imageWidth / imageHeight;
  const tags = message.match(/\#\w+/g);

  return (
    <div style={{ padding: '10px', boxShadow: '0 0 5px 1px rgba(0,0,0,0.125)' }}>
      <Image src={image} imageStyle={{ height: 'auto' }} aspectRatio={aspect} />
      <p>{message.replace(/\#\w+/g, '')}</p>
      {!!tags?.length ? (
        <ul style={{ listStyle: 'none', display: 'flex', padding: 0 }}>
          {tags.map(
            (tag, i) => (<li key={i} style={{ color: 'blue', marginRight: '10px' }}>{tag}</li>)
          )}
        </ul>
      ) : null}
    </div>
  )
}

export const Feed = ({ feedType = FEED_TYPES.latest }) => {
  const [tiles, { get }] = useFeed()

  useEffect(() => {
    get(feedType);
  }, []);

  return (
    <>
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 750: 2, 1050: 3 }}
      >
        <Masonry gutter="20px">
          {tiles.data.map((tile) => (
            <Tile {...tile} />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </>
  )
}
