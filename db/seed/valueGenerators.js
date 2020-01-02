const faker = require('faker');

const imageURL = () => {
  const dir = faker.random.number({
    min: 1,
    max: 10,
  });
  const file = faker.random.number({
    min: 1,
    max: 100,
  });
  return `https://more-homes-images.s3-us-west-2.amazonaws.com/image/${dir}/${file}.jpeg`
}

const house = {
  size: '',

  type: () => {
    const typePrefix = [
      'Entire', 'Private', 'Shared',
    ];
    const typeSuffix = [
      'house', 'apartment', 'room', 'villa', 'trullo',
    ];
    let randomPrefix = faker.random.number({
      min: 0,
      max: 2,
    })
    let randomSuffix = faker.random.number({
      min: 0,
      max: 4,
    })
    let status = typePrefix[randomPrefix];
    size = typeSuffix[randomSuffix];
    return status + ' ' + size;
  },

  cost: () => {
    if (size === 'house') {
      return faker.random.number({
        min: 85,
        max: 12500
      })
    }
    if (size === 'apartment') {
      return faker.random.number({
        min: 99,
        max: 3000,
      })
    }
    if (size === 'room') {
      return faker.random.number({
        min: 25,
        max: 250,
      })
    }
    if (size === 'villa') {
      return faker.random.number({
        min: 220,
        max: 20000,
      })
    }
    if (size === 'trullo') {
      return faker.random.number({
        min: 70,
        max: 500,
      });
    }
  }
};

const location = () => {
  let newLoc = faker.address.city();
  if (newLoc.includes("'")) {
    console.log('Running again because: ', newLoc);
    newLoc = location();
  }
  return newLoc;
};

const description = () => {
  const _ = ' ';
  const a = ['Cozy', 'Spacious', 'Modern', 'Upscale', 'Classic', 'Unique', 'Hidden', 'Quiet', 'Safe', 'Charming'];
  const b = ['studio', 'weekender', 'gem', 'weekender', 'studio', 'cottage', 'manor'];
  const c = ['near', 'adjacent to', 'surrounded by', 'nestled close to', 'nearby', 'close by', 'a short way from'];
  const d = ['the mountains', 'the beach', 'the city', 'farmland', 'shopping'];
  const pick = (set) => Math.floor(Math.random() * (set.length - 1));
  return a[pick(a)] + _ + b[pick(b)] + _ + c[pick(c)] + _ + d[pick(d)];
};

const rating = () => {
  let leftOfDec = faker.random.number({
    min: 0,
    max: 5,
  });
  let rightOfDec = faker.random.number({
    min: 0,
    max: 9,
  });
  return `${leftOfDec}.${rightOfDec}`;
};

const votes = () => (
  faker.random.number({
    min: 0,
    max: 1200,
  })
);

module.exports = {
  imageURL: imageURL,
  houseType: house.type,
  location: location,
  description: description,
  cost: house.cost,
  rating: rating,
  votes: votes,
};
