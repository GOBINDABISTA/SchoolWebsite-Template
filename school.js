    //sticky navbar
    window.addEventListener("scroll",function(){
        var header=document.querySelector(".navbar");
       header.classList.toggle("sticky",window.scrollY>40)
        })
            
        
        //sticky left section
     window.addEventListener("scroll",function(){
        var leftSec=document.querySelector(".left-sec");
        leftSec.classList.toggle("sticky-leftSec",window.scrollY>0)
        })


        //THEME
      var icon=document.getElementById("icon");
      icon.onclick=function(){
        document.body.classList.toggle("dark-theme");
        icon.classList.toggle("themeBorder");
      }
        var icon2=document.getElementById("icon2");
      icon2.onclick=function(){
        document.body.classList.toggle("blue-theme");
       
        icon2.classList.toggle("themeBorder");
  
      }
      
      function openTheme(){
        document.querySelector(".theme").style.right="0px";
        document.querySelector(".themeOpen").style.right="100px";
      }
      function themeClose(){
        document.querySelector(".theme").style.right="-100px";
        document.querySelector(".themeOpen").style.right="0px";
      }




       
   //menubar toggle and navigation
   
   const navigation=document.querySelector('.navigation');
   document.getElementById('toggle').onclick=function(){
    this.classList.toggle('active');
     navigation.classList.toggle('active');
    }
 function menuItem(){
   document.querySelector(".navigation").classList.remove("active");
   document.querySelector("#toggle").classList.remove("active");
 }
 