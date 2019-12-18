window.addEventListener('resize', detectWindowSize);   

function detectWindowSize () {
    const width = window.innerWidth,
    menuBt = document.querySelector('.menuBtn'),
    closeBtn = document.querySelector('.closeBtn')
    nav = document.querySelector('nav');

    if (width < 1350) {
        if (nav.style.display !== 'flex') {
            menuBt.classList.remove('close');
        } 
    } else if (width > 1350) {
        nav.style.removeProperty('display');
    }
}

const menuBtn = document.querySelector('.menuBtn'),
 closeBtn = document.querySelector('.closeBtn');

// mobile menu toggling event (open/close menu)
menuBtn.addEventListener('click', toggleMenu.bind(menuBtn, true, closeBtn));
closeBtn.addEventListener('click', toggleMenu.bind(closeBtn, false, menuBtn));

function toggleMenu(open, toggleBtn) {
    var nav = document.querySelector('nav');
    nav.classList.toggle('open');
    if (open) {
        this.classList.add('close');
        toggleBtn.classList.remove('close');
    } else {
        this.classList.add('close');
        toggleBtn.classList.remove('close')
    }
}

//color change when button hovered
document.querySelector('.subscribeSection button').addEventListener('mouseover', addClass);
document.querySelector('.subscribeSection button').addEventListener('mouseout', addClass);

function addClass() {
    this.classList.toggle('subscribeBtnHover');
};

//subscription form validation
document.querySelector('.subscribeSection button').addEventListener('click', subscribe);
function subscribe(e) {
    const form3Inputs =  document.querySelectorAll('.subscribeSection input');
    let invalid = 0;
    form3Inputs.forEach(input => {
        if (!input.checkValidity()) {
            invalid++;
        }
    });

    if (invalid === 0) {
        e.preventDefault();
        document.getElementsByClassName('resDiv3')[0].innerHTML = "you are now subscribed."
    }   
}

//color change when button hovered
document.querySelector('.subscribeSection button').addEventListener('mouseover', addClass);
document.querySelector('.subscribeSection button').addEventListener('mouseout', addClass);

function addClass() {
    this.classList.toggle('subscribeBtnHover');
};

//nav making it fixed
window.addEventListener('scroll', fixNav);

const nav = document.querySelector('#NavBar');
let topOfNav = nav.offsetTop;

function fixNav() {
    if (window.innerWidth > 1350) {
        if (window.scrollY >= topOfNav) {
            document.querySelector('#NavBar').classList.add('fixed-nav');
        } else {
            document.querySelector('#NavBar').classList.remove('fixed-nav');
            document.body.style.paddingTop = 0;
        }
    }

}





 

