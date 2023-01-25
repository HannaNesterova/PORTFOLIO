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
