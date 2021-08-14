from flask_wtf import FlaskForm
from wtforms import (StringField, PasswordField, IntegerField, TextAreaField,
                     FileField)
from wtforms.validators import DataRequired
from wtforms.widgets.html5 import (NumberInput, RangeInput, EmailInput,
                                   DateInput)
from wtforms.fields import DateField


class LoginForm(FlaskForm):
    password = PasswordField(validators=[DataRequired()])


class ChangePasswordForm(FlaskForm):
    old_password = PasswordField(validators=[DataRequired()])
    new_password = PasswordField(validators=[DataRequired()])
    config_password = PasswordField(validators=[DataRequired()])


class ProfileForm(FlaskForm):
    thumbnail = FileField()
    fullname = StringField(validators=[DataRequired()])
    bg = FileField()
    age = IntegerField(widget=NumberInput(min=1, max=100),
                       validators=[DataRequired()])
    birth = DateField(widget=DateInput(), validators=[DataRequired()])
    location = StringField(validators=[DataRequired()])
    about = TextAreaField(validators=[DataRequired()])


class AbilityForm(FlaskForm):
    name = StringField(validators=[DataRequired()])
    scale = IntegerField(widget=NumberInput(min=0, max=100),
                         validators=[DataRequired()])
    progress = IntegerField(widget=RangeInput(step=5))


class ExperienceForm(FlaskForm):
    title = StringField(validators=[DataRequired()])
    start_date = StringField(validators=[DataRequired()])
    finish_date = StringField(validators=[DataRequired()])
    location = StringField(validators=[DataRequired()])
    description = TextAreaField(validators=[DataRequired()])


class ContactForm(FlaskForm):
    name = StringField(validators=[DataRequired()])
    address = StringField(validators=[DataRequired()])
    logo = FileField()


class SendEmailForm(FlaskForm):
    sender_email = StringField(
        validators=[DataRequired()], widget=EmailInput())
    subject = StringField(validators=[DataRequired()])
    msg = TextAreaField(validators=[DataRequired()])
