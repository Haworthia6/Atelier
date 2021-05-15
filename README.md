# Atelier - An E-Commerce Platform For East-Coast Millenials

Built with a two-person team, Atelier's Product Detail page reqiured a rework in order to attract younger customers with a sleek view while also building with future scalability in mind. The company also required use of their REST API, which was blackboxed.

# Team
- Eren Serpin : [Product Overview Component](#Product-Overview-Component)
- Kenny Tran  : [Related Items Component](#Related-Items-Component)  

--- 

## Built With
> Frontend

<img src="https://img.shields.io/badge/Framework-React-%2362DAFB?logo=react"/> <img src="https://img.shields.io/badge/State%20Management-Redux-blueviolet?logo=redux"/> <img src="https://img.shields.io/badge/Styling-SCSS-ff69b4?logo=sass"/> <img src="https://img.shields.io/badge/Bundler-Webpack-%2375AFCC?logo=webpack"/>

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


## Project Dependency Setup

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
This compnentMAYBEwidget, following the business requirements, contains:

-MAYBE YOU DESCRIBE WHATEVER YOU WANT HERE


> MAYBE GIF OF RELATED PRODUCTS SECTION HERE
