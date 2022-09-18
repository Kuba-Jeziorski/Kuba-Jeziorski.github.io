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

const nodeTry = document.getElementsByClassName("nodeTry");
const nodeTry2 = document.getElementsByClassName("nodeTry2");
const nodeTry3 = document.getElementsByClassName("nodeTry3");

const inputNumber = document.getElementsByClassName("PersonText");
const inputNumber2 = document.getElementsByClassName("PersonText2");
const inputNumber3 = document.getElementsByClassName("PersonText3");

for (let element of inputNumber) {
  element.addEventListener("change", (e) => {
    e.currentTarget.value = parseFloat(e.currentTarget.value).toFixed(2);
  });
}

for (let element of inputNumber2) {
  element.addEventListener("change", (e) => {
    e.currentTarget.value = parseFloat(e.currentTarget.value).toFixed(2);
  });
}

for (let element of inputNumber3) {
  element.addEventListener("change", (e) => {
    e.currentTarget.value = parseFloat(e.currentTarget.value).toFixed(2);
  });
}

const nodeF = function (inner, outer) {
  const tryBox = inner[0].cloneNode(true);
  outer.appendChild(tryBox);
};

const delText = function (prs, out) {
  for (let i = 0; i < out.length; i++) {
    out[i].addEventListener("click", function () {
      if (i === 0) {
        prs[i].value = "";
        out[i].style.display = "flex";
      } else {
        prs[i].value = 0;
        prs[i].style.display = "none";
        out[i].style.display = "none";
      }
    });
  }
};

delText(prsText, textOut);
delText(prsText2, textOut2);
delText(prsText3, textOut3);

let functionCalled = 0;
buttonN.addEventListener("click", function () {
  functionCalled++;
  nodeF(nodeTry, bBox);
  delText(prsText, textOut);
  prsText[functionCalled].value = "";

  for (let element of inputNumber) {
    element.addEventListener("change", (e) => {
      e.currentTarget.value = parseFloat(e.currentTarget.value).toFixed(2);
    });
  }
  prsText[functionCalled].focus();
});

let functionCalled2 = 0;
buttonN2.addEventListener("click", function () {
  functionCalled2++;
  nodeF(nodeTry2, bBox2);
  delText(prsText2, textOut2);
  prsText2[functionCalled2].value = "";

  for (let element of inputNumber2) {
    element.addEventListener("change", (e) => {
      e.currentTarget.value = parseFloat(e.currentTarget.value).toFixed(2);
    });
  }

  prsText2[functionCalled2].focus();
});

let functionCalled3 = 0;
buttonN3.addEventListener("click", function () {
  functionCalled3++;
  nodeF(nodeTry3, bBox3);
  delText(prsText3, textOut3);
  prsText3[functionCalled3].value = "";
  for (let element of inputNumber3) {
    element.addEventListener("change", (e) => {
      e.currentTarget.value = parseFloat(e.currentTarget.value).toFixed(2);
    });
  }
  prsText3[functionCalled3].focus();
});

const mainFunction = function (e) {
  if (e) {
    e.preventDefault();
  }
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
};

document.getElementById("mainForm").addEventListener("submit", function (e) {
  mainFunction(e);
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

document.getElementById("language").addEventListener("click", function (e) {
  if (document.getElementById("language").checked) {
    mainFunction();
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
