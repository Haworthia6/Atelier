import { useState } from 'react';

function useImage () {
  const [image, setImage] = useState('');

  const handleThumbnailClick = ({ target }) => {
    setImage(target.style['background-image']
      .replace(/url\("/, '')
      .replace(/"\)$/, '')
    );
  };

  return [image, setImage, handleThumbnailClick];
}

export default useImage;
