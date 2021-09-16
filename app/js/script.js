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

  updateBill(bill, tip, people);
});

noPeople.addEventListener("keyup", (e) => {
  people = parseInt(noPeople.value);

  if (people >= 1) {
    zeroPeople.classList.add("hidden");
  } else {
    zeroPeople.classList.remove("hidden");
  }

  updateBill(bill, tip, people);
});

percs.forEach((obj, index) => {
  obj.addEventListener("click", (e) => {
    percs.forEach((obj, ind) => {
      if (index !== ind) {
        obj.classList.remove("clicked");
      }
    });
    obj.classList.add("clicked");
    tip = parseInt(obj.value) / 100;

    updateBill(bill, tip, people);
  });
});

customTip.addEventListener("click", (e) => {
  tip = 0;
  percs.forEach((obj) => {
    obj.classList.remove("clicked");
  });

  updateBill(bill, tip, people);
});

customTip.addEventListener("keyup", (e) => {
  tip = parseFloat(customTip.value) / 100;

  updateBill(bill, tip, people);
});

function updateBill(bill, tip, people) {
  if (people >= 1 && tip >= 0) {
    const billEach = (bill + bill * tip) / people;
    const tipEach = (bill * tip) / people;

    tipPerPerson.textContent = tipEach;
    totalPerPerson.textContent = billEach;

    console.table(bill, tip, people, billEach, tipEach);
  }
}
