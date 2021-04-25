from flask import Flask, render_template, redirect, session
from functools import wraps
import pymongo
import urllib

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