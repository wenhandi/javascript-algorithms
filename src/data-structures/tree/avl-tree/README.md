# AVL Tree

In computer science, an AVL tree (named after inventors 
Adelson-Velsky and Landis) is a self-balancing binary search 
tree. It was the first such data structure to be invented. 
In an AVL tree, the heights of the two child subtrees of any
node differ by at most one; if at any time they differ by 
more than one, rebalancing is done to restore this property.
Lookup, insertion, and deletion all take `O(log n)` time in 
both the average and worst cases, where n is the number of 
nodes in the tree prior to the operation. Insertions and 
deletions may require the tree to be rebalanced by one or 
more tree rotations.
AVL树（以发明者 Adelson-Velsky and Landis命名）是一个自平衡的二分查找树。这是第一个被发明的数据结构。在AVL树中，
任何节点的两个子树的高度最多相差一个，任何时候若相差超过一个，再平衡机制会恢复这个属性。
查找，插入删除都花费O(log n)时间在平均和最糟糕的情况下，n是操作之前的树中的节点数量。
插入和删除也许需要通过一个或多个树旋转来重新平衡树。


Animation showing the insertion of several elements into an AVL 
tree. It includes left, right, left-right and right-left rotations.

![AVL Tree](https://upload.wikimedia.org/wikipedia/commons/f/fd/AVL_Tree_Example.gif)

AVL tree with balance factors (green)

![AVL Tree](https://upload.wikimedia.org/wikipedia/commons/a/ad/AVL-tree-wBalance_K.svg)

### AVL Tree Rotations

**Left-Left Rotation**

![Left-Left Rotation](http://btechsmartclass.com/DS/images/LL%20Rotation.png)

**Right-Right Rotation**

![Right-Right Rotation](http://btechsmartclass.com/DS/images/RR%20Rotation.png)

**Left-Right Rotation**

![Left-Right Rotation](http://btechsmartclass.com/DS/images/LR%20Rotation.png)

**Right-Left Rotation**

![Right-Right Rotation](http://btechsmartclass.com/DS/images/RL%20Rotation.png)

## References

* [Wikipedia](https://en.wikipedia.org/wiki/AVL_tree)
* [Tutorials Point](https://www.tutorialspoint.com/data_structures_algorithms/avl_tree_algorithm.htm)
* [BTech](http://btechsmartclass.com/DS/U5_T2.html)
* [AVL Tree Insertion on YouTube](https://www.youtube.com/watch?v=rbg7Qf8GkQ4&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8&index=12&)
* [AVL Tree Interactive Visualisations](https://www.cs.usfca.edu/~galles/visualization/AVLtree.html)
