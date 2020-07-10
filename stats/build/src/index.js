"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
// import { CsvFileReader } from './CsvFileReader';
var Summary_1 = require("./Summary");
// import { WinsAnalysis } from './analyzers/WinsAnalysys';
// import { ConsoleReport } from './reportTargets/consoleReport';
// import { HtmlReport } from './reportTargets/htmlReport';
MatchReader_1.MatchReader.readCsv('football.csv').load();
Summary_1.Summary.winsAnalysisAndHtmlReport('Man United');
