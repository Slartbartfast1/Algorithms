function BinarySearchTree() {
    var node = function (key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
    var root = null;
    this.insert = function (key) {
        var newNode = new node(key)
        if (root === null) {
            root = newNode;
        } else {
            insertNode(root, newNode)
        }
    }
    var insertNode = function (node, newNode) {
        if (newNode.key > node.key) {
            if (node.right === null) {
                node.right = newNode;
            } else {
                insertNode(node.right, newNode)
            }
        } else {
            if (node.left === null) {
                node.left = newNode;
            } else {
                insertNode(node.left, newNode)
            }
        }
    }
    //中序遍历:从小到大,先左 再中 再右
    this.inOrderTraverse = function (callback) {
        inOrder(root, callback)
    }
    var inOrder = function (node, callback) {
        if (node !== null) {
            inOrder(node.left, callback);
            callback(node);
            inOrder(node.right, callback)
        }
    }

    //先序遍历:先中间,在左右
    this.preOrderTraverse = function (callback) {
        preOrder(root, callback)
    }
    var preOrder = function (node, callback) {
        if (node !== null) {
            callback(node)
            preOrder(node.left, callback)
            preOrder(node.right, callback)
        }
    }

    //后序遍历:先左右,后中间
    this.postOrderTraverse = function (callback) {
        postOrder(root, callback)
    }
    var postOrder = function (node, callback) {
        if (node !== null) {
            postOrder(node.left, callback)
            postOrder(node.right, callback)
            callback(node)
        }
    }


    // 搜素
    //最小值
    this.min = function () {
        return minNode(root)
    }
    var minNode = function (node) {
        if (node) {
            while (node && node.left !== null) {
                node = node.left;
            }
            return node.key;
        }
        return null
    }
    //最大值
    this.max=function(){
        return maxNode(root)
    }
    var maxNode=function(node){
        if(node){
            while(node&&node.right!==null){
                node=node.right;
            }
            return node.key
        }
        return null;
    }


    //搜索指定值
    this.search=function(key){
        return searchNode(root,key)
    }
    var searchNode=function(node,key){
        if(node===null){
            return false;
        }
        if(node.key>key){
            return searchNode(node.left,key)
        }
        if(node.key<key){
            return searchNode(node.right,key)
        }

            return true;
    }

    //删除节点
    this.remove=function(key){
        root=removeNode(root,key)
    }
    var findMinNode=function(node){
        while(node&&node.left!==null){
            node=node.left;
        }
        return node;
    }
    var removeNode=function(node,key){
        if(node===null){
            return null
        }
        if(node.key>key){
            node.left=removeNode(node.left,key)
            return node;
        }
        else if(node.key<key){
            node.right=removeNode(node.right,key)
            return node;
        }
        else{
            if(node.left===null&node.right===null){
                node=null;
                return node;
            }
            if(node.left===null){
                node=node.right;
                return node;
            }else if(node.right===null){
                node=node.left;
                return node;
            }
            var aux=findMinNode(node.right);
            node.key=aux.key;
            node.right=removeNode(node.right,aux.key);
            return node;
        }
    }
}

var printNode = function (node) {
    console.log(node.key)
}
var tree = new BinarySearchTree();
tree.insert(12);
tree.insert(22);
tree.insert(3);
tree.insert(41);
tree.insert(15);
tree.insert(63);
tree.insert(7);
tree.insert(8);
tree.insert(81);
// tree.inOrderTraverse(printNode);
// tree.preOrderTraverse(printNode);
// tree.postOrderTraverse(printNode);
// console.log(tree.min());
// console.log(tree.max());
console.log(tree.search(15));
tree.remove(15);


