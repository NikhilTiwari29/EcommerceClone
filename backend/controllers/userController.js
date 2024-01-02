// registerController.js
const hashPasswordModule = require("../config/authPasswordEncrypt.js");
const userModel = require("../model/userModel.js");
const JWT = require("jsonwebtoken");

const userRegisterController = async (req, res) => {
  try {
    const { name, email, password, phone, address } = req.body;

    // Validation checks...
    if (!name || !email || !password || !phone || !address) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const existingUser = await userModel.findOne({ email });

    if (existingUser) {
      return res.status(200).json({
        success: true,
        message: "User exists, please login",
      });
    }

    const hashedPassword = await hashPasswordModule.hashPassword(password);
    const user = new userModel({ name, email, phone, address, password: hashedPassword });

    const savedUser = await user.save();

    // Exclude password from the response
    delete savedUser._doc.password;

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      user: savedUser,
    });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({
      success: false,
      message: "Error in registration",
      error: error.message,
    });
  }
};


const userLoginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validation checks...
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    // Find user by email
    const user = await userModel.findOne({ email });

    // Check if user exists
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "Email is not registered",
      });
    }

    // Compare passwords
    const passwordMatch = await hashPasswordModule.comparePassword(password, user.password);
    if (!passwordMatch) {
      return res.status(200).json({
        success: false,
        message: "Password is not correct, please try with the correct password",
      });
    }

    // Create and send JWT token upon successful login
    const token = JWT.sign(
      { userId: user._id, userEmail: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '1h' } // Token expiration time
    );


    // Exclude password from the response
    delete user._doc.password;

    // Respond with the JWT token
    res.status(200).json({
      success: true,
      message: "Login successful",
      user,
      token,
    });
  } catch (error) {
    console.error('Error during user login:', error);
    res.status(500).json({
      success: false,
      message: "Error in user login",
      error: error.message,
    });
  }
};

module.exports = {userRegisterController,userLoginController}
