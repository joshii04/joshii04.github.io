
window.onload = function() {
    if (window.location.hash !== '' && window.location.hash !== '#link') {
      window.scrollTo(0, -10); //when refresh occurs from contact details go to these coords
    }
    // clear the hash code from the URL
    history.replaceState('', document.title, window.location.pathname + window.location.search);
  };

//this is for the auto typer

document.addEventListener("DOMContentLoaded", function() { //https://github.com/mattboldt/typed.js

    var typed = new Typed(".auto-type", {
        strings: ["Computer Science student", "junior software developer"],
        typeSpeed: 120,
        backSpeed: 75,
        loop: true
    });
});

//this one is for the uni work page

document.addEventListener("DOMContentLoaded", function() {//https://github.com/mattboldt/typed.js

    var typed = new Typed(".auto-type4", {
        strings: ["to my University work : )"],
        typeSpeed: 120,
        backSpeed: 75,
        loop: true
    });
});



//for the workEx

document.addEventListener("DOMContentLoaded", function() {//https://github.com/mattboldt/typed.js

    var typed = new Typed(".auto-type3", {
        strings: ["to my Work experience : )"],
        typeSpeed: 120,
        backSpeed: 75,
        loop: true
    });
});




//for the image gal

document.addEventListener("DOMContentLoaded", function() {//https://github.com/mattboldt/typed.js

    var typed = new Typed(".auto-type2", {
        strings: ["to my Image gallery : )"],
        typeSpeed: 120,
        backSpeed: 75,
        loop: true
    });
});

//for projects

document.addEventListener("DOMContentLoaded", function() {//https://github.com/mattboldt/typed.js

    var typed = new Typed(".auto-type5", {
        strings: ["to my Projects : )"],
        typeSpeed: 120,
        backSpeed: 75,
        loop: true
    });
});

//js code for opening and closing the nav bar
document.getElementById('menu-toggle').addEventListener('click', function () {
    var sidenav = document.getElementById('sidenav');
    sidenav.classList.toggle('open');
});

document.getElementById('btn').addEventListener('click', function () {
    var sidenav = document.getElementById('sidenav');
    sidenav.classList.add('open');
});

document.querySelector('.close-btn').addEventListener('click', function () {
    var sidenav = document.getElementById('sidenav');
    sidenav.classList.remove('open');
});

//jump up and down 
const menuTog = document.getElementById('menu-toggle');
const menuBtn = document.getElementById("btn");

let jumping = false;

function animateText(){


    let position = 0; //start here
    const jumpHeight = 2;
    const jumpTime = 70;
    const jumpStep = (jumpHeight / (jumpTime / 2)); //distance
    var jumpDownInterval;
    const jumpUpInterval = setInterval(() => {
        console.log('jumpup')
        jumpUp() //save jump up 
    }, jumpTime / 50); //how fast 


    function jumpUp(){
        if (position >= jumpHeight) {
            clearInterval(jumpUpInterval);
            jumpDownInterval = setInterval(() => { //time
                console.log('jumpdown')
                jumpDown()
            }, jumpTime / 50);
            return;
        }

        position += jumpStep; //itterate by this
        menuTog.style.transform = `translateY(-${position}px)`;
        menuBtn.style.transform = `translateY(-${position}px)`;
        
    }

    function jumpDown() {
        if (position <= 0) {
          clearInterval(jumpDownInterval);
          jumping = false;
          return;
        }
        position -= jumpStep; //itterate
        menuTog.style.transform = `translateY(-${position}px)`;
        menuBtn.style.transform = `translateY(-${position}px)`;
        
    }

}

menuTog.addEventListener('click', animateText);
menuBtn.addEventListener('click', animateText);


//event listener for the animate text jump
//arrow function is more conscies and to the point then the function term

// menuTog.addEventListener('click', () => { 
//     animateText();
// })
