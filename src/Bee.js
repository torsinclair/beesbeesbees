var Bee = function() {
  this.age = 5;
  this.color = 'yellow';
  this.job = 'keep on growing';
};

// Set Prototype as a new instance of Grub (the parent)
Bee.prototype = new Grub();
// Set constructor = Bee to 'control' flow
Bee.prototype.constructor = Bee;


