const jwt = require("jsonwebtoken");

module.exports = (roles = []) => {
  return (req, res, next) => {
    const token = req.header("x-auth-token");
    if (!token)
      return res.status(401).json({ msg: "No token, authorization denied" });

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;

      if (roles.length && !roles.includes(req.user.role)) {
        return res.status(403).json({ msg: "Access forbidden" });
      }

      next();
    } catch (err) {
      res.status(401).json({ msg: "Token is not valid" });
    }
  };
};
