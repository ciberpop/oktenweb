let button = document.getElementById('btn_text');
let typeText = document.querySelector('#p_text');



button.onclick = () => {
    let text = document.getElementById('inp_text').value;
    printText(text);
}


function delay () {
    let random = Math.round(Math.random () * (900 - 300) + 300);
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, random)
    })
}

async function printText (text) {
    for (const item of text) {
        await delay();
        typeText.innerHTML += item;
    }
}


