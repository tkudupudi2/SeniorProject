from flask import Flask, jsonify, request, session, redirect
from passlib.hash import pbkdf2_sha256
import uuid
from app import db

class User:

    def start_session(self, user):
        del user['password']
        session['logged_in'] = True
        session['user'] = user
        # remove comments to experiment
        #self.add_to_cart("2", 8)
        #self.add_to_cart("1", 300)
        #self.remove_from_cart("1", 50)
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
    
    def account(self):
        userID = session['user']['_id']
        user = db.users.find_one({'_id': userID})
        user['name'] = request.form.get('name')
        user['email'] = request.form.get('email')
        user['password'] = request.form.get('password')
        user['home_address'] = request.form.get('home_address')
        user['phone_number'] = request.form.get('phone_number')
        db.users.save(user)
        return redirect('/dashboard/')
        
    def pantry(self):
        return redirect('/pantry')

    def add_to_cart(self, product, quantity):
        
        # CALL THIS METHOD WITH FORM: add_to_cart("1", 45) where "1" STRING FORMAT represents product number, 45 INT FORMAT represents quantity
        # self is not taken as a parameter in the method statement
        # insert:     self.add_to_cart("1", 45)    right before the return statement in start_session (line 12) to test

        userID = session['user']['_id']

        # create cart document for user if one doesn't exist
        if not db.carts.find_one({"_id": userID}):
            db.carts.insert_one({"_id": userID, "totalQuantity": 0})
        
        # check if item already has a listing in the cart, if positive or zero, add to current value, if negative list new fresh quantity
        # if item isn't listed in cart yet, add new value to user's cart
        try:
            cartItem = db.carts.find_one({"_id": userID})[product]
        except KeyError:
            db.carts.update_one({"_id": userID}, {"$set": {product:{"quantity": quantity}}})
        else:
            cartItemQuantity = cartItem.get('quantity',[])
            if cartItemQuantity >= 0:
                newQuantity = cartItemQuantity + quantity
                db.carts.update_one({"_id": userID}, {"$set": {product: {"quantity":newQuantity}}})
            else:
                db.carts.update_one({"_id": userID}, {"$set": {product: {"quantity":quantity}}})
        
        # find current total quantity, add incoming quantity, then update
        cartQuantity = db.carts.find_one({"_id": userID})["totalQuantity"]
        cartQuantity = cartQuantity + quantity
        db.carts.update_one({"_id": userID}, {"$set": {"totalQuantity": cartQuantity }})

        return 0

    def remove_from_cart(self, product, quantity):

        # blah blah same idea as above too lazy to comment everything
        userID = session['user']['_id']
        cartQuantity = db.carts.find_one({"_id": userID})["totalQuantity"]

        try:
            cartItem = db.carts.find_one({"_id": userID})[product]
        except KeyError:
            haha = "hehe"
            # can't leave this blank but also can't remove it entirely   :?
        
        else:
            cartItemQuantity = cartItem.get('quantity',[])
            if(cartItemQuantity >= quantity):
                newQuantity = cartItemQuantity - quantity
                db.carts.update_one({"_id": userID}, {"$set": {product: {"quantity":newQuantity}}})
                cartQuantity = cartQuantity - quantity
                db.carts.update_one({"_id": userID}, {"$set": {"totalQuantity": cartQuantity }})
            else:
                db.carts.update_one({"_id": userID}, {"$set": {product: {"quantity":0}}})
                cartQuantity = cartQuantity - cartItemQuantity
                db.carts.update_one({"_id": userID}, {"$set": {"totalQuantity": cartQuantity }})
        
        return 0

    def empty_cart(self):

        userID = session['user']['_id']

        # delete cart document (new one will be made when next item is added, cart total quantity reset to 0 upon doing so)
        db.carts.remove({"_id": userID})

        return 0

class Product:

    def initialize_products():

        product = {
            "_id": "1",
            "name": "Apple",
            "category": "fruit",
            "price": 1.00,
            "pricePerPound": "null",
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
            "price": .30,
            "pricePerPound": "null",
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
            "price": 1.00,
            "pricePerPound": "null",
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