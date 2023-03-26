// HOMEWORK

//Задание 1
alert('Задание 1')

let num = prompt('Введите ваше число')
let m = ( num % 2)
if(m=== 1){
    alert('это число нечетное')
}else{
    alert('это число четное')
}


//Задание 2
alert('Задание 2')

let quest = prompt('Введите ваше имя').length

let method = (quest % 2)
if (method === 0) {
    alert('Кол-во букв в вашем имени четное, welcome')
    let age = prompt('Сколько вам лет?')
    if (age >= 18) {
        alert('Welcome')
    } else {
        alert('Ваш возраст не подходит')
    }
} else {
    alert('Кол-во букв в вашем имени не четное, go home')

}

//Задание 3
alert('Задание 3')

let a = prompt('Введииет ваше имя').slice(0,1)
let b = 'a'
let c = 'A'
if(a === b || a === c){
    alert('Welcome')
}else{
    alert('go home')
}



