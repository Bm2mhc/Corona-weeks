
document.getElementById("clickclick").onclick = changeNumberToBin;
var numberToTranslate = document.getElementById("myText").value;

function changeNumberToBin(){

    return (numberToTranslate >>> 0).toString(2);
}

document.write(changeNumberToBin);