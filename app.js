function updateProductNumber(product, price, isIncreasing){
  const productInput = document.getElementById(`${product}-number`);
  let productNumberText = productInput.value;
  let productNumber = parseInt(productNumberText);

  if( isIncreasing == true){
    productNumber = productNumber + 1;
  }else if( productNumber > 0 ){
    productNumber = productNumber - 1;
  }
  productInput.value = productNumber;
  const productTotal = document.getElementById(`${product}-total`);
  productTotal.innerText = productNumber * price;

  // total Sub Sum define here
  // const totalSum = document.getElementById('sub-total');
  // totalSum.innerText = calcualteTotal();
  calcualteTotal();
}

function getInputValue(product){
  
  // console.log(productInput);
  const productInput = document.getElementById(`${product}-number`);
  const productInputText = productInput.value;
  const productTotalNumber = parseInt(productInputText);

  return productTotalNumber;


}

function calcualteTotal(){
  const phoneTotalSum = getInputValue('phone') * 1219;
  const caseToatalSum = getInputValue('case')*59;
  const subTotal = phoneTotalSum + caseToatalSum;
  const tax = subTotal / 10;
  const totalPrice = subTotal + tax;
  document.getElementById('sub-total').innerText = subTotal;
  document.getElementById('tax-amount').innerText = tax;
  document.getElementById('total-price').innerText = totalPrice;
  
}
// Phone Event Listener here
document.getElementById('phone-plus').addEventListener('click',function(){
    updateProductNumber('phone', 1219 ,true);
})

document.getElementById('phone-minus').addEventListener('click',function(){
    updateProductNumber('phone', 1219 ,false);
})


// Casing Event Listener here
document.getElementById('case-plus').addEventListener('click',function(){
    updateProductNumber('case', 59 ,true);
});

document.getElementById('case-minus').addEventListener('click',function(){
    updateProductNumber('case', 59 ,false);
});

