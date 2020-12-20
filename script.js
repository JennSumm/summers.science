function menuScrollHandler(nav, sticky) {
    console.log(window.pageYOffset);
    if (window.pageYOffset >= sticky) {
        nav.classList.add('sticky');
    }
    else {
        nav.classList.remove('sticky');
    }
}

function headerImgResize(headerImg) {
    if (window.width <= 500) {
        headerImg.setAttribute('hidden', 'true');
    }
    else if (window.innerWidth <= 516) {
        // Small Break Point
        headerImg.style.width = '66%';
        headerImg.style.position = 'absolute';
        headerImg.style.bottom = '20rem';
        headerImg.style.left = '20rem';
    }
    else if (window.innerWidth <= 577) {
        // Medium Break Point
        headerImg.style.width = '66%';
        headerImg.style.position = 'absolute';
        headerImg.style.bottom = '18rem';
        headerImg.style.left = '22rem';
    }
    else if (window.innerWidth <= 636) {
        // Large Break Point
        headerImg.style.width = '50%';
        headerImg.style.position = 'absolute';
        headerImg.style.bottom = '20rem';
        headerImg.style.left = '24rem';
    }
    else if (window.innerWidth <= 730) {
        // XL Break Point
        headerImg.style.width = '50%';
        headerImg.style.position = 'absolute';
        headerImg.style.bottom = '18rem';
        headerImg.style.left = '30rem';
    }
    else if (window.innerWidth <= 785) {
        // XL Break Point
        headerImg.style.width = '45%';
        headerImg.style.position = 'absolute';
        headerImg.style.bottom = '18rem';
        headerImg.style.left = '32rem';
    }
    else if (window.innerWidth <= 844) {
        // XL Break Point
        headerImg.style.width = '40%';
        headerImg.style.position = 'absolute';
        headerImg.style.bottom = '22rem';
        headerImg.style.left = '40rem';
    }
    else if (window.innerWidth <= 900) {
        // XL Break Point
        headerImg.style.width = '35%';
        headerImg.style.position = 'absolute';
        headerImg.style.bottom = '22rem';
        headerImg.style.left = '42rem';
    }
    else if (window.innerWidth <= 1000) {
        // XL Break Point
        headerImg.style.width = '30%';
        headerImg.style.position = 'absolute';
        headerImg.style.bottom = '22rem';
        headerImg.style.left = '45rem';
    }
    else if (window.innerWidth <= 1200) {
        // XL Break Point
        headerImg.style.width = '25%';
        headerImg.style.position = 'absolute';
        headerImg.style.bottom = '22rem';
        headerImg.style.left = '48rem';
    }
    else {
        // XL Break Point
        headerImg.style.width = '22%';
        headerImg.style.position = 'absolute';
        headerImg.style.bottom = '20rem';
        headerImg.style.left = '54rem';
    }

    headerImg.removeAttribute('hidden');
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