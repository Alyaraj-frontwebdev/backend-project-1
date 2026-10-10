const image_kit = require("@imagekit/nodejs");
const imagekit = new image_kit(
    {
        privateKey: process.env["IMAGEKIT_PRIVATE_KEY"]
    }
);
async function uploadFile(buffer) {
    const result = await imagekit.files.upload({
        file: buffer.toString("base64"),
        fileName: "clickerhappy-beach-front-5819728_1920.jpg"
    });

    return result;
}

module.exports = uploadFile;
