from flask import Blueprint, request, jsonify
from models import db, User, Course, Lecture
from schemas import UserSchema, LectureSchema, CourseSchema

bp = Blueprint('api', __name__)
User_Schema = UserSchema()
Users_Schema = UserSchema(many = True)
Course_Schema = CourseSchema()
Courses_Schema = CourseSchema(many = True)
Lecture_Schema = LectureSchema()
Lectures_Schema = LectureSchema(many = True)

@bp.route('/user', methods = ['GET'])
def get_User():
    all_User = User.query.all()
    result = Users_Schema.dump(all_User)
    return jsonify(result)