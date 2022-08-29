import { getDiceRollArray, getDicePlaceholderHtml } from './utils.js';

function Character(data) {
  Object.assign(this, data);

  this.diceArray = getDicePlaceholderHtml(this.diceCount);

  this.getCharacterHtml = function () {
    const { name, avatar, health, diceCount, diceArray } = this;

    return `
      <div class="character-card">
        <h4 class="name"> ${name} </h4>
        <img class="avatar" src="${avatar}" />
        <div class="health">health: <b> ${health} </b></div>
        <div class="dice-container">
            ${diceArray} 
        </div>
      </div>`;
  };

  this.takeDamage = function(attackScoreArray) {
    const totalAttackScore = attackScoreArray.reduce(function(total, currentDieValue) {
      return total + currentDieValue;
    });

    this.health -= totalAttackScore;

    if (this.health <= 0) {
      this.dead = true;
      this.health = 0;
    }
  };

  this.getDiceHtml = function() {
    this.currentDiceScore = getDiceRollArray(this.diceCount);
    this.diceArray = this.currentDiceScore.map(function(num) {
      return `<div class='dice'>${num}</div>`;
    }).join('');
  };
}

export default Character;
