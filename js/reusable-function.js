function getInputText(elementId) {
    const elementPricesText = document.getElementById(elementId);
    const elementPricesTextString = elementPricesText.innerText;
    const pricesText = parseFloat(elementPricesTextString);

    return pricesText;
}