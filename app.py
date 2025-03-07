from flask import Flask, request, jsonify
import random  # Placeholder for actual machine learning model

app = Flask(__name__)

@app.route('/')
def index():
    return app.send_static_file('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    
    # Mock prediction logic, replace with actual ML model
    diseases = ['Foot and Mouth Disease', 'Mastitis', 'Bovine Respiratory Disease', 'Healthy']
    prediction = random.choice(diseases)
    
    return jsonify({'prediction': prediction})

if __name__ == '__main__':
    app.run(debug=True)
