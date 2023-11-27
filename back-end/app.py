from flask import Flask
from views import bp
from models import db

def create_app():
    app = Flask(__name__)
    app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:5a5e-G4cCbCBfeAece6FbF3db5hAHC3E@monorail.proxy.rlwy.net:26706/railway'
    db.init_app(app)
    app.register_blueprint(bp, url_prefix = '/api')
    return app

if __name__ == '__main__':
    app = create_app()
    app.run(debug=True)