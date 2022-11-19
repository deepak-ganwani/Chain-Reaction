let turns=0;
let colors=[];
let nobc=[...Array(colors.length).fill(0)];
const winEvent = new Event('win');

class Node{
    constructor(color){
        this.color = color;
        this.next = null;
    }
}

class CLL{
    constructor(){
        this.count = 0;
        this.head = undefined;
    }

    push(color){
        let node = new Node(color);
        colors.push(color);
        let current = this.head;
        if (current == undefined) {
            this.head = node;
            node.next = this.head;
        } else {
            while(current.next != this.head){
                current = current.next;
            }
            current.next = node;
            node.next = this.head;
        }
        this.count++;
    }

    removeAt(index){
        if (index >= 0 && index < this.count) {
        //    if (this.isEmpty()) {
        //        return undefined;
        //    }
           let current = this.head
            if (index == 0) {
                this.head = current.next;
            } else if(index == this.count-1) {
                const previous = this.getcolorAt(index-1);
                current = previous.next;
                previous.next = this.head;
            }else{
               const previous = this.getcolorAt(index -1);
               current = previous.next;
               previous.next = current.next;
            }

            this.count--;
            colors.splice(index,1);
            updateNobc();
            // return current.color;
        }
        // return undefined;
    }

    getcolorAt(index) {
        let node = this.head;
        if (index >= 0 && index < this.count) {
            for (let i = 0; i < index; i++) {
                node = node.next;
            }
            return node;
        }
        return undefined;
    }
}
const cll = new CLL();

const updateNobc = ()=> {
    nobc=[...Array(colors.length).fill(0)];
    for(let i=0;i<54;i++){
        boxStack = stackArr[i];
        let ind = colors.indexOf(`${boxStack.color}`);
        nobc[ind]++;
    }

    //winning condition
    if(cll.count==1) {
        setTimeout(()=>{
        document.dispatchEvent(winEvent);
        },500);
    }
}

// let t = turns%cll.count;
let currentColor;
let nextColor='yellow';

// node = cll.head;
const playerTurn = async ()=>{
    nextColor=colors[(turns+1)%cll.count];
    if(cll.count===1) nextColor=colors[0];
    for(let i=0;i<54;i++) boxes[i].style=`border-color: ${nextColor}`;
    let node = cll.head;
    let t = turns%cll.count;
    while(t--) {
        node=node.next;
    }
    if(cll.count!=1){
        currentColor=getColor();
        turns++;
        // console.log(nextColor)
        // for(let i=0;i<54;i++) boxes[i].style=`border-color: ${nextColor}`;
        // Player selects the box
        // Box operations (Can't select box of other color)
        // Selected box operations (Changing color of neighboring boxes)
        // Reevaluate the nobc of every player
        updateNobc();
        if(turns>colors.length){
            let temp=cll.count;
            for(let i=0;i<temp;i++){
                // console.log("0 Nobc: "+nobc.indexOf(0));
                cll.removeAt(nobc.indexOf(0));
                turns = cll.count+1+colors.indexOf(currentColor);
            }
            nextColor=colors[(turns+1)%cll.count];
        }

        // If (turns<number of players) kn
        // Else remove players with nobc=0
        // Remove that particular color from colors array
        // Call next if lenght not 1
        // cll.removeAt(0);
        // playerTurn(node.next);
    }
    // console.log(node.color);
}

document.addEventListener('win',()=>{
    winScreen.style="display:block;";
    grid.style = "display:none";
    winScreen.innerHTML = `<div>Player ${playersUsed.indexOf(colors[0])+1} wins!</div>`;
    winScreen.innerHTML += `<button id="button"><a href="index.html">Play Again</a></button>`;
    winScreen.querySelector('div').style =`color: ${colors[0]};`;
})

const getColor = ()=>{
    // console.log("getcolor=",colors[turns%cll.count]);
    return colors[turns%cll.count];
}

let players = ['yellow','#da012d','#1560bd','#eaeaea','#fc6a03','#00A300'];
let playersUsed = [];
// console.log('Working')