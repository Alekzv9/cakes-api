const CustomError = require('../util/icustomError');
const cakes = [
  {
    name: 'Master cake',
    price: 11.99,
    flavors: ['orange', 'strawberry'],
  },
  {
    name: 'Medium cake',
    price: 10.99,
    flavors: ['apple', 'pineapple'],
  },
];

exports.getCakes = async () => {
  throw new CustomError('Cakes failed', 400);
  return cakes.slice();
};
