exports.config = {
  tests: './tests/*_Test.js',
  output: './reports',
  helpers: {
    WebDriver: {
      url: 'https://www.google.com/',
      browser: 'chrome',
      host: process.profile || "localhost",
      restart: true
    }
  },
  include: {
    HomePage: "./pages/HomePage.js",
  },
  name: 'Google Search Test',
  bootstrap: null,
  mocha: {
    "reporterOptions": {
      "reportDir": "./reports",
      "overwrite": "false",
      "timestamp": "mm-dd-yyyy-HHMMss",
      // "reportFilename": "ReportFileName",
      // "reportTitle": "ReportTitle",
      // "reportPageTitle": "ReportPageTitle",
    }
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    wdio: {
      enabled: true,
      services: ['selenium-standalone']
    },
    stepByStepReport: {
      enabled: true,
      deleteSuccessful: false,
      animateSlides: true,
      fullPageScreenshots: true,
      output: "./reports",
    }
  },
  multiple: {
    parallel: {
      // run all tests in chrome and firefox
      browsers: ["chrome", "firefox"]
    }
  }
}