const { Queue, QueueNode } = require("../src/Cola");

/* 🔇 Mock de console.log (MISMO criterio que en pila) */
beforeAll(() => {
    jest.spyOn(console, "log").mockImplementation(() => {});
});

afterAll(() => {
    console.log.mockRestore();
});

describe("Queue (Cola)", () => {

    test("Queue starts empty", () => {
        const queue = new Queue();
        expect(queue.isEmpty()).toBe(true);
        expect(queue.size).toBe(0);
    });

    test("Enqueue adds elements correctly", () => {
        const queue = new Queue();
        queue.enqueue(new QueueNode("Juan", "1-9", 30));
        queue.enqueue(new QueueNode("Ana", "2-7", 25));

        expect(queue.size).toBe(2);
        expect(queue.peek().name).toBe("Juan");
    });

    test("Queue maintains FIFO order", () => {
        const queue = new Queue();
        queue.enqueue(new QueueNode("A", "1", 20));
        queue.enqueue(new QueueNode("B", "2", 30));

        expect(queue.peek().name).toBe("A");
    });

    test("Enqueue only accepts QueueNode", () => {
        const queue = new Queue();
        expect(() => queue.enqueue({})).toThrow(TypeError);
    });

    /* ✅ TEST PREVENTIVO (EL QUE PREGUNTAS) */
    test("print does not hang on empty queue", () => {
        const queue = new Queue();
        expect(() => queue.print()).not.toThrow();
    });
    test("toArray returns queue elements in FIFO order", () => {
        const queue = new Queue();
        queue.enqueue(new QueueNode("Juan", "1-9", 30));
        queue.enqueue(new QueueNode("Ana", "2-7", 25));

        expect(queue.toArray()).toEqual([
            { name: "Juan", rut: "1-9", age: 30 },
            { name: "Ana", rut: "2-7", age: 25 }
        ]);
    });


});
