const db = require("../data/dbConfig.js");

const User = require("./userModel.js");

describe("user model", () => {
  beforeEach(async () => {
    await db("users").truncate();
  });

  describe("register", () => {
    it("should register the provided user into the db", async () => {
      await User.register({ username: "testing", password: "testing" });
      await User.register({ username: "testing2", password: "testing2" });

      const users = await db("users");
      expect(users).toHaveLength(2);
    });

    it("should insert the provided user into the db", async () => {
      let user = await User.register({
        username: "testing3",
        password: "testing3"
      });
      console.log(user);
      expect(user[0].username).toBe("testing3");
    });
  });
});
