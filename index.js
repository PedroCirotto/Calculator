const screen = document.querySelector('#screen')
// TODO: beber cloro

let operadorAnterior
let num = ""
let num2 = ""
let symbol = ""
let operacao = 0
let tela = ''

screen.innerText = !tela ? "0" : tela

document.addEventListener('click', (e) => {
  const el = e.target

  if (el.classList.contains('symbol')) {
    symbol = el.innerText
    tela = symbol
  }

  if (el.classList.contains('num')) {
    if (!symbol) {
      num += el.innerText
      tela = num
    }

    if (symbol !== '') {
      num2 += el.innerText
      tela = num2
    }

  }

  if (el.classList.contains('eq')) {
    const numNumber = Number(num)
    const numNumber2 = Number(num2)
    console.log(numNumber, numNumber2);

    switch (symbol) {
      case '+':
        operacao = somar(numNumber, numNumber2)
        tela = operacao
        break

      case '-':
        operacao = sub(numNumber, numNumber2)
        tela = operacao
        break

      case 'x':
        operacao = mult(numNumber, numNumber2)
        tela = operacao
        break

      case '÷':
        operacao = div(numNumber, numNumber2)
        tela = operacao
        break
    }

    num = operacao
    num2 = ''
    console.log(operacao);
  }

  if (el.classList.contains('limpa')) {
    limpaTudo()
  }

  console.log(num, num2);
  screen.innerText = tela
})

function limpaTudo() {
  num = ''
  num2 = ''
  symbol = ''
  tela = '0'
}

function somar(x, y) {
  return x + y

}
function mult(x, y) {
  return x * y
}

function sub(x, y) {
  return x - y

}
function div(x, y) {
  return x / y

}