//  Show Menu 
const toggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const close = document.getElementById('nav-close');

//Validate that variables exist
if (toggle) {
    //we add the show-menu class to the div tag with the nav_menu class
    toggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    })
}

if (close) {
    close.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    })
}

//Remove menu mobile
const navLink = document.querySelectorAll('.nav_link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

// Change background header
function scrollHeader() {
    const header = document.getElementById('header');
    // when the scroll is greater than 100 viewport height,add the scroll-header classto the header tag
    if (this.scrollY >= 100) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);

//Swiper Discover
let swiper = new Swiper(".discover_container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 32,
    coverflowEffect: {
        rotate: 0,
    },
});

//Video
const videoFile = document.getElementById('video-file'),
    videoButton = document.getElementById('video-button'),
    videoIcon = document.getElementById('video-icon');
function playPause() {
    if (videoFile.paused) {
        //Play video
        videoFile.play();

        //We change the icon
        videoIcon.classList.add('ri-pause-line');
        videoIcon.classList.remove('ri-play-line');
    } else {
        //Pause video
        videoFile.pause()

        //We change the icon
        videoIcon.classList.remove('ri-pause-line');
        videoIcon.classList.add('ri-play-line');

    }
}

videoButton.addEventListener('click', playPause);

function finalVideo() {
    //Video ends, icon change
    videoIcon.classList.remove('ri-pause-line');
    videoIcon.classList.add('ri-play-line');
}
//Ended, when the video ends
videoFile.addEventListener('ended', finalVideo);


// show scroll
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    // when the scroll is higher tha 560 viewport height, add the show-scroll class to the a tag with the scroll-top lass
    if (this.scrollY >= 200) scrollUp.classList.add('show-scroll');
    else scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);

//Scroll Section active link
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link');
        }

        else {
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    })
}
window.addEventListener('scroll', scrollActive);


/* ============dark/light theme=============*/
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'ri-sun-line';

//Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

//We obtain the current theme that the interfacehas by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line';

//We validate if the user previously chose a topic
if (selectedTheme) {
    //If the validation is fulfilled, we ask what the issue was to know if we activated or deactivate the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    document.body.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme);

}

//Active/ deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    //Add or remove the dark/ icon theme
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);

    //We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon);

})
//  Scroll Reveal Animation
const sr = ScrollReveal({
    distance: '60px',
    duration: 2800,
     reset:true,
})

sr.reveal('.home_data, .home_social-link, .home_info,.discover_container,.experience_data, .experience_overlay,.place_card,.sponser_content,.footer_data,.footer_rights', {
    orgin: 'top',
    interval: 100,
})

sr.reveal('.about_data,.video_description,.subscribe_description', {
    origin: 'left',
})

sr.reveal('.about_img-overlay,.video_content,.subscribe_form', {
    origin: 'right',
    interval: 100,
})


