const BinarySearchTree = require('./bst.min.js');
const assert = require('assert');

describe('Binary Search Tree', () => {

    it('starts empty', () => {
        let bst = new BinarySearchTree();
        assert.equal(bst.root, null);
        assert.equal(bst.length, 0);
    });

    it('add root element to tree', () => {
        let bst = new BinarySearchTree();
        bst.insert(30);
        assert.equal(bst.root.value, 30);
        assert.equal(bst.length, 1);
    });

    it('add array of elements at a time to tree', () => {
        let bst = new BinarySearchTree();
        bst.bulkInsert([30,21,42,14,25,34]);
        assert.equal(bst.root.value, 30);
        assert.equal(bst.root.left.value, 21);
        assert.equal(bst.root.right.value, 42);
        assert.equal(bst.length, 6);
    });

    it('remove element from tree', () => {
        let bst = new BinarySearchTree();
        bst.bulkInsert([30,21,42,14,25,34]);
        assert.equal(bst.root.value, 30);
        assert.equal(bst.root.left.value, 21);
        assert.equal(bst.root.right.value, 42);
        assert.equal(bst.length, 6);
        bst.remove(21);
        assert.equal(bst.root.left.value, 25);
        assert.equal(bst.length, 5);
    });

    it('print full tree', () => {
        let bst = new BinarySearchTree();
        bst.bulkInsert([30,21,42]);
        let output = bst.print().split(' ');
        assert.equal(output.length, 24);
    });

    it('search element in tree', () => {
        let bst = new BinarySearchTree();
        bst.bulkInsert([30,21,42,14,25,34]);
        assert.equal(bst.search(21), true);
        assert.equal(bst.search(11), false);
    });
});
