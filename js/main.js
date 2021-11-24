$(document).ready(function(){
    $(".start p").css({
      "opacity" : "1"
    })

    

    $(".home .con").slick({
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        variableWidth: true,
        arrows:false,
        centerMode: true,
        autoplay: true,
        autoplaySpeed: 4000
      });

      $(".special .con").slick({
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        variableWidth: true,
        arrows:false,
        centerMode: true,
        autoplay: true,
        autoplaySpeed: 2500
      });

      $(".event .con").slick({
        infinite: true,
        speed: 730,
        slidesToShow: 1,
        variableWidth: true,
        arrows:false,
        autoplay: true,
        autoplaySpeed: 2500
      }); //slick
      
        
      $(window).on("scroll",function(){
        var scr =$(this).scrollTop();
        var wrapStart = $("header").offset().top;

        //location fixed
        var fixStart = $(".location").offset().top;
        var fixEnd = fixStart + $(".location").height();

        //brew fixed
        var brewFixStart = $(".brew").offset().top;
        var brewFixEnd = brewFixStart + $(".brew").height();
        
        if(scr >= wrapStart && scr > wrapStart){
          $("header .wrap").css({
            "opacity" : "1"
          })
        }else {
          $("header .wrap").css({
            "opacity" : "0"
          })
        }

        if(scr >= fixStart && scr < fixEnd){
          $(".location .bg").css({
            "position" : "fixed",
            "top" : 0,
            "left" : 0,
          })
          $("header .wrap p").css({
            "color" : "#fff"
          })
        } else {
          $(".location .bg").css(
            "position" , "relative"
          )
          $("header .wrap p").css({
            "color" : "#000"
          })
        }//loc fix
        
        if (scr >= brewFixStart && scr <brewFixEnd){
          $(".brew .bg").css({
            "position" : "fixed",
            "top" : 0,
            "left" : 0
          }) 
        } else {
          $(".brew .bg").css(
            "position" , "relative"
          )
        }//brew fix

    }) //window scroll
    
    var distance = 0
    $(window).on("mousewheel", function(e) {
      var direction = e.originalEvent.deltaY;
      var scr = $(window).scrollTop();
      var pllxStart = $(".env").offset().top - $(window).height();
      var pllxEnd = $(".env").height() + pllxStart

      if(scr >= pllxStart && scr < pllxEnd) {
        if(direction>0){
          distance -=15;
          $(".env .photo").css("transform",`translateY(${distance}px)`);
        } else if(direction<0){
          distance += 10;
          $(".env .photo").css("transform",`translateY(${distance}px)`);
        }
      }

      if(scr >= pllxStart && scr < pllxEnd) {
        if(direction>0){
          distance -= 15;
          $(".env .txt p").css("transform",`translateY(${distance}px)`);
        } else if(direction<0){
          distance += 10;
          $(".env .txt p").css("transform",`translateY(${distance}px)`);
        }
      }//text pallaxing
    });

    //carousel
    var trackWidth = 0;
    function setCarousel() {
      var itemWidth = $(".contain .store").width();
      var itemMarg = parseInt($(".contain .store").css("marginRight"));
      var itemCount = $(".contain .store").length;
          trackWidth = (itemWidth + itemMarg) * itemCount;
      $(".contain .wrap .track").width(trackWidth);
      var secHeight = $(".contain").height() + trackWidth;
      $(".contain").height(secHeight);
    }

    setCarousel();

    $(window).on("scroll", function() {
      var scr = $(this).scrollTop();
      var fixStart = parseInt($(".contain").offset().top) + parseInt($(".contain").css("paddingTop"));
      var fixEnd = fixStart + trackWidth;
      console.log(scr, fixEnd);

      if(scr >= fixStart && scr < fixEnd){
        $(".contain .con").css({
          "position" : "fixed",
          "top" : 0,
          "bottom" : "unset"
        });
        $(".contain .con .track").css("left", -scr + fixStart);
      } else if(scr >= fixEnd){
        $(".contain .con").css({
          "position" : "absolute",
          "top" : "unset",
          "bottom" : 0
        })
      } else if(scr < fixStart) {
        $(".contain .con").css({
          "position" : "absolute",
          "top" : 200,
          "bottom" : "unset"
        })
      }
    })//carousel control evt
})
//document this#