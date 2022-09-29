const form = document.querySelector('form');
let input = document.querySelector('#typeAnything');

let extractedVowels = [];

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let value = input.value;

    [...value].forEach(char => {
        if (vowels.indexOf(char) === -1) {
            return;
        } else {
            extractedVowels.push(char);
        }
    });

    alert(`${extractedVowels.length} vowels detected!`);
    extractedVowels = [];
    input.value = '';
});