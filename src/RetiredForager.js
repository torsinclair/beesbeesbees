var RetiredForagerBee = function() {
  this.age = 40;
  this.job = 'gamble';
  this.canFly = false;
  this.color = 'grey';
};

// create the subclass relationship
RetiredForagerBee.prototype = new ForagerBee();

RetiredForagerBee.prototype.constructor = RetiredForagerBee;


RetiredForagerBee.prototype.forage = function(){
  var str = "I am too old, let me play cards instead";
  return str;
};

RetiredForagerBee.prototype.gamble = function(treasure){
  this.treasureChest.push(treasure);
};