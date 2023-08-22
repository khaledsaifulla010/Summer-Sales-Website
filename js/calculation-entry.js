function addToCalculationEntry(type, elementPrice) {

    const calculatorEntry = document.getElementById('calculation-entry');

    const childCount = calculatorEntry.childElementCount;

    const p = document.createElement('p');
    p.classList.add('my-4');
    p.classList.add('font-semibold');

    p.innerHTML = `${childCount + 1}. ${type} = ${elementPrice}.00 Tk`;

    calculatorEntry.appendChild(p);
}