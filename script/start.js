var btn1 = document.getElementById('about-btn01');
var btn2 = document.getElementById('about-btn02');
var btn3 = document.getElementById('about-btn03');
var btn4 = document.getElementById('about-btn04');
var btn01color = document.getElementById('btn01color');
var btn02color = document.getElementById('btn02color');
var btn03color = document.getElementById('btn03color');
var btn04color = document.getElementById('btn04color');
var aboutImg = document.getElementById('aboutImg');
var aboutText = document.getElementById('aboutText');
var operateBtn1 = document.getElementById('operateBtn1');
var operateBtn2 = document.getElementById('operateBtn2');
var operate = document.getElementById('operate');
var pageBtn01 = document.getElementById('pageBtn01');
var pageBtn02 = document.getElementById('pageBtn02');
var pageBtn03 = document.getElementById('pageBtn03');
var border = document.getElementById('s-border');
var mouse = document.getElementById('mouse');
var enter = document.getElementById('enter');
var borderIMG = document.getElementById('borderIMG');
border.addEventListener("mousemove",(e)=>{
    var x = e.clientX;
    var y = e.clientY;
    mouse.style.left = x + "px";
    mouse.style.top = y + "px";
})
mouse.addEventListener("mouseover",()=>{
    borderIMG.style.transform = "scale(1.1)";
})
mouse.addEventListener("mouseout",()=>{
    borderIMG.style.transform = "scale(1)";
})
btn01color.style.opacity = "1";
aboutText.src = "./styles/images/start/text1.png";
mouse.addEventListener
pageBtn01.addEventListener("mousedown",()=>{
    pageBtn01.src = "./styles/images/start/pageBtn1-2.png";
})
pageBtn01.addEventListener("mouseup",()=>{
    pageBtn01.src = "./styles/images/start/pageBtn1-1.png";
    $('html, body').animate({scrollTop:760}, 1500);
})
pageBtn02.addEventListener("mousedown",()=>{
    pageBtn02.src = "./styles/images/start/pageBtn2-2.png";
})
pageBtn02.addEventListener("mouseup",()=>{
    pageBtn02.src = "./styles/images/start/pageBtn2-1.png";
    $('html, body').animate({scrollTop:1460}, 1500);
})
pageBtn03.addEventListener("mousedown",()=>{
    pageBtn03.src = "./styles/images/start/pageBtn3-2.png";
})
pageBtn03.addEventListener("mouseup",()=>{
    pageBtn03.src = "./styles/images/start/pageBtn3-1.png";
    $('html, body').animate({scrollTop:2160}, 1500);
    
})
btn1.addEventListener("click",()=>{
    resetBtn();
    btn01color.style.opacity = "1";
    aboutText.src = "./styles/images/start/text1.png";
    aboutImg.src = "./styles/images/start/about1.png";
})
btn2.addEventListener("click",()=>{
    resetBtn();
    btn02color.style.opacity = "1";
    aboutText.src = "./styles/images/start/text2.png";
    aboutImg.src = "./styles/images/start/about1.png";
})
btn3.addEventListener("click",()=>{
    resetBtn();
    btn03color.style.opacity = "1";
    aboutText.src = "./styles/images/start/text3.png";
    aboutImg.src = "./styles/images/start/about2.png";
})
btn4.addEventListener("click",()=>{
    resetBtn();
    btn04color.style.opacity = "1";
    aboutText.src = "./styles/images/start/text4.png";
    aboutImg.src = "./styles/images/start/about3.png";
})
operateBtn1.addEventListener("click",()=>{
    operate.src = "./styles/images/start/operate1.png";
    operate.style.opacity = 0;
    operate.style.top = "200px";
    operate.style.left = "220px";
    operate.style.width = "850px";
    operateBtn1.style.cursor = "default";
    operateBtn2.style.cursor = "pointer";
    operate.style.opacity = 1;
})
operateBtn2.addEventListener("click",()=>{
    operate.src = "./styles/images/start/operate2.png";
    operate.style.opacity = 0;
    operate.style.top = "240px";
    operate.style.left = "220px";
    operate.style.width = "850px";
    operateBtn1.style.cursor = "pointer";
    operateBtn2.style.cursor = "default";
    operate.style.opacity = 1;
})

enter.addEventListener("mousedown",()=>{
    enter.src = "./styles/images/start/enter2.png";
})
enter.addEventListener("mouseup",()=>{
    enter.src = "./styles/images/start/enter1.png";
    window.location.href="./";
})
function resetBtn(){
    btn01color.style.opacity = "0";
    btn02color.style.opacity = "0";
    btn03color.style.opacity = "0";
    btn04color.style.opacity = "0";
}