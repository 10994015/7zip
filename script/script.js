// var OpeningAnimation = document.getElementsByClassName('OpeningAnimation')[0];
//     setTimeout(()=>{
//         OpeningAnimation.style.opacity="0";
//     },11000)
//     setTimeout(()=>{
//         OpeningAnimation.style.display="none";
//     },12000);
var main = document.getElementById("main");
var up = document.getElementById('up');
var down = document.getElementById('down');
var bg1 = document.getElementById('bg1');
var bg2 = document.getElementById('bg2');
var bg3 = document.getElementById('bg3');
var bg4 = document.getElementById('bg4');
var bg5 = document.getElementById('bg5');
var bg6 = document.getElementById('bg6');
var bg7 = document.getElementById('bg7');
var roomNumber  = document.getElementById('roomNumber');
var eye = document.getElementById('eye');
var eyeNum = 1;
var bg1people = document.querySelector('#bg1 > .people');
var bg2people = document.querySelector("#bg2 > .people");
var bg3people = document.querySelector("#bg3 > .people");
var bg4people = document.querySelector("#bg4 > .people");
var bg5people = document.querySelector("#bg5 > .people");
var bg6people = document.querySelector("#bg6 > .people");
var bg7people = document.querySelector("#bg7 > .people");
var people = document.getElementsByClassName("people");
var model = document.getElementsByClassName("model");
var no = document.getElementsByClassName("no");
var times = 0;
var t = document.getElementById('t');
var yes = document.getElementsByClassName('yes');

var passBadge01 = document.getElementsByClassName('passBadge01');
var passBadge02 = document.getElementsByClassName('passBadge02');
var passBadge03 = document.getElementsByClassName('passBadge03');
var passBadge04 = document.getElementsByClassName('passBadge04');
var passBadge05 = document.getElementsByClassName('passBadge05');
var passBadge06 = document.getElementsByClassName('passBadge06');
var passBadge07 = document.getElementsByClassName('passBadge07');

var model07 = document.getElementById('model07');
var model1 = document.getElementById('model1');
var model2 = document.getElementById('model2');
var model3 = document.getElementById('model3');

var peopleText = document.getElementById('peopleText');
var roomText = document.getElementsByClassName("roomText");
var roomEnter = document.getElementsByClassName('roomEnter');

// room02
var room02 = document.getElementById('room02');
var room02Bg = document.getElementById('room02Bg');
var room02Text = document.getElementById('room02Text');
var r2people = document.getElementById('r2-people');
var r2card = document.getElementById('r2-card');
var r2cardRight = document.getElementById('r2-card-right');
var r2cardLeft = document.getElementById('r2-card-left');
var r2PrevPage = document.getElementById("r2-prevPage");
var r2Enter = document.getElementById("r2Enter");
var room02People = document.getElementById('room02People');
var r2Password = document.getElementById('r2Password');
var r2botoomBorder = document.getElementsByClassName('r2botoomBorder');
yes[1].addEventListener("click",()=>{
    main.style.display = "none";
    room02.style.display = "block";
    setTimeout(()=>{
        room02Bg.style.opacity = "1";
        room02People.style.display = "block";
        r2people.style.display = "none";
        room02Text.style.display = "block";
        r2Enter.style.display = "block";
        r2PrevPage.style.display = "block";
        r2Password.style.display = "block";
        for(let b=0;b<r2botoomBorder.length;b++){
            r2botoomBorder[b].style.display = "block";
        }
    },1000)

    r2Enter.addEventListener("click",()=>{
        if(r2Password.value!="1234") return alert("密碼錯誤");
        alert("密碼正確!");
        room02.style.display = "none";
        room02pass.style.display = "block";
    })
})

// room02 END

// room6
var room06 = document.getElementById("room06");
var room06Bg = document.getElementById('room06Bg');
var room06Text = document.getElementById('room06Text');
var r6people = document.getElementById('r6-people');
var r6card = document.getElementById('r6-card');
var r6cardRight = document.getElementById('r6-card-right');
var r6cardLeft = document.getElementById('r6-card-left');
var r6PrevPage = document.getElementById("r6-prevPage");
var r6Enter = document.getElementById("r6Enter");
var r6Password  =document.getElementById('r6Password');
var r6eyeBtn = document.getElementById('r6eyeBtn');
var r6faceBtn = document.getElementById('r6faceBtn');
var r6makeupBtn = document.getElementById('r6makeupBtn');
var r6noseBtn = document.getElementById('r6noseBtn');
var r6bells = document.getElementById('r6bells');
var r6bellshover = document.getElementById('r6bellshover');
var r6face = document.getElementById('r6face');
var r6follow  =document.getElementById('r6follow');
var r6photo = document.getElementById('r6photo');
var r6editimg = document.getElementById('r6editimg');
var r6vase = document.getElementById("r6vase");

var r6venus = document.getElementById('r6venus');
var r6like = document.getElementsByClassName('r6like');
var r6venusBox  =document.getElementById('r6venusBox');
var r6biglike1 = document.getElementById('r6biglike1');
var r6biglike2 = document.getElementById('r6biglike2');
var r6biglike3 = document.getElementById('r6biglike3');
var r6biglike4 = document.getElementById('r6biglike4');
var r6biglike5 = document.getElementById('r6biglike5');
var r6biglike6 = document.getElementById('r6biglike6');

var cartBox = document.getElementById('cartBox');
var liveNum = document.getElementById('liveNum');
var livepeopleNum = 1000;
var r6msg1 = document.getElementById("r6msg1");
var r6msg2 = document.getElementById("r6msg2");
var r6liveLove = document.getElementsByClassName('r6liveLove');

var r6touchFollow = document.getElementById('r6touchFollow');

var r6venus2 = document.getElementById('r6venus2');
var r6love1 = document.getElementById('r6love1');
var r6love2 = document.getElementById('r6love2');
var r6love3 = document.getElementById('r6love3');
var r6love4 = document.getElementById('r6love4');
var r6love5 = document.getElementById('r6love5');
var room06pass  =document.getElementById('room06pass');
var liveadd = null;
var room06People = document.getElementById('room06People');
var r6arrow = document.getElementsByClassName('r6arrow');
var r6botoomBorder = document.getElementsByClassName('r6botoomBorder');

yes[5].addEventListener("click",()=>{
    main.style.display = "none";
    room06.style.display = "block";

    setTimeout(()=>{
        room06Bg.style.opacity = "1";
        room06People.style.display = "block";
        r6people.style.display = "none";
        room06Text.style.display = "block";
        r6Enter.style.display = "block";
        r6PrevPage.style.display = "block";
        r6Password.style.display = "block";
        r6eyeBtn.style.display = "block";
        r6faceBtn.style.display = "block";
        r6makeupBtn.style.display = "block";
        r6noseBtn.style.display = "block";
        r6bells.style.display = "block";
        r6bellshover.style.display = "block";
        r6follow.style.display = "block";
        r6photo.style.display = "block";
        r6editimg.style.display = "block";
        r6vase.style.display = "block";
        r6venus.style.display = "block";
        r6venus2.style.display = "block";
        r6touchFollow.style.display = "block";
        for(let b=0;b<r6botoomBorder.length;b++){
            r6botoomBorder[b].style.display = "block";
        }
        for(let a=0;a<r6arrow.length;a++){
            r6arrow[a].style.display = "block";
        }
    },1000)
    setTimeout(()=>{
        r6card.style.display = "none";
        r6cardRight.style.display = "none";
        r6cardLeft.style.display = "none"; 
    },2100);
})
r6Enter.addEventListener("mousedown",()=>{
    r6Enter.src="./styles/images/room06/enter2.png";
})
r6Enter.addEventListener("mouseup",()=>{
    r6Enter.src="./styles/images/room06/enter.png";
})
room06People.addEventListener("mouseover",()=>{
    
    room06Text.style.opacity = "1";
    room06Text.innerHTML = "《維納斯的誕生》 : 羅馬神話中女神維納斯從海中誕生的情景，右邊春之女神正在為她披上華服而左邊的風神送來暖風陣風，吹起她的髮絲。 ";
})
room06People.addEventListener("mouseout",()=>{
    room06Text.style.opacity = "0";
    room06Text.innerHTML = "";
})
r6eyeBtn.addEventListener("mouseover",()=>{
    r6eyeBtn.src="./styles/images/room06/eyeClose.png";
    r6face.style.display = "block";
    r6face.src = "./styles/images/room06/changeeye.png";
})
r6eyeBtn.addEventListener("mouseout",()=>{
    r6eyeBtn.src = "./styles/images/room06/eyeBtn.png";
    r6face.style.display = "none";
    r6face.src = "";
})
r6faceBtn.addEventListener("mouseover",()=>{
    r6faceBtn.src = "./styles/images/room06/faceClose.png";
    r6face.style.display = "block";
    r6face.src = "./styles/images/room06/changeface.png";
})
r6faceBtn.addEventListener("mouseout",()=>{
    r6faceBtn.src = "./styles/images/room06/faceBtn.png"
    r6face.style.display = "none";
    r6face.src = "";
})
r6makeupBtn.addEventListener("mouseover",()=>{
    r6makeupBtn.src = "./styles/images/room06/makeupClose.png";
    r6face.style.display = "block";
    r6face.src = "./styles/images/room06/changemakeup.png";
})
r6makeupBtn.addEventListener("mouseout",()=>{
    r6makeupBtn.src = "./styles/images/room06/makeupBtn.png"
    r6face.style.display = "none";
    r6face.src = "";
})
r6noseBtn.addEventListener("mouseover",()=>{
    r6noseBtn.src = "styles/images/room06/noseClose.png";
    r6face.style.display = "block";
    r6face.src = "./styles/images/room06/changenose.png";
})
r6noseBtn.addEventListener("mouseout",()=>{
    r6noseBtn.src = "styles/images/room06/noseBtn.png";
    r6face.style.display = "none";
    r6face.src = "";
})
r6bellshover.addEventListener("mouseover",()=>{
    r6bells.classList.add('animation');
})
r6bellshover.addEventListener("mouseout",()=>{
    r6bells.classList.remove('animation');
})
r6follow.addEventListener("mouseover",()=>{
    r6follow.src = "./styles/images/room06/following.png";
    room06Text.style.opacity = "1";
    room06Text.innerHTML = "Instagram：於2010/10發布，截止2021/1 Instagram的全球活躍使用者數量已超過10億";
})
r6follow.addEventListener("mouseout",()=>{
    r6follow.src = "./styles/images/room06/follow.png";
    room06Text.style.opacity = "0";
    room06Text.innerHTML = "";
})
r6photo.addEventListener("mouseover",()=>{
    r6photo.src = "./styles/images/room06/photo.png"
    room06Text.style.opacity = "1";
    room06Text.innerHTML = "修圖軟體：2021修圖軟體下載量前8名";
})
r6photo.addEventListener("mouseout",()=>{
    r6photo.src = "./styles/images/room06/app.png";
    room06Text.style.opacity = "0";
    room06Text.innerHTML = "";
})
r6editimg.addEventListener("mouseover",()=>{
    r6editimg.src = "./styles/images/room06/editimg2.png"
    room06Text.style.opacity = "1";
    room06Text.innerHTML = "Instagram：於2010/10發布，截止2021/1 Instagram的全球活躍使用者數量已超過10億";
})
r6editimg.addEventListener("mouseout",()=>{
    r6editimg.src = "./styles/images/room06/editimg.png"
    room06Text.style.opacity = "0";
    room06Text.innerHTML = "";
})
r6vase.addEventListener("mouseover",()=>{
    room06Text.style.opacity = "1";
    room06Text.innerHTML = "百合花：百合花在聖經中象徵在污穢的世界中過純潔的生活的良人";
})
r6vase.addEventListener("mouseout",()=>{
    room06Text.style.opacity = "0";
    room06Text.innerHTML = "";

})
r6venusBox.addEventListener("mouseover",()=>{
    r6biglike1.style.display = "block";
    r6biglike2.style.display = "block";
    r6biglike3.style.display = "block";
    r6biglike4.style.display = "block";
    r6biglike5.style.display = "block";
    r6biglike6.style.display = "block";
    room06Text.style.opacity = "1";
    room06Text.innerHTML = "《維納斯的誕生》 : 羅馬神話中女神維納斯從海中誕生的情景，右邊春之女神正在為她披上華服而左邊的風神送來暖風陣風，吹起她的髮絲。 ";
   

})
r6venusBox.addEventListener("mouseout",()=>{
    r6biglike1.style.display = "none";
    r6biglike2.style.display = "none";
    r6biglike3.style.display = "none";
    r6biglike4.style.display = "none";
    r6biglike5.style.display = "none";
    r6biglike6.style.display = "none";
    room06Text.style.opacity = "0";
    room06Text.innerHTML = "";
})
function livestart(){
    liveadd = setInterval(() => {
    livepeopleNum++;
    if(livepeopleNum>9999){
        livepeopleNum = 1000;
    }
    liveNum.innerHTML = livepeopleNum + "+";
}, 1);
}
r6touchFollow.addEventListener("mouseover",()=>{
    console.log(111);
    
    room06Text.style.opacity = "1";
    room06Text.innerHTML = "Instagram：於2010/10發布，截止2021/1 Instagram的全球活躍使用者數量已超過10億";
})
r6touchFollow.addEventListener("mouseout",()=>{
    room06Text.style.opacity = "0";
    room06Text.innerHTML = "";
})
cartBox.addEventListener("mouseover",()=>{
    liveNum.style.display = "block";
    r6msg1.style.display = "block";
    r6msg2.style.display = "block";
    room06Text.style.opacity = "1";
    room06Text.innerHTML = "直播：利用視訊方式進行線上現場直播，一般實況主常透過直播平台網站轉播遊戲過程、生活瑣事等，並與觀眾即時性互動";
    for(var r=0;r<r6liveLove.length;r++){
        r6liveLove[r].style.display = "block";
    }
    livestart();
    
})
cartBox.addEventListener("mouseout",()=>{
    liveNum.style.display = "none";
    r6msg1.style.display = "none";
    r6msg2.style.display = "none";
    room06Text.style.opacity = "0";
    room06Text.innerHTML = "";
    for(var r=0;r<r6liveLove.length;r++){
        r6liveLove[r].style.display = "none";
    }
    clearInterval(liveadd);
})






r6venus2.addEventListener("mouseover",()=>{
    r6love1.style.display = "block";
    r6love2.style.display = "block";
    r6love3.style.display = "block";
    r6love4.style.display = "block";
    r6love5.style.display = "block";
    room06Text.style.opacity = "1";
    room06Text.innerHTML = "《維納斯的誕生》 : 羅馬神話中女神維納斯從海中誕生的情景，右邊春之女神正在為她披上華服而左邊的風神送來暖風陣風，吹起她的髮絲。 ";
})
r6venus2.addEventListener("mouseout",()=>{
    r6love1.style.display = "none";
    r6love2.style.display = "none";
    r6love3.style.display = "none";
    r6love4.style.display = "none";
    r6love5.style.display = "none";
    room06Text.style.opacity = "0";
    room06Text.innerHTML = "";
})
r6Enter.addEventListener("click",()=>{
    if(r6Password.value!="2954") return alert("密碼錯誤");
    alert("密碼正確!");
    room06.style.display = "none";
    room06pass.style.display = "block";
})
r6Password.addEventListener("keydown",(e)=>{
    if(e.keyCode !== 13) return; 
    r6Enter.src="./styles/images/room06/enter2.png";
})
r6Password.addEventListener("keyup",(e)=>{
    if(e.keyCode !== 13) return; 
    r6Enter.src="./styles/images/room06/enter.png";
    if(r6Password.value!=="2954") return alert("密碼錯誤");
    alert("密碼正確!");
    room06.style.display = "none";
    room06pass.style.display = "block";
    
})
setInterval(()=>{
    r6arrow[0].style.opacity = 0;
    r6arrow[1].style.opacity = 0;
    r6arrow[2].style.opacity = 0;
    r6arrow[3].style.opacity = 0;
    r6arrow[4].style.opacity = 0;
    r6arrow[5].style.opacity = 0;
    r6arrow[6].style.opacity = 0;
    setTimeout(()=>{
        r6arrow[0].style.opacity = 1
    },500)
    setTimeout(()=>{
        r6arrow[1].style.opacity = 1
    },1000)
    setTimeout(()=>{
        r6arrow[2].style.opacity = 1
    },1500)
    setTimeout(()=>{
        r6arrow[3].style.opacity = 1
    },2000)
    setTimeout(()=>{
        r6arrow[4].style.opacity = 1
    },2500)
    setTimeout(()=>{
        r6arrow[5].style.opacity = 1
    },3000)
    setTimeout(()=>{
        r6arrow[6].style.opacity = 1
    },3500)
    setTimeout(()=>{
        r6arrow[0].style.opacity = 0;
        r6arrow[1].style.opacity = 0;
        r6arrow[2].style.opacity = 0;
        r6arrow[3].style.opacity = 0;
        r6arrow[4].style.opacity = 0;
        r6arrow[5].style.opacity = 0;
        r6arrow[6].style.opacity = 0;
    },4000)
},4000)
r6PrevPage.addEventListener("click",()=>{
    r6people.src = "styles/images/index6/peple.png";
    room06.style.display = "none";
    main.style.display = "block";
    model[0].style.display = "none";
    model06.style.display = "none";
    model1.style.display = "none";
    model2.style.display = "none";
    model3.style.display = "none";
    room06Bg.style.opacity = "0";

    room06People.style.display = "none";
    r6people.style.width = "250px";
    r6people.style.top="133px";
    r6people.style.left = "285px";
    room06Text.style.display = "none";
    r6Enter.style.display = "none";
    r6Password.style.display = "none";
    r6Password.value="";
    r6PrevPage.style.display = "none";
    r6eyeBtn.style.display = "none";
    r6faceBtn.style.display = "none";
    r6makeupBtn.style.display = "none";
    r6noseBtn.style.display = "none";
    r6bells.style.display = "none";
    r6bellshover.style.display = "none";
    r6follow.style.display = "none";
    r6photo.style.display = "none";
    r6editimg.style.display = "none";
    r6vase.style.display = "none";
    r6venus.style.display = "none";
    r6venus2.style.display = "none";
    r6touchFollow.style.display = "none";
    for(let b=0;b<r6botoomBorder.length;b++){
            r6botoomBorder[b].style.display = "block";
        }
    for(let a=0;a<r6arrow.length;a++){
        r6arrow[a].style.display = "none";
    }
    r6people.style.display = "block";
    r6card.style.display = "block";
    r6cardRight.style.display = "block";
    r6cardLeft.style.display = "block"; 

})

// room6 end


// room7
var room07 = document.getElementById("room07");
var room07Bg = document.getElementById('room07Bg');
var r7people = document.getElementById('r7-people');
var r7card = document.getElementById('r7-card');
var r7cardRight = document.getElementById('r7-card-right');
var r7cardLeft = document.getElementById('r7-card-left');
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
var room07People  =document.getElementById('room07People');
var r7arrow = document.getElementsByClassName('r7arrow');
var r7botoomBorder = document.getElementsByClassName('r7botoomBorder');
yes[6].addEventListener("click",()=>{

    main.style.display = "none";
    room07.style.display = "block";
    // console.log(bgimg);
    setTimeout(()=>{
        room07People.style.display = "block";
        r7people.style.display = "none";
        room07Bg.style.opacity = "1";
        room07Text.style.display = "block";
        r7Enter.style.display = "block";
        r7Password.style.display = "block";
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
        for(var b=0;b<r7botoomBorder.length;b++){
            r7botoomBorder[b].style.display = "block";
        }
        for(let a=0;a<r7arrow.length;a++){
            r7arrow[a].style.display = "block";
        }
    },1000)
    setTimeout(()=>{
        r7people.style.display = "none";
        r7card.style.display = "none";
        r7cardRight.style.display = "none";
        r7cardLeft.style.display = "none"; 
    },2000);
   
    
})
room07People.addEventListener("mouseover",()=>{
    room07Text.style.opacity="1";
    room07Text.innerHTML = "主角（控制木偶的人）：控制狂、恐怖情人";
});
room07People.addEventListener("mouseout",()=>{
    room07Text.style.opacity="0";
    room07Text.innerHTML ="";
});
r7Zenly.addEventListener("mouseover",()=>{
    r7Zenly.src="./styles/images/room07/zenlyhover.png";
    r7YellowLove.style.display = "block";
    r7Zenly.style.top = "19.5%";
    room07Text.style.opacity="1";
    room07Text.innerHTML = "Zenly : Zenly是一個追蹤定位的應用程式，可以讓你即時知道家人朋友的位置、在各個地點待了多久、行駛的速度以及手機電池狀態";
})
r7Zenly.addEventListener("mouseout",()=>{
    r7Zenly.src="./styles/images/room07/zenly.png";
    r7YellowLove.style.display = "none";
    r7Zenly.style.top = "24%";
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
    room07Text.innerHTML = "被關起來的蝴蝶：行動受到限制";
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
r7Enter.addEventListener("mousedown",()=>{
    r7Enter.src="./styles/images/room07/enter(after).png";
})
r7Enter.addEventListener("mouseup",()=>{
    r7Enter.src="./styles/images/room07/enter.png";
})
r7Enter.addEventListener("click",()=>{

    if(r7Password.value!="3691") return alert("密碼錯誤");
    alert("密碼正確!");
    room07.style.display = "none";
    room07pass.style.display = "block";
    
})
r7Password.addEventListener("keydown",(e)=>{
    if(e.keyCode !== 13) return; 
    r7Enter.src="./styles/images/room07/enter(after).png";
})
r7Password.addEventListener("keyup",(e)=>{
    if(e.keyCode !== 13) return; 
    r7Enter.src="./styles/images/room07/enter.png";
    if(r7Password.value!=="3691") return alert("密碼錯誤");
    alert("密碼正確!");
    room07.style.display = "none";
    room07pass.style.display = "block";
})
setInterval(()=>{
    r7arrow[0].style.opacity = 0;
    r7arrow[1].style.opacity = 0;
    r7arrow[2].style.opacity = 0;
    r7arrow[3].style.opacity = 0;
    r7arrow[4].style.opacity = 0;
    r7arrow[5].style.opacity = 0;
    r7arrow[6].style.opacity = 0;
    setTimeout(()=>{
        r7arrow[0].style.opacity = 1
    },500)
    setTimeout(()=>{
        r7arrow[1].style.opacity = 1
    },1000)
    setTimeout(()=>{
        r7arrow[2].style.opacity = 1
    },1500)
    setTimeout(()=>{
        r7arrow[3].style.opacity = 1
    },2000)
    setTimeout(()=>{
        r7arrow[4].style.opacity = 1
    },2500)
    setTimeout(()=>{
        r7arrow[5].style.opacity = 1
    },3000)
    setTimeout(()=>{
        r7arrow[6].style.opacity = 1
    },3500)
    setTimeout(()=>{
        r7arrow[0].style.opacity = 0;
        r7arrow[1].style.opacity = 0;
        r7arrow[2].style.opacity = 0;
        r7arrow[3].style.opacity = 0;
        r7arrow[4].style.opacity = 0;
        r7arrow[5].style.opacity = 0;
        r7arrow[6].style.opacity = 0;
    },4000)
},4000)
r7PrevPage.addEventListener("click",clearR7room)
function clearR7room(){
    room07.style.display = "none";
    main.style.display = "block";
    model[0].style.display = "none";
    model07.style.display = "none";
    model1.style.display = "none";
    model2.style.display = "none";
    model3.style.display = "none";
    room07Bg.style.display = "none";
    r7Password.style.display = "none";
    room07People.style.display = "none";
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
    for(var b=0;b<r7botoomBorder.length;b++){
            r7botoomBorder[b].style.display = "none";
        }
    for(let a=0;a<r7arrow.length;a++){
            r7arrow[a].style.display = "none";
        }
    r7people.style.display = "block";
    r7card.style.display = "block";
    r7cardRight.style.display = "block";
    r7cardLeft.style.display = "block"; 
    room07pass.style.display = "none";
    r7Password.value = "";
}
// room7 END
// pass07
var p7box =  document.getElementById('p7box');
var p7control1 = document.getElementById('p7control1');
var p7control2 = document.getElementById('p7control2');
var p7control3 = document.getElementById('p7control3');
var p7control4 = document.getElementById('p7control4');
var p7people = document.getElementById('p7people');
var p7badge = document.getElementById('p7badge');
var p7PrevPage = document.getElementById('p7-prevPage');
p7box.addEventListener("mouseover",()=>{
    p7box.src="./styles/images/pass07/box2.png";
    
})
p7box.addEventListener("mouseout",()=>{
    p7box.src="./styles/images/pass07/box.png";
})
p7control1.addEventListener("click",()=>{
    p7people.style.top = "65px";
    p7people.style.left = "405px";
    p7badge.style.display = "block";
    p7badge.src = "./styles/images/pass07/s1.png";
})
p7control2.addEventListener("click",()=>{
    p7people.style.top = "280px";
    p7people.style.left = "620px";
    p7badge.style.display = "block";
    for(let p=0;p<passBadge07.length;p++){
        passBadge07[p].src ="./styles/images/pass07/s2.png";
    }
    
})
p7control3.addEventListener("click",()=>{
    p7people.style.top = "65px";
    p7people.style.left = "814px";
    p7badge.style.display = "block";
    for(let p=0;p<passBadge07.length;p++){
        passBadge07[p].src ="./styles/images/pass07/s3.png";
    }

})
p7control4.addEventListener("click",()=>{
    p7people.style.top = "280px";
    p7people.style.left = "1048px";
    p7badge.style.display = "block";
    for(let p=0;p<passBadge07.length;p++){
        passBadge07[p].src ="./styles/images/pass07/s4.png";
    }

})
p7PrevPage.addEventListener("click",clearR7room);
 
// pass07 END
// t.innerHTML = "times:"+times;
bg1people.addEventListener("click",()=>{
    model[0].style.display = "flex";
    roomNumber.innerHTML = "_07";
    setTimeout(()=>{
        model1.style.display = "flex";
    },100)
    setTimeout(()=>{
        model2.style.display = "flex";
    },200)
    setTimeout(()=>{
        model3.style.display = "flex";
    },300)
    setTimeout(()=>{
        model07.style.display = "flex";
    },450)
})
bg2people.addEventListener("click",()=>{
    model[0].style.display = "flex";
    roomNumber.innerHTML = "_02";
    setTimeout(()=>{
        model1.style.display = "flex";
    },100)
    setTimeout(()=>{
        model2.style.display = "flex";
    },200)
    setTimeout(()=>{
        model3.style.display = "flex";
    },300)
    setTimeout(()=>{
        model02.style.display = "flex";
    },450)
})
bg4people.addEventListener("click",()=>{
    model[0].style.display = "flex";
    roomNumber.innerHTML = "_06";
    setTimeout(()=>{
        model1.style.display = "flex";
    },100)
    setTimeout(()=>{
        model2.style.display = "flex";
    },200)
    setTimeout(()=>{
        model3.style.display = "flex";
    },300)
    setTimeout(()=>{
        model06.style.display = "flex";
    },450)
})
no[1].addEventListener("click",()=>{
    model[0].style.display = "none";
    model1.style.display = "none";
    model2.style.display = "none";
    model3.style.display = "none";
    model02.style.display = "none";
})
no[5].addEventListener("click",()=>{
    model[0].style.display = "none";
    model1.style.display = "none";
    model2.style.display = "none";
    model3.style.display = "none";
    model06.style.display = "none";
})
no[6].addEventListener("click",()=>{
    model[0].style.display = "none";
    model1.style.display = "none";
    model2.style.display = "none";
    model3.style.display = "none";
    model07.style.display = "none";
})


down.addEventListener("click",()=>{
    if(eyeNum<7){
        eyeNum +=1;
        eye.src = "./styles/images/share/eye"+eyeNum+".png";
    }
    if(times>-6){
        times-=1;
    }
    // t.innerHTML = "times:"+times;
    if(times===-1){
        //bg1
        bg1.style.transform = "rotate(-20deg) translateY(-200%)";
        bg1.style.transition = "1s";
        bg1.style.opacity = "0";
        //bg2
        bg2.style.transform = "rotate(0) translateY(0%)";
        bg2.style.transition = "1s";
        bg2.style.opacity = "1";

    }
    if(times===-2){
        //bg2
        bg2.style.transform = "rotate(-20deg) translateY(-200%)";
        bg2.style.transition = "1s";
        bg2.style.opacity = "0";
        //bg3
        bg3.style.transform = "rotate(0) translateY(0%)";
        bg3.style.transition = "1s";
        bg3.style.opacity = "1";

    }
    if(times===-3){
        //bg3
        bg3.style.transform = "rotate(-20deg) translateY(-200%)";
        bg3.style.transition = "1s";
        bg3.style.opacity = "0";
        //bg4
        bg4.style.transform = "rotate(0) translateY(0%)";
        bg4.style.transition = "1s";
        bg4.style.opacity = "1";

    }
    if(times===-4){
        //bg4
        bg4.style.transform = "rotate(-20deg) translateY(-200%)";
        bg4.style.transition = "1s";
        bg4.style.opacity = "0";
        //bg5
        bg5.style.transform = "rotate(0) translateY(0%)";
        bg5.style.transition = "1s";
        bg5.style.opacity = "1";

    }
    if(times===-5){
        //bg5
        bg5.style.transform = "rotate(-20deg) translateY(-200%)";
        bg5.style.transition = "1s";
        bg5.style.opacity = "0";
        //bg6
        bg6.style.transform = "rotate(0) translateY(0%)";
        bg6.style.transition = "1s";
        bg6.style.opacity = "1";

    }
    if(times===-6){
        //bg6
        bg6.style.transform = "rotate(-20deg) translateY(-200%)";
        bg6.style.transition = "1s";
        bg6.style.opacity = "0";
        //bg7
        bg7.style.transform = "rotate(0) translateY(0%)";
        bg7.style.transition = "1s";
        bg7.style.opacity = "1";

    }
    
});

up.addEventListener("click",()=>{
    if(eyeNum>1){
        eyeNum -=1;
        eye.src = "./styles/images/share/eye"+eyeNum+".png";
    }
    if(times<0){
         times+=1;
    }
   
    // t.innerHTML = "times:"+times;
    if(times===0){
        //bg1
        bg1.style.transform = "rotate(0deg) translateY(0%)";
        bg1.style.transition = "1s";
        bg1.style.opacity = "1";
        //bg2
        bg2.style.transform = "rotate(20deg) translateY(200%)";
        bg2.style.transition = "1s";
        bg2.style.opacity = "0";
    }
    if(times===-1){
        //bg2
        bg2.style.transform = "rotate(0deg) translateY(0%)";
        bg2.style.transition = "1s";
        bg2.style.opacity = "1";
        //bg3
        bg3.style.transform = "rotate(20deg) translateY(200%)";
        bg3.style.transition = "1s";
        bg3.style.opacity = "0";
    }
    if(times===-2){
        //bg3
        bg3.style.transform = "rotate(0deg) translateY(0%)";
        bg3.style.transition = "1s";
        bg3.style.opacity = "1";
        //bg4
        bg4.style.transform = "rotate(20deg) translateY(200%)";
        bg4.style.transition = "1s";
        bg4.style.opacity = "0";
    }
    if(times===-3){
        //bg4
        bg4.style.transform = "rotate(0deg) translateY(0%)";
        bg4.style.transition = "1s";
        bg4.style.opacity = "1";
        //bg5
        bg5.style.transform = "rotate(20deg) translateY(200%)";
        bg5.style.transition = "1s";
        bg5.style.opacity = "0";
    }
    if(times===-4){
        //bg5
        bg5.style.transform = "rotate(0deg) translateY(0%)";
        bg5.style.transition = "1s";
        bg5.style.opacity = "1";
        //bg6
        bg6.style.transform = "rotate(20deg) translateY(200%)";
        bg6.style.transition = "1s";
        bg6.style.opacity = "0";
    }
    if(times===-5){
        //bg6
        bg6.style.transform = "rotate(0deg) translateY(0%)";
        bg6.style.transition = "1s";
        bg6.style.opacity = "1";
        //bg7
        bg7.style.transform = "rotate(20deg) translateY(200%)";
        bg7.style.transition = "1s";
        bg7.style.opacity = "0";
    }
});

    
    