const title = document.querySelector('.title');
const subtitle = document.querySelector('#subtitle');
const input = document.querySelector('#input');

title.textContent = 'Lox';

input.addEventListener('input', () => {
    if(input.value < 16) {
        subtitle.textContent = 'пошел на хуй'
    } else {
        window.location.href = 'https://www.shopify.com/partners'
        subtitle.textContent = 'заходи дарагой'
    }
});