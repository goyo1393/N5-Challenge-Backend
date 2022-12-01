exports.getSuccessfullResponse = ( result, message = 'Successful request', status = 200 ) => {
    return {
        status: status,
        ok: true,
        result,
        message
    };
}

exports.getNotFoundResponse = ( message = 'Request not Found' ) => {
    return {
        result: [],
        code: 404,
        message
    };
}