const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const res = {};

  domains
    .map((el) => el.split("."))
    .forEach((elem) =>
      elem.reverse().forEach((el, i) => {
        if ([`.${[...elem].slice(0, i + 1).join(".")}`] in res) {
          res[`.${[...elem].slice(0, i + 1).join(".")}`]++;
        } else {
          res[`.${[...elem].slice(0, i + 1).join(".")}`] = 1;
        }
      })
    );

  return res;
}

module.exports = {
  getDNSStats
};
