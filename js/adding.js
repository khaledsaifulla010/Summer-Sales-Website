let totalPrice = 0;
function UpdateResult() {
    const resultElement = document.getElementById('total-price');
    resultElement.textContent = `${totalPrice.toFixed(2)}`;
}

let discountPrice = 1;

function updateDiscountPrice() {
    const discountResultElement = document.getElementById('discount-price');
    discountResultElement.textContent = `${discountPrice.toFixed(2)}`;
}

let totalPriceAfterDiscount = 0;
function UpdateTotalPrice() {
    const afterDiscountPrice = document.getElementById('total')
    afterDiscountPrice.textContent = `${totalPriceAfterDiscount.toFixed(2)}`;
}