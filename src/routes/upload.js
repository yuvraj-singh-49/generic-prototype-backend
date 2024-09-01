const { s3Upload } = require("../utilities/aws/s3Upload");
const fs = require("fs");

const uploadFile = async (files) => {
  const promiseList = [];
  const result = [];

  for (let file of files) {
    promiseList.push(s3Upload(file));
  }

  try {
    const promiseResult = await Promise.all(promiseList);

    promiseResult.forEach((res) => {
      result.push(res.s3Link);
    });

    for (let file of files) {
      fs.unlinkSync(`/tmp/${file?.filename}`);
    }
  } catch (e) {
    console.error("error while uploading files:", e);
  }

  return result;
};

exports.uploadFile = uploadFile;
