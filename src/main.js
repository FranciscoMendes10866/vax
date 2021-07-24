import "./models/product.js";
import app from "./app.js";
import database from "./database/index.js";

const start = async () => {
  try {
    await database.sync();
    await app.listen(3333);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

start();
