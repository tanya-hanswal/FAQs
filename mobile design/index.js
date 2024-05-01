const content = document.querySelectorAll('.content'); 
const answer = document.querySelectorAll('.answer');
const image = document.querySelectorAll('.image');

content.forEach((i, event) => {
  content[event].addEventListener('click', () => {
    for (let i = 0; i < 4; i++){
      answer[i].classList.add('hide');
      image[i].src = "https://cheosphere.github.io/faq-accordion-main/assets/icon-plus-6e79ac66.svg";
    }

    if (answer[event].classList.contains('hide')){
      answer[event].classList.remove('hide');
      image[event].src = "https://cheosphere.github.io/faq-accordion-main/assets/icon-minus-259cbe76.svg";
    }

  })
});
