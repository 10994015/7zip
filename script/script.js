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


// room01
var room01 = document.getElementById('room01');
var room01Bg = document.getElementById('room01Bg');
var room01Text = document.getElementById('room01Text');
var r1people = document.getElementById('r1-people');
var r1card = document.getElementById('r1-card');
var r1cardRight = document.getElementById('r1-card-right');
var r1cardLeft = document.getElementById('r1-card-left');
var r1PrevPage = document.getElementById("r1-prevPage");
var r1Enter = document.getElementById("r1Enter");
var room01People = document.getElementById('room01People');
var r1Password = document.getElementById('r1Password');
var r1botoomBorder = document.getElementsByClassName('r1botoomBorder');
var r1arrow = document.getElementsByClassName('r1arrow');

var r1authority = document.getElementById('r1authority');
var r1ansBox = document.getElementById('r1ansBox');
var r1ans = document.getElementById('r1ans');
var r1purelove = document.getElementById('r1purelove');
var r1house  = document.getElementById('r1house');
var r1hand = document.getElementById("r1hand");
var handbox = document.getElementById('handbox');
var r1door = document.getElementById('r1door');
var r1snake = document.getElementById('r1snake');
var r1softwareBox  = document.getElementById('r1softwareBox');
var r1panBox = document.getElementById('r1panBox');
var r1Syrinx = document.getElementById('r1Syrinx');
var r1flamingo = document.getElementById('r1flamingo');
var r1peoplehand = document.getElementById('r1peoplehand');
var r1shootBox = document.getElementById('r1shootBox');
var r1folder1 = document.getElementById('r1folder1');
var r1folder2 = document.getElementById('r1folder2');
var r1folder3 = document.getElementById('r1folder3');
var r1folderBox = document.getElementById('r1folderBox');
var r1thing1 = document.getElementById('r1thing1');
var r1thing2 = document.getElementById('r1thing2');
var r1thingBox = document.getElementById('r1thingBox');
var r1note1 = document.getElementById('r1note1');
var r1note2 = document.getElementById('r1note2');
var r1note3 = document.getElementById('r1note3');
var r1typeBox = document.getElementById('r1typeBox');
var r1typeText = document.getElementById('r1typeText');
var r1flash  = document.getElementById('r1flash');
var r1cloud = document.getElementById('r1cloud');
yes[0].addEventListener("click",()=>{
    main.style.display = "none";
    room01.style.display = "block";
    r1people.style.width = "213px";
    r1people.style.top = "133px";
    r1people.style.left = "313px";
    setTimeout(()=>{
        room01Bg.style.opacity = "1";
        r1people.style.display = "none";
        room01Text.style.display = "block";
        r1Enter.style.display = "block";
        r1PrevPage.style.display = "block";
        r1Password.style.display = "block";

        r1authority.style.display = "block";
        r1ansBox.style.display = "block";
        r1ans.style.display = "block";
        r1purelove.style.display = "block";
        r1house.style.display = "block";
        handbox.style.display = "block";
        r1snake.style.display = "block";
        r1panBox.style.display = "block";
        r1flamingo.style.display = "block";
        r1peoplehand.style.display = "block";
        r1shootBox.style.display = "block";
        r1folderBox.style.display = "block";
        r1thing1.style.display = "block";
        r1thing2.style.display = "block";
        r1thingBox.style.display = "block";
        r1typeBox.style.display = "block";
        r1flash.style.display = "block";
        r1cloud.style.display = "block";
        for(let b=0;b<r1botoomBorder.length;b++){
            r1botoomBorder[b].style.display = "block";
        }
        for(let a=0;a<r1arrow.length;a++){
            r1arrow[a].style.display = "block";
        }
    },1000)

    r1authority.addEventListener("mouseover",()=>{
        r1authority.src = "./styles/images/room01/authority2.png";
    })
    r1authority.addEventListener("mouseout",()=>{
        r1authority.src = "./styles/images/room01/authority.png";
    })
    r1ansBox.addEventListener("mouseover",()=>{
        r1ans.src = "./styles/images/room01/ans1.png";
        r1ans.style.width = "75px";
    })
    r1ansBox.addEventListener("mouseout",()=>{
        r1ans.src = "./styles/images/room01/ans.png";
        r1ans.style.width = "80px";
    })
    r1purelove.addEventListener("mouseover",()=>{
        r1purelove.src = "./styles/images/room01/purelove2.png";
    })
    r1purelove.addEventListener("mouseout",()=>{
        r1purelove.src = "./styles/images/room01/purelove.png";
    })
    r1house.addEventListener("mouseover",()=>{
        room01Text.style.opacity = "1";
        room01Text.innerHTML = "Ｎ號房：又稱「博士房」，指2018下半年至2020/3月間發生在南韓的性剝削案件";
        r1door.style.display = "block";
        setTimeout(()=>{
            r1hand.style.display = "block";

        },500)
    })
    r1house.addEventListener("mouseout",()=>{
        room01Text.style.opacity = "0";
        room01Text.innerHTML = "";
        r1door.style.display = "none";
        r1hand.style.display = "none";
    })
   
    r1snake.addEventListener("mouseover",()=>{
        room01Text.style.opacity = "1";
        room01Text.innerHTML = "蛇：在伊甸園為魔鬼的化身，誘惑夏娃偷嚐禁果";
    })
    r1snake.addEventListener("mouseout",()=>{
        room01Text.style.opacity = "0";
        room01Text.innerHTML = "";
    })
    r1softwareBox.addEventListener("mouseover",()=>{
        room01Text.style.opacity = "1";
        room01Text.innerHTML = "交友軟體：現代人常會利用交友軟體尋找戀愛對象或一夜情對象";
        r1flash.style.animation = "r1flash 1s linear infinite";
    })
    r1softwareBox.addEventListener("mouseout",()=>{
        room01Text.style.opacity = "0";
        room01Text.innerHTML = "";
        r1flash.style.animation = "none";
    })
    r1panBox.addEventListener("mouseover",()=>{
        room01Text.style.opacity = "1";
        room01Text.innerHTML = "潘恩(Pan)：潘恩生性好色，經常藏匿在樹叢之中等待美女經過，然後上前求愛";
        r1note1.style.display = "block";
        setTimeout(()=>{
            r1note2.style.display = "block";
        },500)
        setTimeout(()=>{
            r1note3.style.display = "block";
        },1000)
    })
    r1panBox.addEventListener("mouseout",()=>{
        room01Text.style.opacity = "0";
        room01Text.innerHTML = "";
        r1note1.style.display = "none";
        r1note2.style.display = "none";
        r1note3.style.display = "none";
    })
    r1Syrinx.addEventListener("mouseover",()=>{
        room01Text.style.opacity = "1";
        room01Text.innerHTML = "希林克斯(Syrinx)：古希臘神話的女性人物，被潘恩追求。後讓河神將自己變成蘆葦";
        r1cloud.style.animation = "cloud 2s infinite linear";
    })
    r1Syrinx.addEventListener("mouseout",()=>{
        room01Text.style.opacity = "0";
        room01Text.innerHTML = "";
        r1cloud.style.animation = "none";
    })
    r1flamingo.addEventListener("mouseover",()=>{
        room01Text.style.opacity = "1";
        room01Text.innerHTML = "紅鶴：象徵忠貞、矢志不渝的愛情";
    })
    r1peoplehand.addEventListener("mouseover",()=>{
        room01Text.style.opacity = "1";
        room01Text.innerHTML = "紅鶴：象徵忠貞、矢志不渝的愛情";
    })
    r1flamingo.addEventListener("mouseout",()=>{
        room01Text.style.opacity = "0";
        room01Text.innerHTML = "";
    })
    r1peoplehand.addEventListener("mouseout",()=>{
        room01Text.style.opacity = "0";
        room01Text.innerHTML = "";
    })
    r1shootBox.addEventListener("mouseover",()=>{
        room01Text.style.opacity = "1";
        room01Text.innerHTML = "攝影機：暗指拍攝性愛影片的行為";
    })
    r1shootBox.addEventListener("mouseout",()=>{
        room01Text.style.opacity = "0";
        room01Text.innerHTML = "";
    })
    r1folderBox.addEventListener("mouseover",()=>{
        r1folder1.style.display = "block";
        setTimeout(()=>{
            r1folder2.style.display = "block";
        },500)
        setTimeout(()=>{
            r1folder3.style.display = "block";
        },1000)
    })
    r1folderBox.addEventListener("mouseout",()=>{
        r1folder1.style.display = "none";
        r1folder2.style.display = "none";
        r1folder3.style.display = "none";
     
    })
    r1thingBox.addEventListener("mouseover",()=>{
        r1thing1.style.animation = "thing .3s linear infinite";
        r1thing2.style.animation = "thing .3s linear infinite";
    })
    r1thingBox.addEventListener("mouseout",()=>{
        r1thing1.style.animation = "none";
        r1thing2.style.animation = "none";
    })
    r1typeBox.addEventListener("mouseover",()=>{
        r1typeText.style.display = "block";
    })
    r1typeBox.addEventListener("mouseout",()=>{
        r1typeText.style.display = "none";
    })
    r1Enter.addEventListener("click",()=>{
        if(r1Password.value!="1204") return alert("密碼錯誤");
        alert("密碼正確!");
        room01.style.display = "none";
        room01pass.style.display = "block";
    })
    r1Password.addEventListener("keydown",(e)=>{
        if(e.keyCode !== 13) return; 
        r1Enter.src="./styles/images/room01/enter2.png";
    })
    r1Password.addEventListener("keyup",(e)=>{
        if(e.keyCode !== 13) return; 
        r1Enter.src="./styles/images/room01/enter.png";
        if(r1Password.value!=="1204") return alert("密碼錯誤");
        alert("密碼正確!");
        room01.style.display = "none";
        room01pass.style.display = "block";
        
    })
    setInterval(()=>{
        r1arrow[0].style.opacity = 0;
        r1arrow[1].style.opacity = 0;
        r1arrow[2].style.opacity = 0;
        r1arrow[3].style.opacity = 0;
        r1arrow[4].style.opacity = 0;
        r1arrow[5].style.opacity = 0;
        r1arrow[6].style.opacity = 0;
        setTimeout(()=>{
            r1arrow[0].style.opacity = 1
        },500)
        setTimeout(()=>{
            r1arrow[1].style.opacity = 1
        },1000)
        setTimeout(()=>{
            r1arrow[2].style.opacity = 1
        },1500)
        setTimeout(()=>{
            r1arrow[3].style.opacity = 1
        },2000)
        setTimeout(()=>{
            r1arrow[4].style.opacity = 1
        },2500)
        setTimeout(()=>{
            r1arrow[5].style.opacity = 1
        },3000)
        setTimeout(()=>{
            r1arrow[6].style.opacity = 1
        },3500)
        setTimeout(()=>{
            r1arrow[0].style.opacity = 0;
            r1arrow[1].style.opacity = 0;
            r1arrow[2].style.opacity = 0;
            r1arrow[3].style.opacity = 0;
            r1arrow[4].style.opacity = 0;
            r1arrow[5].style.opacity = 0;
            r1arrow[6].style.opacity = 0;
        },4000)
    },4000)

    r1PrevPage.addEventListener("click",()=>{
        room01.style.display = "none";
        main.style.display = "block";
        model[0].style.display = "none";
        model01.style.display = "none";
        model1.style.display = "none";
        model2.style.display = "none";
        model3.style.display = "none";
        room01Bg.style.opacity = "0";
        
        room01Text.style.display = "none";
        r1Enter.style.display = "none";
        r1Password.style.display = "none";
        r1Password.value="";
        r1PrevPage.style.display = "none";

        r1authority.style.display = "none";
        r1ansBox.style.display = "none";
        r1ans.style.display = "none";
        r1purelove.style.display = "none";
        r1house.style.display = "none";
        handbox.style.display = "none";
        r1door.style.display = "none";
        r1snake.style.display = "none";
        r1panBox.style.display = "none";
        r1flamingo.style.display = "none";
        r1peoplehand.style.display = "none";
        r1shootBox.style.display = "none";
        r1folderBox.style.display = "none";
        r1thing1.style.display = "none";
        r1thing2.style.display = "none";
        r1thingBox.style.display = "none";
        r1typeBox.style.display = "none";
        r1flash.style.display = "none";
        r1cloud.style.display = "none";
        
        r1people.style.display = "block";
        r1card.style.display = "block";
        r1cardRight.style.display = "block";
        r1cardLeft.style.display = "block"; 
        for(let b=0;b<r1botoomBorder.length;b++){
                r1botoomBorder[b].style.display = "none";
            }
        for(let a=0;a<r1arrow.length;a++){
            r1arrow[a].style.display = "none";
        }
        
    })
})
// room01 END

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

var r2ansBox = document.getElementById('r2ansBox');
var r2ans = document.getElementById('r2ans');
var r2chick = document.getElementById('r2chick');
var r2chickBox = document.getElementById('r2chickBox');
var r2magnifier = document.getElementById('r2magnifier');
var r2finger = document.getElementById('r2finger');
var r2athena = document.getElementById('r2athena');
var r2owl = document.getElementById('r2owl');
var r2pole = document.getElementById('r2pole');
var r2vase = document.getElementById('r2vase');
var r2pig = document.getElementById('r2pig');
var r2itTouch = document.getElementById('r2itTouch');
var r2itbox = document.getElementById('r2itbox');
var r2it = document.getElementById('r2it');
var r2buttBox = document.getElementById('r2buttBox');
var r2love = document.getElementById('r2love');
var r2stairBox = document.getElementById('r2stairBox');
var r2flash = document.getElementById('r2flash');
var r2eye = document.getElementById('r2eye');
var r2eyeBox = document.getElementById('r2eyeBox');
var r2play = document.getElementById('r2play');
var r2bullet = document.getElementById('r2bullet');
var r2playBox = document.getElementById('r2playBox');
var r2arrow = document.getElementsByClassName('r2arrow');
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

        r2ansBox.style.display = "block";
        r2chickBox.style.display = "block";
        r2chick.style.display = "block";
        r2magnifier.style.display = "block";
        r2finger.style.display = "block";
        r2athena.style.display = "block";
        r2owl.style.display = "block";
        r2pole.style.display = "block";
        r2vase.style.display = "block";
        r2pig.style.display = "block";
        r2it.style.display = "block";
        r2itTouch.style.display = "block";
        r2itbox.style.display = "block";
        r2buttBox.style.display = "block";
        r2love.style.display = "block";
        r2stairBox.style.display = "block";
        r2flash.style.display = "block";
        r2eye.style.display = "block";
        r2eyeBox.style.display = "block";
        r2play.style.display = "block";
        r2bullet.style.display = "block";
        r2playBox.style.display  = "block";
        for(let b=0;b<r2botoomBorder.length;b++){
            r2botoomBorder[b].style.display = "block";
        }
        for(let a=0;a<r2arrow.length;a++){
            r2arrow[a].style.display = "block";
        }
    },1000)
    
    r2chickBox.addEventListener("mouseover",()=>{
        r2chick.src = "./styles/images/room02/chickdie.png"
        r2chick.style.top = "47%";
        r2chick.style.left = "77%";
        r2chick.style.width = "90px";
        room02Text.style.opacity = "1";
        room02Text.innerHTML = "cooking mama：有些兒童玩的遊戲中可能含有不適內容";
    })
    r2chickBox.addEventListener("mouseout",()=>{
        r2chick.src = "./styles/images/room02/chick.png"
        r2chick.style.top = "46%";
        r2chick.style.left = "78.5%";
        r2chick.style.width = "60px";
        room02Text.style.opacity = "0";
        room02Text.innerHTML = "";
    })
    r2magnifier.addEventListener("mouseover",()=>{
        r2magnifier.src = "./styles/images/room02/magnifieropen.png";
    })
    r2magnifier.addEventListener("mouseout",()=>{
        r2magnifier.src = "./styles/images/room02/magnifier.png";
    })
    r2finger.addEventListener("mouseover",()=>{
        r2finger.src = "./styles/images/room02/fingercut.png";
        r2finger.style.top = "50%";
        r2finger.style.width = "100px";
    })
    r2finger.addEventListener("mouseout",()=>{
        r2finger.src = "./styles/images/room02/finger.png";
        r2finger.style.top = "51%";
        r2finger.style.width = "120px";
    })
    r2athena.addEventListener("mouseover",()=>{
        room02Text.style.opacity = "1";
        room02Text.innerHTML = "雅典娜：希臘神話中的智慧女神與戰爭女神";
    })
    r2athena.addEventListener("mouseout",()=>{
        room02Text.style.opacity = "0";
        room02Text.innerHTML = "";
    })
    r2vase.addEventListener("mouseover",()=>{
        room02Text.style.opacity = "1";
        room02Text.innerHTML = "金鳳花代表了冷靜及智慧";
    })
    r2vase.addEventListener("mouseout",()=>{
        room02Text.style.opacity = "0";
        room02Text.innerHTML = "";
    })
    r2pig.addEventListener("mouseover",()=>{
        r2pig.src = "./styles/images/room02/pig-knife.png";
        r2pig.style.top = "42.3%";
        r2pig.style.left = "21.575%";
        r2pig.style.width = "190px";
        room02Text.style.opacity = "1";
        room02Text.innerHTML = "艾莎門：意指將暴力、色情等不適合兒童觀看之內容包裝於卡通人物之下";
    })
    r2pig.addEventListener("mouseout",()=>{
        r2pig.src = "./styles/images/room02/pig-flower.png";
        r2pig.style.top = "48.9%";
        r2pig.style.left = "23%";
        r2pig.style.width = "170px";
        room02Text.style.opacity = "0";
        room02Text.innerHTML = "";
    })
    r2owl.addEventListener("mouseover",()=>{
        room02Text.style.opacity = "1";
        room02Text.innerHTML = "貓頭鷹：不論在西方或東方都象徵著智慧";
    })
    r2owl.addEventListener("mouseout",()=>{
        room02Text.style.opacity = "0";
        room02Text.innerHTML = "";
    })
    r2itTouch.addEventListener("mouseover",()=>{
        r2it.style.right = "-1px";
    })
    r2itTouch.addEventListener("mouseout",()=>{
        r2it.style.right = "-50px";
    })
    r2buttBox.addEventListener("mouseover",()=>{
        r2love.style.animation = "love 1s infinite linear";
    })
    r2buttBox.addEventListener("mouseout",()=>{
        r2love.style.animation = "none";
    })
    r2playBox.addEventListener("mouseover",()=>{
        r2play.src = "./styles/images/room02/pause.png";
        r2bullet.style.opacity = "1";
        r2bullet.style.animation = "bullet 1s infinite linear";
    })
    r2playBox.addEventListener("mouseout",()=>{
        r2play.src = "./styles/images/room02/play.png";
        r2bullet.style.opacity = "0";
        r2bullet.style.animation = "none";
    })
    r2Enter.addEventListener("click",()=>{
        if(r2Password.value!="0923") return alert("密碼錯誤");
        alert("密碼正確!");
        room02.style.display = "none";
        room02pass.style.display = "block";
    })
    r2Password.addEventListener("keydown",(e)=>{
        if(e.keyCode !== 13) return; 
        r2Enter.src="./styles/images/room02/enter2.png";
    })
    r2Password.addEventListener("keyup",(e)=>{
        if(e.keyCode !== 13) return; 
        r2Enter.src="./styles/images/room02/enter.png";
        if(r2Password.value!=="0923") return alert("密碼錯誤");
        alert("密碼正確!");
        room02.style.display = "none";
        room02pass.style.display = "block";
        
    })
    setInterval(()=>{
        r2arrow[0].style.opacity = 0;
        r2arrow[1].style.opacity = 0;
        r2arrow[2].style.opacity = 0;
        r2arrow[3].style.opacity = 0;
        r2arrow[4].style.opacity = 0;
        r2arrow[5].style.opacity = 0;
        r2arrow[6].style.opacity = 0;
        setTimeout(()=>{
            r2arrow[0].style.opacity = 1
        },500)
        setTimeout(()=>{
            r2arrow[1].style.opacity = 1
        },1000)
        setTimeout(()=>{
            r2arrow[2].style.opacity = 1
        },1500)
        setTimeout(()=>{
            r2arrow[3].style.opacity = 1
        },2000)
        setTimeout(()=>{
            r2arrow[4].style.opacity = 1
        },2500)
        setTimeout(()=>{
            r2arrow[5].style.opacity = 1
        },3000)
        setTimeout(()=>{
            r2arrow[6].style.opacity = 1
        },3500)
        setTimeout(()=>{
            r2arrow[0].style.opacity = 0;
            r2arrow[1].style.opacity = 0;
            r2arrow[2].style.opacity = 0;
            r2arrow[3].style.opacity = 0;
            r2arrow[4].style.opacity = 0;
            r2arrow[5].style.opacity = 0;
            r2arrow[6].style.opacity = 0;
        },4000)
    },4000)
    r2PrevPage.addEventListener("click",()=>{
        room02.style.display = "none";
        main.style.display = "block";
        model[0].style.display = "none";
        model02.style.display = "none";
        model1.style.display = "none";
        model2.style.display = "none";
        model3.style.display = "none";
        room02Bg.style.opacity = "0";

        room02People.style.display = "none";
        
        room02Text.style.display = "none";
        r2Enter.style.display = "none";
        r2Password.style.display = "none";
        r2Password.value="";
        r2PrevPage.style.display = "none";
        
        r2ansBox.style.display = "none";
        r2chickBox.style.display = "none";
        r2chick.style.display = "none";
        r2magnifier.style.display = "none";
        r2finger.style.display = "none";
        r2athena.style.display = "none";
        r2owl.style.display = "none";
        r2pole.style.display = "none";
        r2vase.style.display = "none";
        r2pig.style.display = "none";
        r2it.style.display = "none";
        r2itTouch.style.display = "none";
        r2itbox.style.display = "none";
        r2buttBox.style.display = "none";
        r2love.style.display = "none";
        r2stairBox.style.display = "none";
        r2flash.style.display = "none";
        r2eye.style.display = "none";
        r2eyeBox.style.display = "none";
        r2play.style.display = "none";
        r2bullet.style.display = "none";
        r2playBox.style.display  = "none";
        for(let b=0;b<r2botoomBorder.length;b++){
                r2botoomBorder[b].style.display = "none";
            }
        for(let a=0;a<r2arrow.length;a++){
            r2arrow[a].style.display = "none";
        }
        r2people.style.display = "block";
        r2card.style.display = "block";
        r2cardRight.style.display = "block";
        r2cardLeft.style.display = "block"; 
    })
})

// room02 END

// room03 
var room03 = document.getElementById('room03');
var room03Bg = document.getElementById('room03Bg');
var room03Text = document.getElementById('room03Text');
var r3people = document.getElementById('r3-people');
var r3card = document.getElementById('r3-card');
var r3cardRight = document.getElementById('r3-card-right');
var r3cardLeft = document.getElementById('r3-card-left');
var r3PrevPage = document.getElementById("r3-prevPage");
var r3Enter = document.getElementById("r3Enter");
var room03People = document.getElementById('room03People');
var r3Password = document.getElementById('r3Password');
var r3botoomBorder = document.getElementsByClassName('r3botoomBorder');
var r3arrow = document.getElementsByClassName("r3arrow");

yes[2].addEventListener("click",()=>{
    main.style.display = "none";
    room03.style.display = "block";
    setTimeout(()=>{
        room03Bg.style.opacity = "1";
        room03People.style.display = "block";
        r3people.style.display = "none";
        room03Text.style.display = "block";
        r3Enter.style.display = "block";
        r3PrevPage.style.display = "block";
        r3Password.style.display = "block";
        for(let b=0;b<r3botoomBorder.length;b++){
            r3botoomBorder[b].style.display = "block";
        }
        for(let a=0;a<r3arrow.length;a++){
            r3arrow[a].style.display = "block";
        }
    },1000)
})
// room03 END

// room04 
var room04 = document.getElementById('room04');
var room04Bg = document.getElementById('room04Bg');
var room04Text = document.getElementById('room04Text');
var r4people = document.getElementById('r4-people');
var r4card = document.getElementById('r4-card');
var r4cardRight = document.getElementById('r4-card-right');
var r4cardLeft = document.getElementById('r4-card-left');
var r4PrevPage = document.getElementById("r4-prevPage");
var r4Enter = document.getElementById("r4Enter");
var room04People = document.getElementById('room04People');
var r4Password = document.getElementById('r4Password');
var r4botoomBorder = document.getElementsByClassName('r4botoomBorder');
var r4arrow = document.getElementsByClassName("r4arrow");

var r4productpage = document.getElementById('r4productpage');
var r4productBox1 = document.getElementById('r4productBox1');
var r4productBox2 = document.getElementById('r4productBox2');
var r4productBox3 = document.getElementById('r4productBox3');
var r4productBox4 = document.getElementById('r4productBox4');
var r4liveTextBox = document.getElementById('r4liveTextBox');
var r4liveBox = document.getElementById('r4liveBox');
var r4shopaholicBox = document.getElementById('r4shopaholicBox');
var r4pig = document.getElementById('r4pig');
var r4progress = document.getElementById('r4progress');
var r4double11 = document.getElementById('r4double11');
var r4date11 = document.getElementById('r4date11');
var r4airplane = document.getElementById('r4airplane');
var r4parachute1 = document.getElementById('r4parachute1');
var r4parachute2 = document.getElementById('r4parachute2');
var r4parachute3 = document.getElementById('r4parachute3');
var r4shopBox = document.getElementById('r4shopBox');
var r4taobao = document.getElementById('r4taobao');
var r4ship = document.getElementById('r4ship');
var r4momo = document.getElementById('r4momo');
var r4circle = document.getElementById('r4circle');
var r4gold1 = document.getElementById('r4gold1');
var r4gold2 = document.getElementById('r4gold2');
var r4gold3 = document.getElementById('r4gold3');
var r4gold4 = document.getElementById('r4gold4');
var r4gold5 = document.getElementById('r4gold5');
yes[3].addEventListener("click",()=>{
    main.style.display = "none";
    room04.style.display = "block";
    setTimeout(()=>{
        room04Bg.style.opacity = "1";
        room04People.style.display = "block";
        r4people.style.display = "none";
        room04Text.style.display = "block";
        r4Enter.style.display = "block";
        r4PrevPage.style.display = "block";
        r4Password.style.display = "block";

        r4productBox1.style.display = "block";
        r4productBox2.style.display = "block";
        r4productBox3.style.display = "block";
        r4productBox4.style.display = "block";
        r4liveBox.style.display = "block";
        r4shopaholicBox.style.display = "block";
        r4pig.style.display = "block";
        r4progress.style.display = "block";
        r4double11.style.display = "block";
        r4date11.style.display = "block";
        r4airplane.style.display = "block";
        r4shopBox.style.display = "block";
        
        for(let b=0;b<r4botoomBorder.length;b++){
            r4botoomBorder[b].style.display = "block";
        }
        for(let a=0;a<r4arrow.length;a++){
            r4arrow[a].style.display = "block";
        }
    },1000)
    room04People.addEventListener("mouseover",()=>{
        r4gold1.style.display = "block";
        setTimeout(()=>{
            r4gold2.style.display = "block";
        },500)
        setTimeout(()=>{
            r4gold3.style.display = "block";
        },1000)
        setTimeout(()=>{
            r4gold4.style.display = "block";
        },1500)
        setTimeout(()=>{
            r4gold5.style.display = "block";
        },1500)
    })
    room04People.addEventListener("mouseout",()=>{
        r4gold1.style.display = "none";
        r4gold2.style.display = "none";
        r4gold3.style.display = "none";
        r4gold4.style.display = "none";
        r4gold5.style.display = "none";
    })
    r4productBox1.addEventListener("mouseover",()=>{
        r4productpage.src = "./styles/images/room04/productpage1.png";
        r4productpage.style.display = "block";
    })
    r4productBox1.addEventListener("mouseout",()=>{
        r4productpage.src = "";
        r4productpage.style.display = "none";
    })
    r4productBox2.addEventListener("mouseover",()=>{
        r4productpage.src = "./styles/images/room04/productpage2.png";
        r4productpage.style.display = "block";
    })
    r4productBox2.addEventListener("mouseout",()=>{
        r4productpage.src = "";
        r4productpage.style.display = "none";
    })
    r4productBox3.addEventListener("mouseover",()=>{
        r4productpage.src = "./styles/images/room04/productpage3.png";
        r4productpage.style.display = "block";
    })
    r4productBox3.addEventListener("mouseout",()=>{
        r4productpage.src = "";
        r4productpage.style.display = "none";
    })
    r4productBox4.addEventListener("mouseover",()=>{
        r4productpage.src = "./styles/images/room04/productpage4.png";
        r4productpage.style.display = "block";
    })
    r4productBox4.addEventListener("mouseout",()=>{
        r4productpage.src = "";
        r4productpage.style.display = "none";
    })
    r4liveBox.addEventListener("mouseover",()=>{
        r4liveTextBox.style.display = "block";
    })
    r4liveBox.addEventListener("mouseout",()=>{
        r4liveTextBox.style.display = "none";
    })
    r4pig.addEventListener("mouseover",()=>{
        r4pig.src = "./styles/images/room04/pig2.png";
        r4pig.style.width = "138px";
        room04Text.style.opacity = "1";
        room04Text.innerHTML = "豬公撲滿：民間常見的存錢撲滿";
    })
    r4pig.addEventListener("mouseout",()=>{
        r4pig.src = "./styles/images/room04/pig.png";
        r4pig.style.width = "130px";
        room04Text.style.opacity = "0";
        room04Text.innerHTML = "";
    })
    r4shopaholicBox.addEventListener("mouseover",()=>{
        room04Text.style.opacity = "1";
        room04Text.innerHTML = "購物狂：藉由衝動性購物來排解內心的焦慮";
    })
    r4shopaholicBox.addEventListener("mouseout",()=>{
        room04Text.style.opacity = "0";
        room04Text.innerHTML = "";
    })
    r4progress.addEventListener("mouseover",()=>{
        room04Text.style.opacity = "1";
        room04Text.innerHTML = "出貨進度：買家可以從訂單資訊查看出貨進度";
        r4circle.style.display = "block";
        
        setTimeout(()=>{
            r4circle.style.top = "66.6%";
        },0)
        setTimeout(()=>{
            r4circle.style.top = "63.8%";
        },500)
        setTimeout(()=>{
            r4circle.style.top = "61%";
        },1000)
        setTimeout(()=>{
            r4circle.style.top = "58.2%";
        },1500)
        setTimeout(()=>{
            r4circle.style.top = "55.4%";
        },2000)
        setTimeout(()=>{
            r4circle.style.top = "52.6%";
        },2500)
        
    })
    r4progress.addEventListener("mouseout",()=>{
        room04Text.style.opacity = "0";
        room04Text.innerHTML = "";
        r4circle.style.display = "none";
    })
    r4double11.addEventListener("mouseover",()=>{
        room04Text.style.opacity = "1";
        room04Text.innerHTML = "雙十一：每年11月11日的大型促銷活動，最早起源於中國淘寶，現已演變成全行業一年一度的購物活動，影響全球零售業的消費現象。";
    })
    r4double11.addEventListener("mouseout",()=>{
        room04Text.style.opacity = "0";
        room04Text.innerHTML = "";
    })
    r4airplane.addEventListener("mouseover",()=>{
        room04Text.style.opacity = "1";
        room04Text.innerHTML = "境外購物：因為網路普及，現在境外購物越來越容易，也有許多國外網站在台灣興起，如：淘寶、amazon、shopbop等";
        r4parachute2.style.display = "block";
        setTimeout(()=>{
            r4parachute1.style.display = "block";
        },500)
        setTimeout(()=>{
            r4parachute3.style.display = "block";
        },1000)
    })
    r4airplane.addEventListener("mouseout",()=>{
        room04Text.style.opacity = "0";
        room04Text.innerHTML = "";
        r4parachute1.style.display = "none";
        r4parachute2.style.display = "none";
        r4parachute3.style.display = "none";
    })
    r4shopBox.addEventListener("mouseover",()=>{
        room04Text.style.opacity = "1";
        room04Text.innerHTML = "台灣人愛用購物網站前三名：淘寶、蝦皮、momo";
        r4taobao.style.display = "block";
        setTimeout(()=>{
            r4ship.style.display = "block";
        },500)
        setTimeout(()=>{
            r4momo.style.display = "block";
        },1000)
    })
    r4shopBox.addEventListener("mouseout",()=>{
        room04Text.style.opacity = "0";
        room04Text.innerHTML = "";
        r4taobao.style.display = "none";
        r4ship.style.display = "none";
        r4momo.style.display = "none";
    })
    setInterval(()=>{
        r4arrow[0].style.opacity = 0;
        r4arrow[1].style.opacity = 0;
        r4arrow[2].style.opacity = 0;
        r4arrow[3].style.opacity = 0;
        r4arrow[4].style.opacity = 0;
        r4arrow[5].style.opacity = 0;
        r4arrow[6].style.opacity = 0;
        setTimeout(()=>{
            r4arrow[0].style.opacity = 1
        },500)
        setTimeout(()=>{
            r4arrow[1].style.opacity = 1
        },1000)
        setTimeout(()=>{
            r4arrow[2].style.opacity = 1
        },1500)
        setTimeout(()=>{
            r4arrow[3].style.opacity = 1
        },2000)
        setTimeout(()=>{
            r4arrow[4].style.opacity = 1
        },2500)
        setTimeout(()=>{
            r4arrow[5].style.opacity = 1
        },3000)
        setTimeout(()=>{
            r4arrow[6].style.opacity = 1
        },3500)
        setTimeout(()=>{
            r4arrow[0].style.opacity = 0;
            r4arrow[1].style.opacity = 0;
            r4arrow[2].style.opacity = 0;
            r4arrow[3].style.opacity = 0;
            r4arrow[4].style.opacity = 0;
            r4arrow[5].style.opacity = 0;
            r4arrow[6].style.opacity = 0;
        },4000)
    },4000)

    r4Enter.addEventListener("click",()=>{
        if(r4Password.value!="10350") return alert("密碼錯誤");
        alert("密碼正確!");
        room04.style.display = "none";
        room04pass.style.display = "block";
    })
    r4Password.addEventListener("keydown",(e)=>{
        if(e.keyCode !== 13) return; 
        r4Enter.src="./styles/images/room04/enter2.png";
    })
    r4Password.addEventListener("keyup",(e)=>{
        if(e.keyCode !== 13) return; 
        r4Enter.src="./styles/images/room04/enter.png";
        if(r4Password.value!=="10350") return alert("密碼錯誤");
        alert("密碼正確!");
        room04.style.display = "none";
        room04pass.style.display = "block";
        
    })
    r4PrevPage.addEventListener("click",()=>{
        room04.style.display = "none";
        main.style.display = "block";
        model[0].style.display = "none";
        model04.style.display = "none";
        model1.style.display = "none";
        model2.style.display = "none";
        model3.style.display = "none";
        room04Bg.style.opacity = "0";
        room04People.style.display = "none";
        room04Text.style.display = "none";
        r4Enter.style.display = "none";
        r4Password.style.display = "none";
        r4Password.value="";
        r4PrevPage.style.display = "none";

        r4productBox1.style.display = "none";
        r4productBox2.style.display = "none";
        r4productBox3.style.display = "none";
        r4productBox4.style.display = "none";
        r4liveBox.style.display = "none";
        r4shopaholicBox.style.display = "none";
        r4pig.style.display = "none";
        r4progress.style.display = "none";
        r4double11.style.display = "none";
        r4date11.style.display = "none";
        r4airplane.style.display = "none";
        r4shopBox.style.display = "none";
        
        r4people.style.display = "block";
        r4card.style.display = "block";
        r4cardRight.style.display = "block";
        r4cardLeft.style.display = "block"; 
        for(let b=0;b<r1botoomBorder.length;b++){
                r4botoomBorder[b].style.display = "none";
            }
        for(let a=0;a<r1arrow.length;a++){
            r4arrow[a].style.display = "none";
        }
        
    })
})
// room04 END

// room05 
var room05 = document.getElementById('room05');
var room05Bg = document.getElementById('room05Bg');
var room05Text = document.getElementById('room05Text');
var r5people = document.getElementById('r5-people');
var r5card = document.getElementById('r5-card');
var r5cardRight = document.getElementById('r5-card-right');
var r5cardLeft = document.getElementById('r5-card-left');
var r5PrevPage = document.getElementById("r5-prevPage");
var r5Enter = document.getElementById("r5Enter");
var room05People = document.getElementById('room05People');
var r5Password = document.getElementById('r5Password');
var r5botoomBorder = document.getElementsByClassName('r5botoomBorder');
var r5arrow = document.getElementsByClassName("r5arrow");

yes[4].addEventListener("click",()=>{
    main.style.display = "none";
    room05.style.display = "block";
    setTimeout(()=>{
        room05Bg.style.opacity = "1";
        room05People.style.display = "block";
        r5people.style.display = "none";
        room05Text.style.display = "block";
        r5Enter.style.display = "block";
        r5PrevPage.style.display = "block";
        r5Password.style.display = "block";
        for(let b=0;b<r5botoomBorder.length;b++){
            r5botoomBorder[b].style.display = "block";
        }
        for(let a=0;a<r5arrow.length;a++){
            r5arrow[a].style.display = "block";
        }
    },1000)
})
// room05 END



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
            r6botoomBorder[b].style.display = "none";
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
    
    for(let p=0;p<passBadge07.length;p++){
        passBadge07[p].src ="./styles/images/pass07/s1.png";
    }
    document.body.scrollTop = 1500;
    document.documentElement.scrollTop = 1500;
})
p7control2.addEventListener("click",()=>{
    p7people.style.top = "280px";
    p7people.style.left = "620px";
    p7badge.style.display = "block";
    for(let p=0;p<passBadge07.length;p++){
        passBadge07[p].src ="./styles/images/pass07/s2.png";
    }
    document.body.scrollTop = 1500;
    document.documentElement.scrollTop = 1500;
    
})
p7control3.addEventListener("click",()=>{
    p7people.style.top = "65px";
    p7people.style.left = "814px";
    p7badge.style.display = "block";
    for(let p=0;p<passBadge07.length;p++){
        passBadge07[p].src ="./styles/images/pass07/s3.png";
    }
    document.body.scrollTop = 1500;
    document.documentElement.scrollTop = 1500;

})
p7control4.addEventListener("click",()=>{
    p7people.style.top = "280px";
    p7people.style.left = "1048px";
    p7badge.style.display = "block";
    for(let p=0;p<passBadge07.length;p++){
        passBadge07[p].src ="./styles/images/pass07/s4.png";
    }
    document.body.scrollTop = 1500;
    document.documentElement.scrollTop = 1500;

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
bg3people.addEventListener("click",()=>{
    model[0].style.display = "flex";
    roomNumber.innerHTML = "_01";
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
        model01.style.display = "flex";
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
bg5people.addEventListener("click",()=>{
    model[0].style.display = "flex";
    roomNumber.innerHTML = "_05";
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
        model05.style.display = "flex";
    },450)
})
bg6people.addEventListener("click",()=>{
    model[0].style.display = "flex";
    roomNumber.innerHTML = "_04";
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
        model04.style.display = "flex";
    },450)
})
bg7people.addEventListener("click",()=>{
    model[0].style.display = "flex";
    roomNumber.innerHTML = "_03";
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
        model03.style.display = "flex";
    },450)
})
no[0].addEventListener("click",()=>{
    model[0].style.display = "none";
    model1.style.display = "none";
    model2.style.display = "none";
    model3.style.display = "none";
    model01.style.display = "none";
})
no[1].addEventListener("click",()=>{
    model[0].style.display = "none";
    model1.style.display = "none";
    model2.style.display = "none";
    model3.style.display = "none";
    model02.style.display = "none";
})
no[4].addEventListener("click",()=>{
    model[0].style.display = "none";
    model1.style.display = "none";
    model2.style.display = "none";
    model3.style.display = "none";
    model05.style.display = "none";
})
no[5].addEventListener("click",()=>{
    model[0].style.display = "none";
    model1.style.display = "none";
    model2.style.display = "none";
    model3.style.display = "none";
    model06.style.display = "none";
})
no[3].addEventListener("click",()=>{
    model[0].style.display = "none";
    model1.style.display = "none";
    model2.style.display = "none";
    model3.style.display = "none";
    model04.style.display = "none";
})
no[2].addEventListener("click",()=>{
    model[0].style.display = "none";
    model1.style.display = "none";
    model2.style.display = "none";
    model3.style.display = "none";
    model03.style.display = "none";
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
        bg3.style.transform = "rotate(-20deg) translateY(-200%)";
        bg3.style.transition = "1s";
        bg3.style.opacity = "0";
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
        //bg7
        bg7.style.transform = "rotate(0) translateY(0%)";
        bg7.style.transition = "1s";
        bg7.style.opacity = "1";

    }
    if(times===-3){
        //bg7
        bg7.style.transform = "rotate(-20deg) translateY(-200%)";
        bg7.style.transition = "1s";
        bg7.style.opacity = "0";
        //bg4
        bg6.style.transform = "rotate(0) translateY(0%)";
        bg6.style.transition = "1s";
        bg6.style.opacity = "1";

    }
    if(times===-4){
        //bg6
        bg6.style.transform = "rotate(-20deg) translateY(-200%)";
        bg6.style.transition = "1s";
        bg6.style.opacity = "0";
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
        bg4.style.transform = "rotate(0) translateY(0%)";
        bg4.style.transition = "1s";
        bg4.style.opacity = "1";

    }
    if(times===-6){
        //bg4
        bg4.style.transform = "rotate(-20deg) translateY(-200%)";
        bg4.style.transition = "1s";
        bg4.style.opacity = "0";
        //bg1
        bg1.style.transform = "rotate(0) translateY(0%)";
        bg1.style.transition = "1s";
        bg1.style.opacity = "1";

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
        bg3.style.transform = "rotate(0deg) translateY(0%)";
        bg3.style.transition = "1s";
        bg3.style.opacity = "1";
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
        bg7.style.transform = "rotate(20deg) translateY(200%)";
        bg7.style.transition = "1s";
        bg7.style.opacity = "0";
    }
    if(times===-2){
        //bg7
        bg7.style.transform = "rotate(0deg) translateY(0%)";
        bg7.style.transition = "1s";
        bg7.style.opacity = "1";
        //bg4
        bg6.style.transform = "rotate(20deg) translateY(200%)";
        bg6.style.transition = "1s";
        bg6.style.opacity = "0";
    }
    if(times===-3){
        //bg6
        bg6.style.transform = "rotate(0deg) translateY(0%)";
        bg6.style.transition = "1s";
        bg6.style.opacity = "1";
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
        bg4.style.transform = "rotate(20deg) translateY(200%)";
        bg4.style.transition = "1s";
        bg4.style.opacity = "0";
    }
    if(times===-5){
        //bg4
        bg4.style.transform = "rotate(0deg) translateY(0%)";
        bg4.style.transition = "1s";
        bg4.style.opacity = "1";
        //bg7
        bg1.style.transform = "rotate(20deg) translateY(200%)";
        bg1.style.transition = "1s";
        bg1.style.opacity = "0";
    }
});

    
    