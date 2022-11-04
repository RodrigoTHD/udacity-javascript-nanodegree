export const getRandomNumber = ({ lessThan }) =>
  Math.floor(Math.random() * lessThan);

export const getRandomDinoFact = (dinoData, humanData) => {
  let fact;
  const randomFactIndex =
    dinoData.species === 'Pigeon' ? 0 : getRandomNumber({ lessThan: 5 });

  switch (randomFactIndex) {
    case 0:
      fact = dinoData.fact;
      break;
    case 1:
      fact = `This species lived in ${dinoData.where}.`;
      break;
    case 2:
      fact = `This species was alive during the ${dinoData.when} period.`;
      break;
    case 3:
      fact = compareHeight(dinoData, humanData);
      break;
    case 4:
      fact = compareDiet(dinoData, humanData);
      break;
    case 5:
      fact = compareWeight(dinoData, humanData);
      break;
  }
  return fact;
};

const compareHeight = (dinoData, humanData) => {
  const heightRatio = (dinoData.height / humanData.height).toFixed(1);
  if (heightRatio > 1) {
    return `${dinoData.species} was ${(
      dinoData.height / humanData.height
    ).toFixed(1)} times taller than you!`;
  }
  if (heightRatio < 1) {
    return `You are ${(humanData.height / dinoData.height).toFixed(
      1
    )} times taller than ${dinoData.species}!`;
  }
  return `You are the same height as ${dinoData.species}!`;
};

const compareDiet = (dinoData, humanData) => {
  if (humanData.diet === dinoData.diet) {
    return `You are ${humanData.diet} and ${dinoData.species} was too!`;
  }
  return `This dino had a different diet than you. You are ${humanData.diet}, but ${dinoData.species} was a ${dinoData.diet}.`;
};

const compareWeight = (dinoData, humanData) => {
  const weightRatio = (dinoData.weight / humanData.weight).toFixed(1);
  if (weightRatio > 1) {
    return `${dinoData.species} weighed ${(
      dinoData.weight / humanData.weight
    ).toFixed(1)} times more than you!`;
  }
  if (weightRatio < 1) {
    return `You weigh ${(humanData.weight / dinoData.weight).toFixed(
      1
    )} times more than ${dinoData.species}!`;
  }
  return `You weigh the same as ${dinoData.species}!`;
};
