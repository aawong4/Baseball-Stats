from flask import Flask, request, jsonify
from flask_cors import CORS
from datetime import date
import statsapi
import pymongo

# Initialize Flask app
app = Flask(__name__)
CORS(app)

# Initialize mongoDB database
myclient = pymongo.MongoClient("mongodb://localhost:27017/")
db = myclient["mydatabase"]
users = db["users"]
predictions = db["predictions"]

# Date for accessing schedule
today = date.today()

# Registration of new user, pushes new user info to mongoDB
@app.route('/api/register', methods=["POST"])
def register():
    # Obtain user data from front
    data = request.get_json()
    username = data.get("username")
    password = data.get("password")

    # Insert the new user
    user_id = users.insert_one({
        "username": username,
        "password": password,
    }).inserted_id

    return jsonify({"message": "User created successfully", "user_id": str(user_id)}), 201

# User authentication at login
@app.route('/api/login', methods=["GET", "POST"])
def login():
    # Obtain user data from front
    data = request.get_json()
    username = data.get("username")
    password = data.get("password")

    # Get user document by username
    user_doc = users.find_one({"username": username})

    # Compare input password to user password
    if user_doc:
        if password == user_doc.get("password"):
            return jsonify({"message": "Logged in!"}), 201
        else:
            return jsonify({"message": "Incorrect password"}), 201
    else:
        return jsonify({"message": "User not found"}), 201
    
    

# Gets current standings
@app.route('/api/mlb/standings', methods=['GET'])
def get_mlb_standings():
    data = statsapi.standings_data()
    return data

# Gets current status of today's games
@app.route('/api/mlb/scores', methods=['GET'])
def get_mlb_scores():
    games = statsapi.schedule(date=today.strftime('%m/%d/%Y'))
    return games

# Gets stat leaders of various stats
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