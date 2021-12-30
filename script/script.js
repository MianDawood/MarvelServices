
      // When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
      window.onscroll = function() {scrollFunction()};

      function scrollFunction() {
        if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
          // document.querySelector(".navbar").style.padding = "15px";
          document.querySelector(".navbar").style.height = "80px";
          document.querySelector(".navbar-brand").style.marginTop = "10px";
        } else {
          // document.querySelector(".navbar").style.padding= "15px";
          document.querySelector(".navbar").style.height= "110px";
          document.querySelector(".navbar-brand").style.marginTop= "0px";
        }
      }
      

    //   $(window).resize(function() {
    //     if ($(window).width()<991){
    //       document.querySelector(".navbar").style.padding = "0px";
    //       document.querySelector(".navbar").style.height = "100px";
    //       document.querySelector(".navbar-brand").style.marginTop = "15px";
    //     }else {
    //       document.querySelector(".navbar").style.padding= "0px";
    //       document.querySelector(".navbar").style.height= "100px";
    //       document.querySelector(".navbar-brand").style.marginTop= "0px";
    //     }
    // });
   
      
      // scrol top
      //Get the button
      // var mybutton = document.getElementById("myBtn");
      
      // // When the user scrolls down 20px from the top of the document, show the button
      // window.onscroll = function() {scrollFunction()};
      
      // function scrollFunction() {
      //   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      //     mybutton.style.display = "block";
      //   } else {
      //     mybutton.style.display = "none";
      //   }
      // }
      
      // // When the user clicks on the button, scroll to the top of the document
      // function topFunction() {
      //   document.body.scrollTop = 0;
      //   document.documentElement.scrollTop = 0;
      // }