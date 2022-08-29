"use strict";

const prsText = document.getElementsByClassName("PersonText");
const buttonN = document.getElementById("btnNode");
const bBox = document.getElementById("bigBox");

const prsText2 = document.getElementsByClassName("PersonText2");
const buttonN2 = document.getElementById("btnNode2");
const bBox2 = document.getElementById("bigBox2");

const prsText3 = document.getElementsByClassName("PersonText3");
const buttonN3 = document.getElementById("btnNode3");
const bBox3 = document.getElementById("bigBox3");

const nodeF = function (person, wrapper) {
  const newBox = person[0].cloneNode(true);
  newBox.value = "";
  wrapper.appendChild(newBox);
};

// adding new text inputs
buttonN.addEventListener("click", function () {
  nodeF(prsText, bBox);
});

buttonN2.addEventListener("click", function () {
  nodeF(prsText2, bBox2);
});

buttonN3.addEventListener("click", function () {
  nodeF(prsText3, bBox3);
});

// sum of text inputs (arrays)
document.getElementById("mainForm").addEventListener("submit", function (e) {
  e.preventDefault();
  let sum = 0;
  let sum2 = 0;
  let sum3 = 0;
  for (let i = 0; i < prsText.length; i++) {
    sum += Number(prsText[i].value);
  }
  for (let i = 0; i < prsText2.length; i++) {
    sum2 += Number(prsText2[i].value);
  }
  for (let i = 0; i < prsText3.length; i++) {
    sum3 += Number(prsText3[i].value);
  }

  sum = (Math.round(sum * 100) / 100).toFixed(2);
  sum2 = (Math.round(sum2 * 100) / 100).toFixed(2);
  sum3 = (Math.round(sum3 * 100) / 100).toFixed(2);

  document.getElementById("person1Sum").innerHTML = `${sum} PLN`;
  document.getElementById("person2Sum").innerHTML = `${sum2} PLN`;
  document.getElementById("restSum").innerHTML = `${sum3} PLN`;

  let sums = +sum + +sum2 + +sum3;
  sums = (Math.round(sums * 100) / 100).toFixed(2);
  document.getElementById("wholeSum").innerHTML = `${sums} PLN`;

  let iSum = +sum + +sum3 / 2;
  iSum = (Math.round(iSum * 100) / 100).toFixed(2);
  let kSum = +sum2 + +sum3 / 2;
  kSum = (Math.round(kSum * 100) / 100).toFixed(2);

  const sent = document.getElementById("sentence");

  if (document.getElementById("radio1").checked) {
    sent.innerHTML = `Kuba owes ${kSum} PLN to Iza`;
  } else if (document.getElementById("radio2").checked) {
    sent.innerHTML = `Iza owes ${iSum} PLN to Kuba`;
  } else {
    sent.innerHTML = "Radio button is not checked!";
  }

  document.getElementById("settle-up").style.display = "block";
  window.scrollBy(0, 200);
});
