const User = require('../../models/modelsSchema.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


exports.createUser = async (req, res) => {
    const validatePassword = (password) => {
        const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
        return passwordPattern.test(password);
    };
    const { username, email, password } = req.body;
    // Boşluq yoxlaması
    if (!username || !email || !password) {
        return res.status(400).json({ message: 'Please provide username, email, and password.' });
    }



    // Şifrənin düzgünlüyünü yoxlamaq
    if (!validatePassword(password)) {
        return res.status(400).json({ message: 'Password must be at least 8 characters long, contain one uppercase letter, one number, and one special character.' });
    }

    try {
        // Parol şifrələyirik
        const hashedPassword = await bcrypt.hash(password, 10);

        // Yeni istifadəçi yaradırıq
        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            createdAt: new Date(),
        });

        await newUser.save();

        console.log(newUser);

        res.status(201).json({ message: 'User created successfully!' });
    } catch (error) {
        if (error.code == 11000) return res.status(403).json({
            message: "Bu mail diger hesablarda istifadə olunub",
            email
        })
        console.error('Error during user creation:', error);
        res.status(500).json({ message: 'Failed to create user', error });
    }
}

exports.loginUsers = async (req, res) => {
    const { username, password } = req.body;

    // İstifadəçi adı və şifrə yoxlaması
    if (!username || !password) {
        return res.status(400).json({ message: 'Please provide username and password.' });
    }


    try {
        console.log(username, password);

        const user = await User.findOne({ username });

        if (!user) {
            return res.status(404).json({ message: 'Istifadeci tapilmadi' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'İstifadəçi adı və ya şifrə səhvdir' });
        }

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET_KEY, { expiresIn: '3h' });
        res.json({ token });
    } catch (err) {
        console.error(err); // Səhv mesajını konsola yazdırırıq
        res.status(500).json({ message: 'Server error' });
    }

};

exports.getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        console.log("Failed to fetch users", error);
    }
}

exports.getUserById = async (req, res) => {
    try {
        const user = await User.findById({ _id: req.params.id })
        res.status(200).json(user);
    } catch (error) {
        // console.log("Server error", error);
        if (error.name == "CastError") return res.status(404).json({ message: "Verilmiş id üzrə istifadəçi tapılmadı" })
        res.status(500).json(error)
    }
}

exports.editByUser = async (req, res) => {
    try {
        const { amount } = req.body
        const user = await User.findById({ _id: req.params.id })
        if (!amount) {
            return res.status(400).json({ message: "amount mutleq gonderilmelidir!" });
        }
        if(+amount < 0){
            res.status(400).json({ message: "0 manat artirmaq olmaz!" });
        }else {
            user.balance = +user.balance + +amount
            await user.save()
            res.status(200).json(user);
        }
    } catch (error) {
        // console.log("Server error", error);
        if (error.name == "CastError") return res.status(404).json({ message: "Verilmiş id üzrə istifadəçi tapılmadı" })
        res.status(500).json(error)
    }
}


exports.deleteAllUsers = async (req, res) => {
    try {
        const result = await User.deleteMany({});
        res.status(200).json({ msj: `Deleted ${result.deletedCount} users.` });
    } catch (error) {
        console.error("Error deleting users:", error);
    }
}
