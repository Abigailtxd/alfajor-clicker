

var alfajores = 1100;

class Cursor{
    constructor(cursorName,Cost){
        this.count = 0;
        this.name = cursorName;
        this.cost = Cost; //inicializando
    }

    buy(){
        console.log("llamando funcion")
        if(alfajores >= this.cost){ //check if there are enoguh alfajores
            this.count += 1;                                   //increase number of cursors
            alfajores = alfajores - this.cost;                          //decrease alfajor qunatity
            document.getElementById("alfajorcount").textContent = alfajores; 
            document.getElementById(this.name+"-count").textContent = this.count;
            this.cost = Math.floor(10 * Math.pow(1.008,this.cost));
            document.getElementById(this.name+"-price").textContent = this.cost; //updates the cursor cost for the user  
        }else{
            alert("ERROR: No hay suficiente alfajor");
        }
        this.generate(); //EMPEZAR A GENERAR
    }

    generate(){

    }

};



class CursorOriginal extends Cursor{
    constructor(){
        super("CursorOriginal",10);
    }
    generate(){
        setInterval(() => {
            alfajorClick(this.count);
     
        }, 10000); // Generate ALFAJORES BASED ON COUNT 
    }

}

class CursorAbuela extends Cursor{
    constructor(){
        super("Abuela",100);

    }
    generate(){
        setInterval(() => {
            generatealfajor(this.count);
     
        }, 1000); // Generate ALFAJORES BASED ON COUNT 
    }

}



class CursorHuerta extends Cursor{
    constructor(){
        super("Huerta",1100);

    }
    generate(){
        setInterval(() => {
            generatealfajor(this.count*4);
     
        }, 1000); // Generate ALFAJORES BASED ON COUNT 
    }

}






let cursororiginal = new CursorOriginal();//instancia 
let abuela = new CursorAbuela();
let Huerta = new CursorHuerta();


function click(){
    let img = document.getElementById("alfajorimg");
    img.style.transform = "scale(1.1)"; //alfajor appears bigger
    img.style.transition = "transform 0.25 s ease"; //transition
    setTimeout(() => {
            img.style.transform = "scale(1)";
     }, 250); //reset after transition ed
   
}

function generatealfajor(number) {
    alfajores += number;
    document.getElementById("alfajorcount").textContent = alfajores;
    
}


function alfajorClick(number) {
    generatealfajor(number);
    click();
    
}



