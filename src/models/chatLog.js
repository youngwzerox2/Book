import mongoose from 'mongoose';

const { Schema } = mongoose;

const chatLog = new Schema({
  chatNumber: String,
  time: Timestamp,
  sentence: String
});

const ChatLog = mongoose.model('ChatLog', chatLog);
export default ChatLog;
