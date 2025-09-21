var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function (dets) {
    crsr.style.left = dets.x  + 11+"px"
    crsr.style.top = dets.y  +11+ "px"
    blur.style.left = dets.x - 150 +"px"
    blur.style.top = dets.y - 150 +"px" 
   
})

var navh4 = document.querySelectorAll("#nav h4")
navh4.forEach(function(elem){
    elem.addEventListener("mouseenter",function() {
        crsr.style.scale = 2
        crsr.style.backgroundColor = "transparent"
        crsr.style.border = "0.1px solid #fff"
        crsr.style.transition = "0.2s"
    })

})

navh4.forEach(function(elem){
    elem.addEventListener("mouseleave",function() {
        crsr.style.scale = 1
        crsr.style.backgroundColor = "#ade11d"
        crsr.style.border = "0px"
        crsr.style.transition = "0s"
    })

})

var navimg = document.querySelector("#nav img")
navimg.addEventListener("mouseenter",function(){
    navimg.style.height = "80px";
    navimg.style.transition = "linear 0.1s"
    crsr.style.scale = 2
    crsr.style.backgroundColor = "transparent"
    crsr.style.border = "0.1px solid #fff"
    crsr.style.transition = "0.2s" 
})

navimg.addEventListener("mouseleave",function(){
    navimg.style.height = "75px";
    navimg.style.transition = "linear 0.1s"
    crsr.style.scale = 1
    crsr.style.backgroundColor = "#ade11d"
    crsr.style.border = "0px"
    crsr.style.transition = "0s"

})
    

gsap.to("#nav",{
    backgroundColor : "#000" ,
    height : "100px" ,
    duration : 0.5 ,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        start:"top -10%",
        end:"top -11%",
        scrub:2,
    }
})

gsap.to("#main",{
    backgroundColor : "#000" ,
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top 0%",
        end:"top -80%",
        scrub:2,
       // markers:true
    }
    
})

gsap.to("#about-img1",{
    marginTop:"40px",
    scrollTrigger:{
        trigger:"#about-img1",
        scroller:"body",
        start:"top 100%",
        
        scrub:2,
       // markers:true
    }
    
})

gsap.to("#about-text",{
    marginTop:"40px",
    scrollTrigger:{
        trigger:"#about-text",
        scroller:"body",
        start:"top 100%",
        
        scrub:2,
        //markers:true
    }
    
})

