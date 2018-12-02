'use strict';

const { start, stop } = require('../src/server.js');

afterAll(() => stop());

describe('Test the server', () => {

  it('should start', () => {

    const actual = start();
    expect(actual).toBeDefined();

  });

  // FIXME: Seems to be asueing Travis CI to hang
  xit('should stop', () => {

    start();

    const actual = stop();
    expect(actual).toBeUndefined();

  });

});
