import requests
from bs4 import BeautifulSoup

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
	print(game_price.text)
for game_price1 in game_list2:
	print(game_price1.text)
for game_price2 in game_list3:
    print(game_price2.text)










