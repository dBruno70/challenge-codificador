function init() {
    document.getElementById('encrypt-btn').addEventListener('click', onEncryptClick);
    document.getElementById('decrypt-btn').addEventListener('click', onDecryptClick);
    document.getElementById('copy-btn').addEventListener('click', onCopyClick);
}

function getText() {
    const area = document.getElementById('main-textarea');
    return area.value.toLowerCase();
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

/*  String.replace permite utilizar uma função para fazer
    a substituição dos textos */

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
    showCopyButton()
    if (shouldAnimate()) {
        animatedTextQueue(encrypt(getText()));
        return;
    }
    setResult(
        encrypt(
            getText()
        )
    );
    clearText();
}
function onDecryptClick() {
    showCopyButton()
    if (shouldAnimate()) {
        animatedTextQueue(decrypt(getText()));
        return;
    }
    setResult(
        decrypt(
            getText()
        )
    );
    clearText();
}

function showCopyButton() {
    document.getElementById('copy-btn').classList.remove('hide')
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

function shouldAnimate() {
    return !!document.getElementById('text-animation-check').checked;
}

let interval = null;

let _result = "";

function animatedTextQueue(text) {
    const chars = text.split("");

    clearInterval(interval);
    setResult("");
    _result = "";
    clearText();

    const intervalMs = parseInt(document.getElementById('text-speed-slider').value)

    interval = setInterval(function () {
        if (chars.length < 1) return animatedTextStop();
        const c = chars.shift()
        _result += c;
        setResult(_result);
    }, 100 - intervalMs);
}

function animatedTextStop() {
    clearInterval(interval);
}


init();