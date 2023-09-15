// CALLBACK
function soma(a, b, callback) {
  const resultado = a + b
  callback(resultado)
}

// Exemplo de uso
soma(5, 3, function (resultado) {
  console.log(`A soma é igual a ${resultado}`)
})

function subtracao(a, b, callback) {
  const resultado = a - b
  callback(resultado)
}

// Exemplo de uso
subtracao(10, 4, function (resultado) {
  console.log(`A subtração é igual a ${resultado}`)
})

//PROMISE
function somaPromise(a, b) {
  return new Promise((resolve, reject) => {
    const resultado = a + b
    if (resultado >= 0) {
      resolve(resultado)
    } else {
      reject("Resultado negativo, não permitido.")
    }
  })
}

// Exemplo de uso
somaPromise(5, 3)
  .then((resultado) => {
    console.log(`A soma é igual a ${resultado}`)
  })
  .catch((erro) => {
    console.error(`Erro: ${erro}`)
  })

function subtracaoPromise(a, b) {
  return new Promise((resolve, reject) => {
    const resultado = a - b
    if (resultado >= 0) {
      resolve(resultado)
    } else {
      reject("Resultado negativo, não permitido.")
    }
  })
}

// Exemplo de uso
subtracaoPromise(10, 4)
  .then((resultado) => {
    console.log(`A subtração é igual a ${resultado}`)
  })
  .catch((erro) => {
    console.error(`Erro: ${erro}`)
  })

//Funcao async
async function somaAsync(a, b) {
  return a + b
}
//funcao async await
async function exemplo() {
  try {
    const resultado = await somaAsync(5, 3)
    console.log(`A soma é igual a ${resultado}`)
  } catch (erro) {
    console.error("Ocorreu um erro:", erro)
  }
}

exemplo()
