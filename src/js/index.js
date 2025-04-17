var cube = document.getElementById("cube");
var cubeOffset = $("#cube").offset();

function move()
{
  cube.style.left = "650px";
  var cubeOffset = $("#cube").offset();

  if(cube.offsetLeft == -150)
  {
    cube.style.left = "650px";
    $('#clickMe').fadeOut();
    $('#pictureKo').delay(2500).fadeIn();
  }

  else if(cube.offsetLeft == 650)
  {
    cube.style.left = "-150px";
    $('#clickMe').delay(2000).fadeIn();
    $('#pictureKo').fadeOut();
  }
  
}

/*var cubeOffset = $("#cube").offset();

  if(cubeOffset.left >= 206.5 && cubeOffset.left <= 994.5)
  {
        // log the values
        // set the element's new position:
      elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
      console.log("left: " + cubeOffset.left);
  }*/

      /*
dragElement(document.getElementById("cube"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id )) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id).onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos3 = e.clientX;
    // set the element's new position:
    //elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;

    
  }
}

*/

