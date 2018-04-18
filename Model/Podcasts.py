import requests
import urllib.parse as urlparse

class Podcasts:
    def __init__(self):
        pass

    def searchPodcasts(self, keywords):
        dict = {
            "term":str(keywords),
            "media":"podcast"
        }
        base_url = 'https://itunes.apple.com/search'
        response = requests.post(base_url, data=dict)
        print (response)
        return 'response'
