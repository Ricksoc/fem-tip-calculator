# Frontend Mentor - Tip calculator app solution

This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person

### Screenshot

![Completed tip calculator desktop view](.images/screenshot.png)


### Links

- Solution URL: [github hosted solution](https://github.com/Ricksoc/fem-tip-calculator)
- Live Site URL: [github pages hosted site](https://ricksoc.github.io/fem-tip-calculator/)

## My process

I completed this project without assistance from any code alongs or videos, relying on mdn, w3 and stack exchange to solve problems. I stuck to SASS and vanilla js to build experience with these.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Vanilla JSe are just examples. Delete this note and replace the list above with your own choices**

### What I learned

Some specific things I learned from this project:

- use of defer when adding javascript to html page
- input, textarea and button elements do not inherit font-family
- the difference fr vs % can make when using Grid layout
- more experience with class specificity, e.g. .class1 .class2 vs .class1.class2
- how to remove spinner buttons from number input fields
- positioning an image within an input field :

.dollar {
  position: relative;
  & input,
  .input {
    padding-left: 35px;
    padding-right: 15px;
  }
  &::before {
    content: url(../../images/icon-dollar.svg);
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-40%);
  }
}

### Continued development

I will completed a few more challenges along these but then intend to start practicing using REACT.
