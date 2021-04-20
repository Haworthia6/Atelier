import React from 'react';
import { useSelector, useDispatch } from 'react-redux'

function ImageGallery (props) {
  const [currentPhoto, setCurrentPhoto] = React.useState(0);
  const dis = useDispatch();

  return (
    <div>images: {props.photos.map((photo, index) => {
      return (<img src={photo.url} alt="photo" key={index}/>);
    })}
    </div>
  )
}

export default ImageGallery;