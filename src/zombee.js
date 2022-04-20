var ZombeezDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
};

ZombeezDancer.prototype = Object.create(MakeDancer.prototype);
ZombeezDancer.prototype.constructor = MakeDancer;

ZombeezDancer.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
  this.$node.toggle();
};