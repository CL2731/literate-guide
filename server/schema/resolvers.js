const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, arg, context) => {
            return User.findOne({_id: context.User._id}).populate('savedBooks');
        },
    },

    Mutation: {
        // login and books based off of user-routes.js 3-7 not 4

    }
}

// delete controllers and routes and 
// check that they arent imported anywhere

// npm run develop