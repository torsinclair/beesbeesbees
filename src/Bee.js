var Bee = function() {
  Grub.call(this);
  this.age = 5;
  this.color = 'yellow';
  this.job = 'keep on growing';
};

// Set Prototype as a new instance of Grub (the parent)
Bee.prototype = Object.create(Grub.prototype);
Bee.prototype.constructor = Bee;

// ^^^THIS IS WRONG^^^

//Bee.prototype = Object.create(Grub.prototype);

// Set constructor = Bee to 'control' flow
// override the prototype property
// constructor is a circular reference that helps the
// instance work out what its prototype is




