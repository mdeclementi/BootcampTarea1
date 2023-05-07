const Users = require('../Models/Users');

exports.getAllUsers = async (req, res, next) => {

    const query_result = await Users.find();
    if (!query_result) {
        res.status(400).json({success: false})
    }
    res.status(200).json({
        success: true,
        cuantosUsers: query_result.length,
        data: query_result
    });

}

exports.getUserByNameAndEmail = async (req, res, next) => {

    //console.log(req.params);
    //console.log(req.query);

    const query_result = await Users.find({$or:[{correo: req.query.correo},{edad: req.query.edad}]});
    if (!query_result) {
        res.status(400).json({success: false})
    }
    res.status(200).json({
        success: true,
        data: query_result
    });

}

exports.postCreateUser = async (req, res, next) => {

    let user = new Users({
        nombre: req.body.nombre,
        correo: req.body.correo,
        edad: req.body.edad,
    })

    user = await user.save();

    if(!user) {
        return res.status(404).send('The user could not be created.');
    }

    res.send(user);

}

exports.putUpdateUser = async (req, res, next) => {

    //console.log(req.body);

    updatedUser = await Users.updateOne({_id: req.params.id}, req.body)

    if(!updatedUser) {
        return res.status(404).send('The user could not be updated.');
    }

    if(updatedUser.matchedCount === 0) {

        let user = new Users({
            nombre: req.body.nombre,
            correo: req.body.correo,
            edad: req.body.edad,
        })
    
        user = await user.save();
        
        res.status(201).json({
            message: 'Usuario no existia, se ha creado como nuevo.',
            data: user
        });

    } else{ 
        res.status(200).json({
            message: 'Usuario se actualiza con exito.',
            data: updatedUser
        });
    }

}

exports.deleteUser = async (req, res, next) => {

    //console.log(req.body);

    deletedUser = await Users.deleteOne({_id: req.params.id})

    if(!deletedUser) {
        return res.status(404).send('The user could not be updated.');
    }

    if(deletedUser.deletedCount === 0) {
        
        //console.log(deletedUser)

        res.status(204).json({
            message: 'Usuario no existe.',
            data: deletedUser
        });

    } else{ 
        //console.log(deletedUser)
        res.status(200).json({
            message: 'Usuario se elimina con exito.',
            data: deletedUser
        });
    }

}