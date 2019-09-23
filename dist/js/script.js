$(document).ready(function(){
    //nice scroll
    $("body").niceScroll({
        cursorcolor:"#e0165c",
        cursorwidth:"10px",
        cursorborder:"#e0165c"
        
      });
    //sticky menu 
    $(window).scroll(function(){
        var sc=$(this).scrollTop();
        console.log(sc);

        if(sc>540)
        {
          $("header").addClass("sticky");

        }
        if(sc<539)
        {
            $("header").removeClass("sticky");
            
        }
        if(sc>($(".about").offset().top)-130)
        {
            console.log("home"+sc);
            $("a.nav-link").css("color", "#fff");
            $("#home").css("color", "#048290");

        }
    });
        //CHECHBOX SWITCH 
    // $("input#switched-flat").on('click',function()
    // {
    //   console.log("hi")

    //    if( $("#switched-flat").is(':checked'))
    //     {
    //       $("p").html("160$"); 
    //     }

    //     else
    //     {
    //         $("p").html("210$");
    //     }
    // });

    
   //animation srcoll
   $(function(){
    wow = new WOW( {
        boxClass:     'wow',
        animateClass: 'animated',
        offset:       100
        }
    );
    
    wow.init(); 
  
  });

//     //sticky menu 
//     $(window).scroll(function(){
        var sc=$(this).scrollTop();

        //nav bar
        // if(sc>($(".home").offset().top)-130)
        // {
        //     console.log(sc);
        //     $(".nav-link").css("color", "#fff");
        //     $("#home").css("color", "#fccf20");

        // }
//         if(sc>($(".about").offset().top)-130)
//         {
//             console.log(sc);
//             $(".nav-link").css("color", "#fff");
//             $("#about").css("color", "#fccf20");

//         }
//         if(sc>($(".services").offset().top)-130)
//         {
//             //console.log(sc);
//            $(".nav-link").css("color", "#fff");
//            $("#serv").css("color", "#fccf20");
//             //$('.tim').countTo();
//            // $("#serv").off("scroll");

//         }
//         if(sc>($(".portfolios").offset().top)-130)
//         {
//             console.log(sc);
//             $(".nav-link").css("color", "#fff");
//             $("#porto").css("color", "#fccf20");

//         }

//         if(sc>($(".price").offset().top)-130)
//         {
           
//             $(".nav-link").css("color", "#fff");
//             $("#price").css("color", "#fccf20");

//         }
//         if(sc>($(".team").offset().top)-130)
//         {
           
//             $(".nav-link").css("color", "#fff");
//             $("#team").css("color", "#fccf20");

//         }
//         if(sc>($(".contact").offset().top)-130)
//         {
           
//             $(".nav-link").css("color", "#fff");
//             $("#contact").css("color", "#fccf20");

//         }
//     })

//     $("a.nav-link").click(function(){
        
//         $(this).css("color", "#fccf20");
//         $(this).css("background-color", "transparent");
//       });
//        $(".buttons .all").addClass("active-btn");

//       $(".buttons button").click(function(){
//           $(this).addClass("active-btn").siblings().removeClass("active-btn");
//          var filterId= $(this).attr("id");
//          if(filterId==="all")
//          {
//              $(".images div").fadeIn();
//          }
//          else
//          {
//             $(".images div").fadeOut();
//            var img= $(".images").contents().filter("."+filterId).fadeIn();
//            $("div.recipe-detail").fadeIn();
//            $("div.love").fadeIn();

         
//                 }
         
//       })

//       //scroll smooth
//       $(function(){
//         $(".nav-link").arctic_scroll({
//             speed: 900
//         });
        
//     });
   

//     // owl carousel
//     $('.owl-carousel').owlCarousel({
//         loop:true,
//         margin:10,
//         nav:false,
//         autoplay:true,
//         autoplayTimeout:1500,
//         autoplayHoverPause:true,
//         dotsEach:true,
        
//         responsive:{
//             0:{
//                 items:1
//             },
//             600:{
//                 items:3
//             },
//             1000:{
//                 items:4
//             }
//         }
//     })

// //popup video 
//     $('.images').magnificPopup({
//         delegate: 'a', // child items selector, by clicking on it popup will open
//         type: 'iframe',
//         removalDelay: 300
//       });


   
});
function changePrice(e)
    {
        //alert("lolo");
        $(e).find("p").css("color","red");
    }