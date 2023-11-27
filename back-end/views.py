from flask import Blueprint, request, jsonify
from models import db, User, Course, Lecture
from schemas import UserSchema, LectureSchema, CourseSchema

bp = Blueprint('api', __name__)
User_Schema = UserSchema()
Users_Schema = User_Schema(many = True)
Course_Schema = CourseSchema()
Courses_Schema = CourseSchema(many = True)
Lecture_Schema = LectureSchema()
Lectures_Schema = LectureSchema(many = True)

