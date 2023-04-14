let menu = document.querySelector("#menu-bar");
let navbar = document.querySelector(".navbar");
let profile = document.querySelector('header .flex .profile');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

document.querySelector('#user-btn').onclick = () => {
    profile.classList.toggle('active');
    navbar.classList.remove('active');
}


window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    if (window.scroll > 60) {
        document.querySelector('#scroll-top').classList.add('active');
    }
    else {
        document.querySelector('#scroll-top').classList.remove('active');
    }
}

window.onscroll = () => {
    profile.classList.remove('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

document.querySelector('#search-icon').onclick = () => {
    document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#close').onclick = () => {
    document.querySelector('#search-form').classList.remove('active');
}

