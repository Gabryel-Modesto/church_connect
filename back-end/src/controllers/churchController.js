import { getAllChurches, getChurces } from "../service/churchService"

export const listAllChurches = async(req, res) => {
    try {
        const churches = await getAllChurches();
        res.status(200).json(churches);
    } catch (error) {
        console.error(error);
        return res.status(500).json({message: 'Erro ao buscar igreja'});  
    };
};

export const listOneChurch = async(req, res) => {
    try {
        const id_church = parseInt(req.params.id_church);
        const church = await getChurces(id_church);

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

export const registerChurch = async(req, res) => {}

export const updateChurch = async(req, res) => {}

export const deleteChurch = async(req, res) => {}