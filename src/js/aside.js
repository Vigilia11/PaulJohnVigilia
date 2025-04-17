function toggelNavigation()
{
    var aside = document.getElementById('sidenav');
    var arrow = document.getElementById('arrowButton');

    if(aside.classList.contains('-translate-x-full'))
    {
        aside.classList.remove('-translate-x-full')
        arrow.className += " flip-arrow";
        
    } else{
        aside.classList.add('-translate-x-full')
        //arrow.className = arrow.className.replace(" flip-arrow", " ");
        arrow.className = arrow.className.replace(" flip-arrow", " ");
    }
}