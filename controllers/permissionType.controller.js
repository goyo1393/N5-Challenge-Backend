const permissionTypeService = require("../services/permissionType.service");
const { getSuccessfullResponse } = require("../utils/utils");

const  getList = async ( request, response ) => {
    try {
        const resp = getSuccessfullResponse( await permissionTypeService.findAll() );
        response.status(resp.status).send(resp);
    } catch (error) {
        response.status(500).send({ ok: false, error: error.code, message: error.message });
    }
}

const  getOne = async ( request, response ) => {
    try {
        const { id } = request.params;
        const resp = getSuccessfullResponse( await permissionTypeService.findOne( id ) );
        response.status(resp.status).send(resp);
    } catch (error) {
        response.status(500).send({ ok: false, error: error.code, message: error.message });
    }
}

const  create = async ( { body }, response ) => {
    try {
        const resp = getSuccessfullResponse( await permissionTypeService.create( body ) );
        response.status(resp.status).send(resp);
    } catch (error) {
        response.status(500).send({ ok: false, error: error.code, message: error.message });
    }
}

const  update = async ( { body }, response ) => {
    try {
        const resp = getSuccessfullResponse( await permissionTypeService.update( body ) );
        response.status(resp.status).send(resp);
    } catch (error) {
        response.status(500).send({ ok: false, error: error.code, message: error.message });
    }
}

module.exports = {
    getList,
    getOne,
    create,
    update
};