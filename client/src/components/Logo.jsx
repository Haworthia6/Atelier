import React from 'react';
import { isEmpty } from 'lodash';

function Logo () {

  const handleThemeChange = () => {
    const app = document.getElementById('root');
    const rightArrow = document.querySelectorAll('.arrow-right-container');
    const leftArrow = document.querySelectorAll('.arrow-left-container');

    if (app.classList.contains('light')) {
      app.classList.remove('light');
      app.classList.add('dark');
      if(!isEmpty(rightArrow)) {
        rightArrow.forEach(arrow => {
          arrow.classList.remove('light-arrow-background-right');
          arrow.classList.add('dark-arrow-background-right');
        });
      }
      if (!isEmpty(leftArrow)) {
        leftArrow.forEach(arrow => {
          arrow.classList.remove('light-arrow-background-left');
          arrow.classList.add('dark-arrow-background-right');
        });
      }
    } else {
      app.classList.remove('dark');
      app.classList.add('light');
      if(!isEmpty(rightArrow)) {
        rightArrow.forEach(arrow => {
          arrow.classList.remove('dark-arrow-background-right');
          arrow.classList.add('light-arrow-background-right');
        });
      }
    }

  };



  return (
    <div className="logo">
      <h1 onClick={handleThemeChange} >Haworthia</h1>
    </div>);
}

export default Logo;
