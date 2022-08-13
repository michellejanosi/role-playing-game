const hero = {
  elementId: 'hero',
  name: 'Wizard',
  avatar: 'images/wizard.png',
  health: 60,
  diceRoll: 6,
};

const monster = {
  elementId: 'monster',
  name: 'Orc',
  avatar: 'images/orc.png',
  health: 10,
  diceRoll: 4,
};

function renderCharacter(data) {
  const { elementId, name, avatar, health, diceRoll } = data;
  document.getElementById(elementId).innerHTML = 
  `<div class="character-card">
      <h4 class="name"> ${name} </h4>
      <img class="avatar" src="${avatar}" />
      <div class="health">health: <b> ${health} </b></div>
      <div class="dice-container">
          <div class="dice"> ${diceRoll} </div>
      </div>
   </div>`;
}

renderCharacter(hero);
renderCharacter(monster);
