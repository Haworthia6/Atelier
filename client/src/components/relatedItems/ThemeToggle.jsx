import React from 'react';

function ThemeToggle () {

  const handleThemeChange = () => {
    const app = document.getElementById('root');
    const rightArrow = document.querySelector('.arrow-right-container');
    const arrowLeftContainer = document.querySelector('.arrow-left-container');
    if (app.classList.contains('light')) {
      app.classList.remove('light');
      app.classList.add('dark');
      rightArrow.remove('light-arrow-background')
      rightArrow.add('light')
    } else {
      app.classList.remove('dark');
      app.classList.add('light');
    }

  };

  return (<div>
    <button onClick={handleThemeChange}>Toggle</button>
  </div>);
}

export default ThemeToggle;
