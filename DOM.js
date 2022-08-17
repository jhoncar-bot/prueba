

let rango= document.querySelector(".rango");
let cuadrado=document.querySelector(".cuadrado")
let redondito= document.querySelector(".redondito")
let transparencia= document.querySelector(".transparencia")
let color=document.querySelector(".color");
let blur=document.querySelector(".blur")
let fondo=document.querySelector(".fondo")


let configuracion=document.querySelector(".configuracion")


let valores=document.querySelectorAll(".valores");
console.log(valores[0])


rango.oninput=()=>{
    cuadrado.style.width=rango.value+"px";
    cuadrado.style.height=rango.value+"px";
    rango.setAttribute("value",rango.value)
    valores[1].innerHTML=rango.value+"px";
    valores[2].innerHTML=rango.value+"px";

}
redondito.oninput=()=>{
    console.log(redondito.value);
    cuadrado.style.borderRadius= redondito.value+"px";
    valores[3].innerHTML=redondito.value+"px";
}
transparencia.oninput=()=>{
    console.log("0."+transparencia.value);
    cuadrado.style.opacity= "0."+transparencia.value;
    valores[4].innerHTML= "0."+transparencia.value;
}
color.oninput=()=>{
   console.log(color.value)
   cuadrado.style.backgroundColor=color.value
   valores[0].innerHTML=color.value;
}
blur.oninput=()=>{
    console.log("blur("+blur.value+"px)");
    cuadrado.style.filter="blur("+blur.value+"px)";
    valores[5].innerHTML="blur("+blur.value+"px)"
}
fondo.oninput=()=>{
    fondoValor=(fondo.value).slice(12);
    console.log(fondo.value)
    console.log('url("prueba/'+fondoValor+'")');
    document.body.style.backgroundImage= 'url("prueba/'+fondoValor+'")';
    configuracion.style.color= "white";
    valores[6].innerHTML=`body{ <br>
                              ⠀⠀⠀⠀⠀background-image: url("prueba/${fondoValor}");  <br>

    }`
}
