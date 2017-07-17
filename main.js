console.log("main.js file connected");

//###################################################################
//        __
//   ____/ /___  ____ ______
//  / __  / __ \/ __ `/ ___/
// / /_/ / /_/ / /_/ (__  )
// \__,_/\____/\__, /____/
//            /____/

// Dog Constructor & Prototype
function Dog (status, pet, color, human, hungry) {
  'use strict'
  this.status = status;
  this.pet = pet;
  this.color = color;
  this.human = human;
  this.hungry = hungry;
};

// Instances of Dog
// Needed: sadie, moonshine, atticus

let sadie = new Dog('normal', true, 'black', '', false);

// let moonshine = new Dog('')

// let moonshine = new Dog('hungry')

//     __
//    / /_  __  ______ ___  ____ _____  _____
//   / __ \/ / / / __ `__ \/ __ `/ __ \/ ___/
//  / / / / /_/ / / / / / / /_/ / / / (__  )
// /_/ /_/\__,_/_/ /_/ /_/\__,_/_/ /_/____/

// Human Constructor & Prototype
function Human (name, feed, owner, cool) {
  this.name = name;
  this.feed = feed;
  this.owner = owner;
  this.cool = cool;
}

// Instances of Human
// Needed: mason, julia

let human = new Human('mason');
