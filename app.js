const hero = {
  elementId: 'hero',
  name: 'Wizard',
  avatar: 'images/wizard.png',
  health: 60,
  diceRoll: [3, 1, 4],
  diceCount: 3,
};

const monster = {
  elementId: 'monster',
  name: 'Orc',
  avatar: 'images/orc.png',
  health: 10,
  diceRoll: [2],
  diceCount: 1,
};

function getDiceRollArray(diceCount) {
  const randNums = [];

  for (let i = 0; i < diceCount; i++) {
    const num = Math.floor(Math.random() * 6) + 1;
    randNums.push(num);
  }

  return randNums;
}

function renderCharacter(data) {
  const { elementId, name, avatar, health, diceRoll, diceCount } = data;

  const diceHtml = diceRoll.map(die => {
    return `<div class="dice">${die}</div>`;
  }).join('');

  document.getElementById(elementId).innerHTML = `<div class="character-card">
      <h4 class="name"> ${name} </h4>
      <img class="avatar" src="${avatar}" />
      <div class="health">health: <b> ${health} </b></div>
      <div class="dice-container">
          ${diceHtml} 
      </div>
   </div>`;
}

renderCharacter(hero);
renderCharacter(monster);
