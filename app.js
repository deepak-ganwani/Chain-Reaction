const grid = document.querySelector('.grid');
// const columns = document.querySelectorAll('.column');
let boxes = document.querySelectorAll('.box');
const list = document.querySelectorAll('li');
const btn = document.querySelector('#okay');
const winScreen = document.querySelector('.winner-screen');
let numOfPlayers=0;
let count=[...Array(54).fill(0)];
document.addEventListener('DOMContentLoaded',()=>{for(let i=0;i<54;i++) boxes[i].style=`border-color: ${nextColor}`;})

const addBall = async (i,color) =>{

    boxStack = stackArr[i];
    // console.log("stack= ",stackArr);
    boxStack.push(color,i);

    for(let j=0;j<10000;j++)
    {
        for(let k=0;k<10000;k++);
    }
    // setTimeout(()=>{
        if(boxStack.size===boxStack.stackTop){
            // console.log('Executed');
            boxes[i].innerHTML = ``;            
            makeQueue(i,boxStack.pop());
        }
    // },100);
    
    // console.log(boxStack.stackTop);
}

boxes.forEach((box,i)=>{
    box.addEventListener('click',async ()=>{

        let color = getColor();
        if(box.innerHTML==='') 
        {
            await addBall(i,color);
            playerTurn();
        }
        else
        {
            if(stackArr[i].color==color) 
            {
                await addBall(i,color);
                playerTurn();
            }
        } 
    })
})

const check = (id)=>{
    // console.log(id);
    for(let i=2;i<=6;i++)
    {   
        let li = document.getElementById(i);
        if(i!=id) li.style="background-color: none; color:#ededed;";
        else li.style="background-color: #ededed; color:black;";
    }
}

list.forEach((li)=>{
    li.addEventListener('click',()=>{
        if(li.id>=2){
            numOfPlayers = li.id;
            check(li.id);
            document.getElementById('okay').style = "background-color:green";
        }   
    })
})

btn.addEventListener('click',()=>{
    if(numOfPlayers!==0){
        document.querySelector('.player-options').style="display:none";
        grid.style="display:flex";

        for(let i=0;i<numOfPlayers;i++){
            let player = players.shift();
            playersUsed.push(player);
            cll.push(player);
        }
    }
    else{
        btn.classList.add('wrong');
        setTimeout(()=>{
            btn.classList.remove('wrong');
        },500)
    }
})