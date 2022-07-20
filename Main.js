"use strict";
exports.__esModule = true;
var rl = require("readline-sync");
var Manager_1 = require("./Manager");
var Student_1 = require("./Student");
var list = new Manager_1.Manager();
var choice = -1;
var choose = -1;
var Choice;
(function (Choice) {
    Choice[Choice["ADD"] = 1] = "ADD";
    Choice[Choice["SHOW"] = 2] = "SHOW";
    Choice[Choice["FIND"] = 3] = "FIND";
})(Choice || (Choice = {}));
var Choose;
(function (Choose) {
    Choose[Choose["FINDBYNAME"] = 1] = "FINDBYNAME";
    Choose[Choose["FINDBYGROUP"] = 2] = "FINDBYGROUP";
    Choose[Choose["BACK"] = 0] = "BACK";
})(Choose || (Choose = {}));
function mainMenu() {
    console.log('');
    console.log("==========  Menu  ==========");
    console.log("1. Them hoc sinh");
    console.log("2. Hien thi danh sach tat ca hoc sinh");
    console.log("3. Tim kiem hoc sinh");
    console.log("0. Thoat");
}
function subMenu() {
    console.log('');
    console.log("=== Tim kiem hoc sinh ===");
    console.log("1. Tim kiem theo ten");
    console.log("2. TIm kiem theo nhom");
    console.log("0. Tro ve");
}
function addFeature() {
    console.log('');
    console.log("=== Them hoc sinh ===");
    var name = rl.question("Nhap ten hoc sinh: ");
    var age = rl.question("Nhap tuoi hoc sinh: ");
    var group = rl.question("Nhap nhom lop hoc sinh: ");
    var email = rl.question("Nhap email hoc sinh: ");
    var student = new Student_1.Student(name, age, group, email);
    list.addInfo(student);
}
function showFeature() {
    console.log('');
    console.log("=== Hien thi danh sach tat ca hoc sinh ===");
    list.showAllInfo();
}
function chooseSubMenu() {
    choose = +rl.question("Moi nhap lua chon: ");
    switch (choose) {
        case Choose.FINDBYNAME:
            var findName = rl.question("Nhap ten hoc sinh can tim kiem: ");
            list.findInfoByName(findName);
            break;
        case Choose.FINDBYGROUP:
            var findByGroup = rl.question("Nhap nhom hoc sinh can tim kiem: ");
            list.findInfoByGroup(findByGroup);
            break;
        case Choose.BACK:
            break;
        default:
            console.log("Khong ton tai lua chon. Nhap lai!");
            break;
    }
}
while (choice !== 0) {
    mainMenu();
    choice = +rl.question("Moi ban nhap lua chon: ");
    switch (choice) {
        case Choice.ADD:
            addFeature();
            break;
        case Choice.SHOW:
            showFeature();
            break;
        case Choice.FIND:
            subMenu();
            chooseSubMenu();
            break;
    }
}
