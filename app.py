
from flask import Flask, redirect, render_template, url_for, request
from datetime import date, timedelta, datetime

app = Flask(__name__)


@app.route('/')
def home():
    return render_template('resume_pdf.html', title="Resume")