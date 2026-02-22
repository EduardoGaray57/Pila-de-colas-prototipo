const { Queue, QueueNode } = require("./Cola");
const { Stack } = require("./Pila");

const q1 = new Queue();
q1.enqueue(new QueueNode("Juan", "12.345.678-5", 30));
q1.enqueue(new QueueNode("Ana", "9.876.543-2", 25));

const q2 = new Queue();
q2.enqueue(new QueueNode("Pedro", "11.111.111-1", 40));

const stack = new Stack();
stack.push(q1);
stack.push(q2);

stack.print();
