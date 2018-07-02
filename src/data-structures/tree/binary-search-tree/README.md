# Binary Search Tree

In computer science, binary search trees (BST), sometimes called 
ordered or sorted binary trees, are a particular type of container: 
data structures that store "items" (such as numbers, names etc.) 
in memory. They allow fast lookup, addition and removal of 
items, and can be used to implement either dynamic sets of 
items, or lookup tables that allow finding an item by its key 
(e.g., finding the phone number of a person by name).

二分查找树(BST)有时候叫有序或者排序二分树是一种特殊的容器：存储数据项的数据结构。在内存中，他们可以快速查找，添加和删除数据项，可用于实现动态数据项结合或者可通过key找找数据项的查找表
（例如，通过某个人的姓名找到某个人的手机号）

Binary search trees keep their keys in sorted order, so that lookup 
and other operations can use the principle of binary search: 
when looking for a key in a tree (or a place to insert a new key), 
they traverse the tree from root to leaf, making comparisons to 
keys stored in the nodes of the tree and deciding, on the basis 
of the comparison, to continue searching in the left or right 
subtrees. On average, this means that each comparison allows 
the operations to skip about half of the tree, so that each 
lookup, insertion or deletion takes time proportional to the 
logarithm of the number of items stored in the tree. This is 
much better than the linear time required to find items by key 
in an (unsorted) array, but slower than the corresponding 
operations on hash tables.

二分查找树的keys是有序的，所以查找或其他操作可使用二元搜索原理：当在树中查找一个key(插入新key的一个位置)，从根到叶子遍历树，对存储在树和决定的节点中的keys作对照，在基本的比较中，为了继续在左或右子树寻找。
平均来说，这意味着每次对照允许调过半棵树，这样每次查找，插入删除花费时间和存储在树中数据项的对数成比例。这比在一个（无序）数组找到数据项需要的线性时间好很多，但比哈希表上的响应操作慢。
A binary search tree of size 9 and depth 3, with 8 at the root.
The leaves are not drawn.

![Binary Search Tree](https://upload.wikimedia.org/wikipedia/commons/d/da/Binary_search_tree.svg)

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Binary_search_tree)
- [Inserting to BST on YouTube](https://www.youtube.com/watch?v=wcIRPqTR3Kc&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8&index=9&t=0s)
- [BST Interactive Visualisations](https://www.cs.usfca.edu/~galles/visualization/BST.html)
