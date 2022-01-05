var p7box =  document.getElementById('p7box');
var p7control1 = document.getElementById('p7control1');
var p7control2 = document.getElementById('p7control2');
var p7control3 = document.getElementById('p7control3');
var p7control4 = document.getElementById('p7control4');
var p7people = document.getElementById('p7people');
var p7badge = document.getElementById('p7badge');
p7box.addEventListener("mouseover",()=>{
    p7box.src="../styles/images/pass07/box2.png";
})
p7box.addEventListener("mouseout",()=>{
    p7box.src="../styles/images/pass07/box.png";
})
p7control1.addEventListener("click",()=>{
    p7people.style.top = "65px";
    p7people.style.left = "405px";
    p7badge.style.display = "block";
    p7badge.src = "../styles/images/pass07/s1.png";
})
p7control2.addEventListener("click",()=>{
    p7people.style.top = "280px";
    p7people.style.left = "620px";
    p7badge.style.display = "block";
    p7badge.src = "../styles/images/pass07/s2.png";
})
p7control3.addEventListener("click",()=>{
    p7people.style.top = "65px";
    p7people.style.left = "814px";
    p7badge.style.display = "block";
    p7badge.src = "../styles/images/pass07/s3.png";
})
p7control4.addEventListener("click",()=>{
    p7people.style.top = "280px";
    p7people.style.left = "1048px";
    p7badge.style.display = "block";
    p7badge.src = "../styles/images/pass07/s4.png";
})