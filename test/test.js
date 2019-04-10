const methods = require('../models/methods')




const chai = require('chai');
const expect = chai.expect;
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised).should();




describe('Sanity check', function (){
    it('should be 2', function (){
        expect(1 + 1).to.equal(2);
    });
});