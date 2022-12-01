const PermissionType = require('../models/permissionTypes.model');

const findAll = async () => {
    try {
        return await PermissionType.findAll();
    } catch (error) {
        throw error;
    }
}

const findOne = async ( id ) => {
    try {
        return PermissionType.findByPk(id);
    } catch (error) {
        throw error;
    }
}

const create = async ( body ) => {
    try {
        const objectToCreate = { ...body };
        const creation = await PermissionType.create( objectToCreate );
        return await findOne( creation.id );
    } catch (error) {
        console.log(error);
        throw error;
    }
}

const update = async ( body ) => {
    try {
        const { id } = body;
        const row = await findOne( id );

        if (!row) throw getNotFoundResponse('The row was not found');

        row.set( { ...body } );
        const update = await row.save();
        return await findOne( update.id );

    } catch (error) {
        console.log(error);
        throw error;
    }
}

module.exports = {
    findAll,
    findOne,
    create,
    update
}