export const insertChild = (ct, child, toIndex) => {
  let siblingNode;
  if (!ct) {
    return;
  }
  if (!isNaN(toIndex)) {
    siblingNode = ct.children[toIndex];
  }
  if (siblingNode) {
    siblingNode.parentNode.insertBefore(child, siblingNode);
  } else {
    ct.appendChild(child);
  }
};

export const isNode = node => {
  return node && (node.nodeType === 1 || node.nodeType == 11);
};

export const setVisible = (dom, visible) => {
  if (isNode(dom)) {
    if (visible === true) {
      dom.classList.remove('hide');
    } else {
      dom.classList.add('hide');
    }
  }
};
