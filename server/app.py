from flask import Flask, render_template, request, redirect,url_for
import pymongo
from bson import ObjectId

app = Flask(__name__)
client = pymongo.MongoClient("mongodb+srv://teamrh:AtId64DvSXp66Py8@rookiehacks-7odrh.azure.mongodb.net/test?retryWrites=true&w=majority")
db = client.business
bizlist = db.reopener

def redirect_url():
    return request.args.get('next') or request.referrer or url_for('index')

def update():
    newbiz = bizlist.find()
    return render_template('index.html', bizlist = newbiz)

app.add_url_rule("/", "update", update)

@app.route('/add_biz', methods=['POST'])
def add_biz():
    print('hi')
    name = request.values.get('name')
    address = request.values.get('address')
    hours = request.values.get('hours')
    phone = request.values.get('phone')
    website = request.values.get('website')
    message = request.values.get('message')
    bizlist.insert({'name':name, 'address':address, 'hours':hours,
    'phone':phone, 'website':website, 'message':message})
    return redirect('/')

@app.route('/remove_biz')
def remove_biz():
    bizlist.remove({'_id':ObjectId(request.values.get('_id'))})
    return redirect('/')
#
# #Get from request type values
# type = request.values.get('type')
# @app.route('/get_biz', methods=['GET'])
# def results(type):
#     #returns all the bars as an iterator
#     cursor = bizlist.find({type: type})
#     toreturn = []
#     for biz in list(cursor):
#         toreturn.append(biz)
#     return toreturn
