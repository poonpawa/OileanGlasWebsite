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

//checks for the form1 validation
const allInputs = document.querySelectorAll('.form1 input');
allInputs.forEach(input => input.addEventListener('keyup', validateForm));

function validateForm() {
    if (this.checkValidity()) {
        const type = this.getAttribute('type');
        console.log(type);

        if (type === 'text' && this.name === 'email') {
            const emailRegex = new RegExp("^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$");
            let emailVal = this.value;

            if (!emailRegex.test(emailVal)) {
                this.classList.add('errorShadow');
            } else {
                this.classList.remove('errorShadow');
            }
        
        } else if (type === 'phone') {
            const telRegex = /^\d{10}$/;
            let telVal = this.value;

            if(!telRegex.test(telVal)) {
                this.classList.add('errorShadow');
            } else {
                this.classList.remove('errorShadow');   
            }
        }
    }
}
const onlineOrderBtn = document.querySelector('#onlineOrder button');
onlineOrderBtn.addEventListener('click', showResult);

//Showing the shadow if the input is wrong/right
function showResult (e) {
    e.preventDefault();
    let invalid = 0
    const inputElement = document.querySelectorAll('.form1 input.theme3');

    inputElement.forEach(input => {
        if (input.classList.contains('errorShadow') || !input.checkValidity()) {
            invalid++;
        }
    })

    if (invalid === 0) {
        document.getElementsByClassName('resDiv')[0].innerHTML = "Your order has been processed further. It would be shortly available at your doorstep"
        document.getElementsByClassName('resDiv')[0].classList.add('validForm');
    } else {
        document.getElementsByClassName('resDiv')[0].innerHTML = "Please fill the form correctly"
        document.getElementsByClassName('resDiv')[0].classList.add('wrong');
    }

}


//checks for the form1 validation

document.querySelector('#caterEvents button').addEventListener('click', bookEvents);
function bookEvents(e) {
    //e.preventDefault();
    const form2Inputs =  document.querySelectorAll('.form2 input');
    let invalid = 0;
    form2Inputs.forEach(input => {
        if (!input.checkValidity()) {
            invalid++;
        }
    });

    if (invalid === 0) {
        e.preventDefault();
        document.getElementsByClassName('resDiv1')[0].innerHTML = "Your Event has been booked. Further details will be provided to you through mail "
        document.getElementsByClassName('resDiv1')[0].classList.add('validForm');
    }
    
}

//checks for the form3 validation

document.querySelector('#tableService button').addEventListener('click', submitEnquiry);
function submitEnquiry(e) {
    const form3Inputs =  document.querySelectorAll('.form3 input');
    let invalid = 0;
    form3Inputs.forEach(input => {
        if (!input.checkValidity()) {
            invalid++;
        }
    });

    if (invalid === 0) {
        e.preventDefault();
        document.getElementsByClassName('resDiv2')[0].innerHTML = "Your service enquiry has been submitted. We will get back to you asap."
        document.getElementsByClassName('resDiv2')[0].classList.add('validForm');
    }
    
}
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

//Using arrays to append values to dropdown
var options = ['1 Scoop', '2 Scoops', 'Mixed Scoop'], resArray = [], element;

for(var i = 0; i < options.length; i++) {
    resArray.push(`<option value="${options[i]}">${options[i]}</option>`);
}
document.querySelector('.customDropdown').innerHTML = resArray.join('');


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
 

