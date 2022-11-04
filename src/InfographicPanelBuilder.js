import { InfographicPanel } from './InfographicPanel.js';

export const InfographicPanelBuilder = function () {};

InfographicPanelBuilder.prototype = {
  withDinosData: function (dinosData) {
    this.dinosData = dinosData;
    return this;
  },

  withHumanData: function (humanData) {
    this.humanData = humanData;
    return this;
  },

  build: function () {
    return new InfographicPanel({
      humanData: this.humanData,
      dinosData: this.dinosData
    });
  }
};
