const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/User');

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.BACKEND_URL + '/api/auth/google/callback'
}, async (accessToken, refreshToken, profile, done) => {
    try {
        const email = profile.emails?.[0]?.value;
        const avatar = profile.photos?.[0]?.value;

        // Find existing user or create one
        let user = await User.findOne({ googleId: profile.id });

        if (!user) {
            // Check if email already used (edge case)
            user = await User.findOne({ email });
            if (user) {
                // Link Google ID to existing account
                user.googleId = profile.id;
                user.avatar = avatar;
                await user.save();
            } else {
                // Brand new user
                user = await User.create({
                    googleId: profile.id,
                    name: profile.displayName,
                    email,
                    avatar
                });
            }
        } else {
            // Update avatar in case it changed
            if (avatar && user.avatar !== avatar) {
                user.avatar = avatar;
                await user.save();
            }
        }

        return done(null, user);
    } catch (err) {
        return done(err, null);
    }
}));

// Required by passport but we don't use server-side sessions
// (we use JWT instead — sessions are just temporary during the OAuth handshake)
passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser(async (id, done) => {
    try {
        const user = await User.findById(id);
        done(null, user);
    } catch (err) {
        done(err, null);
    }
});

module.exports = passport;
