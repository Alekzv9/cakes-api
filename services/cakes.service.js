const Cake = require('../db/schemas/cake.schema');
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

const getByName = (name) => {
  return cakes.find((cake) => cake.name.toUpperCase() === name.toUpperCase());
};

exports.getAll = async () => {
  return cakes.slice();
};

exports.getById = async ({ id }) => {
  const cake = cakes[id];
  if (cake) {
    return cake;
  } else {
    throw new CustomError('Cake not found', 404);
  }
};

exports.create = async ({ name, price, flavors }) => {
  const cake = getByName(name);
  if (cake) {
    throw new CustomError('Cake duplicated', 400);
  }
  cakes.push({ name, price, flavors });
};

exports.update = async ({ id }, { name, price, flavors }) => {
  let cake = getByName(name);
  if (cake) {
    throw new CustomError('Cake duplicated', 400);
  }
  cake = cakes[id];
  if (!cake) {
    throw new CustomError('Cake not found', 404);
  }
  cake.name = name;
  cake.price = price;
  cake.flavors = flavors;
  return cake;
};

exports.delete = async ({ id }) => {
  cakes.splice(id, 1);
  return cakes;
};
