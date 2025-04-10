import mongoose from 'mongoose';
import colors from 'colors';

// mongodb://localhost:27017/ecommerce

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`Connceted to mondoDB Database ${conn.connection.host}`.bgMagenta.white);
    } catch (error) {
        console.log(`Error in MongoDB connection ${error}`.bgRed.white);
    }
};

export default connectDB;