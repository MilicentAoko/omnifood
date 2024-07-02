
const header = document.querySelector(".header");
const btnNav = document.querySelector(".btn-mobile-nav");
const yearEl=document.querySelector('.yearEl')
///////////////////////////////////////////////////////////

/*Set Current Year*/


const now = new Date()
const year= now.getFullYear()
const month= now.getMonth()+1;
const date= now.getDate()

const thisDate= `${date}/${month}/${year}`

yearEl.textContent=thisDate



///////////////////////////////////////////////////////////


//Make mobile navigation work
btnNav.addEventListener("click", function () {
  header.classList.toggle("nav-open");
});


//  Smooth scrolling animation
const allLinks= document.querySelectorAll('a:link')

allLinks.forEach(link=>{
  link.addEventListener('click', function(e){
    e.preventDefault()
    const href= link.getAttribute('href')
    // Scroll back to top
    if (href==='#')window.scrollTo({
      top:0,
      behavior:'smooth'
    })

    if(href !=='#' && href.startsWith("#")){
      const section= document.querySelector(href);
      section.scrollIntoView({behavior:'smooth'})
    }
    
    // close the mobile navigation

    if(link.classList.contains('main-nav-link'))
    header.classList.toggle('nav-open')
  })
})
///////////////////////////////////////////////////////////
// Sticky navigation

const sectionHeroEl= document.querySelector('.section-hero')

const obs=new IntersectionObserver(function(entries){
const ent= entries[0];
console.log(ent.isIntersecting);
if(!ent.isIntersecting){
  header.classList.add('sticky')
  sectionHeroEl.style.marginTop='9.6rem'
}
else{
  sectionHeroEl.style.marginTop = "0";

   header.classList.remove("sticky");
}
},{
  // inside of the entire viewport
  root: null,
  //  as soon as 0% of herosection is in the viewport
  threshold: 0,
  //  as soon as 100% of the hero is in the viewport
  // threshold: 1,
  // This will be applied 80px outside of the viewport 
  rootMargin: '-80px',
})
obs.observe(sectionHeroEl)


///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
// checkFlexGap();

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js

/*
.no-flexbox-gap .main-nav-list li:not(:last-child) {
  margin-right: 4.8rem;
}

.no-flexbox-gap .list-item:not(:last-child) {
  margin-bottom: 1.6rem;
}

.no-flexbox-gap .list-icon:not(:last-child) {
  margin-right: 1.6rem;
}

.no-flexbox-gap .delivered-faces {
  margin-right: 1.6rem;
}

.no-flexbox-gap .meal-attribute:not(:last-child) {
  margin-bottom: 2rem;
}

.no-flexbox-gap .meal-icon {
  margin-right: 1.6rem;
}

.no-flexbox-gap .footer-row div:not(:last-child) {
  margin-right: 6.4rem;
}

.no-flexbox-gap .social-links li:not(:last-child) {
  margin-right: 2.4rem;
}

.no-flexbox-gap .footer-nav li:not(:last-child) {
  margin-bottom: 2.4rem;
}

@media (max-width: 75em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 3.2rem;
  }
}

@media (max-width: 59em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 0;
    margin-bottom: 4.8rem;
  }
}
*/

