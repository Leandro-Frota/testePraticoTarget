
function makeListFibonnacci(num){
    const lista = [0,1]
    //cria o aray com a sequência Fibonnacci
    while(lista[lista.length-1] <= num){
      const newElemt = lista[lista.length-1] + lista[lista.length-2]
      lista.push(newElemt)
    }
     console.log(lista)
   // Testa se o elemento dado se econtra no array  
    //  if(lista.includes(num)){
    //    console.log(`${num} esta incluso na lista`)
    //  }else{
    //    console.log(`${num} não esta incluso na lista`)
    //  }

     if(lista.every((elem)=>elem===num)){
        console.log(`${num} não esta incluso na lista`)
     }else{
        console.log(`${num}  esta incluso na lista`)
     }

     console.log(lista.every((elem)=>elem<num))
    
   }
    
   const num = 21
   
   makeListFibonnacci(num)
   