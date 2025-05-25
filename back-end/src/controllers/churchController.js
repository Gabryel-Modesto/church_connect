import { 
    deleteChurchById, 
    getAllChurches, 
    getChurch, 
    insertChurch, 
    sanitizeChurchData, 
    modifyChurch } from "../service/churchService.js"

export const listAllChurches = async(req, res) => {
    try {
        const churches = await getAllChurches();
        res.status(200).json(churches);
    } catch (error) {
        console.error(error);
        return res.status(500).json({message: 'Erro ao buscar igrejas'});  
    };
};

export const listOneChurch = async(req, res) => {
    try {
        const id_church = parseInt(req.params.id_church);
        const church = await getChurch(id_church);

        if(isNaN(id_church)) {
            return res.status(400).json({message: 'ID inválido'});
        }

        if(!church) {
            return res.status(404).json({message: 'igreja não encontrada'});
        }
        res.status(200).json(church);
    } catch (error) {
        console.error(error);
        return res.status(500).json({message: 'Erro ao buscar igreja'});
    };
};

export const registerChurch = async(req, res) => {
    try {
        const churchData = sanitizeChurchData(req.body);

        await insertChurch(churchData);
        res.status(201).json({message: 'Igreja cadastrada com sucesso!'});

    } catch (error) {
        console.error(error);
        return res.status(500).json({message: 'Erro interno no servidor'});
    };
};

export const updateChurch = async(req, res) => {
    try {
        const id_church = parseInt(req.params.id_church);
        const churchData = sanitizeChurchData(req.body);

        if(isNaN(id_church)) {
            return res.status(400).json({message: 'ID inválido'})
        };

        await modifyChurch(id_church, churchData);
        res.status(200).json({message: 'Igreja atualizada com sucesso'})

    } catch (error) {
        console.error(error);
        return res.status(500).json({message: 'Erro interno do servidor'})
    };
};

export const deleteChurch = async(req, res) => {
    try {
        const id_church = parseInt(req.params.id_church);
        if(isNaN(id_church)) {
            return res.status(400).json({message: 'ID Inválido'});
        }
        const results = await deleteChurchById(id_church);
        
        if(results.affectedRows === 0) {
            return res.status(404).json({message: 'Igreja não encontrada'});
        }
        res.status(200).json({message: 'Igreja deletada!'})

    } catch (error) {
        console.error(error);
        return res.status(500).json({message: 'Erro ao deletar igreja'})
    };
};