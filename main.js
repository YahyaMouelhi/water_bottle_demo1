let height = 100;
let ctr = 0;
let prcntj = document.querySelector(".prcntj");
document.addEventListener("keydown",function(e){
    if (e.key != "Escape"){
        document.querySelector(".meee").classList.remove("hidden");
        document.querySelector(".bottle1").classList.remove("hidden");
        if (height <= 100){
            height -=0.5;  
            if (ctr < 100){
                ctr += 0.5;
                prcntj.textContent = `${Math.floor(ctr)}%`;
                prcntj.style.color = `rgb(${255 - (255/100) * ctr},${(255/100) * ctr},0)`;
                }
            document.querySelector(".bottle").style.height = `${height}%`;
        }
    }
})

document.addEventListener("keyup",function(e){
    if (e.key == "Escape"){
        document.querySelector(".meee").classList.add("hidden");
        document.querySelector(".bottle1").classList.add("hidden");
        prcntj.textContent = `0%`;
        prcntj.style.color = `rgb(255,0,0)`;
        ctr = 0;
        height=100;
        document.querySelector(".bottle").style.height = `${height}%`;
    }
})


