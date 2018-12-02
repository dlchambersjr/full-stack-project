module.exports = function (wallaby) {

  // add any needed environment variables here
  process.env.PORT = 3000;


  return {

    files: ['src/**/*.js', '**/*.json'],

    tests: ['__tests__/**/*.test.js'],

    env: {

      type: 'node',

      runner: 'node',

      params: {

        runner: '--harmony',

      },

    },

    testFramework: 'jest',

    compilers: {
    },

    setup: function () {
      require('dotenv').config();
    },

  };

};