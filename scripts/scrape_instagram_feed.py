from bs4 import BeautifulSoup
import requests

oga_url = 'https://www.instagram.com/our_golden_age/'

response = requests.get(oga_url)
print('response:', response)


soup = BeautifulSoup(response.text, 'html.parser')
print(soup.prettify())