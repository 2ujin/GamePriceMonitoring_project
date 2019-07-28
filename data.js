// Write Javascript code here 
const request = require('request'); 
const cheerio = require('cheerio'); 
const schedule = require('node-schedule');
const fs = require('fs'); 


const URL1 = "https://store.steampowered.com/app/612060/Indie_Dream/"; //Indie_Dream
const URL2 = "https://store.steampowered.com/app/679900/Swords__Souls_Neverseen/"; //Swords__Souls_Neverseen
const URL3 = "https://store.steampowered.com/app/1097420/Nobrainer_Heroes/"; //Nobrainer_Heroes

const price_data = { price1: '' , price2:'', price3: ''};

//Indie_Dream - ￦930
exports.game_price1 = function () {
    request(URL1, function (err, res, body) { 
		let $ = cheerio.load(body); 
		$('#game_area_purchase > div.game_area_purchase_game_wrapper > div > div.game_purchase_action > div > div.discount_block.game_purchase_discount > div.discount_prices > div.discount_final_price').each(function(index){ 	
            price_data.price1 = $(this).text(); 
		}); 
}); 
    return price_data.price1.substring(2);
};

//Swords__Souls_Neversee ￦13,950
exports.game_price2 = function () {
    request(URL2, function (err, res, body) { 
		let $ = cheerio.load(body); 
		$('#game_area_purchase > div > div > div.game_purchase_action > div > div.discount_block.game_purchase_discount > div.discount_prices > div.discount_final_price').each(function(index){ 	
            price_data.price2 = $(this).text(); 
		}); 
}); 
    return price_data.price2.substring(2);
};

//Nobrainer_Heroes ￦7,650
exports.game_price3 = function () {
    request(URL3, function (err, res, body) { 
		let $ = cheerio.load(body); 
		$('#game_area_purchase > div.game_area_purchase_game_wrapper > div > div.game_purchase_action > div > div.discount_block.game_purchase_discount > div.discount_prices > div.discount_final_price').each(function(index){ 	
            price_data.price3 = $(this).text(); 
		}); 
}); 
    return price_data.price3.substring(2);
};