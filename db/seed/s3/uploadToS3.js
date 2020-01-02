const AWS = require('aws-sdk');
const secure = require('./secret/keys.js');
const request = require('request');

const bucket = 'more-homes-images';

const s3 = new AWS.S3({
  accessKeyId: secure.keyID,
  secretAccessKey: secure.key,
});

const params = {
  Bucket: bucket,
  Key: '',
  ContentType: "image/jpeg",
  Body: '',
};

const imgUp = (batchID, fileID) => {
  let corgi = 'https://loremflickr.com/360/230/corgi,christmas';
  request({
    url: corgi,
    encoding: null,
  }, (err, data) => {
    if (err) console.log ('Request error: ', err);
    if (data && data.body) {
      params.Body = data.body;
      params.Key = `image/${batchID}/${fileID}.jpeg`;
      s3.upload(params, (err, data) => {
        if (err) console.log(`Upload error... Err: ${err}... err.stack: ${err.stack}`);
        else console.log(`Upload successfull of ${data.key}`);
        let responseData = JSON.stringify(data);
        console.log(`Response data: ${responseData}`);
      });
    }
  });
};

for (let i = 1; i <= 100; i++) {
  setTimeout(() => {imgUp('1', i)}, 3000);
  setTimeout(() => {imgUp('2', i)}, 8000);
  setTimeout(() => {imgUp('3', i)}, 15000);
  setTimeout(() => {imgUp('4', i)}, 24000);
  setTimeout(() => {imgUp('5', i)}, 35000);
  setTimeout(() => {imgUp('6', i)}, 43000);
  setTimeout(() => {imgUp('7', i)}, 58000);
  setTimeout(() => {imgUp('8', i)}, 75000);
  setTimeout(() => {imgUp('9', i)}, 94000);
  setTimeout(() => {imgUp('10', i)}, 115000);
}
