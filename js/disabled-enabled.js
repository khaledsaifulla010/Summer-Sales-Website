function enabledById(id) {
    const element = document.getElementById(id);

    if (element.attributes.hasOwnProperty('disabled')) {
        element.removeAttribute('disabled');
    }
}