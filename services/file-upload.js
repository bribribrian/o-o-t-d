const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');
const keys = require('../config/keys');
 
aws.config.update({
    secretAccessKey: keys.secretAccessKey,
    accessKeyId: keys.accessKeyId,
    region: 'us-east-1'
});


const s3 = new aws.S3();
 
const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true)
    } else {
        cb(new Error('Invalid file type, please use JPEG or PNG only.'), false);
    }
}

const upload = multer({
    fileFilter: fileFilter,
    storage: multerS3({
        s3: s3,
        bucket: 'ootd-dev',
        acl: 'public-read',
        metadata: function (req, file, cb) {
            cb(null, {fieldName: 'TESTING_META_DATA!'});
        },
        key: function (req, file, cb) {
            cb(null, file.originalname)
        }
    })
})
module.exports = upload;
// app.post('/upload', upload.array('photos', 3), function(req, res, next) {
//   res.send('Successfully uploaded ' + req.files.length + ' files!')
// })