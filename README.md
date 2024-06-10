# Astronuts Reporter

Astronuts Reporter is a powerful tool that generates test reports. It's designed to be easy to use, yet flexible enough to handle complex testing scenarios.

## Installation

To install Astronuts Reporter, open your terminal and run the following command:

```bash
npm install @astronutsapp/astronuts-reporter --save-dev
```

This command installs Astronuts Reporter as a development dependency in your project.

## Usage

To generate a test report, run the following command in your terminal:

```bash
npx astronuts-generate
```

This command tells Astronuts Reporter to start generating test reports.

## Integration with Build Scripts

You can also integrate Astronuts Reporter into your build scripts for automatic report generation. This can be particularly useful in continuous integration (CI) environments where tests are run automatically.

Here's an example of how you can add Astronuts Reporter to your `package.json` scripts:

```json
"scripts": {
    "test": "npx jest && npx astronuts-generate"
}
```

In this example, the `test` script first runs the tests using Jest, and then generates a test report using Astronuts Reporter. Now, whenever you run `npm test`, Astronuts Reporter will automatically generate a test report.

## Conclusion

Astronuts Reporter is a versatile tool that can help you better understand your test results. Whether you're a beginner or an experienced developer, Astronuts Reporter can make your testing process more efficient and informative. Happy coding!
```

This README file provides a detailed explanation of how to install and use Astronuts Reporter, and also explains how to integrate it into build scripts for automatic report generation.