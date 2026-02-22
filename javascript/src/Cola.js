class QueueNode {
    constructor(name = null, rut = null, age = 0){
        this.name = name;
        this.rut = rut;
        this.age = age;
        this.next = null;
    }
}

class Queue {
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    isEmpty(){
        return this.size === 0;
    }
    enqueue(node){
        if(!(node instanceof QueueNode)){
            throw new TypeError("enqueue expects a QueueNode");
        }
        if(this.isEmpty()){
            this.head = this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.size++;
    }
    print(){
        if (this.isEmpty()){
            console.log("Queue is empty");
            return;
        }
        let current = this.head;
        while(current){
            console.log(`Name: ${current.name}, RUT: ${current.rut}, Age: ${current.age}`);
            current = current.next;
        }
    }
    toArray() {
        const result = [];
        let current = this.head;

        while (current) {
            result.push({
                name: current.name,
                rut: current.rut,
                age: current.age
            });
            current = current.next;
        }

        return result;
    }

    peek(){
        return this.head;
    }
}

module.exports = {Queue, QueueNode};