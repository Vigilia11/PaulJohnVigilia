function fullWithToRight(n)
{
    let projectContainer = document.getElementsByClassName("project-container");

    projectContainer[n].classList.toggle('sm:-translate-x-full')
    projectContainer[n].classList.toggle('shadow')
}

function fullWithToLeft(n)
{
    let projectContainer = document.getElementsByClassName("project-container");

    projectContainer[n].classList.toggle('sm:translate-x-full')
    projectContainer[n].classList.toggle('shadow')
}