function menuScrollHandler(nav, sticky) {
    if (window.pageYOffset >= sticky) {
        nav.classList.add('sticky');
    }
    else {
        nav.classList.remove('sticky');
    }
}

function headerImgResize(headerImg) {
    
}

function main() {
    let nav = document.getElementById('navbar');
    let sticky = nav.offsetTop
    window.addEventListener('scroll', () => {
        menuScrollHandler(nav, sticky);
    });

    let headerImg = document.getElementById('header-img');
    let headerImgCap = document.getElementById('header-img-cap')
    headerImgResize(headerImg);
    window.addEventListener('resize', () => {
        headerImgResize(headerImg);
    });
}

main();