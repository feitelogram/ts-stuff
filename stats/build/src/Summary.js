"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
var WinsAnalysys_1 = require("./analyzers/WinsAnalysys");
var htmlReport_1 = require("./reportTargets/htmlReport");
var Summary = /** @class */ (function () {
    function Summary(analyzer, outputTarget) {
        this.analyzer = analyzer;
        this.outputTarget = outputTarget;
    }
    Summary.winsAnalysisAndHtmlReport = function (team) {
        return new Summary(new WinsAnalysys_1.WinsAnalysis(team), new htmlReport_1.HtmlReport('newSummary'));
    };
    Summary.prototype.buildAndPrintReport = function (matches) {
        var output = this.analyzer.run(matches);
        this.outputTarget.print(output);
    };
    return Summary;
}());
exports.Summary = Summary;
