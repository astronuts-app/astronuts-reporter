# Astronuts Reporter

Astronuts Reporter is a powerful tool that generates test reports. It's designed to be easy to use.

## Installation

To install Astronuts Reporter, open your terminal and run the following command:

### Using Npm
```bash
npm install @astronutsapp/astronuts-reporter --save-dev
```

### Using pnpm
```bash
pnpm install @astronutsapp/astronuts-reporter --save-dev
```

### Using yarn
```bash
yarn add @astronutsapp/astronuts-reporter --save-dev
```

This command installs Astronuts Reporter as a development dependency in your project.

## Usage

To generate a test report, run the following command in your terminal:

```bash
npx astronuts-generate
```

This command tells Astronuts Reporter to start generating test reports.

## Integration with Build Scripts

You can also integrate Astronuts Reporter into your build scripts for automatic report generation. This can be
particularly useful in continuous integration (CI) environments where tests are run automatically.

Here's an example of how you can add Astronuts Reporter to your `package.json` scripts:

```bash
"scripts": {
    "build": "npx astronuts-generate && npm run build:app",
    "build:production": "npx astronuts-generate && npm run build:app"
}
```

In this example, the `astronuts-generate` script runs the tests using Jest, and then generates a test report using
Astronuts Reporter. Now, whenever your workflows runs the command `npm test`, Astronuts Reporter will automatically
generate a test report.
Note : For now we only support test written with jest library to generate reports.
### Please note that this library is to be used in conjunction with the Astronuts code quality action. You can download the app from the [Github](https://github.com/marketplace/actions/astronuts-code-quality-action).