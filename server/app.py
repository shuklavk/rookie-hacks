from flask import Flask, render_template, request, redirect,url_for,jsonify
import pymongo
from bson.json_util import dumps
from bson.objectid import ObjectId

app = Flask(__name__)
client = pymongo.MongoClient("mongodb+srv://test:test@rookie-xcokm.gcp.mongodb.net/test?retryWrites=true&w=majority")
db = client.business
bizlist = db.reopener

#def redirect_url():
 #   return request.args.get('next') or request.referrer or url_for('index')

#def update():
  #  newbiz = bizlist.find()
 #   return render_template('index.html', bizlist = newbiz)

#app.add_url_rule("/", "update", update)

@app.route('/add_biz', methods=['POST'])
def add_biz():
    _json = request.json
    _name = _json['name']
    
    _address = _json['address']
    _hours = _json['hours']
    _phone = _json['phone']
    _website = _json['website']
    _message = _json['message']
    if _name and _address and request.method=="POST":
        id = bizlist.insert_one({'name':_name,'address':_address, 'hours':_hours,
        'phone':_phone, 'website':_website, 'message':_message})

        resp = jsonify("user created")

        resp.status_code = 200

        return resp

    else:
        return not_found()

@app.route('/get_biz')
def results():
#     #returns all the bars as an iterator
    cursor = bizlist.find()

    resp = dumps(cursor)

    return resp

@app.route('/get_biz/<id>')
def result(id):
#     #returns all the bars as an iterator
    cursor = bizlist.find_one({'_id':ObjectId(id)})

    resp = dumps(cursor)

    return resp




@app.route('/remove_biz/<id>', methods=['DELETE'])
def remove_biz(id):
    bizlist.delete_one({'_id':ObjectId(id)})
    resp = jsonify("Bussiness deleted successfully")
    resp.status_code = 200
    return resp
#
# #Get from request type values
# type = request.values.get('type')
@app.route('/update_biz/<id>', methods=['PUT'])
def update_biz(id):
    _id = id
    _json = request.json
    _name = _json['name']
    _address = _json['address']
    _hours = _json['hours']
    _phone = _json['phone']
    _website = _json['website']
    _message = _json['message']
    if _name and _address and request.method=="PUT":
        bizlist.update_one({'_id':ObjectId(_id['$oid']) if '$oid' in _id else ObjectId(_id)},{'$set':{
            'name':_name,'address':_address, 'hours':_hours,'phone':_phone, 'website':_website, 'message':_message
        }})


        resp = jsonify("Bussiness Update Successfully")

        resp.status_code = 200

        return resp
    else:
        return not_found()

@app.errorhandler(404)
def not_found(error=None):
    message = {
        'status': 404,
        'message' : 'Not Found' + request.url
    }
    resp = jsonify(message)

    resp.status_code = 404

    return resp

    return "ok"


if __name__ == '__main__':
    app.run(port=8000,debug=True)
