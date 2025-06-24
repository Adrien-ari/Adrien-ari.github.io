const about= document.querySelector('.nav-drop1');
const aboutme = document.querySelector('.about-allme');
const body= document.querySelector('.body');
const modeDark= document.getElementById('mode_dark1');
const header= document.querySelector('.header-style');
const darkLogo= document.querySelector('.balise_f');
const moon= document.querySelector('.cercle');
const Hobbie = document.querySelector('.h2_hobby');
const thestudy= document.querySelector('.the_study');
const HobbyContainer=document.querySelector('.content_hobby');
const studyWins= document.querySelector('.study_wins')
const studynew= document.querySelector('.study_new');
console.log(studyWins,studynew);

// ----------------------------------------------------


const hobbies= document.querySelector('.hobbies');
const navdrop2= document.querySelector('.navdrop2');

// ----------------------------------------------------

const navStudy = document.querySelector('.navdrop3');
const studySection= document.querySelector('.study');


// ----------------------------------------------------


document.addEventListener('load', ()=>{
    aboutme.style.visibility='visible';
})

about.addEventListener('click',()=>{
    aboutme.style.visibility='visible';
    // hobbies.style.visibility='hidden';
})
about.addEventListener('dblclick',()=>{
    aboutme.style.visibility='hidden';
})

 navdrop2.addEventListener('click',()=>{
    // aboutme.style.visibility='hidden';
    hobbies.style.visibility='visible';
 })
 navdrop2.addEventListener('dblclick',()=>{
    // aboutme.style.visibility='hidden';
    hobbies.style.visibility='hidden';
 })
 
navStudy.addEventListener('click',()=>{
    studySection.style.visibility='visible';
})
navStudy.addEventListener('dblclick',()=>{
    studySection.style.visibility='hidden';
})
// je voulais faire une génératuer de bulles aléatoire
// document.addEventListener('click',()=>{
//     
//     body.innerHTML+='<div class=\'bulles\'></div>';
// })


// changer de mode

modeDark.addEventListener('click',()=>{
    body.classList.add('body-light');
    header.classList.add('header-light');
    darkLogo.removeAttribute('src');
    darkLogo.src='Group .svg';
    Hobbie.classList.add('h2h_light');
    thestudy.classList.add('light_study');
    HobbyContainer.classList.add('content_h_light');
    studyWins.classList.add('study_wins_light');
    studynew.classList.add('study_new_light');
})

modeDark.addEventListener('dblclick',()=>{
    body.classList.remove('body-light');
    header.classList.remove('header-light');
    darkLogo.removeAttribute('src');
    darkLogo.src='Group 24.svg';
    Hobbie.classList.remove('h2h_light');
    thestudy.classList.remove('light_study');
    HobbyContainer.classList.remove('content_h_light');
    studyWins.classList.remove('study_wins_light');
    studynew.classList.remove('study_new_light');
})


window.addEventListener('scroll',()=>{
    moon.style.top= window.pageYOffset+'px';
    moon.style.right= (window.pageYOffset-30)+'px';
    console.log(window.pageYOffset,window.pageYOffset-30);
    if(window.pageYOffset===1257){
        moon.style.top= (window.pageYOffset-50)+'px';
        moon.style.right= (window.pageYOffset-600)+'px';
    }
    if(window.pageYOffset>=100){

        header.style.top=-window.pageYOffset+'px';
    }
    else if(window.pageYOffset===0){
        header.style.top='10'+'px';
    }
    
})

// ----------------------------------------------------


// jouer un soundtrack


const ring=()=>{
    const audio= new Audio();
    audio.src='Suzume.mp3';
    console.log(audio.src);

    darkLogo.addEventListener('mousedown',()=>{
        audio.play();
})
    darkLogo.addEventListener('dblclick',()=>{
        audio.pause();
})
    darkLogo.addEventListener('dblclick',()=>{
        audio.pause();
})

}
ring();


// ---------------------------------------------------------


