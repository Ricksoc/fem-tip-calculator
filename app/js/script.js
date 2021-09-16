console.log("Javascript loaded");

// Initialize variables

let bill = 0,
  tip = 0,
  people = 0;

// Get HTML elements

const billAmount = document.querySelector("#bill_amount");
const percs = document.querySelectorAll(".button__perc");
const customTip = document.querySelector("#custom_tip");
const noPeople = document.querySelector("#people_amount");
const tipPerPerson = document.querySelector("#tip_per_person");
const totalPerPerson = document.querySelector("#total_per_person");
const zeroPeople = document.querySelector("#zero_people");

// Add event listeners

billAmount.addEventListener("keyup", (e) => {
  bill = parseFloat(billAmount.value);
  console.log(bill);

  // updateBill
});

noPeople.addEventListener("keyup", (e) => {
  people = parseInt(noPeople.value);
  console.log(people);

  if (people >= 1) {
    zeroPeople.classList.add("hidden");
  } else {
    zeroPeople.classList.remove("hidden");
  }

  // updateBill
});
