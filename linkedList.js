class Node {
    constructor(data, next = null) {
        this.data = data; // holds data
        this.next = next; // points to next node
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0; // number of nodes in the list
    }

    // Insert first node
    insertFirstNode(data) {
        this.head = new Node(data, this.head);
        this.size++;
    }

    // Insert last node
    insertLastNode(data) {
        const node = new Node(data);
        if (!this.head) {
            this.head = node;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }

            current.next = node;
        }
        this.size++;
    }

    // Insert at index
    insertNodeAtIndex(data, index) {
        // if index is 0
        if (index === 0) {
            this.insertFirstNode(data);
            return;
        }

        // if index is out of range
        if (index > 0 && index > this.size) {
            return;
        }

        const node = new Node(data);
        let current = this.head;
        let previous = null;
        let count = 0;

        while (count < index) {
            previous = current;
            count++;
            current = current.next;
        }

        previous.next = node;
        node.next = current;
        this.size++;
    }

    // Get at index
    getNodeAtIndex(index) {
        let current = this.head;
        let count = 0;

        while (current) {
            if (count == index) {
                console.log(`Data of node at index: '${index}' is ${current.data}`);
                return;
            }
            count++;
            current = current.next;
        }

        return null;
    }

    // Remove at index
    removeNodeAtIndex(index) {
        // index out of range
        if (index > 0 && index >= this.size) {
            return;
        }

        let current = this.head;
        let previous = null;
        let count = 0;
        // remove first node
        if (index === 0) {
            this.head = current.next;

        } else {
            while (count < index) {
                previous = current;
                current = current.next;
                count++;
            }

            previous.next = current.next;
        }

        this.size--;
    }

    // Remove last node
    removeLastNode(){
        if(!this.head){
            return;
        }
        let current = this.head;
        let previous;
        while(current.next){
            previous = current;
            current = current.next;
        }

        previous.next = null;
    }

    // Clear list
    clear() {
        this.head = null;
        this.size = 0;
    }

    // Print list data
    print() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}

let linkedList = new LinkedList();
linkedList.insertFirstNode(300);
linkedList.insertFirstNode(200);
linkedList.insertLastNode(500);
linkedList.insertNodeAtIndex(100, 0);
linkedList.insertNodeAtIndex(400, 3);
linkedList.removeNodeAtIndex(2);
linkedList.getNodeAtIndex(1);
linkedList.removeLastNode();

linkedList.print();