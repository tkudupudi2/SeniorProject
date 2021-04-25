from flask import Flask, jsonify, request, session, redirect
from passlib.hash import pbkdf2_sha256
import uuid
from app import db

class User:

    def start_session(self, user):
        del user['password']
        session['logged_in'] = True
        session['user'] = user
        return jsonify(user), 200

    def signup(self):

        user = {
            "_id": uuid.uuid4().hex,
            "name": request.form.get('name'),
            "email": request.form.get('email'),
            "password": request.form.get('password'),
            "home_address": request.form.get('home_address'),
            "phone_number": request.form.get('phone_number')
        }

        user['password'] = pbkdf2_sha256.encrypt(user['password'])

        if db.users.find_one({ "email": user['email']}):
            return jsonify({"error": "Account associated with this email already in use. Please login!"}), 400

        if db.users.insert_one(user):
            return self.start_session(user)

        return jsonify({ "error": "Signup failed" }), 400

    def signout(self):
        session.clear()
        return redirect('/')
    
    def login(self):
        user = db.users.find_one({
            "email": request.form.get('email')
        })
        if user and pbkdf2_sha256.verify(request.form.get('password'), user['password']):
            return self.start_session(user)
        
        return jsonify({ "error": "Invalid login credentials. Please try again." }), 401

class Product:

    def initialize_products():

        product = {
            "_id": "1",
            "name": "Apple",
            "category": "fruit",
            "price": "null",
            "pricePerPound": 4.00,
            "weight": .25
        }
        if not db.products.find_one({ "_id": "1"}):
            db.products.insert_one(product)
        else: 
            db.products.replace_one({"_id": "1"}, product)

        product = {
            "_id": "2",
            "name": "Banana",
            "category": "fruit",
            "price": "null",
            "pricePerPound": 1.50,
            "weight": .20
        }
        if not db.products.find_one({ "_id": "2"}):
            db.products.insert_one(product)
        else: 
            db.products.replace_one({"_id": "2"}, product)
        
        product = {
            "_id": "3",
            "name": "Orange",
            "category": "fruit",
            "price": "null",
            "pricePerPound": 3.00,
            "weight": .33
        }
        if not db.products.find_one({ "_id": "3"}):
            db.products.insert_one(product)
        else: 
            db.products.replace_one({"_id": "3"}, product) 

        product = {
            "_id": "4",
            "name": "Blueberries",
            "category": "fruit",
            "price": 4.00,
            "pricePerPound": "null",
            "weight": .5
        }
        if not db.products.find_one({ "_id": "4"}):
            db.products.insert_one(product)
        else: 
            db.products.replace_one({"_id": "4"}, product)

        product = {
            "_id": "5",
            "name": "Bread",
            "category": "grains",
            "price": 3.00,
            "pricePerPound": "null",
            "weight": 1
        }
        if not db.products.find_one({ "_id": "5"}):
            db.products.insert_one(product)
        else: 
            db.products.replace_one({"_id": "5"}, product)

        return 0