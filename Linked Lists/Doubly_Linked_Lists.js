class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        const newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop() {
        if (!this.head) {
            return undefined;
        }
        const removed = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = removed.prev;
            this.tail.next = null;
            removed.prev = null;
        }
        this.length--;
        return removed;
    }
    shift() {
        if (this.length === 0) {
            return undefined;
        }
        const removed = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = removed.next;
            this.head.prev = null;
            removed.next = null;
        }
        this.length--;
        return removed;
    }
    unshift(val) {
        const newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    get(index) {
        if (index < 0 || index >= this.length) {
            return null;
        }
        if (index <= this.length / 2) {
            let count = 0;
            let current = this.head;
            while (count !== index) {
                current = current.next;
                count++;
            }
            return current;
        } else {
            let count = this.length - 1;
            let current = this.tail;
            while (count !== index) {
                current = current.prev;
                count--;
            }
        }
        return current;
    }
    set(index, val) {
        let foundNode = this.get(index);
        if (foundNode !== null) {
            foundNode.val = val;
            return true;
        }
        return false;
    }
    insert(index, val) {
        if (index < 0 || index >= this.length) {
            return false;
        }
        if (index === 0) {
            return !!this.unshift(val);
        }
        if (index === this.length) {
            return !!this.push(val);
        }

        const newNode = new Node(val);

        const beforeNode = this.get(index - 1);
        const afterNode = beforeNode.next;

        (beforeNode.next = newNode), (newNode.prev = beforeNode);
        (newNode.next = afterNode), (afterNode.prev = newNode);

        this.length++;
        return true;
    }
    remove(index) {
        if (index < 0 || index >= this.length) {
            return undefined;
        }
        if (index === 0) {
            return this.shift();
        }
        if (index === this.length - 1) {
            return this.pop();
        }

        const removedNode = this.get(index);

        const beforeNode = removedNode.prev;
        const afterNode = removedNode.next;

        beforeNode.next = afterNode;
        afterNode.prev = beforeNode;

        removedNode.prev = null;
        removedNode.next = null;

        this.length--;
        return removedNode;
    }
}
