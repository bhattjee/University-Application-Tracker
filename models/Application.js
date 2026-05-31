const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
  country: {
    type: String,
    enum: ['Germany', 'Austria'],
    required: true
  },
  universityName: { type: String, required: true },
  courseName: { type: String, default: '' },
  applicationStartDate: { type: String, default: '' },
  applicationDeadline: { type: String, default: '' },
  status: {
    type: String,
    enum: ['Not Opened', 'In Progress', 'Submitted', 'Accepted', 'Rejected', 'Expired', 'Withdrawn'],
    default: 'Not Opened'
  },
  portalLink: { type: String, default: '' },
  courseSiteLink: { type: String, default: '' },
  otherLinks: { type: String, default: '' },
  isUniAssist: { type: Boolean, default: false },
  applicationFee: { type: Number, default: 0 },
  institutionType: {
    type: String,
    enum: ['Public', 'Private', 'Technical University', 'University of Applied Sciences', 'Other'],
    default: 'Public'
  },
  steps: { type: String, default: '' },
  order: { type: Number, default: 0 }
}, {
  timestamps: true
});

module.exports = mongoose.model('Application', applicationSchema);