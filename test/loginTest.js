var expect = require("chai").expect;
var config = require("./../config");
var request = require("request");
var server_url = config.server_url;


describe("Login ", function() {

	it("user login fails ", function(done) {
		var login_url = server_url+"/login?username="+config.FAILEED_TEST_USERNAME+"&password="+config.FAILEED_TEST_PASSWORD;
		  	request(login_url,function(error,response,body){
		  	expect(body).to.equal(false);
		});
		done();
	});

	it("user login succeed ", function(done) {
		var login_url = server_url+"/login?username="+config.SUCCEED_TEST_USERNAME+"&password="+config.FAILEED_TEST_PASSWORD;
		  	request(login_url,function(error,response,body){
		  	expect(body).to.equal(true);
		});
		done();
	});

});