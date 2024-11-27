'use strict';

const display = document.querySelector('.display');

const addToInput = function (input) {
  display.value += input;
};

const clearInput = function () {
  display.value = '';
};
const calculate = function () {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Error';
  }
};
