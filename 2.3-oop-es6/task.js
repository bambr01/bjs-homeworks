// Задача 1
class Weapon {
    constructor({name, attack, durability, range}) {
        this.name = name;
        this.attack = attack;
        this.durability = durability;
        this.restDurability = durability;
        this.range = range;
    }
  
    takeDamage(damage) {
        this.durability = this.durability - damage;
        this.durability = this.durability < 0 ? 0 : this.durability;
    }
  
    getDamage() {
        if (this.durability === 0) {
            return 0;
        } else if (this.durability >= (0.3 * this.restDurability)) {
            return this.attack;
        } else {
            return this.attack/2;
        }
    }
  
    isBroken() {
        if (this.durability === 0) {
            return true;
        } else {
            return false;
        }
    }
}
  
// let name = '';

function weapons(weapon) {
    switch (weapon) {
        case 'arm':
            const arm = new Weapon({'name':'Рука', 'attack':1, 'durability':Infinity, 'range':1});
            name = arm;
        break;
        case 'bow':
            const bow = new Weapon({'name':'Лук', 'attack':10, 'durability':200, 'range':3});
            name = bow;
        break;
        case 'sword':
            const sword = new Weapon({'name':'Меч', 'attack':25, 'durability':500, 'range':1});
            name = sword;
        break;
        case 'knife':
            const knife = new Weapon({'name':'Нож', 'attack':5, 'durability':300, 'range':1});
            name = knife;
        break;
        case 'staff':
            const staff = new Weapon({'name':'Посох', 'attack':8, 'durability':300, 'range':2});
            name = staff;
        break;
        case 'longBow':
            const longBow = new Weapon({'name':'Длинный лук', 'attack':15, 'durability':200, 'range':4});
            name = super_longBow;
        break;
        case 'axe':
            const axe = new Weapon({'name':'Секира', 'attack':27, 'durability':800, 'range':1});
            name = axe;
        break;
        case 'stormStaff':
            const stormStaff = new Weapon({'name':'Посох Бури', 'attack':10, 'durability':300, 'range':2});
            name = stormStaff;
        break;
    }
}
  
function damageWeapon(what) {
    if (name.isBroken() == false) {
        if (what == 'get') {
            window.statused.innerText = `Вы нанесли урон: ${name.getDamage()}`;
        } else {
            if (window.damaged.value == '') {
                window.statused.innerText = 'Введите наносимый урон!'
                return 0;
            }
            window.durabilited.innerText = name.takeDamage(window.damaged.value);
            window.statused.innerText = `Вы получили урон: ${window.damaged.value}`;
        }
    } else {
        window.statused.innerText = 'Ваше оружие сломано!'
    }
}
  
// Задача №2
class Arm extends Weapon {
    constructor() {
        super({'name':'Рука', 'attack':1, 'durability':Infinity, 'range':1});
    }
}
  
class Bow extends Weapon {
    constructor() {
        super({'name':'Лук', 'attack':10, 'durability':200, 'range':3});
    }
}
  
class Sword extends Weapon {
    constructor() {
        super({'name':'Меч', 'attack':25, 'durability':500, 'range':1});
    }
}

class Knife extends Weapon {
    constructor() {
        super({'name':'Нож', 'attack':5, 'durability':300, 'range':1});
    }
}

class Staff extends Weapon {
    constructor() {
        super({'name':'Посох', 'attack':8, 'durability':300, 'range':2});
    }
}

class LongBow extends Bow {
    constructor() {
        super();
        this.name = 'Длинный лук';
        this.attack = 15;
        this.range = 4;
    }
}

class Axe extends Sword {
    constructor() {
        super();
        this.name = 'Секира';
        this.attack = 27;
        this.durability = 800;
    }
}

class StormStaff extends Staff {
    constructor() {
        super();
        this.name = 'Посох Бури';
        this.attack = 10;
        this.range = 3;
    }
}

const sword = new Sword("Меч");
const arm = new Arm("Рука");
const bow = new Bow("Лук");
const knife = new Knife("Нож");
const staff = new Staff("Посох");

const longBow = new LongBow("Длинный лук");
const axe = new Axe("Секира");
const stormStaff = new StormStaff("Посох Бури");
