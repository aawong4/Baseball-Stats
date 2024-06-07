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

if __name__ == '__main__':
    app.run(debug=True)