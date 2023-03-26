import mongoose from "mongoose";
const connection = {};

async function dbConnection() {
  if (connection.isConnected) {
    return;
  }

  const db = await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
  });
  connection.isConnected = db.connection[0].readyState;
}

export default dbConnection;
