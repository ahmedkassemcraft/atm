
class billete{

  constructor(v, c, l){
    this.valor = v;
    this.cantidad = c;
    this.l = l;
    this.img = document.createElement("img");
    this.img.src = l;
    this.img.width = 500;
    this.img.height = 200;
    console.log(""+l)
  }

}


function entregarDinero(){
  console.log("entregarDinero");
  var t = document.getElementById("pasta");
  pasta = parseInt(t.value);
  for(var bi of bobeda){

    if(pasta > 0){
      div = Math.floor(pasta / bi.valor);

      if(div > bi.cantidad){
        papeles = bi.cantidad;
      } else {
        papeles = div;
      }
      entregado.push(new billete(bi.valor, papeles, bi.l) );
      pasta = pasta - (bi.valor * papeles);
    }
  }
  if(pasta > 0){
    resultado.innerHTML = "no tengo el valor requerido:(";
  } else {
    for(var e of entregado){
      for(let i= 0 ; i<e.cantidad; i++){
        document.body.appendChild(e.img);
      }
    }
  }
}

var bobeda = [];
var entregado = [];
bobeda.push(new billete(100000,3, "https://i.ibb.co/hVF27GY/100000.jpg") );
bobeda.push(new billete(50000,10, "https://i.ibb.co/SXzRbvD/50000.jpg") );
bobeda.push(new billete(20000,5, "https://i.ibb.co/9bf8LMg/20000.jpg") );
bobeda.push(new billete(10000,80, "https://i.ibb.co/jMbv0JB/10000.jpg") );
var pasta = 0;
var div = 0;
var papeles = 0;

var resultado = document.getElementById("resultado");
var b = document.getElementById("retirar la pasta");
b.addEventListener("click", entregarDinero);
