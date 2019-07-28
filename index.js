var data = require('./data.js'); //데이터 파일

module.exports = async function (context, myTimer) {
        context.log("" + data.game_price1() + ", " + data.game_price2() + ", " + data.game_price3() ); //게임 가격 찍어보기
        
        var int_price1 = parseInt(data.game_price1()); //string to int
        var int_price2 = parseInt(data.game_price2());
        var int_price3 = parseInt(data.game_price3());
        
        context.log(typeof price1); //number
};