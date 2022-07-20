"use strict";
exports.__esModule = true;
exports.Student = void 0;
var Student = /** @class */ (function () {
    function Student(name, age, group, email) {
        this._name = name;
        this._age = age;
        this._group = group;
        this._email = email;
    }
    Student.prototype.getName = function () {
        return this._name;
    };
    Student.prototype.setName = function (value) {
        this._name = value;
    };
    Student.prototype.getAge = function () {
        return this._age;
    };
    Student.prototype.setAge = function (value) {
        this._age = value;
    };
    Student.prototype.getGroup = function () {
        return this._group;
    };
    Student.prototype.setGroup = function (value) {
        this._group = value;
    };
    Student.prototype.getEmail = function () {
        return this._email;
    };
    Student.prototype.setEmail = function (value) {
        this._email = value;
    };
    return Student;
}());
exports.Student = Student;
