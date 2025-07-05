const h5Counter = document.querySelector("#line1-part1 h5");

function loadingAnimation(){
    var tl = gsap.timeline();

tl.from(".line h1",{
    y:150,
    stagger: 0.25,
    duration:0.6,
    delay:0.5
})

tl.from("#line1-part1",{
    opacity:0,
    onStart: function(){
            var grow = 0
        setInterval(function(){
                if(grow < 100){

                    h5Counter.innerHTML = grow++

                }
                else{
        
                    h5Counter.innerHTML = 100
               }
},35)
    }
})

tl.to(".line h2",{
    animationName:"anime",
    opacity:1
})

tl.to("#loader",{
    opacity:0,
    duration:0.2,
    delay:4
})

tl.from("#page1",{
    y:1600,
    opacity:0,
    delay:0.2,
    duration:0.5,
    ease:Power4
})

tl.to("#loader",{
    display:"none"
})
tl.from("#nav",{
    opacity:0
})
tl.from(".hero h1",{
    y:120,
    stagger:0.2
})
}

function cursorAnimation(){
    document.addEventListener("mousemove",function(dets){
    gsap.to("#crsr",{
        left:dets.x,
        top:dets.y
    })
})

Shery.makeMagnet("#nav-part2 h4");
}

loadingAnimation()
cursorAnimation()







