# Tree (`helping-js/core/tree`)

Depth-first walk and a small **`TreeData`** wrapper with a safe **`clone()`**.

## Imports

```javascript
import { walkTreeData, TreeData } from 'helping-js/core/tree'
```

## API

| Export | Role |
| --- | --- |
| `walkTreeData(root, childrenKey, visitor)` | `(node, parent, depth) => void` |
| `TreeData(data, childrenKey?)` | Holds tree root; default `childrenKey` is `'children'` |
| `tree.clone()` | Deep-clone via `childrenKey` |

## Samples

**Walk menu nodes**

```javascript
walkTreeData(menu, 'children', (node, parent, depth) => {
  if (node.disabled) return
  console.log(depth, node.label)
})
```

**Clone for undo**

```javascript
const tree = new TreeData(structure, 'children')
const snapshot = tree.clone()
```

**Vue: flatten labels**

```javascript
const labels = []
walkTreeData(props.menu, 'children', (node) => {
  labels.push(node.title)
})
```

`walkTreeData` expects a single root object or you can pass an object whose `childrenKey` array holds subtrees; adjust your data so the first argument matches how the walker traverses (see source for exact contract).

[Back to Helpers overview](/helpers/)
