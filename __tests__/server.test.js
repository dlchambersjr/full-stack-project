'use strict';

const { start, stop } = require('../src/server.js');

describe('Test the server', () => {

  it('should start', () => {

    const actual = start();
    expect(actual).toBeDefined();

  });

  it('should stop', () => {

    start();

    const actual = stop();
    expect(actual).toBeUndefined();

  });

});
