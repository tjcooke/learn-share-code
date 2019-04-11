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
    it('should be able to retrieve methods by id', async () => {
        const theId = await methods.getById(1);
        console.log(theId)
        theId.should.be.an.instanceOf(methods)
    })
    it('should be able to get all items by language', async () => {
        const methodAll = await methods.getAll('JavaScript');
        console.log(methodAll)
        methodAll[0].should.be.an.instanceOf(methods)
    })
})
