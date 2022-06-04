const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, arg, context) => {
            return User.findOne({ _id: context.User._id }).populate('savedBooks');
        },
    },

    Mutation: {
        // create user, savebook, deletebook, login
        createUser: async (parent, args) => {
            const User = await User.create(args);
            return User;
        },
        login: async (parent) => {
            const User = await User.findOne({ $or: [{ username: body.username }, { email: body.email }] });
            return User;
        },
        saveBook: async (parent, { _id }) => {
            const User = await User.findOneAndUpdate(
                { _id },
                { $addToSet: { savedBooks: body } },
                { new: true, runValidators: true }
            );
            return User;
        },
        deleteBook: async (parent, { params }) => {
            const User = await User.findOneAndUpdate(
                { _id: User._id },
                { $pull: { savedBooks: { bookId: params.bookId } } },
                { new: true }
            );
            return User;
        },
    },
};

module.exports = resolvers;

// npm run develop