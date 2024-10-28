// typed js

    var typed = new Typed(".geeks", { 
        strings: ["A Full-Stack Developer", 
        " A Front-End Developer","A Backend-developer","A Freelanceer"], 
        typeSpeed: 50, 
        backSpeed: 50, 
        loop: true, 
        
    }); 

// typed js

// skills

// skills


// testimonials
$('.testi_slide').slick({
    arrows:false,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
          
// testimonials


// preloder
$(window).on("load", function(){
  $('.preeloder').fadeOut(500).delay(200);
})
// preloder

// back to top

$(window).scroll(function(){
  var scrolling = $(this).scrollTop();
  if(scrolling > 150){
    $('.top').fadeIn(500)
  }
  else{
    $('.top').fadeOut(500)
  }
})

$(".top").click(function(){
  $('html, body').animate({
    scrollTop: 0,
  })
})
// back to top

// nav bar
$(window).scroll(function(){
  var navi = $(this).scrollTop();
  if(navi > 400){
    $(".nav_main").fadeIn(500)
  }
  else{
    $(".nav_main").fadeOut(500)
  }
})
// nav bar