let nums = document.querySelectorAll('.num')
let operant = document.querySelectorAll('.operand')
let clear = document.querySelector('.clear')
let remove = document.querySelector('.delete')
let sqrt = document.querySelector('.sqrt')
let pi = document.querySelector('.pi')
let brackets = document.querySelector('.brackets')
let persent = document.querySelector('.persent')
let equal = document.querySelector('.equal')
let result = document.querySelector('.result')
let total = document.querySelector('.total')
let factorial = document.querySelector('.factorial')
let quvvet = document.querySelector('.quvvet')

// click nums

nums.forEach((e) => {
  e.addEventListener('click', () => {
    result.innerText += e.innerText
  })
})

// percent
persent.addEventListener('click', () => {
  if (result.innerText.length !== 0) {
    if (!isNaN(result.innerText[result.innerText.length - 1])) {
      result.innerText += persent.innerText
    }
  }
})

// quvvet

quvvet.addEventListener('click', () => {
  if (result.innerText.length !== 0) {
    if (!isNaN(result.innerText[result.innerText.length - 1])) {
      result.innerText += quvvet.innerText
    }  
    
  } 
})

// operant

operant.forEach((e) => {
  e.addEventListener('click', () => {
    if (result.innerText.length == 0 && e.innerText !== '-') {
    } else {
      if ((!isNaN(result.innerText[result.innerText.length - 1])) || (result.innerText[result.innerText.length - 1]==")") || (result.innerText[result.innerText.length - 1]='(')) {
        result.innerText += e.innerText
      }
    }
  })
})

// equal

equal.addEventListener('click', () => {
  if (result.innerText.length > 0) {
    if (result.innerText.includes('%')) {
      total.innerText = eval(result.innerText.replace('%', '*')) / 100
    } else if (result.innerText.includes('^')) {
      total.innerText = eval(result.innerText.replace('^', '**'))
    } else if (result.innerText.includes('π')) {
      total.innerText = eval(result.innerText.replace('π', Math.PI))
    } else {
      total.innerText = eval(result.innerText)
    }
    result.innerText == total.innerText
  }
})

// pi

pi.addEventListener('click', () => {
  if (result.innerText.length == 0) {
    total.innerText = Math.PI
  }
  if (isNaN(result.innerText[result.innerText.length - 1])) {
    result.innerText += pi.innerText
  }
})

//sqrt

sqrt.addEventListener('click', () => {
  if (!isNaN(result.innerText[result.innerText.length - 1])) {
    let numbr = Number(result.innerHTML)
    total.innerText = Math.sqrt(numbr)
  }
})

// clear

clear.addEventListener('click', () => {
  result.innerText = ''
  total.innerText = ''
})

// remove

remove.addEventListener('click', () => {
  result.innerText = result.innerText.substring(0, result.innerText.length - 1)
})

// factorial

factorial.addEventListener('click', () => {
  if (result.innerText.length !== 0) {
    if (!isNaN(result.innerText[result.innerText.length - 1])) {
      let numbr = Number(result.innerText)
      let c = 1
      for (let i = 1; i <= numbr; i++) {
        c = c * i
      }
      total.innerText = c
    }
  }
})
