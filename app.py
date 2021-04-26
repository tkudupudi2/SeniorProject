from flask import Flask, render_template, redirect, session, url_for, request
from functools import wraps
import pymongo
import urllib
import uuid
from bson.objectid import ObjectId
import re

app = Flask(__name__)
app.secret_key = 'THIS_IS_MY_SECRET_KEY'

#Database
#brew services start mongodb-community@4.4
#brew services stop mongodb-community@4.4
client = pymongo.MongoClient('localhost', 27017)
db = client.user_profile

def login_required(f):
    @wraps(f)
    def wrap(*args, **kwargs):
        if 'logged_in' in session:
            return f(*args, **kwargs)
        else:
            return redirect('/')
    return wrap

#Routes
from user import routes

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/dashboard/')
@login_required
def dashboard():
    return render_template('dashboard.html')

@app.route('/account/')
@login_required
def account():
    return render_template('account.html')

@app.route('/product/<name>')
def product(name):
    productInfo = db.products.find_one({ "_id": (name)})
    
    idInfo = str(productInfo["_id"])
    nameIn = str(productInfo["name"])
    categoryIn = str(productInfo["category"])
    priceIn = str(productInfo["price"])
    pricePerPoundIn = str(productInfo["pricePerPound"])
    weightIn = str(productInfo["weight"])
    return render_template('product.html', id=idInfo, name=nameIn, category=categoryIn, price=priceIn, pricePerPound=pricePerPoundIn, weight=weightIn )

@app.route('/pantry')
def pantry():
    return render_template('pantry.html')

@app.route('/add', methods=['POST'])
def add_item():
    new_item = request.form.get('new-item')
    db.pantry_items.insert_one({'text' : new_item, 'complete' : False})
    return redirect(url_for('pantry'))

@app.route('/complete/<oid>')
def complete(oid):
    item = db.pantry_items.find_one({'_id': ObjectId(oid)})
    item['complete'] = True
    db.pantry_items.save(item)
    return redirect(url_for('pantry'))

@app.route('/delete_completed')
def delete_completed():
    db.pantry_items.delete_many({'complete' : True})
    return redirect(url_for('pantry'))

@app.route('/delete_all')
def delete_all():
    db.pantry_items.delete_many({})
    return redirect(url_for('pantry'))

@app.route('/grocery/')
@login_required
def showAll():
    products = []
    collection = db['products']
    cursor = collection.find({})
    for p in cursor:
        product = {
            "_id": p["_id"],
            "name": p["name"],
            "category": p["category"],
            "price": p["price"],
            "pricePerPound": p["pricePerPound"],
            "weight": p["weight"]
        }
        products.append(product)
    return render_template('grocery.html', products=products)

@app.route('/search/<name>')
@login_required
def search(name):
    products = []
    collection = db['products']
    cursor = collection.find({"name": re.compile('^' + name + '$', re.IGNORECASE)})
    for p in cursor:
        product = {
            "_id": p["_id"],
            "name": p["name"],
            "category": p["category"],
            "price": p["price"],
            "pricePerPound": p["pricePerPound"],
            "weight": p["weight"]
        }
        products.append(product)
    return render_template('grocery.html', products=products)