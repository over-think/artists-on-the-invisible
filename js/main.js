window.addEventListener('load', function(){
  new Glider(document.querySelector('.episodes'), {
    slidesToShow: 4,
    slidesToScroll: 4,
    draggable: true,
    dots: '.dots',
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next'
    }
  });
})
