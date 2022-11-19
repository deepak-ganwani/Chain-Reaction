class Stack{
    constructor(size) {
        this.size=size;
        this.stackTop=0;
    }

    push(color,i) {
        this.stackTop++;
        this.color = color;
        boxes[i].innerHTML = '';
        let t=this.stackTop;
        // console.log(this.color)
        while(t--) {
            if(this.stackTop==this.size-1) boxes[i].innerHTML += `<div class="ball ball${this.stackTop} maxBall" style="background-color:${color}"></div>`;
            else if(this.stackTop==this.size-2) boxes[i].innerHTML += `<div class="ball ball${this.stackTop} medBall" style="background-color:${color}"></div>`;
            else boxes[i].innerHTML += `<div class="ball ball${this.stackTop} minBall" style="background-color:${color}"></div>`;
        }
        // Change the color of the box to the stack top color
    }

    pop() {
        this.stackTop=0;
        let c = this.color;
        this.color = '';
        return c;
        // Change the color of the grid to neutral (empty grid color)
    }
}

let stackArr = [];
for(let i=0;i<54;i++){
    if(i==0 || i==8 || i==45 || i==53) {
        stackArr.push(new Stack(2));
    }
    else if((i>0 && i<8) || (i>45 && i<53) || (i%9==0) || (i%9==8)) {
        stackArr.push(new Stack(3));
    }
    else {
        stackArr.push(new Stack(4));
    }
    // stackArr[i].pop();
}

// let obj = {};
// for(let i =0;i<54;i++){
//     obj[`${i}`]= 0;
// }

// console.log(obj);

// Stack {
//     size
//     other functions
//    }
   
//    Main {
//     Stack[] s= new Stack(54);
//     rep(i,0,54){
//      if(i==0 or i==5 or i==47 or i==53) size=2
//      else if (i between 0 to 5 or i between 47 to 53 or i%6=0 or i%6=5) size=3
//      else size=4 
//     }
//    }