
var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  this.class = 'winkyDancer';
  makeDancer.call(this, top, left, timeBetweenSteps);
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;


makeBlinkyDancer.prototype.step = function () {
  makeDancer.prototype.step.call(this); 
  this.$node.toggle();
};