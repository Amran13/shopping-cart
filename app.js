function updateProduct(product, productPrice, isIncreasing, btnType) {
    const productInput = document.getElementById(product + '-input');
    const productNumber = parseInt(productInput.value);
    const price = document.getElementById(product + '-price');
    if (btnType == 'plus') {
        productInput.value = productNumber + 1;
        if (isIncreasing == true) {
            price.innerText = productInput.value * productPrice;
        }
        else {
            price.innerText = parseInt(price.innerText) - productPrice;
        }
    }
    else if(productNumber > 0) {
        productInput.value = productNumber - 1;
        if (isIncreasing == true) {
            price.innerText = productInput.value * productPrice;
        }
        else {
            price.innerText = parseInt(price.innerText) - productPrice;
        }
    }
    const subTotal = document.getElementById('sub-total');
    const casePrice = document.getElementById('case-price').innerText;
    const phonePrice = document.getElementById('phone-price').innerText;
    subTotal.innerText = parseInt(casePrice) + parseInt(phonePrice);
    const tax = document.getElementById('tax');
    tax.innerText = parseInt((parseInt(subTotal.innerText) * 20) / 100);
    document.getElementById('total').innerText = parseInt(subTotal.innerText) + parseInt(tax.innerText);
};

document.getElementById('case-plus').addEventListener('click', function () {
    // const caseInput = document.getElementById('case-input');
    // const caseNumber = parseInt(caseInput.value) + 1;
    // caseInput.value = caseNumber;
    // const price = document.getElementById('case-price');
    // price.innerText = caseNumber * 59;
    updateProduct('case', 59, true, 'plus');
})

document.getElementById('case-minus').addEventListener('click', function(){
    // const caseInput = document.getElementById('case-input');
    // const caseNumber = caseInput.value;
    // if(caseNumber > 0){
    //     caseInput.value = parseInt(caseNumber) - 1;
    //     const price = document.getElementById('case-price');
    //     price.innerText = price.innerText - 59;
    // }
    updateProduct('case', 59, false, 'minus');
})

document.getElementById('phone-plus').addEventListener('click', function () {
    updateProduct('phone', 1219, true, 'plus');

})

document.getElementById('phone-minus').addEventListener('click', function () {
    // const phoneInput = document.getElementById('phone-input');
    // const phoneNumber = phoneInput.value;
    // if(phoneNumber > 0){
    //     phoneInput.value = parseInt(phoneNumber) - 1;
    //     const price = document.getElementById('phone-price');
    //     price.innerText = price.innerText - 1219;
    // }
    updateProduct('phone', 1219, false, 'minus');
})



