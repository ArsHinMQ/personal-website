from app import db
from sqlalchemy import Column, Integer, String, Text, DateTime
from sqlalchemy.orm import validates
from werkzeug.security import generate_password_hash, check_password_hash
import datetime


class Admin(db.Model):
    __tablename__ = 'admin'
    id = Column(Integer, primary_key=True)
    fullname = Column(String(30), nullable=False)
    password = Column(String(128), nullable=False)
    age = Column(Integer, nullable=True)
    location = Column(String(60), nullable=True)
    about = Column(Text, nullable=True)
    thumbnail = Column(String(256), nullable=True)
    bg = Column(String(256), nullable=True)

    def __init__(self, **kw):
        for key, value in kw.items():
            setattr(self, key, value)

    @validates("password")
    def set_password(self, key, value):
        if len(value) < 6:
            raise ValueError("Short Password")
        return generate_password_hash(value)

    def check_password(self, password):
        return check_password_hash(self.password, password)



class Ability(db.Model):
    __tablename__ = "abilities"
    id = Column(Integer, primary_key=True)
    name = Column(String(30), unique=True, nullable=False)
    scale = Column(Integer, unique=False, nullable=False)
    kind = Column(String(5), nullable=False, unique=False)

    def __init__(self, name, scale, kind):
        self.name = name
        self.scale = scale
        self.kind = kind


    @validates("scale")
    def set_scale(self, key, value):
        try:
            value=int(value)
        except ValueError:
            raise ValueError("Scale can't be character")
        if value > 100:
            raise ValueError("Scale can't be over than 100")
        elif value <= 0:
            raise ValueError("Invalid scale, did you enter 0 or a negative number as scale?")
        return value



class Experience(db.Model):
    __tablename__ = "experiences"
    id = Column(Integer, primary_key=True)
    title = Column(String(60), nullable=False, unique=False)
    start_date = Column(String(20), nullable=False, unique=False)
    finish_date = Column(String(20), nullable=False, unique=False)
    location = Column(String(60), nullable=False, unique=False)
    description = Column(Text(), nullable=True, unique=False)
    kind = Column(String(10), nullable=False, unique=False)

    def __init__(self, title, start_date, finish_date, location, kind, description=None):
        self.title = title
        self.start_date = start_date
        self.finish_date = finish_date
        self.location = location
        self.description = description
        self.kind = kind



class Contact(db.Model):
    __tablename__ = 'contacts'
    id = Column(Integer, primary_key=True)
    name = Column(String(128), nullable=False, unique=True)
    address = Column(String(128), nullable=False, unique=True)
    logo = Column(String(256), nullable=True)

    def __init__(self, name, address, logo=None):
        self.name = name
        self.address = address
        self.logo = logo



class Message(db.Model):
    __tablename__ = "messages"
    id = Column(Integer, primary_key=True)
    sender_email = Column(String(128), nullable=False)
    postage_date = Column(DateTime, default=datetime.datetime.now)
    subject = Column(String(128), nullable=False)
    msg = Column(Text, nullable=False)

    def __init__(self, email, subject, msg):
        self.sender_email = email
        self.subject = subject
        self.msg = msg
