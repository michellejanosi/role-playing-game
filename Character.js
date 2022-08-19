import { getDiceRollArray, getDicePlaceholderHtml } from './utils.js';

function Character(data) {
  Object.assign(this, data);

  this.diceArray = getDicePlaceholderHtml(this.diceCount);

  this.getCharacterHtml = function () {
    const { name, avatar, health, diceCount } = this;
    const diceHtml = this.getDiceHtml(diceCount);

    return `
      <div class="character-card">
        <h4 class="name"> ${name} </h4>
        <img class="avatar" src="${avatar}" />
        <div class="health">health: <b> ${health} </b></div>
        <div class="dice-container">
            ${this.diceArray} 
        </div>
      </div>`;
  };

  this.getDiceHtml = function (diceCount) {
    return getDiceRollArray(diceCount)
      .map(function (die) {
        return `<div class="dice">${die}</div>`;
      })
      .join('');
  };
}

export default Character;
