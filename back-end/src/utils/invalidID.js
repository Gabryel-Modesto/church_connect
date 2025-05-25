export function validateIdUser(id_user) {
    const isInvalidID = isNaN(id_user);

    if(isInvalidID) {
        return {valid: false, message: 'ID inválido'}
    }
    return {valid: true};
};

export function validateIdChurch(id_church) {
    const isInvalidID = isNaN(id_church);

    if(isInvalidID) {
        return {valid: false, message: 'ID inválido'}
    }
    return {valid: true};
};
