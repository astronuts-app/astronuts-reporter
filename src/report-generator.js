const fs = require('fs');
const path = require('path');

class CustomReporter {
    constructor(globalConfig, options) {
        this._globalConfig = globalConfig;
        this._options = options;
    }

    onRunComplete(test, results) {
        let xmlContent = '<?xml version="1.0" encoding="UTF-8"?>\n<testExecutions version="1">\n';

        results.testResults.forEach((suite) => {
            suite.testResults.forEach((test) => {
                xmlContent += `    <file path="${suite.testFilePath}">\n`;
                xmlContent += `        <testCase name="${test.fullName}" duration="${test.duration || 0}"/>\n`;
                xmlContent += '    </file>\n';
            });
        });

        xmlContent += '</testExecutions>';

        fs.mkdirSync(path.join(process.cwd(), 'reports'), { recursive: true });
        fs.writeFileSync(path.join(process.cwd(), 'reports', 'xunit.xml'), xmlContent);

        return results;
    }
}

module.exports = CustomReporter;