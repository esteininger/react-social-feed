from flask import Flask, Blueprint, request, jsonify
from Model.Podcasts import Podcasts

mod = Blueprint("/podcast_controller", __name__)

podcasts = Podcasts()

@mod.route('/api/podcasts', methods=['GET'])
def podcastSearch():
    keywords = request.args.get('keywords', default='', type=str)
    return jsonify(podcasts.searchPodcasts(keywords))
