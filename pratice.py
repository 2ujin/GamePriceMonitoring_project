# 3가지 게임의 가격을 갖고와씀
# 이제 javascript 라이브러리를 사용해서 차트 만들어야됨

import requests
import threading
from bs4 import BeautifulSoup

end = False

req = requests.get('https://store.steampowered.com/tags/en/RPG/')
source = req.text

soup = BeautifulSoup(source, 'html.parser')

#Iratus: Lord of the Dead
game_list1 = soup.select("#NewReleasesRows > a:nth-child(7) > div.discount_block.tab_item_discount > div.discount_prices > div.discount_final_price");
#Animus - Stand Alone
game_list2 = soup.select("#NewReleasesRows > a:nth-child(5) > div.discount_block.tab_item_discount > div.discount_prices > div.discount_final_price");
#Detective Girl of the Steam City
game_list3 = soup.select("#NewReleasesRows > a:nth-child(9) > div.discount_block.tab_item_discount.no_discount > div > div");


for game_price in game_list1:
	value1 = game_price.text
for game_price1 in game_list2:
	value2 = game_price1.text
for game_price2 in game_list3:
    value3 = game_price2.text

def excute(second=1.0):
    global end
    if end:
        return
    print(value1 + " " + value2 + " " +  value3)

    threading.Timer(second, excute, [second]).start()
excute(2.0)