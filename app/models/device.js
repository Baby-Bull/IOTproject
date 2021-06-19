const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/IoT', { useNewUrlParser: true, useUnifiedTopology: true });

const DeviceSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    deviceName: String,
    connectState: String,
    location: String,
    creatorId: String,
    stateHistory: [{
        _id: false,
        at: {
            type: Date,
            default: Date.now()
        },
        temperature: Number,
        humidity: Number,
        actorState: String
    }],
    actionHistory: [{
        _id: false,
        username: String,
        userId: mongoose.Types.ObjectId,
        action: String
    }]
})

DeviceSchema.statics = {
    createDevice: async function (data) {
        try {
            let device = new this({
                _id: new mongoose.Types.ObjectId,
                deviceName: data.deviceName,
                connectState: 'pending',
                creatorId: data.userId,
                location: data.location,
                stateHistory: [],
                actionHistory: []
            })
            await device.save();
            return device;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = mongoose.model('Device', DeviceSchema);