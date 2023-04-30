const mongoose = require('mongoose');

const UsersSchema = mongoose.Schema({
    nombre: { type: String, required: true},
    correo: { type: String, required: true},
    edad: { type: Number, required: true},
})

UsersSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

UsersSchema.set('toJSON', {
    virtuals: true,
});

module.exports = mongoose.model('Users', UsersSchema);