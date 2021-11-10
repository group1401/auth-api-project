"use strict";

const Users = (sequelize, DataTypes) =>
  sequelize.define("users", {
    username: { type: DataTypes.STRING, allowNull: false, unique: true },
    password: { type: DataTypes.STRING, allowNull: false },
    Email: { type: DataTypes.STRING, allowNull: false, unique: true },
    role: {
      type: DataTypes.ENUM("employee", "company", "admin"),
      defaultValue: "employee",
    },
    token: {
      type: DataTypes.VIRTUAL,
    },
    actions: {
      type: DataTypes.VIRTUAL,
      get() {
        const acl = {
          employee: ["read", "create"],
          company: ["read", "create", "update"],
          admin: ["read", "create", "update", "delete"],
        };
        return acl[this.role];
      },
    },
  });
Users.authenticateBasic = async function (username, password) {
  // get the user form the database
  const user = await Users.findOne({ where: { username } }); // select * from Users where username='tamim';
  // compare the users' password from the DB with the on that was submitted in the form
  const valid = await bcrypt.compare(password, user.password);
  // if the user is validated, we will create a new token for that user using the jsonwebtokenlibaray

  if (valid) {
    let newToken = jwt.sign({ username: user.username }, API_SECRET);
    user.token = newToken;
    return user;
  } else {
    throw new Error("Invalid User");
  }
};

Users.authenticateBearer = async function (token) {
  // check with the jwt if the token is proper
  const parsedToken = jwt.verify(token, API_SECRET); // the parsed token payload, we are parsing the data using the Secret Key
  // then find a user that has the data from the payload
  const user = await this.findOne({
    where: { username: parsedToken.username },
  });
  // if there is, then get the user model
  if (user) {
    return user;
  } else {
    // if not, throw error
    throw new Error("Invalid Token");
  }
};

module.exports = Users;
