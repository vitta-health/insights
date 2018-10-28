const GraphQL = require('graphql');
const auth = require('../../config/auth');
const Generic = require('../types/Generic');

const {
    GraphQLList,
    GraphQLID,
    GraphQLString,
    GraphQLNonNull,
} = GraphQL;

// import the init resolver we created
const HttpConnectorResolver = require('../resolvers/HttpConnector');


module.exports = {

    index() {
        return {
            type: Generic.initOutputType,
            description: 'Return connectors',
            resolve(parent, args, context, info) {
                return HttpConnectorResolver.index({});
            }
        }
    }
};