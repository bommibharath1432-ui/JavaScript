let bill_amountElement = document.getElementById("bill_amount");
let discountElement = document.getElementById("discount");
let gross_billElement = document.getElementById("gross_bill");
let tax_percentageElement = document.getElementById("tax_percentage");
let tax_amountElement = document.getElementById("tax_amount");
let net_amountElement = document.getElementById("net_amount");
let tip_amountElement = document.getElementById("tip_amount");
let pay_amountElement = document.getElementById("pay_amount");
let split_billElement = document.getElementById("split_bill");
let for_eachElement = document.getElementById("for_each");
let payElement = document.getElementById("pay");
let gross_bill, tax_amount, pay_amount;
function getGrossBill() {
  gross_bill =
    parseInt(bill_amountElement.value) - parseInt(discountElement.value);
  gross_billElement.value = gross_bill;
  tax_percentageElement.focus();
}
function getTaxAndNetAmount() {
  tax_amount = (gross_bill * parseInt(tax_percentageElement.value)) / 100;
  tax_amountElement.value = tax_amount;
  net_amountElement.value = gross_bill + tax_amount;
  tip_amountElement.focus();
}
function getPayableAmount() {
  pay_amount =
    parseInt(net_amountElement.value) + parseInt(tip_amountElement.value);
  pay_amountElement.value = pay_amount;
  split_billElement.focus();
}

function getForEachAmount() {
  for_eachElement.value = pay_amount / parseInt(split_billElement.value);
  payElement.focus();
}
