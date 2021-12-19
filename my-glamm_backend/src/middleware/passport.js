const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
const user = require("../Schemas/user.schema");

passport.use(
  new GoogleStrategy(
    {
      clientID:
        "14082363482-mru7r6gtg8ek1l4vme9jlsrlsvm8vhl9.apps.googleusercontent.com",
      clientSecret: "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",
      callbackURL: "http://localhost/auth/google/callback",
    },
    async function (accessToken, refreshToken, profile, done) {
      try {
        let User = await user
          .findOne({ email: profile._json.email })
          .lean()
          .exec();
        if (!User) {
          User = await user.create({
            email: profile._json.email,
            name: profile._json.name,
            profile_photo_url: profile._json.picture,
            roles: [],
          });
        }
        done(null, User);
      } catch (err) {
        console.log(err);
      }
    }
  )
);

module.exports = passport;
