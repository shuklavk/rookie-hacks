from flask import Flask, render_template, request, redirect,url_for
import pymongo
from bson import ObjectId

app = Flask(__name__)
client = pymongo.MongoClient("mongodb+srv://admin:<password>@rookiehacks-7odrh.azure.mongodb.net/test?retryWrites=true&w=majority")
db = client.Businesses
bizlist = db.Reopener

def redirect_url():
    return request.args.get('next') or request.referrer or url_for('index')

def update():
    newbiz = bizlist.find()
    return render_template('index.html', bizlist = newbiz)

app.add_url_rule("/", "update", update)

@app.route('/add_biz', methods=['POST'])
def add_biz():
    name = request.values.get('name')
    address = request.values.get('name')
    hours = request.values.get('name')
    phone = request.values.get('name')
    website = request.values.get('name')
    message = request.values.get('message')
    bizlist.insert({'name':name, 'address':address, 'hours':hours,
    'phone':phone, 'website':website, 'message':message})
    return redirect('/')

@app.route('/remove_biz')
def remove_biz():
    bizlist.remove({'_id':ObjectId(request.values.get('_id'))})
    return redirect('/')
