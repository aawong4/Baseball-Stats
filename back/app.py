from flask import Flask
from flask_cors import CORS
from datetime import date
import statsapi

app = Flask(__name__)
CORS(app)
today = date.today()

print(today.strftime('%d/%m/%Y'))

@app.route('/api/mlb/standings', methods=['GET'])
def get_mlb_standings():
    data = statsapi.standings_data()
    return data

@app.route('/api/mlb/scores', methods=['GET'])
def get_mlb_scores():
    games = statsapi.schedule(date=today.strftime('%m/%d/%Y'))
    return games

@app.route('/api/mlb/stats', methods=['GET'])
def get_mlb_stats():
    stats = {}
    stats["ERA"] = statsapi.league_leader_data('earnedRunAverage', limit=5)
    stats["K"] = statsapi.league_leader_data('strikeouts', statGroup="pitching", limit=5)
    stats["WHIP"] = statsapi.league_leader_data('walksAndHitsPerInningPitched', limit=5)

    stats["BA"] = statsapi.league_leader_data('battingAverage', limit=5)
    stats["OPS"] = statsapi.league_leader_data('onBasePlusSlugging', limit=5)
    stats["HR"] = statsapi.league_leader_data('homeruns', limit=5)
    return stats

if __name__ == '__main__':
    app.run(debug=True)