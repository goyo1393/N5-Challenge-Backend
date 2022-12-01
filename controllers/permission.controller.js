const permissionService = require("../services/permission.service");
const { getSuccessfullResponse } = require("../utils/utils");

const  getList = async ( request, response ) => {
    try {
        const resp = getSuccessfullResponse( await permissionService.findAll() );
        response.status(resp.status).send(resp);
    } catch (error) {
        response.status(500).send({ ok: false, error: error.code, message: error.message });
    }
}

const  getOne = async ( request, response ) => {
    try {
        const { id } = request.params;
        const resp = getSuccessfullResponse( await permissionService.findOne( id ) );
        response.status(resp.status).send(resp);
    } catch (error) {
        response.status(500).send({ ok: false, error: error.code, message: error.message });
    }
}

const  create = async ( { body }, response ) => {
    try {
        const resp = getSuccessfullResponse( await permissionService.create( body ) );
        response.status(resp.status).send(resp);
    } catch (error) {
        response.status(500).send({ ok: false, error: error.code, message: error.message });
    }
}

const  update = async ( { body }, response ) => {
    try {
        const resp = getSuccessfullResponse( await permissionService.update( body ) );
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