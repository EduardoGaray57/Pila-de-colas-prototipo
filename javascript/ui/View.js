export class View {
    constructor(stackContainer, queueContainer) {
        this.stackContainer = stackContainer;
        this.queueContainer = queueContainer;
    }

    renderStack(stackArray) {
        this.stackContainer.innerHTML = "";

        stackArray.forEach((item, index) => {
            const box = document.createElement("div");
            box.className = "box";
            box.textContent = item;

            if (index === 0) box.classList.add("top");
            this.stackContainer.appendChild(box);
        });
    }

    renderQueue(queueArray) {
        this.queueContainer.innerHTML = "";

        queueArray.forEach(item => {
            const box = document.createElement("div");
            box.className = "box";
            box.textContent = item;
            this.queueContainer.appendChild(box);
        });
    }

    animateRemove(container, callback) {
        const element = container.firstElementChild;
        if(!element) return;

        element.classList.add("exit");

        setTimeout(() => {
            callback();
        }, 300);
    }

    updateStatus({ stackTop, stackSize, queueHead, queueTail, queueSize}) {
        document.getElementById("stack-top").textContent = stackTop ?? "-";
        document.getElementById("stack-size").textContent = stackSize;

        document.getElementById("queue-head").textContent = queueHead ?? "-";
        document.getElementById("queue-tail").textContent = queueTail ?? "-";
        document.getElementById("queue-size").textContent = queueSize;
    }
}