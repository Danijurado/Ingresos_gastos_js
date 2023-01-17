from registro_ig import app
from flask import jsonify, render_template
from registro_ig.models import *
from config import VERSION


@app.route("/")
def index():
    return render_template("index.html")

@app.route(f"/api/{VERSION}/all")
def all_movements():    
    registros = select_all()
    return jsonify(registros)

@app.route(f"/api/{VERSION}/new",methods=["POST"])
def new():    
    return "AQUI REALIZAMOS UN ALTA"

@app.route(f"/api/{VERSION}/update/<int:id>",methods=["PUT"])
def update(id):
    return f"ESTO ACTUALIZA EL REGISTRO CON ID:{id}"

@app.route(f"/api/{VERSION}/delete/<int:id>",methods=["DELETE"])
def remove(id):
    return f"ESTO BORRA EL REGISTRO CON ID: {id}"