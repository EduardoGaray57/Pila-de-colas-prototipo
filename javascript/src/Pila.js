class StackNode{
    constructor(data = null, next = null){
        this.data = data;
        this.next = next;
    }
}

export class Stack{
    constructor(){
        this.top = null;
        this.size = 0;
    };
    isEmpty(){
        return this.size === 0;
    }
    push(data){
        this.top = { data, next: this.top};
        this.size++;
    };
    pop(){
        if(!this.top) return null;

        const data = this.top.data;
        this.top = this.top.next;
        this.size--;
        return data;
    }
    print(){
        if(this.isEmpty()){
            console.log("Stack is empty");
            return;
        }
        let current = this.top;
        while(current){
            current.data.print();
            console.log("-----");
            current = current.next;
        }
    }
    toArray() {
        const result = [];
        let current = this.top;

        while (current) {
            result.push(current.data);
            current = current.next;
        }

        return result;
    }

    validateRut(rut) {
        try {
            rut = rut.toUpperCase().replace(/\./g, "").replace("-", "");

            let body = Number.parseInt(rut.slice(0, -1), 10);
            if (Number.isNaN(body)) return false;
            const dv = rut.slice(-1);

            let m = 0;
            let s = 1;

            while (body !== 0) {
                s = (s + (body % 10) * (9 - (m % 6))) % 11;
                body = Math.floor(body / 10);
                m++;
            }

            const dvCalc = s !== 0 ? String.fromCharCode(s + 47) : "K";
            return dv === dvCalc;
        } catch {
            return false;
        }
    }

    get length() {
        return this.size;
    }
};
//module.exports = { Stack, StackNode };
