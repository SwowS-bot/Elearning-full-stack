from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.String(191), primary_key = True)
    email = db.Column(db.String(191), unique=True)
    password = db.Column(db.String(191))
    role = db.Column(db.Enum('ADMIN', 'LEARNER'), default='LEARNER')

class Course(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(191), unique=True)
    users = db.relationship('User', secondary='course_to_user', backref=db.backref('courses', lazy='dynamic'))

class Lecture(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(191))
    videoUrl = db.Column(db.String(191))
    slideUrl = db.Column(db.String(191))
    courseId = db.Column(db.Integer, db.ForeignKey('course.id'))
    course = db.relationship('Course', backref=db.backref('lectures', lazy='dynamic'))

class CourseToUser(db.Model):
    __tablename__ = 'course_to_user'
    A = db.Column(db.Integer, db.ForeignKey('course.id'), primary_key=True)
    B = db.Column(db.String(191), db.ForeignKey('user.id'), primary_key=True)