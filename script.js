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

const textOut = document.getElementsByClassName("text-out");
const textOut2 = document.getElementsByClassName("text-out2");
const textOut3 = document.getElementsByClassName("text-out3");

const nodeF = function (person, wrapper, out) {
  const newBox = person[0].cloneNode(true);
  newBox.value = "";
  wrapper.appendChild(newBox);
  newBox.focus();
  const newerBox = out[0].cloneNode(true);
  wrapper.appendChild(newerBox);
};

const delText = function (prs, out) {
  for (let i = 1; i < out.length; i++) {
    out[i].addEventListener("click", function () {
      prs[i].style.display = "none";
      out[i].style.display = "none";
    });
  }
};

buttonN.addEventListener("click", function () {
  nodeF(prsText, bBox, textOut);
  delText(prsText, textOut);
});

buttonN2.addEventListener("click", function () {
  nodeF(prsText2, bBox2, textOut2);
  delText(prsText2, textOut2);
});

buttonN3.addEventListener("click", function () {
  nodeF(prsText3, bBox3, textOut3);
  delText(prsText3, textOut3);
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
    if (document.getElementById("language").checked) {
      sent.innerHTML = `Kuba musi oddać ${kSum} PLN Izie`;
    } else {
      sent.innerHTML = `Kuba owes ${kSum} PLN to Iza`;
    }
  } else if (document.getElementById("radio2").checked) {
    if (document.getElementById("language").checked) {
      sent.innerHTML = `Iza musi oddać ${kSum} PLN Kubie`;
    } else {
      sent.innerHTML = `Iza owes ${kSum} PLN to Kuba`;
    }
  } else {
    if (document.getElementById("language").checked) {
      sent.innerHTML = "Nie określono kupującego";
    } else {
      sent.innerHTML = "Radio button is not checked!";
    }
  }

  document.getElementById("settle-up").style.display = "block";
  window.scrollBy(0, 200);
});

document.getElementById("dark-mode").addEventListener("click", function () {
  if (document.getElementById("dark-mode").checked) {
    document.body.style.background = "#000";
    document.getElementsByClassName("partial-total")[0].style.color = "#fff";
    document.getElementsByClassName("partial-total")[1].style.color = "#fff";
    document.getElementsByClassName("partial-total")[2].style.color = "#fff";
    document.getElementById("person1Sum").style.color = "rgba(255,255,255,1)";
    document.getElementById("person2Sum").style.color = "rgba(255,255,255,1)";
    document.getElementById("restSum").style.color = "rgba(255,255,255,1)";
    document.getElementById("dark-mode-p").style.color = "#fff";
    document.getElementById("dark-mode").style.background = "#000";
    document.getElementById("dark-mode").style.border = "2px solid #fff";
    document.getElementById("language-p1").style.color = "#fff";
    document.getElementById("language-p1").style.color = "#fff";
    document.getElementById("language").style.background = "#000";
    document.getElementById("language").style.border = "2px solid #fff";
    // document.getElementsByClassName("PersonText").style.background = "red";
  } else {
    document.body.style.background = "#fff";
    document.getElementsByClassName("partial-total")[0].style.color =
      "rgba(0, 0, 0, 0.3)";
    document.getElementsByClassName("partial-total")[1].style.color =
      "rgba(0, 0, 0, 0.3)";
    document.getElementsByClassName("partial-total")[2].style.color =
      "rgba(0, 0, 0, 0.3)";
    document.getElementById("person1Sum").style.color = "rgba(0,0,0,0.5)";
    document.getElementById("person2Sum").style.color = "rgba(0,0,0,0.5)";
    document.getElementById("restSum").style.color = "rgba(0,0,0,0.5)";
    document.getElementById("dark-mode-p").style.color = "#000";
    document.getElementById("dark-mode").style.background = "#fff";
    document.getElementById("dark-mode").style.border = "2px solid #000";
    document.getElementById("language-p1").style.color = "#000";
    document.getElementById("language-p2").style.color = "#000";
    document.getElementById("language").style.background = "#fff";
    document.getElementById("language").style.border = "2px solid #000";
  }
});

document.getElementById("language").addEventListener("click", function () {
  if (document.getElementById("language").checked) {
    // document.getElementById("language-p").innerHTML = "POLSKI";
    document.querySelector("h1").innerHTML = "Kalkulator podziału kosztów";
    document.getElementById("btnNode").textContent = "Dodaj koszt";
    document.getElementById("btnNode2").textContent = "Dodaj koszt";
    document.getElementById("btnNode3").textContent = "Dodaj koszt";
    document.getElementsByClassName("partial-total")[0].textContent =
      "Produkty Izy";
    document.getElementsByClassName("partial-total")[1].textContent =
      "Produkty Kuby";
    document.getElementsByClassName("partial-total")[2].textContent =
      "Produkty wspólne";
    document.getElementById("paid").textContent = "Kto zapłacił?";
    document.getElementById("calculate").textContent = "Oblicz";
    document.getElementById("label-rest").textContent = "Wspólne";
    document.getElementById("grand-total").textContent = "Całkowity koszt";
  } else {
    // document.getElementById("language-p").innerHTML = "ENGLISH";
    document.querySelector("h1").innerHTML = "Expense splitting calculator";
    document.getElementById("btnNode").textContent = "Add expense";
    document.getElementById("btnNode2").textContent = "Add expense";
    document.getElementById("btnNode3").textContent = "Add expense";
    document.getElementsByClassName("partial-total")[0].textContent =
      "Iza's total expense";
    document.getElementsByClassName("partial-total")[1].textContent =
      "Kuba's total expense";
    document.getElementsByClassName("partial-total")[2].textContent =
      "Total shared expense";
    document.getElementById("paid").textContent = "Who paid?";
    document.getElementById("calculate").textContent = "Calculate";
    document.getElementById("label-rest").textContent = "Rest";
    document.getElementById("grand-total").textContent = "Grand total";
  }
});
