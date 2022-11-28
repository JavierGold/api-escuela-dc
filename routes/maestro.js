const express=require('express');
const router = express.Router();
const maestroController = require('../controllers/maestroController')

router.get('/login/:nombreUsuario/:password',maestroController.getMaestroByPasswordAndEmail);
router.get('/',maestroController.getMaestros);
router.get('/:id',maestroController.getMaestroById);
router.post('/',maestroController.post);
router.put('/:id',maestroController.patch);
router.delete('/:id',maestroController.delete);

module.exports= router