import mongoose, { model } from 'mongoose';
const Schema = mongoose.Schema;

const FlashcardSchema = new Schema({
    question: {
        type:  String,
        required: true,        
    },
    answer: {
        type: String,
        required: true,
    },
    isAnswered: {
        type: Boolean,
        default: false,
    },
});

export default model('flashcard', FlashcardSchema);

