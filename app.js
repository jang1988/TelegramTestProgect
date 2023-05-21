let tg = window.Telegram.WebApp;
tg.expand();

tg.MainButton.textColor = "#ffffff";
tg.MainButton.color = "#2cab37";

let item = "";

let btn1 = document.getElementById('btn1')
console.log('btn1: ', btn1)

btn1.addEventListener('click', () => {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide()
        console.log('tg.MainButton: ', tg.MainButton)
    } else {
        tg.MainButton.setText('Вы выбрали кота 1 !')
        item = '1'
        tg.MainButton.show()
        console.log('tg: ', tg)
    }
})

Telegram.WebApp.onEvent('mainButtonClicked', () => {
    tg.sendData(item)
})


let usercard = document.getElementById('usercard')

let p = document.createElement('p')

p.textInner = `${tg.initDataUnsafe.first_name} ${tg.initDataUnsafe.last_name}`

usercard.append(p)