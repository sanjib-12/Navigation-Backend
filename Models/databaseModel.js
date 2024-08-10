const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true,
    },
    email:{
        type: String, 
        unique: true,
        required: true,
    },
    role:{
        type: String,
        default: 'user',
    },
    password:{
        type: String,
        required: true,
    }
});


const travelHistorySchema = new mongoose.Schema({
  userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    required: true, 
    ref: 'User' 
    },

  startLocation: {
    lat: { type: Number, required: true },
    lng: { type: Number, required: true }
  },

  endLocation: {
    lat: { type: Number, required: true },
    lng: { type: Number, required: true }
  },

  travelTime: { 
    type: String, 
    required: true 
},
  travelDistance: { 
    type: String, 
    required: true 
},
  createdAt: { 
    type: Date, 
    default: Date.now 
}
});

const TravelHistory= mongoose.model('TravelHistory', travelHistorySchema);

const User = mongoose.model('User', userSchema);

module.exports = {User, TravelHistory};