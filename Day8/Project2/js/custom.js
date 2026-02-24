let billamountElement = document.getElementById("billamount");
let discountElement = document.getElementById("discount");
let grossbillElement = document.getElementById("grossbill");
let taxElement = document.getElementById("tax");
let taxamountElement = document.getElementById("taxamount");
let netamountElement = document.getElementById("netamount");
let tipamountElement = document.getElementById("tipamount");
let paybleamountElement = document.getElementById("paybleamount");
let splitElement = document.getElementById("split");
let splitamount = document.getElementById("splitamount");
function payAmount() {
  alert("Payment is Success");
}
function getGrossBill() {
  let billamount = parseInt(billamountElement.value);
  let discount = parseInt(discountElement.value);
  let grossbill = billamount - (billamount * discount) / 100;
  grossbillElement.value = grossbill;
}
function getTaxAmount() {
  alert("Calculate Tax");
}
function getPaybleAmount() {
  alert("getPaybleamount");
}
function getForEachAmount() {
  alert("getforeach");
}
