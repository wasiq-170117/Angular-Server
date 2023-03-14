const mongoose = require('mongoose');

mongoose.set('strictQuery', false);

const ConnectDatabase = async() => {
    try {
        const connect = await mongoose.connect(process.env.MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then(() => console.log('Database Connected'));
    } catch (error) {
        console.log(error);
    }
}

module.exports = ConnectDatabase;