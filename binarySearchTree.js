class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        // root node of BST
        this.root = null;
    }

    insert(data) {
        let newNode = new Node(data);
        if (this.root === null)
            this.root = newNode;
        else
            this.insertNode(this.root, newNode);
    }

    remove(data) {
        this.root = this.removeNode(this.root, data);
    }

    insertNode(node, newNode) {
        if (newNode.data < node.data) {
            // search left
            if (node.left === null)
                node.left = newNode;
            else
                this.insertNode(node.left, newNode);
        } else {
            // search right
            if (node.right === null)
                node.right = newNode;
            else
                this.insertNode(node.right, newNode);
        }
    }

    removeNode(node, data) {
        if (node === null) {
            return null;
        } else if (data < node.left) {
            node.left = this.removeNode(node.left, data);
            return node;
        } else if (data > node.right) {
            node.right = this.removeNode(node.right, data);
        } else {
            // deleting node with no children 
            if (node.left === null && node.right === null) {
                node = null;
                return node;
            }

            // deleting node with one child 
            if (node.left === null) {
                node = node.right;
                return node;
            } else if (node.right === null) {
                node = node.left;
                return node;
            }

            // Deleting node with two children 
            // find minumum node of the rigt subtree and replace key with it
            let minNode = this.findMinNode(node.right, data);
            node.data = minNode.data;

            node.right = this.removeNode(node.right, minNode);
            return node;
        }
    }

    search(node, data) {
        if (node === null)
            return null;
        else if (data < node.data)
            this.search(node.left, data);
        else if (data > node.data)
            this.search(node.right, data);
        else
            return node;
    }

    findMinNode(node) {
        if (node.left === null)
            return node;
        else
            return this.findMinNode(node);
    }

    getRootNode() {
        return this.root;
    }

    // search order: left subtree -> root -> right subtree
    inorder(node) {
        if (node !== null) {
            this.inorder(node.left);
            console.log(node.data);
            this.inorder(node.right);
        }
    }

    // search order: root -> left subtree -> right subtree
    preorder(node) {
        if (node != null) {
            console.log(node.data);
            this.preorder(node.left);
            this.preorder(node.right);
        }
    }

    // search order: left subtree -> right subtree -> root
    postorder(node) {
        if (node != null) {
            this.postorder(node.left);
            this.postorder(node.right);
            console.log(node.data);
        }
    }

    display() {
        console.log("IN ORDER SEARCH");
        this.inorder(this.root);

        console.log("PRE ORDER SEARCH");
        this.preorder(this.root);

        console.log("POST ORDER SEARCH");
        this.postorder(this.root);
    }
}

let treeData = [4, 3, 7, 0, 9, 11, 34, 25, 12, 1];
let bst = new BinarySearchTree();
treeData.forEach(item => bst.insert(item));
bst.display();