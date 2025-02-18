const User = require("../../models/modelsSchema")
exports.addImg = async (req, res) => {
    if (!req.file) {
        return res.status(400).send('Şəkil seçilməyib!');
    }

    try {
        const user = await User.findById(req.params.id); 

        if (!user) {
            return res.status(404).send('İstifadəçi tapılmadı!');
        }

        user.profileImage = '/uploads/' + req.file.filename; 
        await user.save();

        res.send({
            message: 'Profil şəkili uğurla yükləndi!',
            file: req.file,
            user: user
        });
    } catch (error) {
        res.status(500).send('Xəta baş verdi!');
    }
}
