const express = require("express");
const router = express.Router();
const upload = require('../../services/file-upload');

const singleUpload = upload.single('image');

router.post('/image-upload', function(req, res) {
    singleUpload(req, res, function(err) {
        if (err) {
            return res.status(422).send({errors: [{title: 'File Upload Error', detail: err.message}] })
        } else if (req.file.location) {
            return res.json({'imageUrl': req.file.location});
        } else {
            return res.status(422).send({errors: [{title: 'File Upload Error', detail: "file upload error"}] })
        }
    });
});

module.exports = router;