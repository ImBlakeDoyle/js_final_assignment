const passport = require("passport");
const UserModel = require("./../database/models/user_model");
const { Strategy: JwtStrategy, ExtractJwt } = require("passport-jwt");

passport.serializeUser((user, done) => {
    done(null, user._id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await UserModel.findById(id);
        done(null, user);
    } catch(error) {
        done(error);
    }
})

passport.use(new JwtStrategy(
    {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: process.env.JWT_SECRET
    },
    async (jwtPayload, done) => {
        try{
            const user = await UserModel.findById(jwtPayload.sub);

            if (!user) {
                return done(null, false);
            }

            return done(null, user);
        } catch(error) {
            done(error);
        }
    }
));