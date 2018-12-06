'use strict';
const graphql = require('graphql');
const Usuario = require('../models/usuario');
const Pedido = require('../models/pedido');

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

const Mutation = new GrahpQLObjectType({
name: 'Mutation',
field: {
    addUsuario:{
        type: usuarioType,
        args:{
            nombre:{type:GrahpQLString},
            apellido: {type: GrahpQLString},
            tipoUsuario:{type: GrahpQLString}
        },
        resolve(parent,args){
            let usuario = new Usuario({
                nombre: args.nombre,
                apellido: args.apellido,
                tipoUsuario: args.tipoUsuario
            });
            return usuario.save();
        }
    }
}
})

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
})