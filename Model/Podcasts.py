import requests
import urllib.parse as urlparse

class Podcasts:
    def __init__(self):
        pass

    def searchPodcasts(self, keywords):
        dict = {
            "term":keywords
        }
        base_url = 'https://itunes.apple.com/search'
        response = requests.post(base_url, data=dict).json()
        print (response)
        return response
