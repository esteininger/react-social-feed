#!/usr/bin/env python

#Flask
from flask import Flask, Blueprint, render_template

#Imports
from Controller import InstagramRoute, PodcastRoute

#run main app
app = Flask(__name__)

#import Controllers/Routes
app.register_blueprint(InstagramRoute.mod)
app.register_blueprint(PodcastRoute.mod)

app.secret_key = 'bs90yF6KehnBWA4OfuvP1g2AQtkkH3pL'

if __name__ == '__main__':
    app.run(host="localhost", debug=True)
