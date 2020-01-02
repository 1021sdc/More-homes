const AWS = require('aws-sdk');
const secure = require('./secret/keys.js');

// update bucket name as needed
const bucket = 'more-homes-images';

const s3 = new AWS.S3({
  accessKeyId: secure.keyID,
  secretAccessKey: secure.key,
});

const params = {
  Bucket: bucket,
  CreateBucketConfiguration: {
    LocationConstraint: 'us-west-2',
  }
};

s3.createBucket(params, (err, data) => {
  if (err) console.log(`Error creating bucket... Err: ${err}... Err.stack: ${err.stack}`);
  else console.log(`Bucket "${bucket}" created successfully, ${data.location}`);
});
