window.onload = () => {

    let textInput = document.querySelector("textarea[name=text]");
    let decimalInput = document.querySelector("textarea[name=decimal]");

    textInput.addEventListener("input", textToDecimal);
    decimalInput.addEventListener("input", DecimalToText);

    function textToDecimal() {
        let str = textInput.value;
        let parts = [];
        for (let n = 0, l = str.length; n < l; n++) {
            let decimal = Number(str.charCodeAt(n)).toString(10);
            parts.push(decimal);
        }
        decimalInput.value = parts.join(' ');
    }

    function DecimalToText() {
        let decimal = decimalInput.value.toString();
        let str = '';
        for (let n = 0; n < decimal.length; n += 2) {
            str += String.fromCharCode(parseInt(decimal.substr(n, 2), 10));
        }
        textInput.value = str;
    }

    textToDecimal();

}