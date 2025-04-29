// active navbar
let nav = document.querySelector(".navigation-wrap");
window.onscroll = function () {
    if (document.documentElement.scrollTop  > 5) {
        nav.classList.add("scroll-on");
    }else{
        nav.classList.remove("scroll-on");
    }

}

// nav hide
// let navBar = document.querySelectorAll('.nav-link');
let navCollaspe = document.querySelector('.navbar-collapse.collapse');
let navHide = document.addEventListener('click', ()=> {
    navCollaspe.classList.remove("show");
});

// counter design

document.addEventListener("DOMContentLoaded", ()=> {
    function counter(id, start, end, duration) {
        let obj = document.getElementById(id),
        current = start,
       // range = end - start,
        increment = start < end ? 1 : -1,
        //step = Math.abs(Math.floor(duration / range)),
        timer = setInterval(() => {
            current += increment;
            obj.textContent = current;
            if (current == end) {
                clearInterval(timer);
            }
        }); // step define.
    }
    counter("count1", 0, 1100, 2000);
    counter("count2", 50, 1500, 2500);
    counter("count3", 100, 2100, 3000);
    counter("count4", 150, 3200, 3500);
});

