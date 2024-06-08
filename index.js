#!/usr/bin/env node

const { Command } = require('commander');
const { execSync } = require('child_process');
const program = new Command();
const path = require('path');

program
    .version('1.0.0')
    .parse(process.argv);

let customReporterPath = path.join(__dirname, 'src/report-generator.js');
let jestCommand = `npx jest --coverage --reporters=default --reporters="${customReporterPath}"`;

try {
    execSync(jestCommand, { stdio: 'inherit', cwd: process.cwd() });
} catch (error) {
    console.error(`Error executing Jest: ${error.message}`);
    process.exit(1);
}