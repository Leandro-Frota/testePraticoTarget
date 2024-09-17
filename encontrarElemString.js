const string = "VAi dar tudo certo na entrevista"
const elemento = 'a'
let contador = 0
//converte as strings em letras maiusculas
 const    newStringUppercase = string.toUpperCase()
 const     newElementoUppercase = elemento.toLocaleUpperCase()
//transforma a string em array a ser iterada
const stringArray = newStringUppercase.split('')
       
//outro metodo para transformar string em array
const stringArray2 = [...string]

//iterar sobre o array e conta os valores encontrados
for(let i=0 ; i<stringArray.length ; i++){
    if(stringArray[i]===newElementoUppercase){
        contador = contador + 1
    }
}

console.log(`a letra ${elemento} aparece ${contador} vezes na string: (${string})`)