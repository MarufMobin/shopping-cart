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

