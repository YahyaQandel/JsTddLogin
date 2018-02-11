var expect = require("chai").expect;

describe("Login ", function() {
	it("user login function should exist", function() {
		var user = require('./../app/user.js')
		expect(user).to.not.be.undefined;
	});
});