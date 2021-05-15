# Atelier 
 An e-Commerce platform for east coast millenials.
 
Atelier is a company best described with the words, *"minimal"*, *"sleek"*, *"aloof"*. The product reflects an east coast minimalist nature that NYC is well known for and the site should reflect that. 

Built with a two-person team, Atelier's Product Detail page reqiured a rework in order to attract younger customers with a sleek view while noting the possibility of future scaling. The company also required use of their REST API, which was blackboxed. 

Using **React** and **Redux** as the primary tools, the new Atelier Product Detail page offers seamless tied functionality between components that were built modularly. Strong regard was given to reusable components that may be used in other parts of the codebase. For styling, SCSS was used as a preprocessor, again, with reusability kept in mind. Overall, the construction aimed to be both highly operational and eye-catching.

# Team
- Eren Serpin : [Product Overview Component](#Product-Overview-Component)
- Kenny Tran  : [Related Items Component](#Related-Items-Component)  

--- 

## Built With
> Frontend

<img src="https://img.shields.io/badge/Framework-React-%2362DAFB?logo=react"/> <img src="https://img.shields.io/badge/State%20Management-Redux-blueviolet?logo=redux"/> <img src="https://img.shields.io/badge/Styling-SCSS-ff69b4?logo=sass"/> <img src="https://img.shields.io/badge/Bundler-Webpack-%2375AFCC?logo=webpack"/> <img src="https://img.shields.io/badge/Routing-React%20Router-%23CA4245?logo=react-router"/>

> Testing

<img src="https://img.shields.io/badge/Testing-Jest-yellow?logo=jest"/> <img src="https://img.shields.io/badge/Testing-Enzyme-blueviolet"/> <img src="https://img.shields.io/badge/Testing-SuperTest-red"/> 

> Misc.

<img src="https://img.shields.io/badge/Framework-Express.js-critical?logo=express"/> <img src="https://img.shields.io/badge/HTTP-Axios-purple"/>


---

![](gifs/FEC.gif)

## Table of Contents

1. [Project Dependencies](#Project-Dependency-Setup)
2. [Product Overview Component](#Product-Overview-Component)
3. [Related Items Component](#Related-Items-Component)
4. [Redux](#Redux)


## Project Initialization

1. If Yarn is not yet installed on your development environemnt, install Yarn globally:
```bash
npm install -g yarn
```

2. Once Yarn is installed, navigate into the root directory of the repository and install the project dependencies using the CLI:
```bash
yarn
```

3. Once the project dependencies have been installed, run project scripts to get started.
```json
    "build": "webpack --mode development -w",
    "p:build": "webpack --mode production",
    "start": "nodemon ./server/start.js",
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage --colors"
```

	yarn build && yarn start

Once the project is compiled and server started, you can view the project:
* Navigate to http://localhost:3000/

---

# Product Overview Component
This compnentMAYBEwidget, following the business requirements, contains:

- An image gallery of the photos in the database of the current product. The image gallery contains the following features:
	- an image of the default style for the product chosen
	- a built in carousel of the current style's photos in the form of clickable thumbnails and arrows
	- an expand and zoom feature for the current photo being displayed
- A product information area. This area contains the following features and information:
  - Information about the product(name, category, price, rating, style/color)
  - Buttons to share the current url to social media(Facebook, Twitter, Pinterest)
  - A list of thumbnails of the available styles/colors that change the currently selected style/color when clicked.
  - An add to cart section which allows the user to choose the size and quantity of the item
- A product description area. This area displays:
  - A description of the product
  - A list of features that the product possesses

![](gifs/Overview.gif)

---
---

# Related Items Component

![image](https://user-images.githubusercontent.com/74506521/118346234-8969bb00-b4ff-11eb-9c81-0d79444c5c83.png)

## Component Features

1. [Image Carousel](#Image-Carousel)
2. [Dynamic Scrolling](#Dynamic-Scrolling)
3. [Comparing Modal](#Comparing-Modal)
4. [Adding and Removing Outfits](#Adding-and-Removing-Outfits)
5. [Changing Products](#Changing-Products)
6. [Testing](#Testing)
7. [Custom Hooks](#Custom-Hooks)

---

### Image Carousel

![Alt Text](http://g.recordit.co/vSVtyFsKG4.gif)

---

### Dynamic Scrolling

![Alt Text](http://g.recordit.co/ltVlT0u7ft.gif)

---

### Comparing Modal

![Alt Text](http://g.recordit.co/mQ9JxDKvLV.gif)

---

### Adding and Removing Outfits

![Alt Text](http://g.recordit.co/Mosh8RVrDX.gif)

---

### Changing Products

![Alt Text](http://g.recordit.co/ROzr9A7ITw.gif)

---

### Testing

<img src="https://img.shields.io/badge/Code%20Coverage-71.72%25-yellowgreen"/>

![image](https://user-images.githubusercontent.com/74506521/118346806-a6a08880-b503-11eb-8b8c-290b37385615.png)

My Related Items Component has 71.72% code coverage. This testing is done with Jest and Enzyme. 
I created tests for parts of the Redux Store as well as my Custom Hooks and all the Helper Functions for the page.

> Card.test.js
```javascript
  describe('action-button', () => {
    beforeEach(() => {
      wrapper.find('.card-button').simulate('click');
    });
    it('should invoke handleActionClick on click', () => {
      expect(handleActionClick).toHaveBeenCalled();
    });
    it('should pass the product ID to handleActionClick', () => {
      expect(handleActionClick).toHaveBeenCalledWith(11003);
    });
  });
```

> endpoints.test.js
```javascript

    it('GET /api/product/ should return 200 and JSON if valid ID param sent', async (done) => {
      const res = await request.get('/api/product').query({ id: 11002});
      expect(res.status).toBe(200);
      expect(res.body).toEqual(product2Info);
      done();
    });

    it('GET /api/product/ should return 400 if no ID param sent', async (done) => {
      const res = await request.get('/api/product').query({ id: 'invalid' });
      expect(res.status).toBe(400);
      done();
    });

    it('GET /api/styles/ should return 200 and JSON if valid ID param sent', async (done) => {
      const res = await request.get('/api/styles').query({ id: 11002});
      expect(res.status).toBe(200);
      expect(res.body).toEqual(product2Style);
      done();
    });

```

---

### Custom Hooks

Two particularly fun custom hooks I made were useLocalStorage and useScrollIdx.

> useLocalStorage

The useLocalStorage hook was created in order to create data persistence of the Outfits when added and removed by the customer.
The initial useState determines from a customer's first page load if they have any items in localstorage.
If they do, we can load those outfits for them.

```javascript
import { useState } from 'react';
import { isObject } from 'lodash';

function useLocalStorage (key) {
  const [storage, setStorage] = useState(() => {
    if (isObject(window.localStorage)) {
      if (window.localStorage[key]) {
        return JSON.parse(window.localStorage.getItem(key));
      }
    }
    return {};
  });
  
  const setLocalStorage = {
    setItem: (key, data) => {
      const newState = { ...storage, [data.id]: data };
      setStorage(newState);
      window.localStorage.setItem(key, JSON.stringify(newState));
    },
    removeItem: (key, data) => {
      const newState = { ...storage };
      delete newState[data] && setStorage(newState);
      window.localStorage.setItem(key, JSON.stringify(newState));
    }
  };

  return [storage, setLocalStorage];
}
```
> useScrollIdx

The useScrollIdx hook was part of a larger series of calculations that were concerned with clientWidth and scrollWidth along with the width of the individual relatedItems that determined the conditional rendering of the left and right arrows in the Related Items display and the Outfits display.
```javascript
import { useState, useEffect } from 'react';
import { isNull, isUndefined } from 'lodash';

function useScrollIdx (ele = 0) {
  const [scrollLeft, setScrollLeft] = useState(ele);

  useEffect(() => {
    if (isNull(ele)) return [null, null];
    if (isNull(ele.current) || isUndefined(ele.current)) return [null, null];
    if (isNull(ele.current.scrollLeft) || isUndefined(ele.current.scrollLeft)) return [null, null];
    setScrollLeft(ele.current.scrollLeft);
  }, [ele]);
  const setScrollIdx = {
    handleLeftScroll: (ele, scrollSize) => {
      ele.scrollLeft -= (scrollSize + 40);
      setScrollLeft(ele.scrollLeft);
    },
    handleRightScroll: (ele, scrollSize) => {
      ele.scrollLeft += (scrollSize + 40);
      setScrollLeft(ele.scrollLeft);
    },
    reset: (ele) => {
      ele.scrollLeft = 0;
      setScrollLeft(0);
    }
  };

  return [scrollLeft, setScrollIdx];
}
```
