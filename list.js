const queue = [];

const makeQueue = (i,color) => {
    
    // const l = new LL();
    if(i%9!=0) queue.push(i-1);
    if(i+9<54) {
        // i ka color to all the balls of i+9
        queue.push(i+9);
    }
    if(i%9!=8) queue.push(i+1);
    if(i-9>-1) queue.push(i-9);
    // console.log(queue);
    // Pop the stack[i]

    while(queue.length){
        addBall(queue.shift(),color);    
    }
};

// Add blocks: Right, Down, Left, Up
// Right +9 if it less than 54 add to list
// Down +1 if i%9!=8 add to list
// Left -9 if is greater than -1 
// Up -1 if i%9!=0 
