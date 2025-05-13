// // const mongoose = require("mongoose");
// // const express = require("express");
// // const cors = require("cors");
// // const multer = require("multer");
// // const jwt = require("jsonwebtoken");
// // const bcrypt = require('bcrypt'); 


// // const storage = multer.diskStorage({
// //   destination: (req, file, cb) => {
// //     cb(null, "profilePic");
// //   },
// //   filename: (req, file, cb) => {
// //     console.log(file);
// //     cb(null, `${Date.now()}_${file.originalname}`);
// //   },
// // });
// // const upload = multer({ storage });



 
// // console.log(authoriz)
// // const app = express();
// // app.use(cors());
// // app.use(express.json());
// // app.use(express.urlencoded({ extended: true }));
// // app.use("/profilePic", express.static("profilePic"));


// // // let authoriz=(req,res,next)=>{

// // //       console.log("Inside Axios mwf1")
// // //       console.log(req.headers.authorization);
// // //   next();
// // // }
// // //       app.use(authoriz);
// // const authoriz = (req, res, next) => {
// //   console.log("Inside Axios mwf1");
// //   console.log(req.headers.authorization);
// //   next();
// // };

// // console.log(authoriz); 

// // app.use(authoriz);

// // const userSchema = mongoose.Schema({
// //   firstName: String,
// //   lastName: String,
// //   age: Number,
// //   email: String,
// //   password: String,
// //   phoneNumber: String,
// //   gender: String,
// //   profilePic: String,
// //   country: String,
// // });

// // const User = mongoose.model("User", userSchema, "User");

// // app.post("/signUp", upload.single("profilePic"), async (req, res) => {
// //   console.log(req.file);
// //     console.log(req.body);
// //     let hashedPassword=await bcrypt.hash (req.body.password,10);
// //     console.log(hashedPassword);
// //   try {
    

// //     const newUser = new User({
// //       firstName: req.body.firstName,
// //       lastName: req.body.lastName,
// //       age: req.body.age,
// //       email: req.body.email,
// //       password: req.body.password,
// //       phoneNumber: req.body.phoneNumber,
// //       gender: req.body.gender,
// //       profilePic: req.file ? req.file.path : "",
// //       country: req.body.country,
// //     });

// //     await newUser.save();
// //     res.json({ status: "Success", msg: "Successfully signed up." });
// //   } catch (err) {
// //     console.error("Signup error:", err);
// //     res.json({ status: "Failure", msg: "Unable to create account." });
// //   }
// // });

// // app.post("/login", upload.none(), async (req, res) => {
// //   try {
// //     const userData = await User.find({ email: req.body.email });

// //     if (userData.length > 0) {
// //       const user = userData[0];

// //       if (user.password === req.body.password) {
// //         const token = jwt.sign(
// //           { email: user.email, password: user.password },
// //           "vsvsv"
// //         );

// //         const userDetailsToSend = {
// //           firstName: user.firstName,
// //           lastName: user.lastName,
// //           age: user.age,
// //           email: user.email,
// //           password: user.password,
// //           phoneNumber: user.phoneNumber,
// //           gender: user.gender,
// //           profilePic: user.profilePic,
// //           country: user.country,
// //           token: token,
// //         };

// //         res.json({
// //           status: "Success",
// //           data: userDetailsToSend,
// //           msg: "Email and password are correct.",
// //         });
// //       } else {
// //         res.json({ status: "Failure", msg: "Invalid password." });
// //       }
// //     } else {
// //       res.json({ status: "Failure", msg: "User does not exist." });
// //     }
// //   } catch (err) {
// //     console.error(err);
// //     res.json({ status: "Failure", msg: "Login failed due to server error." });
// //   }
// // });



// // // app.post("/validateToken", async (req, res) => {
// // //   try {
// // //     const decrypted = jwt.verify(req.body.token, 'vsvsv'); 
// // //     const user = await User.findOne({ email: decrypted.email });

// // //     if (user) {
// // //       res.json({
// // //         status: "Success",
// // //         msg: "Token is valid.",
// // //         data: {
// // //           firstName: user.firstName,
// // //           lastName: user.lastName,
// // //           age: user.age,
// // //           email: user.email,
// // //           phoneNumber: user.phoneNumber,
// // //           gender: user.gender,
// // //           profilePic: user.profilePic,
// // //           country: user.country,
// // //         }
// // //       });
// // //     } else {
// // //       res.json({ status: "Failure", msg: "User does not exist." });
// // //     }
// // //   } catch (err) {
// // //     console.error("Token verification failed:", err);
// // //     res.json({ status: "Failure", msg: "Invalid token or expired token." });
// // //   }
// // // });

// // app.post("/validateToken", async (req, res) => {
// //   try {
// //     const authHeader = req.headers.authorization;
// //     if (!authHeader || !authHeader.startsWith("Bearer ")) {
// //       return res.json({ status: "Failure", msg: "Missing or invalid token." });
// //     }

// //     const token = authHeader.split(" ")[1]; // Get the token string after "Bearer"
// //     const decrypted = jwt.verify(token, "vsvsv");

// //     const user = await User.findOne({ email: decrypted.email });

// //     if (user) {
// //       res.json({
// //         status: "Success",
// //         msg: "Token is valid.",
// //         data: {
// //           firstName: user.firstName,
// //           lastName: user.lastName,
// //           age: user.age,
// //           email: user.email,
// //           phoneNumber: user.phoneNumber,
// //           gender: user.gender,
// //           profilePic: user.profilePic,
// //           country: user.country,
// //         },
// //       });
// //     } else {
// //       res.json({ status: "Failure", msg: "User does not exist." });
// //     }
// //   } catch (err) {
// //     console.error("Token verification failed:", err);
// //     res.json({ status: "Failure", msg: "Invalid or expired token." });
// //   }
// // });


// // app.patch("/UpdateProfile",upload.single("profilePic"),async(req,res)=>{
// //   try{
// //     if(req.body.firstName.trim().length>0){
// //   await User.updateMany({email:req.body.email},{firstName:req.body.firstName},)

// //   }
// //   if(req.body.password.trim().length>0){
// //   await User.updateMany({email:req.body.email},{password:req.body.password},)

// //   }
// //  if(req.body.lastName.trim().length>0){
// //   await User.updateMany({email:req.body.email},{lastName:req.body.lastName},)

// //   }
// //  if(req.body.age.trim().length>0){
// //   await User.updateMany({email:req.body.email},{age:req.body.age},)

// //   }
// //  if(req.body.gender.trim().length>0){
// //   await User.updateMany({email:req.body.email},{gender:req.body.gender},)

// //   }
// //  if(req.body.phoneNumber.trim().length>0){
// //   await User.updateMany({email:req.body.email},{phoneNumber:req.body.phoneNumber},)

// //   }
// //  if(req.body. country.trim().length>0){
// //   await User.updateMany({email:req.body.email},{ country:req.body. country},)

// //   }
// //  if(req.file && req.file.path){
// //   await User.updateMany({email:req.body.email},{profilePic:req.file.path},)

// //   }

// // res.json({ status: "Succcess", msg: "User data Updated Successfully" })
// //   }catch(err){
// //     res.json({ status: "Failure", msg: " failed due to Unabledata." });


// //   }
  

// // })




// // app.delete("/deleteProfile",upload.none(),async(req,res)=>{
// //   try{
// //     let delResult= await User.deleteMany({email:req.query.email});
// //  res.json({ status: "Succcess", msg: " Successfully delete your account" });
// //  console.log(delResult)

// //   }catch(err){
// //      res.json({ status: "Please try Again", msg: " Your account are not deleted" })

// //   }
 


 
// // })

// // app.listen(2727, () => {
// //   console.log("Server running on port 2727");
// // });


// // const connectToMDB = async () => {
// //   try {
// //     await mongoose.connect(
// //       // "mongodb+srv://venkateshwarluvadlamani233:venky207@cluster0.xmqckkr.mongodb.net/employeeDetails?retryWrites=true&w=majority&appName=Cluster0"
// //    "mongodb://localhost:27017" );
// //     console.log("Successfully connected to MongoDB");
// //   } catch (err) {
// //     console.error("Unable to connect to MongoDB:", err);
// //   }
// // };

// // connectToMDB();

// const mongoose = require("mongoose");
// const express = require("express");
// const cors = require("cors");
// const multer = require("multer");
// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcrypt");

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "profilePic");
//   },
//   filename: (req, file, cb) => {
//     cb(null, `${Date.now()}_${file.originalname}`);
//   },
// });
// const upload = multer({ storage });

// const authoriz = (req, res, next) => {
//   console.log("Inside Axios mwf1");
//   console.log(req.headers.authorization);
//   next();
// };

// const app = express();
// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use("/profilePic", express.static("profilePic"));
// app.use(authoriz);

// const userSchema = mongoose.Schema({
//   firstName: String,
//   lastName: String,
//   age: Number,
//   email: String,
//   password: String,
//   phoneNumber: String,
//   gender: String,
//   profilePic: String,
//   country: String,
// });

// const User = mongoose.model("User", userSchema, "User");

// app.post("/signUp", upload.single("profilePic"), async (req, res) => {
//   try {
//     const hashedPassword = await bcrypt.hash(req.body.password, 10);

//     const newUser = new User({
//       firstName: req.body.firstName,
//       lastName: req.body.lastName,
//       age: req.body.age,
//       email: req.body.email,
//       password: hashedPassword,
//       phoneNumber: req.body.phoneNumber,
//       gender: req.body.gender,
//       profilePic: req.file ? req.file.path : "",
//       country: req.body.country,
//     });

//     await newUser.save();
//     res.json({ status: "Success", msg: "Successfully signed up." });
//   } catch (err) {
//     console.error("Signup error:", err);
//     res.json({ status: "Failure", msg: "Unable to create account." });
//   }
// });

// app.post("/login", upload.none(), async (req, res) => {
//   try {
//     const user = await User.findOne({ email: req.body.email });
//     if (!user) return res.json({ status: "Failure", msg: "User does not exist." });

//     const isMatch = await bcrypt.compare(req.body.password, user.password);
//     if (!isMatch) return res.json({ status: "Failure", msg: "Invalid password." });

//     const token = jwt.sign({ email: user.email }, "vsvsv");

//     res.json({
//       status: "Success",
//       msg: "Login successful.",
//       data: {
//         firstName: user.firstName,
//         lastName: user.lastName,
//         age: user.age,
//         email: user.email,
//         phoneNumber: user.phoneNumber,
//         gender: user.gender,
//         profilePic: user.profilePic,
//         country: user.country,
//         token: token,
//       },
//     });
//   } catch (err) {
//     console.error("Login error:", err);
//     res.json({ status: "Failure", msg: "Login failed due to server error." });
//   }
// });

// app.post("/validateToken", async (req, res) => {
//   try {
//     const authHeader = req.headers.authorization;
//     if (!authHeader || !authHeader.startsWith("Bearer ")) {
//       return res.json({ status: "Failure", msg: "Missing or invalid token." });
//     }

//     const token = authHeader.split(" ")[1];
//     const decrypted = jwt.verify(token, "vsvsv");

//     const user = await User.findOne({ email: decrypted.email });

//     if (user) {
//       res.json({
//         status: "Success",
//         msg: "Token is valid.",
//         data: {
//           firstName: user.firstName,
//           lastName: user.lastName,
//           age: user.age,
//           email: user.email,
//           phoneNumber: user.phoneNumber,
//           gender: user.gender,
//           profilePic: user.profilePic,
//           country: user.country,
//         },
//       });
//     } else {
//       res.json({ status: "Failure", msg: "User does not exist." });
//     }
//   } catch (err) {
//     console.error("Token verification failed:", err);
//     res.json({ status: "Failure", msg: "Invalid or expired token." });
//   }
// });

// app.patch("/UpdateProfile", upload.single("profilePic"), async (req, res) => {
//   try {
//     const updates = {};

//     if (req.body.firstName?.trim()) updates.firstName = req.body.firstName;
//     if (req.body.lastName?.trim()) updates.lastName = req.body.lastName;
//     if (req.body.age?.trim()) updates.age = req.body.age;
//     if (req.body.gender?.trim()) updates.gender = req.body.gender;
//     if (req.body.phoneNumber?.trim()) updates.phoneNumber = req.body.phoneNumber;
//     if (req.body.country?.trim()) updates.country = req.body.country;
//     if (req.body.password?.trim()) updates.password = await bcrypt.hash(req.body.password, 10);
//     if (req.file?.path) updates.profilePic = req.file.path;

//     await User.updateOne({ email: req.body.email }, { $set: updates });

//     res.json({ status: "Success", msg: "User data updated successfully" });
//   } catch (err) {
//     console.error("Update error:", err);
//     res.json({ status: "Failure", msg: "Failed to update user data." });
//   }
// });

// app.delete("/deleteProfile", upload.none(), async (req, res) => {
//   try {
//     const result = await User.deleteOne({ email: req.query.email });
//     res.json({ status: "Success", msg: "Successfully deleted your account" });
//     console.log(result);
//   } catch (err) {
//     console.error("Delete error:", err);
//     res.json({ status: "Failure", msg: "Account not deleted, please try again." });
//   }
// });

// app.listen(2727, () => {
//   console.log("Server running on port 2727");
// });

// const connectToMDB = async () => {
//   try {
//     await mongoose.connect("mongodb://localhost:27017/employeeDetails", {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log("Successfully connected to MongoDB");
//   } catch (err) {
//     console.error("Unable to connect to MongoDB:", err);
//   }
// };

// connectToMDB();
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const multer = require("multer");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

require('dotenv').config()

const app = express();
const PORT = 2727;

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "profilePic"),
  filename: (req, file, cb) => cb(null, `${Date.now()}_${file.originalname}`)
});
const upload = multer({ storage });

// Middleware


const corsOptions = {
  origin: [process.env.FRONTEND_URL1,process.env.FRONTEND_URL2],
  credentials: true,
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/profilePic", express.static("profilePic"));

const authoriz = (req, res, next) => {
  console.log("Middleware Authorization Check:");
  console.log(req.headers.authorization);
  next();
};
app.use(authoriz);

// Mongoose User Model
const userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  age: Number,
  email: String,
  password: String,
  phoneNumber: String,
  gender: String,
  profilePic: String,
  country: String,
});
const User = mongoose.model("User", userSchema, "User");

app.get("/",  (req, res) => {
  res.send("index")
})
// Signup Endpoint
app.post("/signUp", upload.single("profilePic"), async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const newUser = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      age: req.body.age,
      email: req.body.email,
      password: hashedPassword,
      phoneNumber: req.body.phoneNumber,
      gender: req.body.gender,
      profilePic: req.file ? req.file.path : "",
      country: req.body.country,
    });

    await newUser.save();
    res.json({ status: "Success", msg: "Successfully signed up." });
  } catch (err) {
    console.error("Signup error:", err);
    res.json({ status: "Failure", msg: "Unable to create account." });
  }
});

// Login Endpoint
app.post("/login", upload.none(), async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.json({ status: "Failure", msg: "User does not exist." });

    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isMatch) return res.json({ status: "Failure", msg: "Invalid password." });

    const token = jwt.sign({ email: user.email }, "vsvsv");

    res.json({
      status: "Success",
      msg: "Login successful.",
      data: {
        ...user.toObject(),
        token,
        password: undefined, // Don't send password
      }
    });
  } catch (err) {
    console.error("Login error:", err);
    res.json({ status: "Failure", msg: "Login failed due to server error." });
  }
});

// Token Validation
app.post("/validateToken", async (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader?.startsWith("Bearer ")) {
      return res.json({ status: "Failure", msg: "Missing or invalid token." });
    }

    const token = authHeader.split(" ")[1];
    const decrypted = jwt.verify(token, "vsvsv");

    const user = await User.findOne({ email: decrypted.email });

    if (user) {
      res.json({
        status: "Success",
        msg: "Token is valid.",
        data: {
          firstName: user.firstName,
          lastName: user.lastName,
          age: user.age,
          email: user.email,
          phoneNumber: user.phoneNumber,
          gender: user.gender,
          profilePic: user.profilePic,
          country: user.country,
        },
      });
    } else {
      res.json({ status: "Failure", msg: "User does not exist." });
    }
  } catch (err) {
    console.error("Token verification failed:", err);
    res.json({ status: "Failure", msg: "Invalid or expired token." });
  }
});

// Update Profile
app.patch("/UpdateProfile", upload.single("profilePic"), async (req, res) => {
  try {
    const updates = {};

    if (req.body.firstName?.trim()) updates.firstName = req.body.firstName;
    if (req.body.lastName?.trim()) updates.lastName = req.body.lastName;
    if (req.body.age?.trim()) updates.age = req.body.age;
    if (req.body.gender?.trim()) updates.gender = req.body.gender;
    if (req.body.phoneNumber?.trim()) updates.phoneNumber = req.body.phoneNumber;
    if (req.body.country?.trim()) updates.country = req.body.country;
    if (req.body.password?.trim()) {
      updates.password = await bcrypt.hash(req.body.password, 10);
    }
    if (req.file?.path) updates.profilePic = req.file.path;

    await User.updateOne({ email: req.body.email }, { $set: updates });

    res.json({ status: "Success", msg: "User data updated successfully" });
  } catch (err) {
    console.error("Update error:", err);
    res.json({ status: "Failure", msg: "Failed to update user data." });
  }
});

// Delete Profile
app.delete("/deleteProfile", upload.none(), async (req, res) => {
  try {
    const result = await User.deleteOne({ email: req.query.email });
    res.json({ status: "Success", msg: "Successfully deleted your account" });
  } catch (err) {
    console.error("Delete error:", err);
    res.json({ status: "Failure", msg: "Account not deleted, please try again." });
  }
});

// MongoDB Connection & Start Server
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("Connected to MongoDB");
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch((err) => {
  console.error("MongoDB connection error:", err);
});
