import dotenv from 'dotenv';
import mongoose from 'mongoose';

if (process.env.NODE_ENV !== 'production') dotenv.config();

const { DB_URI } = process.env;

const options = {
  autoIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
};

export default function connectMongoose() {
  console.log('Connecting mongoose to mongo...');

  mongoose.connect(DB_URI, options, (err) => {
    if (err) throw new Error(err.message);

    console.log('Mongoose connected!');
  });
}
