const CustomReporter = require('../src/report-generator');
const fs = require('fs');
const path = require('path');

jest.mock('fs', () => ({
    mkdirSync: jest.fn(),
    writeFileSync: jest.fn()
}));

describe('CustomReporter', () => {
    let customReporter;

    beforeEach(() => {
        customReporter = new CustomReporter();
    });

    it('should generate a report on run completion', () => {
        const test = {};
        const results = {
            testResults: [
                {
                    testFilePath: 'path/to/test/file',
                    testResults: [
                        {
                            fullName: 'Test Case 1',
                            duration: 100
                        }
                    ]
                }
            ]
        };

        customReporter.onRunComplete(test, results);

        const expectedXmlContent = '<?xml version="1.0" encoding="UTF-8"?>\n<testExecutions version="1">\n' +
            '    <file path="path/to/test/file">\n' +
            '        <testCase name="Test Case 1" duration="100"/>\n' +
            '    </file>\n' +
            '</testExecutions>';

        expect(fs.mkdirSync).toHaveBeenCalledWith(path.join(process.cwd(), 'reports'), { recursive: true });
        expect(fs.writeFileSync).toHaveBeenCalledWith(path.join(process.cwd(), 'reports', 'junit.xml'), expectedXmlContent);
    });
});