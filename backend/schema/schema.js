'use strict';
const graphql = require('graphql');

const {
GrahpQLObjectType,
GrahpQLString,
GraphQLSchema} = graphql;

const usuarioType = new GrahpQLObjectType({
    name: 'Usuario',
    fields: () => ({
        id: {type: GrahpQLString},
        nombre: {type: GrahpQLString},
        apellido: {type: GrahpQLString},
        tipoUsuario: {type: GrahpQLString}
    })
});

const RootQuery = new GrahpQLObjectType({
    name: 'RootQueryType',
    fields: {
        usuario: {
            type: usuarioType,
            args:{id: {type: GrahpQLString}},
            resolve(parent, args){

            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
})