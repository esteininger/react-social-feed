from flask import Flask, Blueprint, render_template, request, jsonify, redirect, make_response, session, url_for
from requests_oauthlib import OAuth2Session
import requests
import urllib.parse as urlparse
# from Model.Instagram import Instagram


mod = Blueprint("/instagram_controller", __name__)

client_id = '127ad61a80db4dd58f7099bdca109429'
client_secret = '57698df60f41468e851521a88726dec0'
authorization_base_url = 'https://api.instagram.com/oauth/authorize'
redirect_uri = 'http://localhost:5000/api/login/instagram'
response_type = 'code'

app_url = 'http://localhost:3000'

@mod.route('/api/authorize/instagram')
def authorizeRescueTime():
    oauth2 = OAuth2Session(client_id, redirect_uri=redirect_uri)
    authorization_url, state = oauth2.authorization_url(authorization_base_url)
    return redirect(authorization_url)

@mod.route('/api/login/instagram')
def loginRescueTime():
    url = request.url
    parsed = urlparse.urlparse(request.url)
    code = urlparse.parse_qs(parsed.query)['code'][0]

    #make a POST request
    dictToSend = {
        "grant_type": "authorization_code",
        "client_id": client_id,
        "client_secret": client_secret,
        "code": code,
        "redirect_uri": redirect_uri
    }

    response = requests.post('https://api.instagram.com/oauth/access_token', data=dictToSend).json()
    session['token_instagram'] = response['access_token']
    return redirect(app_url)
