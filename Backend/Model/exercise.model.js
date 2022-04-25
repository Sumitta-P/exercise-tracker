import mongoose from "mongoose";

const Exercise = mongoose.Schema({
  activityname:{
    type: String,
    require: true
  },
  activitytype:{
    type: String,
    require: true
  },
  description:{
    type: String,
    require: true
  },
  duration:{
    type: String,
    require: true
  },
  date:{
    type: String,
    require: true
  }
}, {
    timestamps: true
});

export default mongoose.model('Exercises', Exercise);