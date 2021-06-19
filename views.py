from flask import render_template, request, abort, flash, redirect, url_for
from app import app, db
from models import Admin, Ability, Experience, Message, Contact
from forms import SendEmailForm


@app.route('/', methods=['POST', 'GET'])
def index():
    form = SendEmailForm(request.form)
    profile = Admin.query.first()
    skills = Ability.query.filter(Ability.kind == "skill").all()
    langs = Ability.query.filter(Ability.kind == "lang").all()
    educations = Experience.query.filter(Experience.kind == "education").all()
    careers = Experience.query.filter(Experience.kind == "career").all()
    contacts = Contact.query.all()

    if request.method == 'POST':
        if not form.validate_on_submit:
            abort(400)
        if not form.sender_email.data or not form.msg.data:
            flash("please fill all the required fields", "warning")
            return redirect(url_for('index'))

        new_msg = Message(
            form.sender_email.data,
            form.subject.data,
            form.msg.data
        )
        db.session.add(new_msg)
        db.session.commit()
        flash("Your Message sended", "success")
        return redirect(url_for('index'))

    return render_template('index.html',
                           profile=profile,
                           skills=skills,
                           langs=langs,
                           educations=educations,
                           careers=careers,
                           form=form,
                           contacts=contacts
                           )
