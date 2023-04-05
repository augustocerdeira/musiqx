const userController = require("../controllers/user.controller");
const { authenticate } = require("../config/jwt.config");
const multer = require("multer");
const {v4: uuidv4} = require("uuid");
let path = require('path');

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, 'images');
    },
    filename: function(req, file, cb){
        cb(null, uuidv4() + '_' + Date.now() + path.extname(file.originalname));
    }
});

const fileFilter = (req,file,cb) => {
    const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png', 'audio/mp3', 'audio/wav', 'audio/aiff'];
    if(allowedFileTypes.includes(file.mimetype)){
        cb(null, true);
    }else{
        cb(null, false);
    }
}

let upload = multer({storage, fileFilter});

module.exports = app => {
    app.post("/api/register",upload.single('photo', 'banner'), userController.register);
    // app.post("/api/register", userController.register);
    app.post("/api/login", userController.login);
    app.post("/api/logout", userController.logout);

    app.get('/api/users/:id', userController.findOne);
    app.get('/api/user', userController.findAllUser);
    app.put('/api/users/:id', userController.updateUser);
    app.put('/api/image/:id', upload.single('photo'), userController.updateImage);
    app.put('/api/banner/:id', upload.single( 'banner'), userController.updateBanner);
    app.put('/api/track/:id', upload.single( 'track1'), userController.updateTrack);
    app.put('/api/track2/:id', upload.single( 'track2'), userController.updateTrack2);
    app.put('/api/track3/:id', upload.single( 'track3'), userController.updateTrack3);

    app.delete('/api/users/:id', userController.deleteUser);

    // auth route
    app.get("/api/users", authenticate, userController.getAll);
    app.get("/api/users/loggedin", authenticate, userController.getLoggedInUser);
};