"use strict";
exports.__esModule = true;
exports.Manager = void 0;
var Manager = /** @class */ (function () {
    function Manager() {
        this.list = [];
    }
    Manager.prototype.addInfo = function (data) {
        this.list.push(data);
    };
    Manager.prototype.showAllInfo = function () {
        console.table(this.list);
    };
    Manager.prototype.findInfoByName = function (data) {
        var _this = this;
        var getIndex = 0;
        var flag = -1;
        this.list.forEach(function (value, index) {
            if (value.getName() == data) {
                console.table(_this.list[index]);
                flag++;
            }
        });
        if (flag == -1) {
            console.log("Khong co hoc sinh nao o trong ten ".concat(data));
        }
    };
    Manager.prototype.findInfoByGroup = function (data) {
        var _this = this;
        var getIndex = 0;
        var flag = -1;
        this.list.forEach(function (value, index) {
            if (value.getGroup() == data) {
                console.table(_this.list[index]);
                flag++;
            }
        });
        if (flag == -1) {
            console.log("Khong co hoc sinh nao o trong nhom ".concat(data));
        }
    };
    return Manager;
}());
exports.Manager = Manager;
