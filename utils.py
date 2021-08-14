from functools import wraps
from flask import session, redirect, url_for
from models import Admin

import datetime


def admin_only(func):
    @wraps(func)
    def inner(*args, **kw):
        if not session.get("fullname"):
            return redirect(url_for("admin.login"))
        return func(*args, **kw)
    return inner


def check_image(filename, allowed_formats={"png", "jpg", "eps", "jpeg", "svg"}):
    file_format = filename.split('.')[-1].lower()
    for f in allowed_formats:
        if file_format == f:
            fn = datetime.datetime.now().strftime("%y%m%d_%H%M%S")
            return f"{fn}.{f}"
    raise ValueError("Not a valid format for image file.")


def and_profile(func):
    @wraps(func)
    def inner(*args, **kw):
        profile = Admin.query.first()
        return func(profile, *args, **kw)
    return inner
