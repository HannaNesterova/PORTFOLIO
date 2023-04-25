'use strict';

function titleClickHandler(event){
    event.preventDefault();
    const clickedElement = this;


  const activeLinks = document.querySelectorAll('.titles a.active');
  /* remove class 'active' from all article links  */
  for(let activeLink of activeLinks){
    activeLink.classList.remove('active');

  /* add class 'active' to the clicked link */

  const addActiveLinks = clickedElement;
  addActiveLinks.classList.add('active');
  
  /* remove class 'active' from all articles */
  const activeArticles = document.querySelectorAll('.post.active');
  for (const activeArticle of activeArticles) {
    activeArticle.classList.remove('active');
  }
  
  /* get 'href' attribute from the clicked link */
    const articleSelector = clickedElement.getAttribute('href');
    console.log(articleSelector)

  /* find the correct article using the selector (value of 'href' attribute) */
  const targetArticle = document.querySelector(articleSelector);

  /* add class 'active' to the correct article */
  targetArticle.classList.add('active');
}
}

const links = document.querySelectorAll('.titles a');

for(let link of links){
  link.addEventListener('click', titleClickHandler);
}




const burgerIcon = document.querySelector('.header__burger');
const navigationMenu = document.querySelector('.header_list');
const body = document.querySelector('body');

burgerIcon.addEventListener('click', function(){
  navigationMenu.classList.toggle('active');
  burgerIcon.classList.toggle('active');
  body.classList.toggle('lock');
})

const menuItems = document.querySelectorAll('.header_list_items');

menuItems.forEach(item => {
  item.addEventListener('click', () => {
    navigationMenu.classList.remove('active');
    burgerIcon.classList.remove('active');
    document.body.classList.remove('lock');
    // Add code to show the main page here
  });
});
