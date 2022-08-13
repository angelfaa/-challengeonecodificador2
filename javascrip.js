function encriptado(){    
    let j=0,may="áéíóú",texto="",textoSc=document.getElementById("texto").value;
    if(textoSc.replace(/ /g,'')==""){j=2;}
    for(let i=0;i<textoSc.length;i++){
        if((textoSc[i] == textoSc[i].toUpperCase()||textoSc[i]=="´")&&textoSc[i]!=" "){
            j=1;
        }
        for(l=0;l<may.length;l++){
            if(textoSc[i]==may[l]){
                j=1;
            }
        }
    }
    if(j==0){
        for(let i=0;i<textoSc.length;i++){
            switch (textoSc!="") {
                case textoSc[i]=="a":
                    texto+="ai";
                break;
                case textoSc[i]=="e":
                    texto+="enter";
                    break;
                case textoSc[i]=="i":
                    texto+="imes";
                    break;
                case textoSc[i]=="o":
                    texto+="ober";
                    break;
                case textoSc[i]=="u":
                    texto+="ufat";
                    break;
                default:
                    texto+=textoSc[i];
            }
        }
  
        if(texto!=""){
            document.getElementById("texto2").classList.remove("ocultar");
            document.getElementById("texto2").innerHTML=texto;
            document.getElementById("texto").value="";
            document.getElementById("imagen").classList.remove("muñeco");
            document.getElementById("imagen").className += " ocultar";
            document.getElementById("titulo").className += " ocultar";
            document.getElementById("parrafo").className += " ocultar";
            document.getElementById("parrafo").innerHTML= 1;         
            document.getElementById("copiar").className += "botones2";    
        }
    }
    else if(J==1){
        alert("No Use Mayusculaasdasd o acentos")
    }else if(j==2){alert("Campo invalido")}
}
function description(){     
    if(document.getElementById("parrafo").innerHTML==1){
        let textoDc=document.getElementById("texto2").innerHTML;
        let texto=""
        for(let i=0;i<textoDc.length;i++){
            switch (textoDc!="") {
                case textoDc[i]=="a":
                    texto +="a";
                    i=i+1;
                break;
                case textoDc[i]=="e":
                    texto +="e";
                    i=i+4;
                    break;
                case textoDc[i]=="i":
                    texto+="i";
                    i=i+3;
                    break;
                case textoDc[i]=="o":
                    texto+="o";
                    i=i+3;
                    break;
                case textoDc[i]=="u":
                    texto+="u";
                    i=i+3;
                    break;
                default:
                    texto+=textoDc[i];
            }
        }
        document.getElementById("texto2").innerHTML=texto;
        document.getElementById("parrafo").innerHTML= 0; 
    }
    if(document.getElementById("texto").value!=""&&document.getElementById("parrafo").innerHTML!=1){
        let textoDc=document.getElementById("texto").value;
        let texto="",j=0,may="áéíóú";
        for(let i=0;i<textoDc.length;i++){
            if((textoDc[i] == textoDc[i].toUpperCase()||textoDc[i]=="´")&&textoDc!=""){
    
                j=1;
            }
            for(l=0;l<may.length;l++){
                if(textoDc[i]==may[l]){
                    j=1;
                }
            }
        }
        if(j==0){  
            for(let i=0;i<textoDc.length;i++){
                switch (textoDc!="") {
                    case textoDc[i]=="a":
                        texto +="a";
                        i=i+4;
                        break;
                    case textoDc[i]=="e":
                        texto +="e";
                        i=i+4;
                        break;
                    case textoDc[i]=="i":
                        texto+="i";
                        i=i+3;
                        break;
                    case textoDc[i]=="o":
                        texto+="o";
                        i=i+3;
                        break;
                    case textoDc[i]=="u":
                        texto+="u";
                        i=i+3;
                        break;
                    default:
                        texto+=textoDc[i];
                }
            }
            document.getElementById("texto2").classList.remove("ocultar");
            document.getElementById("texto2").innerHTML=texto;
            document.getElementById("texto").value="";
            document.getElementById("imagen").classList.remove("muñeco");
            document.getElementById("imagen").className += " ocultar";
            document.getElementById("titulo").className += " ocultar";
            document.getElementById("parrafo").className += " ocultar";
            document.getElementById("parrafo").innerHTML= 1;         
            document.getElementById("copiar").className += "botones2";  
        }
    }
}
function copiarAlPortapapeles() {
    var aux = document.createElement("input");
    aux.setAttribute("value",document.getElementById("texto2").innerHTML);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
  
  }
  