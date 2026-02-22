class QueueNode {
    constructor(name = null, rut = null, age = 0){
        this.name = name;
        this.rut = rut;
        this.age = age;
        this.next = null;
    }
}

export class Queue {
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    isEmpty(){
        return this.size === 0;
    }
    enqueue(data){
        const node = { data, next: null};

        if(!this.head){
            this.head = this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.size++;
    }
    dequeue() {
        if(!this.head) return null;

        const data = this.head.data;
        this.head = this.head.next;
        this.size--;
        return data;
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
            result.push( current.data);
            current = current.next;
        }

        return result;
    }

    peek(){
        return this.head;
    }
}

//module.exports = {Queue, QueueNode};