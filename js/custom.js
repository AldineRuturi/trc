function scrollUp() {
    const scrollUp = document.getElementById('topnav');
    const nav = document.getElementById('navbar');
    const navbtn = document.getElementById('navtoggle');
    //    When the scroll is higher than 50 viewport, add the hide-topbar class to the topbar div.
    if (this.scrollY >= 50) {
        scrollUp.classList.add('d-none');
        nav.classList.add('trc-navbar');
        nav.classList.remove('nav-transparent');
        navbtn.classList.remove('text-light');
        navbtn.classList.add('text-blue');
    }
    else {
        scrollUp.classList.remove('d-none');
        nav.classList.add('nav-transparent');
        nav.classList.remove('trc-navbar');
        navbtn.classList.remove('text-light');
        navbtn.classList.add('text-light');
        navbtn.classList.remove('text-blue');

    }
}
window.addEventListener('scroll', scrollUp)