const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {secret} = require("../config/jwt.config");


module.exports = {
    register: (req, res) => {
        // const username = req.body.username;
        // const email = req.body.email;
        // const password = req.body.password;
        // const confirm = req.body.confirm;
        // const location = req.body.location;
        // const usertype = req.body.usertype;
        // const photo = req.file.filename;
        // const banner = req.file.filename;

        // const newUser = {
        //     // username,
        //     // email,
        //     // password,
        //     // location,
        //     // usertype,
        //     photo,
        //     banner
        // }

        // const user = new User(newUser);

        // console.log("from reg" + req.body)
        const user = new User(req.body);

        user
            .save()
            .then(() => {
                res.json({ msg: "success!", user: user });
            })
            .catch((err) => res.status(400).json(err));
    },

    login(req, res) {
        User.findOne({ email: req.body.email })
        console.log("from login" + User) 
            .then((user) => {
                console.log("test" + user)
                if (user === null) {
                    res.status(400).json({ msg: "invalid login attempt" });
                } else {
                    bcrypt
                        .compare(req.body.password, user.password)
                        .then((passwordIsValid) => {
                            if (passwordIsValid) {
                                res
                                    .cookie(
                                        "usertoken",
                                        jwt.sign({ _id: user._id }, secret),
                                        {
                                            httpOnly: true,
                                        }
                                    )
                                    .json({ msg: "success!" });
                            } else {
                                res.status(400).json({ msg: "invalid login attempt" });
                            }
                        })
                        .catch((err) =>
                            res.status(400).json({ msg: "invalid login attempt" })
                        );
                }
            })
            .catch((err) => res.json(err));
    },

    logout(req, res) {
        res
            .cookie("usertoken", jwt.sign({ _id: "" }, secret), {
                httpOnly: true,
                maxAge: 0,
            })
            .json({ msg: "ok" });
    },

    logout2(req, res) {
        res.clearCookie("usertoken");
        res.json({ msg: "usertoken cookie cleared" });
    },

    getLoggedInUser(req, res) {
        const decodedJWT = jwt.decode(req.cookies.usertoken, { complete: true });

        User.findById(decodedJWT.payload._id)
        console.log("from logged" + user)
            .then((user) => res.json(user))
            .catch((err) => res.json(err));
    },

    getAll(req, res) {
        User.find()
            .then((users) => res.json(users))
            .catch((err) => res.json(err));
    },

    getOne(req, res) {
        User.findOne({ _id: req.params.id })
            .then(user => res.json(user))
            .catch((err) => res.json(err));
    },

    findOne : (req, res) => {
        User.findOne({ _id: req.params.id })
            .then(oneUser => res.json({ user: oneUser }))
            .catch(err => res.json({ message: 'Something went wrong', error: err }));
    },

    findAllUser : (req, res) => {
        User.find()
            .then(allTheUser => res.json({ user: allTheUser}))
            .catch(err => res.json({ message: 'Something went wrong', error: err }));
},

updateUser : (req, res) => {
    User.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedUser => res.json({ user: updatedUser }))
        .catch(err => res.status(400).json(err))
},

updateImage : (req, res) => {
    const photo = req.file.filename;
    const banner = req.file.filename;

    const newUser = {
        photo,
        banner
    }
User.findOneAndUpdate(
    { _id: req.params.id },
    newUser,
    { new: true, runValidators: true }
)
    .then(updatedUser => res.json({ user: updatedUser }))
    .catch(err => res.status(400).json(err))
},

updateBanner : (req, res) => {
    const banner = req.file.filename;

    const newBanner = {
        banner
    }
User.findOneAndUpdate(
    { _id: req.params.id },
    newBanner,
    { new: true, runValidators: true }
)
    .then(updatedUser => res.json({ user: updatedUser }))
    .catch(err => res.status(400).json(err))
},

updateTrack : (req, res) => {
    const track1 = req.file.filename;

    const newTrack = {
        track1
    }
User.findOneAndUpdate(
    { _id: req.params.id },
    newTrack,
    { new: true, runValidators: true }
)
    .then(updatedUser => res.json({ user: updatedUser }))
    .catch(err => res.status(400).json(err))
},

updateTrack2 : (req, res) => {
    const track2 = req.file.filename;

    const newTrack2 = {
        track2
    }
User.findOneAndUpdate(
    { _id: req.params.id },
    newTrack2,
    { new: true, runValidators: true }
)
    .then(updatedUser => res.json({ user: updatedUser }))
    .catch(err => res.status(400).json(err))
},

updateTrack3 : (req, res) => {
    const track3 = req.file.filename;

    const newTrack3 = {
        track3
    }
User.findOneAndUpdate(
    { _id: req.params.id },
    newTrack3,
    { new: true, runValidators: true }
)
    .then(updatedUser => res.json({ user: updatedUser }))
    .catch(err => res.status(400).json(err))
},

deleteUser : (req, res) => {
    User.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

};