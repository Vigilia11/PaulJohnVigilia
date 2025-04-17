var n;

function flipToRight(n)
{
    let flipBoxInner = document.getElementsByClassName("flip-box-inner");

    if(flipBoxInner[n].classList.contains("flip-to-left"))
    {
        flipBoxInner[n].className = flipBoxInner[n].className.replace(" flip-to-left", " flip-to-right");
    } else{
        flipBoxInner[n].classList.add("flip-to-right");
    }
    
}

function flipToLeft(n)
{
    let flipBoxInner = document.getElementsByClassName("flip-box-inner");

    flipBoxInner[n].className = flipBoxInner[n].className.replace(" flip-to-right", " flip-to-left");
}


