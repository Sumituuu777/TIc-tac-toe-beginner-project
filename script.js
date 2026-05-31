let startbtn = document.querySelector(".startbtn")
let blocks = document.querySelectorAll(".block")


let playgame = false;
let player = "x";

let indices=["","","",
            "","","","","",""]
let winconditions=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,6,8],[0,4,8],[2,4,6]]
blocks.forEach((block,i) => {
    block.addEventListener("click", () => {
        if (!playgame) return;

        block.textContent = player;
        indices[i]=player
        block.style.pointerEvents = "none";
        if (player=="x"){
            block.style.color="rgb(96, 48, 178)";
        }
        else{
            block.style.color="rgb(187, 50, 103)";
        }
    if(!checkwinner()){ 
        if (player=="x"){
            player="o";
        }
        else{
            player="x"
        }
    }

    })
})

function checkwinner(){
    for(const [a,b,c] of winconditions){
        console.log(a);
        
        if(indices[a]==player &&
            indices[b]==player &&
            indices[c]==player
        ){
            endgame([a,b,c]);
            return true;
        }
    }
}

startbtn.addEventListener("click", () => {
    startbtn.style.display = 'none';
    newgame();
    playgame = true;
})

function endgame(winningindicies){
    playgame=false;
    let message = document.querySelector(".lgheading")
     message.innerHTML=` Player " ${player} " wins`

    setTimeout(()=>{
        message.innerHTML="Tic Tac Toe";
    },2000);

    blocks.forEach(block=>{
        block.style.pointerEvents="none";
    })
    winningindicies.forEach(index=>{
        blocks[index].style.background='rgb(211, 73, 73)'
    })
         startbtn.innerHTML=`Play Again`
        startbtn.style.display="block";
}


function newgame() {
    blocks.forEach(block => {
        block.textContent = "";
        block.style.background="rgb(0,0,0,0.35)";
        block.style.pointerEvents="auto";
    })
    for(let i=0;i<9;i++){
        indices[i]='';
    }
}