let d = document;

export default function numericPad(padContainer) {
    padContainer = d.querySelector(padContainer);
    let output = padContainer.querySelector('.output');
    output.innerText = '0';
    let number = '';

    padContainer.addEventListener('click', (e) => {

        if (e.target.matches('button')) {
            let value = e.target.value;

            if (value != 'del') number += value;
            else number = number.slice(0, -1);

            if (number.length < 1) number = '';

            output.innerText = number;
        }
    });
}