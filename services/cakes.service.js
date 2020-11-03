const Cake = require('../db/schemas/cake.schema');
const CustomError = require('../util/icustomError');

exports.getAll = async () => {
  const cakes = await Cake.find({}).select('-__v');
  return cakes;
};

exports.getById = async ({ id }) => {
  const cake = await Cake.findById(id).select('-__v');
  if (cake) {
    return cake;
  } else {
    throw new CustomError('Cake not found', 404);
  }
};

exports.create = async ({ name, price, flavors }) => {
  const cake = await Cake.findOne({ name });
  if (cake) {
    throw new CustomError('Cake duplicated');
  }

  const newCake = new Cake({ name, price, flavors }).save();

  return newCake;
};

exports.update = async ({ id }, { name, price, flavors }) => {
  const cake = await Cake.findById(id);
  if (!cake) {
    throw new CustomError('Cake not found', 404);
  }
  const newCake = {
    name: name || cake.name,
    price: price,
    flavors: flavors,
  };

  await Cake.findByIdAndUpdate(id, newCake);

  return newCake;
};

exports.delete = async ({ id }) => {
  const cake = await Cake.findOneAndDelete({ _id: id });
  if (cake) {
    return cake;
  }
  throw new CustomError('Cake not found', 404);
};
