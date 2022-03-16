class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(val) {
        const newNode = new Node(val);
        if (!this.root) {
            this.root = newNode;
            return this;
        } else {
            let current = this.root;
            while (true) {
                if (val === current.value) {
                    return undefined;
                }
                if (val < current.value) {
                    if (current.left === null) {
                        current.left = newNode;
                        return this;
                    } else {
                        current = current.left;
                    }
                } else if (val > current.value) {
                    if (current.right === null) {
                        current.right = newNode;
                        return this;
                    } else {
                        current = current.right;
                    }
                }
            }
        }
    }
    contains(val) {
        if (this.root === null) {
            return false;
        }
        let current = this.root;
        while (current) {
            if (val < current.value) {
                current = current.left;
            } else if (val > current.value) {
                current = current.right;
            } else {
                return true;
            }
        }
        return false;
    }
    BreadthFirstSearch() {
        let data = [],
            queue = [];
        let node = this.root;

        queue.push(node);
        while (queue.length) {
            node = queue.shift();
            data.push(node.value);
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
            return data;
        }
    }
    DFSPreOrder() {
        /*
                10
            <       >
            6       15
        <       >       >
        3       8       20
        */

        // Output: [10, 6, 3, 8, 15, 20]

        let data = [];
        let current = this.root;

        function traverse(node) {
            data.push(node.value);

            if (node.left) {
                traverse(node.left);
            }

            if (node.right) {
                traverse(node.right);
            }
        }

        traverse(current);

        return data;
    }
}
