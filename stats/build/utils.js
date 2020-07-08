"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseDate = void 0;
exports.parseDate = function (dateString) {
    var dateParts = dateString.split('/').map(function (part) { return parseInt(part); });
    var day = dateParts[0];
    var month = dateParts[1] - 1;
    var year = dateParts[2];
    return new Date(year, month, day);
};
