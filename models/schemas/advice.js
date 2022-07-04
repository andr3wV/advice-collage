const mongoose = require('mongoose');
const Schema = mongoose.Schema;


var adviceSchema = new Schema({
	title : {type: String, required: true}, 
	author : {type : String, required: true}, 
	URL : {type: String, required: true}, 
	summary: String, 
	authorWikiURL : String,
	date : Date, //when video was uploaded -- maybe stick with just the year or simplified date
	
	}

);