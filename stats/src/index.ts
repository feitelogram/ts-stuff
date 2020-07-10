import { MatchReader } from './MatchReader';
// import { CsvFileReader } from './CsvFileReader';
import { Summary } from './Summary';
// import { WinsAnalysis } from './analyzers/WinsAnalysys';
// import { ConsoleReport } from './reportTargets/consoleReport';
// import { HtmlReport } from './reportTargets/htmlReport';

MatchReader.readCsv('football.csv').load();
Summary.winsAnalysisAndHtmlReport('Man United');
