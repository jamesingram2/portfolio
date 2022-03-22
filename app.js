const sections = document.querySelectorAll(".section");
const sectBtns = document.querySelectorAll(".controls");
const sectBtn = document.querySelectorAll(".control");
const allSections = document.querySelector(".main-content");

setTimeout(() => {
   let typed = new Typed(".auto-input", {
      strings: [
         "I am skilled in HTML...",
         "I am skilled in CSS...",
         "I am skilled in JavaScript...",
         "I am skilled in React...",
         "I am skilled in NoSQL and SQL Databases...",
         "I am a Full Stack Developer.",
         "I am a Full Stack Developer. I'm passionate about creating beautiful and functional websites and applications, and using technology to solve real-world problems.",
      ],
      typeSpeed: 70,
      backspeed: 50,
      loop: false,
   });
}, 1500);

function pageTransitions() {
   //button click active class
   for (let i = 0; i < sectBtn.length; i++) {
      sectBtn[i].addEventListener("click", function () {
         let currentBtn = document.querySelectorAll(".active-btn");
         currentBtn[0].className = currentBtn[0].className.replace(
            "active-btn",
            ""
         );
         this.className += " active-btn";
      });
   }
   //sections active class
   allSections.addEventListener("click", (e) => {
      // console.log(e.target);
      const id = e.target.dataset.id;
      if (id) {
         //remove active class from the other btns
         sectBtns.forEach((button) => {
            button.classList.remove("active");
         });
         e.target.classList.add("active");
         //hide other sections
         sections.forEach((section) => {
            section.classList.remove("active");
         });
         const element = document.getElementById(id);
         element.classList.add("active");
      }
   });

   // Toggle theme
   const themeBtn = document.querySelector(".theme-btn");
   themeBtn.addEventListener("click", () => {
      let element = document.body;
      element.classList.toggle("light-mode");
   });
}

pageTransitions();
