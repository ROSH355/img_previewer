const current=document.querySelector("#current")//for id use #
const imgs=document.querySelector(".subimg")//for class use .
const img=document.querySelectorAll(".subimg img")//subimgs contains all the img tags(kinda array)
const opacity=0.6;
//img[0].style.opacity=opacity;
imgs.addEventListener("click",(event)=>{
    //console.log(event)--shows the event occuring there on clicking
    img.forEach((imgelem)=>{
        imgelem.style.opacity=1;//unclicked img no changes in opacity
    })
    const clickedurl=event.target.src;
    current.src=clickedurl;//exchange the main img with the clicked img of subimg
    current.classList.add("fade-In");//add animation fadein to all the classes of html by using classlist
    setTimeout(()=>{
        current.classList.remove("fade-In");
    },600)//animation for 0.6s
    event.target.style.opacity=opacity;
})
