onload = function startAnimation() { 

    // get user speed
    let userSpeed = localStorage.getItem('recent_count');

    // init
    let bugSpeed = 50;
    let developerSpeed = 100;
    let bgSpeed = 10;

    setInterval(function(){
        userSpeed = localStorage.getItem('recent_count');
        console.log(">>>", userSpeed);

        //임시
        userSpeed *= 10;

        bugSpeed = 1 / userSpeed * 1000 // 100~15
        developerSpeed = 1 / userSpeed * 2000 // 200~30
        bgSpeed = 1 / userSpeed * 200 // 20~3
    }, 500);

    var bugFrames = document.getElementById("bug").children;
    var bugFrameCount = bugFrames.length;

    var developerFrames = document.getElementById("developer").children;
    var developerFrameCount = developerFrames.length;

    var bugCnt = 0;
    var developerCnt = 0;
    
    var bg1_left = 0;
    var bg2_left = 600;
    var bg3_left = 1200;
    var bg4_left = 1800;


    backgroundLoop = function() {
        bg1_left-= 6;
        bg2_left-= 6;
        bg3_left-= 6;
        bg4_left-= 6;
        if (bg1_left <= -600) bg1_left = 1800;
        if (bg2_left <= -600) bg2_left = 1800;
        if (bg3_left <= -600) bg3_left = 1800;
        if (bg4_left <= -600) bg4_left = 1800;
        
        document.getElementById('bg1').style.left = bg1_left + "px";
        document.getElementById('bg2').style.left = bg2_left + "px";
        document.getElementById('bg3').style.left = bg3_left + "px";
        document.getElementById('bg4').style.left = bg4_left + "px";

        window.setTimeout(backgroundLoop, bugSpeed);
    }
    bugLoop = function() {
        bugFrames[bugCnt % bugFrameCount].style.display = "none";
        bugFrames[++bugCnt % bugFrameCount].style.display = "block";

        window.setTimeout(bugLoop, bugSpeed);
    }
    developerLoop = function() {
        developerFrames[developerCnt % developerFrameCount].style.display = "none";
        developerFrames[++developerCnt % developerFrameCount].style.display = "block";

        window.setTimeout(developerLoop, developerSpeed);
    }

    bugLoop();
    developerLoop();
    backgroundLoop();
} 