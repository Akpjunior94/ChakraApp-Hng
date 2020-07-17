 // referencing heroes-images
const leftPhone = document.getElementById("left-phone");
const middlePhone = document.getElementById("middle-phone");
const rightPhone = document.getElementById("right-phone");
const researchTop = document.getElementById("research-bg");


document.addEventListener('scroll', () => {
  // console.log(document.scrollY);
  if (isInViewport(researchTop)) {
    leftPhone.classList.add(['rotate-to-left']);

    rightPhone.classList.add(['rotate-to-right']);
  };

  const rect = researchTop.getBoundingClientRect();
  
  if (rect.top > document.documentElement.clientHeight) {
    leftPhone.classList.remove(['rotate-to-left']);
    rightPhone.classList.remove(['rotate-to-right']);
  }
})

function isInViewport(element) {
  const rect = element.getBoundingClientRect();

  return (
    rect.top >= 0 && 
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

$(document).ready(function() {
  // caurosel 
  $('#recipeCarousel').carousel({
    interval: 10000
  })
  
  $('.carousel .carousel-item').each(function(){
      let minPerSlide = 3;
      let next = $(this).next();
      if (!next.length) {
      next = $(this).siblings(':first');
      }
      next.children(':first-child').clone().appendTo($(this));
      
      for (let i=0;i<minPerSlide;i++) {
          next=next.next();
          if (!next.length) {
          	next = $(this).siblings(':first');
        	}
          
          next.children(':first-child').clone().appendTo($(this));
        }
  });
  
  // light-house
  $(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
  });
});


