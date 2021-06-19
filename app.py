from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from config import Config

app = Flask(__name__)
app.config.from_object(Config)
db = SQLAlchemy(app)
migrate = Migrate(app, db)


import models
import views
from mod_admin import views, admin
app.register_blueprint(admin)


if __name__ == "__main__":
    app.run(debug=True)
