/**
 *
 * @namespace faker.mobile
 */
var Mobile = function (faker) {
  var self = this;
  var fake = faker.fake;

  /**
   * mobile
   *
   * @method faker.mobile.mobile
   */
  self.mobile = function () {
    return fake('{{mobile.manufacturer}} {{mobile.model}}');
  };

  self.mobile.schema = {
    "description": "Generates a random mobile.",
    "sampleResults": ["Samsung Samsung Guru Music 2", "Nokia Nokia 6.1 Plus", "Iphone Apple iPhone 11 pro"]
  };

  /**
   * manufacturer
   *
   * @method faker.mobile.manufacturer
   */
  self.manufacturer = function () {
    return faker.random.arrayElement(faker.definitions.mobile.manufacturer);
  };

  self.manufacturer.schema = {
    "description": "Generates a manufacturer name.",
    "sampleResults": ["Samsung", "Nokia", "LG"]
  };


  /**
   * model
   *
   * @method faker.mobile.model
   */
  self.model = function () {
    return faker.random.arrayElement(faker.definitions.mobile.model);
  };

  self.model.schema = {
    "description": "Generates a mobile model.",
    "sampleResults": ["Samsung Guru Music 2", "Nokia Nokia 6.1 Plus", "Iphone Apple iPhone 11 pro"]
  };

  /**
   * type
   *
   * @method faker.mobile.type
   */
  self.type = function () {
    return faker.random.arrayElement(faker.definitions.mobile.type);
  };

  self.type.schema = {
    "description": "Generates a mobile type.",
    "sampleResults": ["GSM","CDMA"]
  };

  
module["exports"] = mobile;
