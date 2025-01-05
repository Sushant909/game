const first = document.querySelectorAll(".button");
const midButton1 = document.querySelector("#one");
const midButton2 = document.querySelector("#two");
const midButton3 = document.querySelector("#three");
const midButton4 = document.querySelector("#four");
const container = document.querySelector(".container");
const midBar = document.querySelector(".midbar");
const sideBar = document.querySelector(".sidebar");
const newstart = document.querySelector(".restartButton");
const sideButton = document.querySelector(".sidebutton");
const noteBox = document.querySelector("#notebox");
const botBox = document.querySelector(".botBox");

let buttonSpace = Array(9).fill("");
let move1 = 1;
let count = 0;
first.forEach((buttons , index) => {
    buttons.addEventListener("click",(e) => {
        if(move1 === 1){
            move1 = 0;
            buttons.innerText = "O";
            buttons.style.color = "black";
            buttonSpace[index] = 0; 
        }
        else{
            move1 = 1;
            buttons.innerText = "X";
            buttons.style.color = "black";
            buttonSpace[index] = 1; 
        }
        buttons.disabled = true;
        count++;
        checkpattern();
        if(count === 9 && count != checkpattern()){
            drawGame();  
        }
    }); 
});

let winpatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

let checkpattern = () => {
    for(let pattern of winpatterns){
        let one = first[pattern[0]].innerText;
        let two = first[pattern[1]].innerText;
        let three = first[pattern[2]].innerText;
        
        if(one != "" && two != "" && three != ""){
            if(one === two && two === three){
                newNode.innerText = `Congratulation
                winner is : ${first[pattern[0]].innerText}`;
                newNode.style.opacity = "1";
                container.style.opacity = "0.5";
                newstart.style.opacity = "1";
                newNode.style.zIndex = "2";
            };
        };
    };
};

function drawGame() {
    newNode.innerText = `the Game is draw`;
    newNode.style.opacity = "1";
    container.style.opacity = "0.5";
    newstart.style.opacity = "1";
    newNode.style.zIndex = "2";
};

let newNode = document.createElement("span");
newNode.classList.add("notebox");
sideBar.before(newNode);

newstart.addEventListener("click",(e) => {
    first.forEach(buttons => {
        buttons.innerText = "";
        move1 = 1;
        buttons.disabled = false;
        count = 0;
    });
    container.style.opacity = "1";
    newstart.style.opacity = "0";
    newNode.style.opacity = "0";
    newNode.style.zIndex = "0";
});
 
container.style.opacity = "0";
newstart.style.opacity = "0";

function playButton() {
    midBar.style.opacity = "0";
    container.style.opacity = "1";
    sideBar.style.opacity = "1";
    first.forEach(buttons => {
        buttons.innerText = "";
        move1 = true;
        buttons.disabled = false;
    });
};

midButton1.addEventListener("click",playButton);
midButton3.addEventListener("click",playButton);

function bot(){
    midBar.style.opacity = "0";
    sideBar.style.opacity = "1";
    botBox.style.opacity = "1";
};
midButton2.addEventListener("click",bot);

function homebutton() {
    midBar.style.opacity = "1";
    container.style.opacity = "0";
    sideBar.style.opacity = "0";
    botBox.style.opacity = "0";
    newstart.style.opacity = "0";
    newNode.style.opacity = "0";
    newNode.style.zIndex = "0";
};
sideButton.addEventListener("click",homebutton);

// let checkpattern = () => {

    //     for (let subpattern of winpatterns) {  

    //         let values = subpattern.map((index) => 
        //             buttonSpace[index]
//         );

//         if(values.every((val) => val === move1)){
//             console.log("win");
//             return;
//         }  
//     }
// };