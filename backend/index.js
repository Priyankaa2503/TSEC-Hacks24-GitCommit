const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();
const userRoute = require("./routes/user.js");
const authRoute = require("./routes/auth.js");
const productRoute = require("./routes/product.js");
// const cartRoute = require("./routes/cart.js");
// const orderRoute = require("./routes/order.js");
dotenv.config();
app.use(express.json());
app.use(cors());
/* MONGOOSE SETUP */
const PORT = 5001 || 9000;
mongoose
  .connect(
    "mongodb+srv://Priyanka:srcn1224@cluster0.evn3twy.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
  })
  .catch((error) => console.log(`${error} did not connect`));

app.use("/user", userRoute);
app.use("/auth", authRoute);
app.use("/products", productRoute);
// app.use("/api/cart", cartRoute);
// app.use("/api/order", orderRoute);
