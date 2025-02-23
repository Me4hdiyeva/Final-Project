const Coin = require("../../models/cryptoSchema");
const User = require("../../models/modelsSchema");

exports.createCoin = async (req, res) => {
    try {
        const { type, count, currency, user } = req.body;

        if (!type || !count || !currency || !user) {
            return res.status(400).json({ success: false, message: 'Bütün sahələri daxil edin.' });
        }

        let coin = await Coin.findOne({ user, type });
        let mongoUser = await User.findOne({ _id: user })
        mongoUser.balance = mongoUser.balance - currency
        await mongoUser.save()
        if (coin) {
            const newCount = parseFloat(coin.count) + parseFloat(count);
            coin.count = newCount.toString();
            coin.currency = currency;
            await coin.save();
            return res.status(200).json({ success: true, message: 'Coin uğurla güncəlləndi', coin });
        } else {
            const newCoin = await Coin.create({ type, count, currency, user });
            return res.status(201).json({ success: true, message: 'Yeni coin əlavə edildi', coin: newCoin });
        }
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
};


exports.getUserCoins = async (req, res) => {
    try {
        const { userId } = req.params;
        const coins = await Coin.find({ user: userId });
        return res.status(200).json({ success: true, coins });
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
};


exports.deleteCoin = async (req, res) => {
    try {
        // URL-dən coin id-ni götürürük (məsələn, /coins/:id)
        const coinId = req.params.id;

        // Coin sənədini silirik
        const deletedCoin = await Coin.findByIdAndDelete(coinId);

        // Əgər belə bir coin tapılmayıbsa
        if (!deletedCoin) {
            return res.status(404).json({ error: 'Coin tapılmadı' });
        }

        // Uğurla silinib
        res.status(200).json({ message: 'Coin uğurla silindi', coin: deletedCoin });
    } catch (error) {
        console.error('Coin silinərkən xəta:', error);
        res.status(500).json({ error: 'Server xətası' });
    }
};