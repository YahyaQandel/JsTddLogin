var expect = require("chai").expect;
var user = require('./../app/user.js')
describe("Login ", function() {
	it("user module exist", function() {
		expect(user).to.not.be.undefined;
	});

	it("user login function exists", function() {
		expect(user.login("test","test")).equal(true);
	});
});