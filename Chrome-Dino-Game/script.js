

let board;
let context;

var bigCacti = [];
var upbirds = [];
var clouds = [];
var downbirds = [];
var tracks = [];
var dino;




function animate(arr1, arr2, arr3, arr4, arr5) {
    for (var i = 0; i < 250; i++) {
        arr1[i].x -= 10;
        arr2[i].x -= 10;
        arr3[i].x -= 10;
        arr4[i].x -= 10;
        arr5[i].x -= 10;
    }

    

    context.clearRect(0, 0, board.width, board.height);
    var dinoImg = new Image();
    dinoImg.src = "img/dino.png";
    dinoImg.onload = function () {
        dino = { x: 50, y: 423, width: 50, height: 50 };
        context.drawImage(dinoImg,50,423,50, 50);
    };

    // Draw the images at the updated positions
    for (var i = 0; i < 250; i++) {
        
        context.drawImage(arr1[i].img, arr1[i].x, arr1[i].y,50,50);
        context.drawImage(arr2[i].img, arr2[i].x, arr2[i].y);
        context.drawImage(arr3[i].img, arr3[i].x, arr3[i].y,40,40);
        context.drawImage(arr4[i].img, arr4[i].x, arr4[i].y,40,40);
        context.drawImage(arr5[i].img, arr5[i].x, arr5[i].y);
    }
}





 function  display() {
    board = document.querySelector("#board");
    context = board.getContext("2d");
    board.width = 1000;
    board.height = 500;


    var bigCactusImg = new Image();
    bigCactusImg.src = "img/big-cactus2.png";
    bigCactusImg.onload = function () {
        var numDuplicates = 1000;
        var spacing = 350; 
        var cactusWidth = 50;
        var cactusHeight = 50;
    
        for (var i = i; i < numDuplicates; i++) {
            var x = i * spacing;
            var y = 423;
    
            bigCacti[i] = { "img": bigCactusImg, "x": x, "y": y };
            context.drawImage(bigCactusImg, x, y, cactusWidth, cactusHeight);
        }
    };
    

    var track = new Image();
    track.src = "img/track.png";
    track.onload =  function () {
        var numDuplicates = 250;
        var spacing = track.width;

        for (var i = 0; i < numDuplicates; i++) {
            var x = i * spacing;
            var y = 460;
            tracks[i]=({"img":track,"x":x,"y":y});
            context.drawImage(track,x,y);
        }
    };

    var cloudsImg = new Image();
    cloudsImg.src = "img/cloud.png";
    cloudsImg.onload = function () {
        var numDuplicates = 250;
        var spacing = 150;

        for (var i = 0; i < numDuplicates; i++) {
            var x = i * spacing;
            var y = 25;
            clouds[i]=({"img":cloudsImg,"x":x,"y":y});
            context.drawImage(cloudsImg,x,y);
        }
    };

    

    var dinoImg = new Image();
    dinoImg.src = "img/dino.png";
    dinoImg.onload = function () {
        dino = { x: 50, y: 423, width: 50, height: 50 };
        context.drawImage(dinoImg,50,423,50, 50);
    };

    var upbirdImg = new Image();
    upbirdImg.src = "img/bird2.png";
    
    upbirdImg.onload = function () {
        var numDuplicates = 250;
        var spacing = 1000;

        for (var i = 0; i < numDuplicates; i++) {
            var randomNumber = Math.random();
            var x = (350 * (i + 4)) + 200;
            var y = 430 ;

            // Create a new instance of the image for each bird
            var currentupbirdImg = new Image();
            currentupbirdImg.src = upbirdImg.src;

            upbirds.push({ "img": currentupbirdImg, "x": x, "y": y });
            context.drawImage(currentupbirdImg, x, y, 40, 40);
        }
    };

    var downbirdImg = new Image();
    downbirdImg.src = "img/bird1.png";
    downbirdImg.onload = function () {
        var numDuplicates = 250;
        var spacing = 1000;

        // for (var i = 0; i < numDuplicates; i++) {
        //     var randomNumber = Math.random();
        //     var x = (350 * (i + 4)) + 200;
        //     var y = 430 - 67;

        //     // Create a new instance of the image for each bird
        //     var currentDownbirdImg = new Image();
        //     currentDownbirdImg.src = downbirdImg.src;

        //     downbirds.push({ "img": currentDownbirdImg, "x": x, "y": y });
        //     context.drawImage(currentDownbirdImg, x, y, 40, 40);
        // }
    
    
};
setInterval(function () {
    animate(bigCacti, clouds, downbirds, upbirds, tracks);
}, 32); // 60 frames per second (1000 ms / 60 frames)


}


window.addEventListener('load',function(){
    display();
   

});

