# react-modal

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/react-modal.svg)](https://www.npmjs.com/package/react-modal) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## What is it? 

This is a react componant able to display in full screen or hide a modal from its parent componant. 
You can install it in your react application to speed up your modal development, and modify its style as you wish. 

## Install

```bash
npm install --save react-modal
```

## Usage

After installing the package, go to the parent component of your modal and import useState 

```jsx
import { useState } from 'react'
```

Then copy/past this hook into the parent component of this modal:
```jsx
  const [modal, setModal] = useState(false)
```


Only two parameters are available for this modal componant:
- text ==> a string defining the text to show in the modal
- closeModal ==> funtion that will change the value of "modal" to false or true (using useState) to show or hide the modal, as follows

```jsx
<MyComponent text="Form sent !"  closeModal={() => {setModal(false)}}/>

```

exemple :


```jsx
import React, { Component, useState } from 'react'

import MyComponent from 'react-modal'
import 'react-modal/dist/index.css'

class Example extends Component {
  const [modal, setModal] = useState(false)
  render() {
    return <MyComponent text="Form sent !"  closeModal={() => {setModal(false)}} />
  }
}
```

## License

MIT © [Floriansaliba](https://github.com/Floriansaliba)

## CSS 

The style of each modal element can be modified using following class selectors :
```css
.modal-background

.modal-container

.modal-btn
```

You can also copy/past the following default style in your css 👍 : 

```css
.modal-background{
  position: absolute;
  top : 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: hsla(109, 0%, 67%, 0.8);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.modal-container{
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: solid;
  border-radius: 10px;
  max-width: 200px;
  height: 50px;
  color: white;
  background-color: cornflowerblue;
  font-size: 1rem;
  padding: 30px;
}

.modal-btn{
  position: absolute;
  top: 2px;
  right: 2px;
  width: 15px;
  height: 15px;
  fill: #a52a2a;
}

.modal-btn:hover{
  cursor: pointer;
}
```