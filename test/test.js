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

describe('Methods models', () => {
    it('should be able to retrieve by method name', async () => {
        const theMethod = await methods.getByMethod('forEach');
        theMethod.should.be.an.instanceOf(methods);
    })
    it('should be able to retrieve method by ID', async () => {
        const theId = await methods.getById(1);
        theId.should.be.an.instanceOf(methods)
    })
})
console.log