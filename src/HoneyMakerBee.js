var HoneyMakerBee = function() {
  Bee.call(this);
  this.age = 10;
  this.job = 'make honey';
  this.honeyPot = 0;
};

// set honeymakerbee.prototype to look through to bee
HoneyMakerBee.prototype = Object.create(Bee.prototype);

HoneyMakerBee.prototype.makeHoney = function(){
  this.honeyPot++;
};

HoneyMakerBee.prototype.giveHoney = function(){
  this.honeyPot--;
};

// set constructor so we can override stuff using our honeymakebee
HoneyMakerBee.prototype.constructor = HoneyMakerBee;

