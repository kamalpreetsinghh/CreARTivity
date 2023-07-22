import mongoose from "mongoose";

const connectToDB = async () => {
  mongoose.set("strictQuery", true);
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("connected to Mongo DB");
  } catch (error) {
    console.error("failed to connect with mongo");
    console.error(err);
  }
};

export default connectToDB;
