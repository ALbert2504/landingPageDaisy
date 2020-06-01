"use strict";

/************************ Section 8,, portfolio ****************************/

// images equal heights
const imgGift = document.querySelector('.gallery__image2 > img');
const imgWebpage = document.querySelector('.gallery__image3');

let imgWebpageHeight = parseFloat(getComputedStyle(imgWebpage).height);
imgGift.style.height = `${imgWebpageHeight}px`;

const imgCars = document.querySelector('.gallery__image6 > img');
imgCars.style.height = `${imgWebpageHeight}px`;

const imgBike = document.querySelector('.gallery__image1');
let imgBikeHeight = parseFloat(getComputedStyle(imgBike).height);
const imgColors = document.querySelector('.gallery__image4 > img');
const imgBus = document.querySelector('.gallery__image5 > img');
imgColors.style.height = `${imgBikeHeight}px`;
imgBus.style.height = `${imgBikeHeight}px`;


/**************************** Section 10,, comments **************************/
