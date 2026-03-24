/**
 * Tree data helpers (ported from helper-js; TreeData.clone rewritten).
 */

export function walkTreeData(root, childrenKey, visitor) {
  function walk(node, parent, depth) {
    if (node == null) return;
    visitor(node, parent, depth);
    const ch = node[childrenKey];
    if (Array.isArray(ch)) {
      for (let i = 0; i < ch.length; i++) {
        walk(ch[i], node, depth + 1);
      }
    }
  }
  walk(root, null, 0);
}

function cloneTreeNode(node, childrenKey) {
  if (node == null || typeof node !== 'object') return node;
  const copy = Array.isArray(node) ? node.slice() : { ...node };
  const ch = copy[childrenKey];
  if (Array.isArray(ch)) {
    copy[childrenKey] = ch.map((c) => cloneTreeNode(c, childrenKey));
  }
  return copy;
}

export class TreeData {
  constructor(data, childrenKey = 'children') {
    this.data = data;
    this.childrenKey = childrenKey;
  }

  clone() {
    return new TreeData(cloneTreeNode(this.data, this.childrenKey), this.childrenKey);
  }
}
