import json
import urllib

HI_SEAS_LATITUDE = '19.602378'
HI_SEAS_LONGITUDE = '-155.487192'
API_KEY = '8bd29bf1cf98e37ae3949ebf259a7cd2'

def getWeather(latitude=HI_SEAS_LATITUDE, longitude=HI_SEAS_LONGITUDE, api_key=API_KEY):
    query = 'https://api.darksky.net/forecast/%s/%s,%s' % (api_key, latitude, longitude)
    response = urllib.urlopen(query)
    data = json.load(response.read())
    return data
