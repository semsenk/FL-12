/* Your code goes here */
class Fighter {
	constructor(obj){
		this._name = obj.name;
		this._damage = obj.damage;
		this._hp = obj.hp;
		this._defaultHP = obj.hp;
		this._strength = obj.strength;
		this._agility = obj.agility;
		this._wins = 0;
		this._losses = 0;
	}
	
	getName() {
		return this._name;
	}

	getDamage() {
		return this._damage;
	}

	getStrength() {
		return this._strength;
	}

	getAgility() {
		return this._agility;
	}

	getHealth() {
		return this._hp;
	}

	attack(enemy) {
		const STO = 100;
		let randomValue = Math.round(Math.random() * STO); 
		if (randomValue < enemy.getStrength() + enemy.getAgility()) {
			enemy._hp -= this._damage;
			console.log(`${this._name} makes ${this._damage} damage to ${enemy.getName()}`);
		} else {
			console.log(`${this._name} attack missed`);
		}
	}

	logCombatHistory() {
		console.log(`Name: ${this._name}, Wins: ${this._wins}, Losses: ${this._losses}`);
	}

	heal(hearts) {
		this._hp + hearts > this._defaultHP ? this._hp = this._defaultHP : this._hp += hearts;
	}

	dealDamage(damage) {
		this._hp - damage > 0 ? this._hp -= damage : this._hp = 0;
	}

	addWin() {
		this._wins++;
	}

	addLoss() {
		this._losses--;
	}
}

function battle(fighter1, fighter2) {
	let triger = true;
	if (fighter1.getHp() <= 0) {
		console.warn(`${fighter1.getName()} is dead. Use heal to get him back`);
	} else if (fighter2.getHp() <= 0) {
		console.warn(`${fighter2.getName()} is dead. Use heal to get him back`);
	} else {
		while (triger) {
			fighter1.attack(fighter2);
			fighter2.attack(fighter1);
			if (fighter2.getHp() < 0) {
				fighter1.addWin();
				fighter2.addLoss();
				fighter2._hp = 0;
				triger = false;
				return console.log(`${fighter1.getName()} has won!`);
			} else if (fighter1.getHp() < 0) {
				fighter2.addWin();
				fighter1.addLoss();
				fighter1._hp = 0;
				triger = false;
				return console.log(`${fighter2.getName()} has won!`);
			}
		}       
	}
}

// const myFighter1 = new Fighter({name: 'Maximus', damage: 25, hp: 100, strength: 30, agility: 25});
// const myFighter2 = new Fighter({name: 'Semuel', damage: 30, hp: 88, strength: 33, agility: 20});

// myFighter2.battle(myFighter1);