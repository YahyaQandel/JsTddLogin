var config = {};

config.host = 'localhost';
config.port =  3030;
config.server_url  = "http://"+config.host+":"+config.port
config.SUCCEED_TEST_USERNAME = "test@mail.com"
config.FAILEED_TEST_USERNAME = "testuser"
config.SUCCEED_TEST_PASSWORD = "test"
config.FAILED_TEST_PASSWORD = "test"

module.exports = config;