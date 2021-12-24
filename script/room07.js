var r7people = document.getElementById('r7-people');
var r7card = document.getElementById('r7-card');
var r7cardRight = document.getElementById('r7-card-right');
var r7cardLeft = document.getElementById('re-card-left');
var r7Enter = document.getElementById("r7Enter");
var r7PrevPage = document.getElementById("r7-prevPage");
var r7Zenly = document.getElementById('r7Zenly');
var r7YellowLove = document.getElementById("r7YellowLove");
var r7RedLove = document.getElementById("r7RedLove");
var r7hoverLove = document.getElementById("r7hoverLove");
var r7Bird = document.getElementById("r7Bird");
var r7foot = document.getElementById("r7foot");
var r7cupid = document.getElementById("r7cupid");
var r7puppet = document.getElementById("r7puppet");
var r7hoverGPS = document.getElementById("r7hoverGPS");
var r7Gps = document.getElementById("r7Gps");
var r7talkBox = document.getElementById("r7talkBox");
var r7sabrinaBox =document.getElementById("r7sabrinaBox");
var r7Butterfly = document.getElementById("r7Butterfly");
var r7fishBox = document.getElementById("r7fishBox");
var room07pass = document.getElementById("room07pass");
var room07Bg = document.getElementById('room07Bg');
var r7Password = document.getElementById('r7Password');
var room07Text = document.getElementById('room07Text');
var roomText = document.getElementsByClassName("roomText");
var roomEnter = document.getElementsByClassName('roomEnter');
yes.addEventListener("click",()=>{
    
    
    main.style.display = "none";
    room07.style.display = "block";
    console.log(bgimg);
    setTimeout(()=>{
        bgimg.style.opacity = "1";
        r7people.src = "styles/images/room07/people.png";
        r7people.style.width = "250px";
        
        room07Text.style.display = "block";
        r7Enter.style.display = "block";
        r7PrevPage.style.display = "block";
        r7Zenly.style.display = "block";
        r7hoverLove.style.display = "block";
        r7Bird.style.display = "block";
        r7foot.style.display = "block";
        r7cupid.style.display = "block";
        r7puppet.style.display = "block";
        r7hoverGPS.style.display = "block";
        r7Gps.style.display = "block";
        r7talkBox.style.display = "block";
        r7sabrinaBox.style.display = "block";
        r7Butterfly.style.display = "block";
        r7fishBox.style.display = "block";
        room07Bg.style.display = "block";
        
    },1000)
    setTimeout(()=>{
        r7card.style.display = "none";
        r7cardRight.style.display = "none";
        r7cardLeft.style.display = "none"; 
    },2100);
    
})
r7people.addEventListener("mouseover",()=>{
    room07Text.style.opacity="1";
    room07Text.innerHTML = "主角（控制木偶的人）：控制狂、恐怖情人";
});
r7people.addEventListener("mouseout",()=>{
    room07Text.style.opacity="0";
    room07Text.innerHTML ="";
});
r7Zenly.addEventListener("mouseover",()=>{
    r7Zenly.src="./styles/images/room07/zenlyhover.png";
    r7YellowLove.style.display = "block";
    r7Zenly.style.top = "17.5%";
    room07Text.style.opacity="1";
    room07Text.innerHTML = "Zenly : Zenly是一個追蹤定位的應用程式，它可以讓你即時知道家人朋友的位置，可以看到在哪裡之外，還可以知道在各個地點待了多久、行駛的速度以及手機電池狀態";
})
r7Zenly.addEventListener("mouseout",()=>{
    r7Zenly.src="./styles/images/room07/zenly.png";
    r7YellowLove.style.display = "none";
    r7Zenly.style.top = "22%";
    room07Text.style.opacity="0";
    room07Text.innerHTML ="";
})
r7hoverLove.addEventListener("mouseover",()=>{
    r7RedLove.style.display="block";
})
r7hoverLove.addEventListener("mouseout",()=>{
    r7RedLove.style.display="none";
})
r7Bird.addEventListener("mouseover",()=>{
    room07Text.style.opacity="1";
    room07Text.innerHTML = "籠中鳥：遭受控制無法自由行動";
})
r7Bird.addEventListener("mouseout",()=>{
    room07Text.style.opacity="0";
    room07Text.innerHTML = "";
})
r7foot.addEventListener("mouseover",()=>{
    r7foot.src="./styles/images/room07/foothover.png";
    room07Text.style.opacity="1";
    room07Text.innerHTML = "愛心腳銬：以愛為名控制他人";
})
r7foot.addEventListener("mouseout",()=>{
    r7foot.src="./styles/images/room07/foot.png";
    room07Text.style.opacity="0";
    room07Text.innerHTML = "";
})
r7cupid.addEventListener("mouseover",()=>{
    room07Text.style.opacity="1";
    room07Text.innerHTML = "邱比特：羅馬神話中的愛神，將弓箭替換為望遠鏡有在暗中偷偷注視的意思";
})
r7cupid.addEventListener("mouseout",()=>{
    room07Text.style.opacity="0";
    room07Text.innerHTML = "";
})
r7puppet.addEventListener("mouseover",()=>{
    r7puppet.src = "./styles/images/room07/puppethover.png"
})
r7puppet.addEventListener("mouseout",()=>{
    r7puppet.src = "./styles/images/room07/puppet.png"
})
r7hoverGPS.addEventListener("mouseover",()=>{
    room07Text.style.opacity="1";
    room07Text.innerHTML = "ＧＰＳ：全球定位系統";
    r7Gps.classList.add("scale");
})
r7hoverGPS.addEventListener("mouseout",()=>{
    room07Text.style.opacity="0";
    room07Text.innerHTML = "";
    r7Gps.classList.remove("scale");
})

r7Butterfly.addEventListener("mouseover",()=>{
    room07Text.style.opacity="1";
    room07Text.innerHTML = "被關起來的蝴蝶";
})
r7Butterfly.addEventListener("mouseout",()=>{
    room07Text.style.opacity="0";
    room07Text.innerHTML = "";
})
r7fishBox.addEventListener("mouseover",()=>{
    room07Text.style.opacity="1";
    room07Text.innerHTML = "接吻魚：接吻魚在觀賞魚品種中屬於小型觀賞魚的一種，因為其兩條魚互相接吻而得名接吻魚並受到不少魚友的喜愛，意喻自己的愛情長久。";
})
r7fishBox.addEventListener("mouseout",()=>{
    room07Text.style.opacity="0";
    room07Text.innerHTML = "";
})
r7Enter.addEventListener("click",()=>{

    if(r7Password.value!="3691"){
        alert("密碼錯誤");
        return;
    }
    alert("密碼正確!");
    room07.style.display = "none";
    room07pass.style.display = "block";
    
})
r7PrevPage.addEventListener("click",()=>{
    room07.style.display = "none";
    main.style.display = "block";
    model[0].style.display = "none";
    model0.style.display = "none";
    model1.style.display = "none";
    model2.style.display = "none";
    model3.style.display = "none";
    room07Bg.style.display = "none";
    
    

    room07Text.style.display = "none";
    r7Enter.style.display = "none";
    r7PrevPage.style.display = "none";
    r7Zenly.style.display = "none";
    r7hoverLove.style.display = "none";
    r7Bird.style.display = "none";
    r7foot.style.display = "none";
    r7cupid.style.display = "none";
    r7puppet.style.display = "none";
    r7hoverGPS.style.display = "none";
    r7Gps.style.display = "none";
    r7talkBox.style.display = "none";
    r7sabrinaBox.style.display = "none";
    r7Butterfly.style.display = "none";
    r7fishBox.style.display = "none";

    r7card.style.display = "block";
    r7cardRight.style.display = "block";
    r7cardLeft.style.display = "block"; 
})