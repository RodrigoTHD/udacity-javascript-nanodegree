import { InfographicPanelBuilder } from './InfographicPanelBuilder.js';
import { setVisible } from './utils/dom.js';
import dinosData from './data/dinos.json' assert { type: 'json' };

const elements = {
  form: document.querySelector('#dino-compare-form'),
  goBackButton: document.querySelector('#go-back'),
  infographicContainer: document.querySelector('#grid-ct')
};

function showForm() {
  setVisible(elements.form, true);
  setVisible(elements.goBackButton, false);
  elements.infographicContainer.innerHTML = '';
}

function hideForm() {
  setVisible(elements.form, false);
  setVisible(elements.goBackButton, true);
}

function getFormData() {
  const formData = new FormData(elements.form);
  const result = {};
  for (const field of formData.entries()) {
    result[field[0]] = field[1];
  }
  return result;
}

// NOTE: Weight in JSON file is in lbs, height in inches
function getHumanData() {
  const formData = getFormData();
  return {
    species: 'human',
    name: formData['name'],
    height: Number(formData['feet']) * 12 + Number(formData['feet']),
    weight: formData['weight'],
    diet: formData['diet']
  };
}

function createInfographic() {
  const infographicPanel = new InfographicPanelBuilder()
    .withDinosData(dinosData.dinos)
    .withHumanData(getHumanData())
    .build();
  infographicPanel.render(elements.infographicContainer, 0);
}

function onFormSubmit(e) {
  e.preventDefault();
  hideForm();
  createInfographic();
}

(function onLoad() {
  elements.form.addEventListener('submit', onFormSubmit, false);
  elements.goBackButton.addEventListener('click', showForm, false);
})();

// Create Dino Constructor

// Create Dino Objects

// Create Human Object

// Use IIFE to get human data from form

// Create Dino Compare Method 1
// NOTE: Weight in JSON file is in lbs, height in inches.

// Create Dino Compare Method 2
// NOTE: Weight in JSON file is in lbs, height in inches.

// Create Dino Compare Method 3
// NOTE: Weight in JSON file is in lbs, height in inches.

// Generate Tiles for each Dino in Array

// Add tiles to DOM

// Remove form from screen

// On button click, prepare and display infographic
