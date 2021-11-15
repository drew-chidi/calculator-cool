# Frontend Challenge - Calculator app solution

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- See the size of the elements adjust based on their device's screen size
- Perform mathmatical operations like addition, subtraction, multiplication, and division
- Adjust the color theme based on their preference
- Have their initial theme preference checked using `prefers-color-scheme` and have any additional changes saved in the browser
- Bonus: All keys, but the Reset key become disabled when the output is an 'error!'

### Screenshot

![](./public/screenshot.png)

### Links

- Solution URL: (https://github.com/drew-chidi/calculator)
- Live Site URL:(https://calculator-app1eh5.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Tailwind CSS
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

I learned how to use tailwind '@apply' to create custom css.
The differences between eval() and Function(), and why Function() is better for my evaluate function.

```js
const calculateHandler = () => {
  try {
    // setInput(eval(input).toString());
    setInput(Function("return " + input)().toString());
  } catch (err) {
    setInput("Error!");
  }
};
```

### Useful resources

- [Tailwind official documentation](https://www.tailwindcss.com) - This helped me in creating custom classes for my different groups of html elements. I liked that I was able to reduce the utilities classes I would have written on my html tags.

## Author

- [Andrew Chidi]
