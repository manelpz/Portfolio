/*menu show and hidden*/

const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*show menu*/

if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu')
    })
}

/*hidde menu*/ 
if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu')
    })
}

/*remove menu mobile*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*accordion skills */

const skillsContent = document.getElementsByClassName('skills__content'),
      skillHeader = document.querySelectorAll('.skills__header')

function toggleSkills(){
    
    let itemClass = this.parentNode.className
    console.log('hey'+itemClass)

    for(i=0; i<skillsContent.length; i++){
        skillsContent[i].className='skills__content skills__close'
    }
    if(itemClass == 'skills__content skills__close'){
       
        this.parentNode.className = 'skills__content skills__open'
    }
}

skillHeader.forEach((el)=>{
    el.addEventListener('click',toggleSkills)
})