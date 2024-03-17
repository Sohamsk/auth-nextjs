import mongoose from 'mongoose'

export async function connect() {
    try {
        await mongoose.connect(process.env.MONGO_URI!);
        const connection = mongoose.connection
        connection.on('connected', () => {
            console.log("Successfully connected to database");
        })
        connection.on('error', (err) => {
            console.error("We have some error: " + err);
            process.exit();

        })
    } catch (error) {
        console.error('Something went wrong:\n');
        console.error(error);
    }
}