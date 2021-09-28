function updateCase(product, price, isIncreasing) {
  const productInput = document.getElementById(product + "-number");
  let productNumber = productInput.value;

  if (isIncreasing == true) {
    productNumber = parseInt(productNumber) + 1;
  } else if (productNumber > 0) {
    productNumber = parseInt(productNumber) - 1;
  }
  productInput.value = productNumber;
  ///update case total
  const productTotal = document.getElementById(product + "-total");
  productTotal.innerText = productNumber * price;
  //calculate total price
  calculateTotal();
}
function getInputValue(product) {
  const productInput = document.getElementById(product + "-number");
  const productNumber = parseInt(productInput.value);
  return productNumber;
}
function calculateTotal() {
  const phoneTotal = getInputValue("phone") * 1219;
  const caseTotal = getInputValue("case") * 59;
  const subTotal = phoneTotal + caseTotal;
  const tax = subTotal / 10;
  const totalPrice = subTotal + tax;
  //update on the html
  document.getElementById("sub-total").innerText = subTotal;
  document.getElementById("tax-amount").innerText = tax;
  document.getElementById("total-amount").innerText = totalPrice;
}
//phone increse decreased
document.getElementById("phone-plus").addEventListener("click", function () {
  updateCase("phone", 1219, true);
});
document.getElementById("phone-minus").addEventListener("click", function () {
  updateCase("phone", 1219, false);
});

document.getElementById("case-plus").addEventListener("click", function () {
  updateCase("case", 59, true);
});
document.getElementById("case-minus").addEventListener("click", function () {
  updateCase("case", 59, false);
  //   caseInput.value = caseNumber - 1;
});
