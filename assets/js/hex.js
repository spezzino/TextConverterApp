window.onload = () => {

    let textInput = document.querySelector("textarea[name=text]");
    let hexInput = document.querySelector("textarea[name=hex]");

    textInput.addEventListener("input", textToHEX);
    hexInput.addEventListener("input", HEXToText);

    function textToHEX() {
        let str = textInput.value;
        let parts = [];
        for (let n = 0, l = str.length; n < l; n++) {
            let hex = Number(str.charCodeAt(n)).toString(16);
            parts.push(hex);
        }
        hexInput.value = parts.join('');
    }

    function HEXToText() {
        let hex = hexInput.value.toString();
        let str = '';
        for (let n = 0; n < hex.length; n += 2) {
            str += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
        }
        textInput.value = str;
    }

    textToHEX();

}