from flask import Flask
from flask_cors import CORS
import statsapi

app = Flask(__name__)
CORS(app)

@app.route('/api/mlb/stats', methods=['GET'])
def get_mlb_stats():
    data = statsapi.standings_data()
    return data

if __name__ == '__main__':
    app.run(debug=True)