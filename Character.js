import { getDiceRollArray, getDicePlaceholderHtml, getPercentage } from './utils.js';


  class Character {
    constructor(data) {
      Object.assign(this, data);
      this.diceHtml = getDicePlaceholderHtml(this.diceCount);
      this.maxHealth = this.health;
    }

    getCharacterHtml() {
      const { name, avatar, health, diceCount, diceHtml } = this;
      const healthBar = this.getHealthBarHtml();

      return `
      <div class="character-card">
        <h4 class="name"> ${name} </h4>
        <img class="avatar" src="${avatar}" />
        <div class="health">health: <b> ${health} </b></div>
        ${healthBar}
        <div class="dice-container">
            ${diceHtml}
        </div>
      </div>`;
    };

    takeDamage(attackScoreArray) {
      const totalAttackScore = attackScoreArray.reduce(
        (total, currentDieValue) => total + currentDieValue
      );

      this.health -= totalAttackScore;

      if (this.health <= 0) {
        this.dead = true;
        this.health = 0;
      }
    };

    getHealthBarHtml() {
      const percent = getPercentage(this.health, this.maxHealth);

      return `
        <div class="health-bar-outer">
          <div class="health-bar-inner ${percent < 26 ? "danger" : ""}"
            style="width: ${percent}%;">
          </div>
        </div>`;
    }

    setDiceHtml() {
      this.currentDiceScore = getDiceRollArray(this.diceCount);
      this.diceHtml = this.currentDiceScore
        .map((num) => `<div class='dice'>${num}</div>`)
        .join("");
    };
  };

export default Character;
