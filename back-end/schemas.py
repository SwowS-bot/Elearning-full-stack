from flask_marshmallow import Marshmallow
from models import User, Course, Lecture

ma = Marshmallow()

class UserSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = User
        load_instance = True

class CourseSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Course
        load_instance = True

class LectureSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Lecture
        load_instance = True
