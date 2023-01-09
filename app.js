let inputText = document.getElementById('inputText');
let outputText = document.getElementById('outputText');
const encryptButton = document.getElementById('encryptButton');
const decryptButton = document.getElementById('decryptButton');
const copyButton = document.getElementById('copyButton');
const asideOne = document.getElementsByClassName('aside-one')[0];
const asideTwo = document.getElementsByClassName('aside-two')[0];
let copiedText = document.getElementById('copied');

const encrypt = (text) => {
  return (
    text.replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat')
  );
};
const decrypt = (text) => {
  return (
    text.replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u')
  );
};

encryptButton.addEventListener('click', () => {
  if (inputText.value === inputText.getAttribute('data-placeholder')) return;
  asideOne.classList.add('display-none');
  asideTwo.classList.remove('display-none');
  outputText.innerHTML = encrypt(inputText.value);
  inputText.value = inputText.getAttribute('data-placeholder');
});
decryptButton.addEventListener('click', () => {
  if (inputText.value === inputText.getAttribute('data-placeholder')) return;
  asideOne.classList.add('display-none');
  asideTwo.classList.remove('display-none');
  outputText.innerHTML = decrypt(inputText.value);
  inputText.value = inputText.getAttribute('data-placeholder');
});
copyButton.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(outputText.innerHTML);
    copiedText.classList.remove('display-none');
    setTimeout(() => {
      copiedText.classList.add('display-none');
    }, 2000);
  } catch (err) {
    console.log(err);
  };
});

if (inputText.value === '') {
  inputText.value = inputText.getAttribute('data-placeholder');
};
inputText.addEventListener('focus', () => {
  if (inputText.value === inputText.getAttribute('data-placeholder')) {
    inputText.value = '';
  };
});
inputText.addEventListener('blur', () => {
  if (inputText.value === '') {
    inputText.value = inputText.getAttribute('data-placeholder');
  };
});
