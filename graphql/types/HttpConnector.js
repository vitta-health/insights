const GraphQL = require('graphql');
const {
	GraphQLObjectType,
	GraphQLString,
    GraphQLBoolean,
	GraphQLID,
	GraphQLInt,
    GraphQLList,
} = GraphQL;

const Generic = require('./Generic');
const Address = require('./Address');


const HttpConnectorType = new GraphQL.GraphQLObjectType({
	name: 'HttpConnector',
	description: 'User type for managing all the users in our application.',

	fields: () => ({
		id: {
			type: GraphQLID,
			description: 'ID of the user, Generated automatically by MongoDB',
		},
		name: {
			type: GraphQLString,
			description: 'Name of the connector',
        },
        host: {
			type: GraphQLString,
			description: 'Name of the connector',
        },
        auth: {
			type: GraphQLString,
			description: 'Name of the connector',
        },
        authType: {
			type: GraphQLString,
			description: 'Name of the connector',
		},
		createdAt: {
			type: GraphQLString,
			description: 'Generate system to allow user to have secure resource access',
		},
		updatedAt: {
			type: GraphQLString,
			description: 'Date and time when this users account was last updated',
		}

	})

});


module.exports = UserType;

