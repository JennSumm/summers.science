function menuScrollHandler(nav, sticky) {
    if (window.pageYOffset >= sticky) {
        nav.classList.add('sticky');
    }
    else {
        nav.classList.remove('sticky');
    }
}

function main() {
    let nav = document.getElementById('navbar');
    let sticky = nav.offsetTop
    window.addEventListener('scroll', () => {
        menuScrollHandler(nav, sticky);
    });
}

main();