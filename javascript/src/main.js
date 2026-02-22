import { Stack } from "./Pila.js";
import { Queue } from "./Cola.js";
import { View } from "../ui/View.js";

const stack = new Stack();
const queue =  new Queue();

const view = new View(
    document.getElementById("stack"),
    document.getElementById("queue")
);

let delay = 600;

//Controles to speed
document.getElementById("speed").addEventListener("input", e => {
    delay = e.target.value;
});

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

function updateInternalState() {
    const stackArray = stack.toArray();
    const queueArray = queue.toArray();

    view.updateStatus({
        stackTop: stackArray[0],
        stackSize: stackArray.length,
        queueHead: queueArray[0],
        queueTail: queueArray[queueArray.length - 1],
        queueSize: queueArray.length
    });
}

//Buttons
document.getElementById("push").onclick = async() => {
    stack.push(Math.floor(Math.random() * 100));
    await sleep(delay);
    view.renderStack(stack.toArray());
    updateInternalState();
};

document.getElementById("pop").onclick = async() => {
    view.animateRemove(document.getElementById("stack"), () => {
        stack.pop()
        view.renderStack(stack.toArray());
        updateInternalState();
    });
};

document.getElementById("enqueue").onclick = async() => {
    queue.enqueue(Math.floor(Math.random() * 100));
    await sleep(delay);
    view.renderQueue(queue.toArray());
    updateInternalState();
};

document.getElementById("dequeue").onclick = async() => {
    view.animateRemove(document.getElementById("queue"), () => {
        queue.dequeue();
        view.renderQueue(queue.toArray());
        updateInternalState();
    });
};

