const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
    reset: true
});
sr.reveal('.header, .avatar, h1, button',{interval:100}); 
sr.reveal('.biography',{delay: 100}); 
sr.reveal('.skills,input,.submit',{ interval: 100});
sr.reveal('li',{interval: 400}); 
// sr.reveal('.home__title-color, .contact__button, span, .button', {delay: 800});