import mongoose from "mongoose";

let isConneted: boolean = false;

export const connectToDataBase = async () => {
  mongoose.set("strictQuery", true);

  if (!process.env.MONGO_URL) {
    return console.log("🔴 missing mongo db url");
  }

  if (isConneted) {
    return console.log("🟢 mongo db already connected");
  }

  try {
    await mongoose.connect(process.env.MONGO_URL, {
      dbName: "testing_devflow",
    });
    isConneted = true;
    console.log("🟢 mongo db connected");
  } catch (error) {
    console.log("🔴", error);
  }
};
