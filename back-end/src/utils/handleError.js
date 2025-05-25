export function handleError(res, error) {
    console.error(error);
    res.status(500).json({message: 'Erro interno no servidor', error: error.message})
};