const articles = require('../models/articles');
const db = require('../models/db');
const methods = require('../models/methods');
const users = require('../models/users');
const videos = require('../models/videos');

const chai = require('chai');
const expect = chai.expect;
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised).should();



// describe('Restaurant model', ()=>{
//     it('should be able to grab an array of restaurants',async ()=>{
//         const arrayOfRestaurants = await Restaurant.getAll()
//         expect(arrayOfRestaurants).to.be.instanceOf(Array);
//     });
// });


