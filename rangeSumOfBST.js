/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
let ans = 0;

var rangeSumBST = function (rootNode, leftNode, rightNode) {
    ans = 0;
    depthFirstSearch(rootNode, leftNode, rightNode);
    return ans;
};

function depthFirstSearch(rootNode, leftNode, rightNode) {
    if (rootNode != null) { // if root node is not null
        if (leftNode <= rootNode.val && rootNode.val <= rightNode) // if left node is lessthan or equal too right node &&  root node value is less than or eual to the right node
            ans += rootNode.val; // add root node value to the answer
        if (leftNode < rootNode.val) // if left node is less than the root node value
            depthFirstSearch(rootNode.left, leftNode, rightNode); // add it to the left side of the node
        if (rootNode.val < rightNode) // if root node value is less then the right node
            depthFirstSearch(rootNode.right, leftNode, rightNode); // add it to the right side node
    }
}