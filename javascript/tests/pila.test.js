const { Stack } = require("../src/Pila");
const { Queue, QueueNode } = require("../src/Cola");

/* 🔇 Mock de console.log para evitar cuelgues */
beforeAll(() => {
    jest.spyOn(console, "log").mockImplementation(() => {});
});

afterAll(() => {
    console.log.mockRestore();
});

describe("Stack (Pila)", () => {

    test("Stack starts empty", () => {
        const stack = new Stack();
        expect(stack.isEmpty()).toBe(true);
        expect(stack.length).toBe(0);
    });

    test("Push adds elements", () => {
        const stack = new Stack();
        stack.push(new Queue());
        expect(stack.length).toBe(1);
    });

    test("Pop removes elements in LIFO order", () => {
        const stack = new Stack();
        const q1 = new Queue();
        const q2 = new Queue();

        stack.push(q1);
        stack.push(q2);

        expect(stack.pop()).toBe(q2);
        expect(stack.length).toBe(1);
    });

    test("Pop throws error if empty", () => {
        const stack = new Stack();
        expect(() => stack.pop()).toThrow();
    });

    /* ✅ ESTE ES EL TEST QUE PREGUNTAS */
    test("print executes safely", () => {
        const stack = new Stack();
        expect(() => stack.print()).not.toThrow();
    });

    test("pop throws exact error message", () => {
        const stack = new Stack();
        expect(() => stack.pop()).toThrow("Stack is empty");
    });
    test("validateRut returns false for invalid rut", () => {
        const stack = new Stack();
        expect(stack.validateRut("abc")).toBe(false);
    });
    test("toArray returns stack of queues in LIFO order", () => {
        const q1 = new Queue();
        q1.enqueue(new QueueNode("A", "1", 20));

        const q2 = new Queue();
        q2.enqueue(new QueueNode("B", "2", 30));

        const stack = new Stack();
        stack.push(q1);
        stack.push(q2);

        expect(stack.toArray()).toEqual([
            [{ name: "B", rut: "2", age: 30 }],
            [{ name: "A", rut: "1", age: 20 }]
        ]);
    });

});
