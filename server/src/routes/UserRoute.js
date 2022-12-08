import { Router } from 'express';
import User from '../models/User.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const router = Router();

router.get('/', async (req, res) => {
    User.find().then( (users) => {
        res.json(users)
    }).catch( (err) => {
        res.status(400).json('Error: ' + err)
    });
});

router.get('/:id', (req, res) => {
    User.findById(req.params.id).then( (user) => {
        res.json(user)
    }).catch( (err) => {
        res.status(400).json('Error: ' + err)
    });
});

//login
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ msg: "User does not exist." });
        }
        console.log(user);
        console.log(password);
        if (password !== user.password) {
            return res.status(400).json({ msg: "Email or password is wrong." });
        }
        const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY);
        res.json({ token: token });
    } catch (err) {
        return res.status(500).json({ msg: err.message });
    }
});


router.post('/', async (req, res) => {
    const newUser = new User(req.body);
    const user = await User.create(newUser);
    const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY);
    console.log(token);
    res.json({ token: token });
});

router.put('/:id', (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body, { new: true }).then( (user) => {
        res.json(user)
    }).catch( (err) => {
        res.status(400).json('Error: ' + err)
    });
});

router.delete('/:id', (req, res) => {
    User.findByIdAndDelete(req.params.id).then( (user) => {
        res.json(user)
    }).catch( (err) => {
        res.status(400).json('Error: ' + err)
    });
});

export default router;