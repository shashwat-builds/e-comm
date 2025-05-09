from flask import Flask
from flask_sqlalchemy import SQLAlchemy

db=SQLAlchemy();

class Product(db.Model):
    __tablename__ = 'products'
    
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    price = db.Column(db.Float, nullable=False)
    description = db.Column(db.String(300), nullable=True)
    photo=db.Column(db.String(300), nullable=False)
