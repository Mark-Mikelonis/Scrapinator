var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
    headline: {
        type: String,
        required:true
    },
    summary:{
        type:String,
        required:true
    },
    link:{
        type: String,
        required: true
    },
    imgUrl:{
        type: String,
        required: true
    },
    postID:{
        type: String,
        required: true
    },
    note:{
        type:Schema.Types.ObjectId,
        ref: "Note"
    }
});

var Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;