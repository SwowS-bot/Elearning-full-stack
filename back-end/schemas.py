from marshmallow_sqlalchemy import SQLAlchemyAutoSchema
from models import User, Course, Lecture

class UserSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = User
        load_instance = True

class CourseSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = Course
        load_instance = True

class LectureSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = Lecture
        load_instance = True
