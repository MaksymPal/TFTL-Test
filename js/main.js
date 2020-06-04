window.onload = function () {
    const body = document.querySelector('body'),
        cursor = document.querySelector('.cursor'),
        menuLink = document.querySelector('.menu-icon'),
        navigation = document.querySelector('.navigation'),
        swiper = document.querySelector('.swiper-container'),
        scene = document.getElementById('scene');


    body.classList.add('active');

    function moveMouse (event) {
        const x = event.clientX;
        const y = event.clientY;

        cursor.style.transform = `translate(${x - (cursor.offsetWidth / 2)}px, ${y - (cursor.offsetHeight / 2)}px)`;
    }
    
    document.addEventListener('mousemove', moveMouse);

    swiper.addEventListener('mouseover', () => {
        cursor.classList.add('cursor--hover');
    });

    swiper.addEventListener('mouseout', () => {
        cursor.classList.remove('cursor--hover');
    });
    
    document.addEventListener('mouseleave', () => {
        cursor.style.opacity = '0';
    });

    document.addEventListener('mouseenter', () => {
        cursor.style.opacity = '1';
    });

    menuLink.addEventListener('click', () => {
        navigation.classList.toggle('navigation--active');
        this.classList.toggle('menu-icon--active');
    });

    let mySwiper = new Swiper (swiper, {
        slidesPerView: 1.5,
        centeredSlides: true,
        touchStartPreventDefault: false
    });

    const parallaxInstance = new Parallax(scene);
        
}
