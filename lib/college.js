/**
 *
 * @namespace faker.college
 */
var college = function (faker) {
  
  var self = this;
  var f = faker.fake;
  
  /**
   * suffixes
   *
   * @method faker.college.suffixes
   */
  this.suffixes = function () {
    // Don't want the source array exposed to modification, so return a copy
    return faker.definitions.college.suffix.slice(0);
  }

  /**
   * collegeName
   *
   * @method faker.college.collegeName
   * @param {string} format
   */
  this.collegeName = function (format) {

    var formats = [
      '{{name.lastName}} {{college.collegeSuffix}}',
      '{{name.lastName}} - {{name.lastName}}',
      '{{name.lastName}}, {{name.lastName}} and {{name.lastName}}'
    ];

    if (typeof format !== "number") {
      format = faker.random.number(formats.length - 1);
    }

    return f(formats[format]);
  }

  /**
   * collegeSuffix
   *
   * @method faker.college.collegeSuffix
   */
  this.collegeSuffix = function () {
      return faker.random.arrayElement(faker.college.suffixes());
  }

  /**
   * catchPhrase
   *
   * @method faker.college.catchPhrase
   */
  this.catchPhrase = function () {
    return f('{{college.catchPhraseAdjective}} {{college.catchPhraseDescriptor}} {{college.catchPhraseNoun}}')
  }

  /**
   * bs
   *
   * @method faker.college.bs
   */
  this.bs = function () {
    return f('{{college.bsBuzz}} {{college.bsAdjective}} {{college.bsNoun}}');
  }

  /**
   * catchPhraseAdjective
   *
   * @method faker.college.catchPhraseAdjective
   */
  this.catchPhraseAdjective = function () {
      return faker.random.arrayElement(faker.definitions.college.adjective);
  }

  /**
   * catchPhraseDescriptor
   *
   * @method faker.college.catchPhraseDescriptor
   */
  this.catchPhraseDescriptor = function () {
      return faker.random.arrayElement(faker.definitions.college.descriptor);
  }

  /**
   * catchPhraseNoun
   *
   * @method faker.college.catchPhraseNoun
   */
  this.catchPhraseNoun = function () {
      return faker.random.arrayElement(faker.definitions.college.noun);
  }

  /**
   * bsAdjective
   *
   * @method faker.college.bsAdjective
   */
  this.bsAdjective = function () {
      return faker.random.arrayElement(faker.definitions.college.bs_adjective);
  }

  /**
   * bsBuzz
   *
   * @method faker.college.bsBuzz
   */
  this.bsBuzz = function () {
      return faker.random.arrayElement(faker.definitions.college.bs_verb);
  }

  /**
   * bsNoun
   *
   * @method faker.college.bsNoun
   */
  this.bsNoun = function () {
      return faker.random.arrayElement(faker.definitions.college.bs_noun);
  }
  
}

module['exports'] = college;