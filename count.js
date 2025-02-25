// Function to update count
function updateCount(counter) {
    const span = counter.querySelector('span');
    const target = +counter.getAttribute('data-target');
    const speed = 50;
    const increment = Math.ceil(target / speed);

    const countUp = () => {
        const currentCount = +span.innerText;

        if (currentCount < target) {
            span.innerText = currentCount + increment;
            setTimeout(countUp, 20);
        } else {
            span.innerText = target;
        }
    };

    countUp();
}

// Intersection Observer to trigger count on scroll
const counters = document.querySelectorAll('.counter');
const observer = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                updateCount(entry.target);
                observer.unobserve(entry.target); // Stop observing once counted
            }
        });
    },
    { threshold: 0.5 } // Trigger when 50% of the element is visible
);

counters.forEach(counter => {
    observer.observe(counter);
});

let toggle = document.querySelector('.m-burger');
let change = document.querySelector(".nav-bar");

toggle.addEventListener("click",()=>{
   if(change.style.display != "block"){
      change.style.display = "block"
   }
   else{
    change.style.display = "none"
   }
})
