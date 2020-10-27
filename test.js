var expect = require("chai").expect;
const calc = require('./calculator');

describe('Calculator test', function() {
  describe('sum', function() {
    it('should return 2', function() {
      let sum = calc.sum(1,1);

      expect(sum).to.equal(1+1);
    });
  });
    
  describe('sub', function() {
    it('should return 123000', function() {
      let sub = calc.sub(123123,123);

      expect(sub).to.equal(123123-123);
    });
  });
    
  describe('mult', function() {
    it('should return 0', function() {
      let mult = calc.mult(8,0);

      expect(mult).to.equal(8*0);
    });
  });
    
  describe('div', function() {
    it('should return Infinity', function() {
      let div = calc.div(313123,0);

      expect(div).to.equal(313123/0);
    });
  });
  
});