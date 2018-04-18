import requests
from requests_oauthlib import OAuth2Session
import requests

class Instagram:
    def init(self):
        pass

    def authorize(self):
        base_url = 'https://api.instagram.com/oauth/authorize/'
        client_id = '127ad61a80db4dd58f7099bdca109429',
        redirect_uri = 'http://localhost:5000',
        response_type = "code"

        oauth2 = OAuth2Session(client_id, redirect_uri=redirect_uri)
        authorization_url, state = oauth2.authorization_url(authorization_base_url)
        return authorization_url
