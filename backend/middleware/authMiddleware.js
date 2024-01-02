const jwt = require('jsonwebtoken');

const verifyJwtToken = (req, res, next) => {
  // Get the token from the request headers
  const token = req.header('Authorization');

  // Check if the token is present
  if (!token) {
    return res.status(401).json({
      success: false,
      message: 'Access denied. Token is missing.',
    });
  }

  try {
    // Verify the token using the secret key
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach the decoded payload to the request object for further use in the route handlers
    req.user = decoded;

    // Move to the next middleware or route handler
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: 'Invalid token.',
    });
  }
};

module.exports = verifyJwtToken;
