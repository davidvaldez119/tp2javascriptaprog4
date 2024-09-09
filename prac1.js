const nombre= document.getElementById('nombre');
const edad=document.getElementById('Edad');
const error=document.getElementById('error');
const email=document.getElementById('Email');
error.style.color ='red';

const enviarFormulario=()=>{
   
       console.log("enviando mensaje");

return false;
}

//const passw=document.getElementById('password');
//passw.addEventListener('keyup',checkpassw);



const  cuenta_letra=()=>{
    let rta=false;
    if( passw.value.length>9 && passw.value.length<20)
    {
      rta=true;
    }
    return rta;
}

const tiene_digito=()=>{
  let rta=false;
  let digitos= /[0-9]/;
  
  if(passw.value.match(digitos)){
    rta=true;
  }
 }

const mayusculas=()=>{
  let rta=false;
  let mayus=/[A-Za-z]/;
  if(passw.value.match(mayus)){
    rta=true;
  }
}

//como se hace la funcion chekpassw, tengo todo lo que pide como lo integro y lo mando al evento!!!!

//edad 
const EdadLongitud=()=>{
  let rta=false;
  if(edad.value.length<20){
    rta=true;
  }
  return rta;
  }
  
  const caracterEspecial=()=>{
    let rta=true;
    let caracter=/[!@#$%&]/;
    if(edad.value.match(caracter)){
      rta=false;
    }
    return rta;
  }
//  
const edadLongitud=()=>{
  let rta=false;
  if(edad.value.length <20){
    rta=true;
  }
  return rta;
  }
  
  const CaracterEspecial=()=>{
    let rta=true;
    let caracter=/[!@#$%&]/;
    if(edad.value.match(caracter)){
      rta=false;
    }
    return rta;
  }


const validEmail=()=>{
  let rta=true;
  let valida=/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9]                (?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
  if(email.value.match(valida)){
    rta=true;
  }
  return rta;
}