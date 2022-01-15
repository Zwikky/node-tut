const authorize = (req, res, next) => {
  const { user } = req.query;

  if (user === "lucky") {
    req.user = { name: "lucky", id: 2021 };
    console.log("....authorized");
    console.log(req.user);
    next();
  } else {
    res.status(401).send("....unauthorized");
  }

  next();
};

module.exports = authorize;
