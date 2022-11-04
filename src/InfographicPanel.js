import { getRandomDinoFact } from './InfographicPanelUtils.js';
import { Tile } from './Tile.js';
import { insertChild } from './utils/dom.js';

export const InfographicPanel = function ({ humanData, dinosData }) {
  this.humanData = humanData;
  this.dinosData = dinosData;
  this.items = [];
};

InfographicPanel.prototype = {
  onRender: function () {
    const dom = document.createElement('div');
    dom.id = 'grid';
    this.el = dom;
  },

  renderItem: function (item, ct, index) {
    const body = ct.el;
    item.render(body, index);
  },

  onRenderItems: function () {
    const ct = this;
    if (this.dinosData) {
      this.dinosData.forEach((dinoData, index) => {
        const dino = new Tile({
          data: {
            ...dinoData,
            fact: getRandomDinoFact(dinoData, this.humanData)
          }
        });
        this.renderItem(dino, ct, index);
      });
    }
    if (this.humanData) {
      this.renderItem(new Tile({ data: this.humanData }), ct, 4);
    }
  },

  render: function (target, index) {
    this.onRender();
    this.onRenderItems();
    if (target) {
      insertChild(target, this.el, index);
    }
    this.rendered = true;
  }
};
