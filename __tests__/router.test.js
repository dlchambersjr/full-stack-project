'use strict';

const supertest = require('supertest');
const { app } = require('../src/server.js');
const mockRequest = supertest(app);

describe('Testing the routes', () => {

  xit('will return a 404 status when the wrong route is requested', () => {

  });

  xit('will return a 500 status when a server error occurs', () => { });

  it('/hello will return hello world', async () => {

    const actual = await mockRequest.get('/');
    const expected = 'Server Home';

    expect(actual.text).toBe(expected);
    expect(actual.status).toBe(200);

  });

  it('/ will return json data', async () => {

    const response = await mockRequest.get('/content');

    const actual = response.text.length;
    const expected = 1329;

    expect(actual).toBe(expected);
    expect(response.status).toBe(200);


  });

});

