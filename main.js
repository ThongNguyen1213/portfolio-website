const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 1500,
    delay: 100,
    reset: true
});
sr.reveal('.avatar, h1, button',{interval:100}); 
sr.reveal('.biography',{delay: 100}); 
sr.reveal('.skills,input,.submit',{ interval: 100});
sr.reveal('li',{interval: 400}); 



var i = 0;
            function move() {
              if (i == 0) {
                i = 1;
                var elem1 = document.getElementById("codecademy");
                var elem2 = document.getElementById("code-practice");
                var elem3 = document.getElementById("code-challenge");
                var width = 1;
                var id1 = setInterval(frame1,20);
                var id2 = setInterval(frame2, 20);
                var id3 =  setInterval(frame3, 20);
                function frame1() {
                  if (width >= 81) {
                    clearInterval(id1);
                    i = 0;
                  } else {
                    width++;
                    elem1.style.width = width + "%";
                    elem1.innerHTML = width + "%";
                  }
                }
                function frame2() {
                    if (width >= 100) {
                        clearInterval(id2);
                        i = 0;
                      } else {
                        width++;
                        elem2.style.width = width + "%";
                        elem2.innerHTML = width + "%";
                      }
                }
                function frame3() {
                    if (width >= 31) {
                        clearInterval(id3);
                        i = 0;
                      } else {
                        width++;
                        elem3.style.width = width + "%";
                        elem3.innerHTML = width + "%";
                    }
                }
            }
        }   