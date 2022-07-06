let input1 = document.querySelector('.texto')
let input2 = document.querySelector('.senha')
let botao = document.querySelector('.loguin')
input1.addEventListener('input', entrada)
input2.addEventListener('input', entrada)
function entrada(){
    if(input1.value.length >=8 && input2.value.length >=8 ){
        botao.classList.add('log')
    }else{
        botao.classList.remove('log')
    }
}