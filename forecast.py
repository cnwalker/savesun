import json
import urllib

HI_SEAS_LATITUDE = '19.602378'
HI_SEAS_LONGITUDE = '-155.487192'
API_KEY = '8bd29bf1cf98e37ae3949ebf259a7cd2'

def getWeather(time=None, latitude=HI_SEAS_LATITUDE, longitude=HI_SEAS_LONGITUDE, api_key=API_KEY):
    if time:
        query = 'https://api.darksky.net/forecast/%s/%s,%s,%s' % (api_key, latitude, longitude, time)
    else:
        query = 'https://api.darksky.net/forecast/%s/%s,%s' % (api_key, latitude, longitude)
    response = urllib.urlopen(query)
    data = json.load(response)
    return data


def getDataForDates(dates):
    dataByDate = {}
    used_dates = set([])
    for date in dates:
        day = date.split('T')[0]
        if day not in used_dates:
            print "called API"
            dataByDate[date] = getWeather(date)
            used_dates.add(day)
    return dataByDate

def parseAndWriteData(dataByDate):
    output_line = ''
    for key in dataByDate.keys():
