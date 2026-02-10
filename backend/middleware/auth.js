// Simple API key authentication for admin routes
const authMiddleware = (req, res, next) => {
  const apiKey = req.headers['x-api-key'];
  
  if (!apiKey || apiKey !== process.env.ADMIN_API_KEY) {
    return res.status(401).json({
      success: false,
      message: 'Unauthorized access'
    });
  }
  
  next();
};

module.exports = authMiddleware;
