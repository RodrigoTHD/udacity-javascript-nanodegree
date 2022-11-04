import { insertChild } from './utils/dom.js';

export const Tile = function ({ data }) {
  this.data = data;
};

Tile.prototype = {
  onRender: function () {
    const data = this.data;
    const dom = document.createElement('div');
    dom.classList.add('grid-item');
    dom.innerHTML = `
      <h3>${data.name || data.species}</h3>
      <img src="./images/${String(data.species).toLowerCase()}.png" />
      ${data.fact ? `<p>${data.fact}</p>` : ''}
    `;
    this.el = dom;
  },

  render: function (target, index) {
    this.onRender();
    if (target) {
      insertChild(target, this.el, index);
    }
    this.rendered = true;
  }
};
