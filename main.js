// First Question

const arrowBtn1 = document.querySelector(".pic1");
const arrowBtn2 = document.querySelector(".pic2");
const arrowBtn3 = document.querySelector(".pic3");
const arrowBtn4 = document.querySelector(".pic4");
const arrowBtn5 = document.querySelector(".pic5");

const question1 = document.querySelector(".question1");
const question2 = document.querySelector(".question2");
const question3 = document.querySelector(".question3");
const question4 = document.querySelector(".question4");
const question5 = document.querySelector(".question5");

const answer1 = document.querySelector(".answer1");
const answer2 = document.querySelector(".answer2");
const answer3 = document.querySelector(".answer3");
const answer4 = document.querySelector(".answer4");
const answer5 = document.querySelector(".answer5");

arrowBtn1.addEventListener("click", function () {
  answer1.classList.toggle("hidden");
  question1.classList.toggle("question_frase");
  arrowBtn1.classList.toggle("rotate");
});

arrowBtn2.addEventListener("click", function () {
  answer2.classList.toggle("hidden");
  question2.classList.toggle("question_frase");
  arrowBtn2.classList.toggle("rotate");
});

arrowBtn3.addEventListener("click", function () {
  answer3.classList.toggle("hidden");
  question3.classList.toggle("question_frase");
  arrowBtn3.classList.toggle("rotate");
});

arrowBtn4.addEventListener("click", function () {
  answer4.classList.toggle("hidden");
  question4.classList.toggle("question_frase");
  arrowBtn4.classList.toggle("rotate");
});

arrowBtn5.addEventListener("click", function () {
  answer5.classList.toggle("hidden");
  question5.classList.toggle("question_frase");
  arrowBtn5.classList.toggle("rotate");
});
