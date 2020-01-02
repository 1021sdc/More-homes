const gen = require('./valueGenerators.js');
const fs = require('fs');

const genListing = () => {
  const fakeHome = {
    image: gen.imageURL(),
    house_type: gen.houseType(),
    location: gen.location(),
    description: gen.description(),
    cost_per_night: gen.cost(),
    rating: gen.rating(),
    votes: gen.votes(),
  };
  return fakeHome;
};

const writeListings = fs.createWriteStream('./fakeHomes.csv', {flags: 'a'});

const seed = (writer, encoding, cb) => {
  let i = 10000000;
  let listingID = 0;
  function write() {
    let ok = true;
    do {
      i -= 1;
      listingID += 1;
      let dbData = genListing();
      dbData.listingID = listingID; // remember to remove from script when recreating db info on EC2, decreases load in time to postgres, also remember to add in listingid col after adding into table
      let data = `${dbData.listingID},'${dbData.image}','${dbData.house_type}','${dbData.location}','${dbData.description}',${dbData.cost_per_night},${dbData.rating},${dbData.votes}\n`;
      if (i === 0) {
        writer.write(data, encoding, cb);
      } else {
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  }
  write();
};

seed(writeListings, 'utf-8', () => {
  writeListings.end();
});

console.log('.csv created!');
