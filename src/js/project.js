let projectContainer = document.getElementsByClassName("project-container");

window.addEventListener('scroll', reveal);

function reveal(){
    let reveals = document.querySelectorAll('.reveal');

    let test = document.getElementById("test");
    

    for(let i =0; i < reveals.length; i++){
        let windowheight = window.innerHeight;
        let revealtop =reveals[i].getBoundingClientRect().top;
        let revealpoint = 150;

        
        if(projectContainer[i].classList.contains('sm:-translate-x-full'))
        {  
            if(revealtop < windowheight - revealpoint)
            {
                reveals[i].classList.toggle('sm:-translate-x-full');
                projectContainer[i].classList.toggle('shadow');
            }
        }
        
        if(projectContainer[i].classList.contains('sm:translate-x-full'))
        {  
            if(revealtop < windowheight - revealpoint)
            {
                reveals[i].classList.toggle('sm:translate-x-full');
                projectContainer[i].classList.toggle('shadow');
            }
        }
        
    }
}