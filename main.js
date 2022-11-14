var lastPositionOfX, lastPositionOfY;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    widthOfLine = 2;
    
    var width = screen.width;
    newWidth = screen.width - 70;
    newHeight = screen.height - 300;

    if(width < 992)
    {
        document.getElementById("myCanvas").width = newWidth;
        document.getElementById("myCanvas").height = newHeight;
        document.body.style.overflow = "hidden";
    }

    canvas.addEventListener("touchstart", myTouchStart);

    function myTouchStart(e)
    {
        //Início da Atividade Adicional
        color = document.getElementById("color").value;
        widthOfLine = document.getElementById("widthOfLine").value;
        //Fim da Atividade Adicional
        lastPositionOfX = e.touches[0].clientX - canvas.offsetLeft;
        lastPositionOfY = e.touches[0].clientY - canvas.offsetTop;
        
    }

    canvas.addEventListener("touchmove", myTouchMove);
    function myTouchMove(e)
    {
        currentPositionOfMouseX = e.clientX - canvas.offsetLeft;
        currentPositionOfMouseY = e.clientY - canvas.offsetTop;
        
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = widthOfLine;

        console.log("Ultima posição das coordenadas x e y = ");
        console.log("x = " + lastPositionOfX + "y = " + lastPositionOfY);
        ctx.moveTo(lastPositionOfX, lastPositionOfY);

        console.log("Posição atual das coordenadas x e y = ");
        console.log("x  = " + currentPositionOfMouseX + "y = " + currentPositionOfMouseY);
        ctx.lineTo(currentPositionOfMouseX, currentPositionOfMouseY);
        ctx.stroke();
        

        lastPositionOfX = currentPositionOfMouseX; 
        lastPositionOfY = currentPositionOfMouseY;
    }

    

    
    

