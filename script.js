var con = document.querySelector("#container")
var like = document.querySelector("i")

con.addEventListener("dblclick",function(){
    like.style.transform = "translate(-50%,-50%) scale(1.5)"
    like.style.opacity = 0.8
    setTimeout(function(){
        like.style.opacity = 0
    },700)
    setTimeout(function(){
        like.style.transform = "translate(-50%,-50%) scale(0)"
    },1500)
})

