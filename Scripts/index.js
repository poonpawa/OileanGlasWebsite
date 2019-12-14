
window.addEventListener('resize', detectWindowSize);
    

function detectWindowSize () {
    const width = window.innerWidth,
    menuBt = document.querySelector('.menuBtn'),
    closeBtn = document.querySelector('.closeBtn')
    nav = document.querySelector('nav');

    if (width < 1350) {
        if (nav.style.display !== 'flex') {
            menuBt.classList.remove('mob');
        } 
    } else if (width > 1350) {
        menuBt.classList.add('mob');
        closeBtn.classList.add('mob');
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
    if (open) {
        nav.classList.add('open');
        this.classList.add('mob');
        toggleBtn.classList.remove('mob');
    } else {
        nav.classList.remove('open');
        this.classList.add('mob');
        toggleBtn.classList.remove('mob')
    }
}
 

