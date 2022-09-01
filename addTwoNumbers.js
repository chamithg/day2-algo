/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {};

// l1 = { val: 2, next: { val: 4, next: { val: 3, next: null } } };
// l2 = { val: 5, next: { val: 6, next: { val: 4, next: null } } };

l1 = [2, 4, 3];
l2 = [5, 6, 4];

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function addTwoNumbers(l1, l2) {
  let carryOver = 0;
  let prevNode = new ListNode();
  const headNode = prevNode;
  while (l1 || l2 || carryOver) {
    let val1 = 0;
    let val2 = 0;
    if (l1) {
      val1 = l1.val;
      l1 = l1.next;
    }
    if (l2) {
      val2 = l2.val;
      l2 = l2.next;
    }
    let sum = val1 + val2 + carryOver;
    carryOver = 0;
    if (sum > 9) {
      carryOver = Math.floor(sum / 10);
      sum = sum % 10;
    }

    const currNode = new ListNode(sum);
    prevNode.next = currNode;
    prevNode = currNode;
  }
  return headNode.next;
}

console.log(addTwoNumbers(l1, l2));
