'use strict'

/**
 * 一维数组转树形结构
 * @param {Array} arr 元数据
 * @param {String} id id的字段
 * @param {String} pid 父id的字段
 */
function treefy(arr, id = 'id', pid = 'pid') {
  // 根节点
  const roots = arr.filter(v => !v[pid]).map(v => ({ ...v }))
  const recursion = function(item) {
    const children = arr.filter(v => v[pid] === item[id])
    if (children.length > 0) {
      item.children = children.map(recursion)
    }
    return item
  }
  return roots.map(recursion)
}
module.exports = treefy
