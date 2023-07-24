let panels=document.querySelectorAll(".panel");
rem=function(){
    let temp=document.querySelector(".active").classList;
    temp.remove("active");  
}
panels.forEach(panel =>{ 
    panel.addEventListener("click",function(event){
         rem();
    event.target.classList.add("active");
    })
    });


