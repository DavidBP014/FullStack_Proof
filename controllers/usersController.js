const User = require('../models/User');
const jwt = require('jsonwebtoken');

exports.register = async(req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = new User({ name, email, password });
        await user.save();
        res.status(201).send({ message: 'User created successfully', user });
    } catch (error) {
        res.status(500).send({ message: 'Error creating user', error });
    }
};

exports.login = async(req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user || !await user.comparePassword(password)) {
            return res.status(401).send({ message: 'Invalid credentials.' });
        }
        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
        res.send({ token });
    } catch (error) {
        res.status(500).send({ message: 'Login failed', error });
    }
};

exports.logout = (req, res) => {};