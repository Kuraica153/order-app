import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

import userRoute from './routes/UserRoute';
import itemRoute from './routes/ItemRoute';

import { Server } from 'socket.io';

const io = new Server(3000, {
    cors: {
        origin: '*',
    }
});

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

var corsOptions = {
    origin: '*' 
};

mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.log(err);
});

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/users', userRoute);
app.use('/api/items', itemRoute);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('newOrder', (data) => {
        console.log(data);
        io.emit('newOrder', data);
    });
});