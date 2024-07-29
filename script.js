function init() {
    document.getElementById('encrypt-btn').addEventListener('click', onEncryptClick);
    document.getElementById('decrypt-btn').addEventListener('click', onDecryptClick);
    document.getElementById('copy-btn').addEventListener('click', onCopyClick);
}

function getText() {
    const area = document.getElementById('main-textarea');
    return area.value;
}

function clearText() {
    document.getElementById('main-textarea').value = "";
}

function setResult(text) {
    document.getElementById('result').innerText = text;
}

function getResult() {
    return document.getElementById('result').innerText;
}

function encrypt(text) {
    return text.replace(/a|e|i|o|u/g, replacer);
}

function decrypt(text) {
    return text.replace(/enter|imes|ai|ober|ufat/g, replacer);
}

function replacer(match) {
    switch (match) {
        case 'e': return 'enter';
        case 'i': return 'imes';
        case 'a': return 'ai';
        case 'o': return 'ober';
        case 'u': return 'ufat';

        case 'enter': return 'e';
        case 'imes': return 'i';
        case 'ai': return 'a';
        case 'ober': return 'o';
        case 'ufat': return 'u';

        default: return match;
    }
}

function onEncryptClick() {
    setResult(
        encrypt(
            getText()
        )
    );
    clearText();
}
function onDecryptClick() {
    setResult(
        decrypt(
            getText()
        )
    );
    clearText();
}

function onCopyClick() {
    try {
        navigator?.clipboard?.writeText?.(
            getResult()
        );
    }
    catch (error) {
        alert("Não foi possível copiar o texto :(");
        console.log(error);
    }
}

// Extra: Animação de texto

let interval = null;

function animatedTextQueue(text) {}
function animatedTextStop() {}


init();