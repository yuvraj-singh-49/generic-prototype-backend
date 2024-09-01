const {
  GetObjectCommand,
  PutObjectCommand,
  S3Client,
} = require("@aws-sdk/client-s3");
const fs = require("fs");

const credentials = {
  accessKeyId: process.env.ACCESS_KEY,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
};

const options = {
  keyPrefix: "uploads/",
  bucket: "trip-slips",
  region: "ap-south-1",
  link: "https://trip-slips.s3.ap-south-1.amazonaws.com/tmp/",
  successActionStatus: 201,
};

const client = new S3Client({
  region: options.region,
  credentials: credentials,
});

const s3Upload = async (fileData) => {
  try {
    const { filename, mimetype, path, originalname } = fileData;
    const fileType = originalname.split(".").pop();
    const file = {
      name: `${filename}.${fileType}`,
      type: mimetype,
      key: `tmp/${filename}.${fileType}`,
    };

    const fileContent = fs.readFileSync(path);

    return await client
      .send(
        new PutObjectCommand({
          Bucket: options.bucket,
          Key: file.key,
          Body: fileContent,
        })
      )
      .then(() => {
        return {
          success: true,
          key: file.key,
          s3Link: `${options.link}${file.name}`,
        };
      })
      .catch((error) => {
        return {
          success: false,
          error,
        };
      });
  } catch (error) {
    return {
      success: false,
      error,
    };
  }
};

exports.s3Upload = s3Upload;
