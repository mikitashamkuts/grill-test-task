/******************************************************************************

This is a very simple binary tree based bin packing algorithm that is initialized
with a fixed width and height and will fit each block into the first node where
it fits and then split that node into 2 parts (down and right) to track the
remaining whitespace.

Best results occur when the input blocks are sorted by height, or even better
when sorted by max(width,height).

******************************************************************************/



const GrillSortingAlgorithm = function (w, h) {
  this.init(w, h)
}

GrillSortingAlgorithm.prototype = {
  init: function (w, h) {
    this.root = { x: 0, y: 0, w: w, h: h }
  },

  parsItems: function (itemsArray) {
    const result = []
    itemsArray.map(item => {
      for (let i = 0; item.count > i; i++) {
        result.push({
          title: item.title,
          width: item.width,
          height: item.height,
        })
      }
    })
    return result
  },

  fit: function (blocks) {
    let n, node, block
    for (n = 0; n < blocks.length; n++) {
      block = blocks[n]
      if ((node = this.findNode(this.root, block.width, block.height)))
        block.fit = this.splitNode(node, block.width, block.height)
    }
  },

  findNode: function (root, w, h) {
    if (root.used)
      return this.findNode(root.right, w, h) || this.findNode(root.down, w, h)
    else if (w <= root.w && h <= root.h) return root
    else return null
  },

  splitNode: function (node, w, h) {
    node.used = true
    node.down = { x: node.x, y: node.y + h, w: node.w, h: node.h - h }
    node.right = { x: node.x + w, y: node.y, w: node.w - w, h: h }
    return node
  },
}

export default GrillSortingAlgorithm
