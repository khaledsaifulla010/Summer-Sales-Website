
document.getElementById('kitchen-were-btn-1').addEventListener('click', function () {


    const kitchenOne = getInputText('price-1');
    addToCalculationEntry('k. Accessories', kitchenOne);
    totalPrice += kitchenOne;
    UpdateResult();

    if (totalPrice > 0) {
        enabledById('purchase-btn');
    }
    if (totalPrice >= 200) {
        enabledById('coupon-code-field');
        enabledById('apply-btn');
    }


});

document.getElementById('kitchen-were-btn-2').addEventListener('click', function () {

    const kitchenTwo = getInputText('price-2');
    addToCalculationEntry('k. Accessories', kitchenTwo);
    totalPrice += kitchenTwo;
    UpdateResult();
    if (totalPrice > 0) {
        enabledById('purchase-btn');
    }
    if (totalPrice >= 200) {
        enabledById('coupon-code-field');
        enabledById('apply-btn');
    }

});
document.getElementById('kitchen-were-btn-3').addEventListener('click', function () {
    const kitchenThree = getInputText('price-3');
    addToCalculationEntry('Home Cooker', kitchenThree);
    totalPrice += kitchenThree;
    UpdateResult();
    if (totalPrice > 0) {
        enabledById('purchase-btn');
    }
    if (totalPrice >= 200) {
        enabledById('coupon-code-field');
        enabledById('apply-btn');
    }
});
document.getElementById('sports-were-btn-1').addEventListener('click', function () {
    const sportsOne = getInputText('price-4');
    addToCalculationEntry('Sports Back Cap', sportsOne);
    totalPrice += sportsOne;
    UpdateResult();
    if (totalPrice > 0) {
        enabledById('purchase-btn');
    }
    if (totalPrice >= 200) {
        enabledById('coupon-code-field');
        enabledById('apply-btn');
    }
});
document.getElementById('sports-were-btn-2').addEventListener('click', function () {
    const sportsTwo = getInputText('price-5');
    addToCalculationEntry('Full Jersey Set', sportsTwo);
    totalPrice += sportsTwo;
    UpdateResult();
    if (totalPrice > 0) {
        enabledById('purchase-btn');
    }
    if (totalPrice >= 200) {
        enabledById('coupon-code-field');
        enabledById('apply-btn');
    }
});
document.getElementById('sports-were-btn-3').addEventListener('click', function () {
    const sportsThree = getInputText('price-6');
    addToCalculationEntry('Sports cates', sportsThree);
    totalPrice += sportsThree;
    UpdateResult();
    if (totalPrice > 0) {
        enabledById('purchase-btn');
    }
    if (totalPrice >= 200) {
        enabledById('coupon-code-field');
        enabledById('apply-btn');
    }
});

document.getElementById('apply-btn').addEventListener('click', function () {


    const couponCodeText = document.getElementById('coupon-code-field');
    const couponCode = couponCodeText.value;


    if (couponCode === 'SELL200' && totalPrice >= 200) {

        discountPrice = totalPrice * 0.2;
        updateDiscountPrice();

        totalPriceAfterDiscount = totalPrice - discountPrice;
        UpdateTotalPrice();
        couponCodeText.value = '';
    }
})
document.getElementById('go-home-btn').addEventListener('click', function () {
    console.log(location.href = 'index.html');
})

