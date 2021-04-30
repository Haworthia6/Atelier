import React from 'react';

function ThemeToggle () {

  const handleThemeChange = () => {
    const app = document.getElementById('root');
    if (app.classList.contains('light')) {
      app.classList.remove('light');
      app.classList.add('dark');
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
