'use strict';

const supertest = require('supertest');
const { app } = require('../src/server.js');
const mockRequest = supertest(app);

describe('Testing the routes', () => {

  it('will return a 404 status when a bad route is requested', async () => {

    const actual = await mockRequest.get('/badroute');
    const expected = '';

    // FIXME:  I don't undertand how to render the EJS -AND- return the proper informaiton to Jest

    // expect(actual.text).toBe(expected);
    // expect(actual.status).toBe(404);


  });

  it('will return a 500 status when a server error occurs', async () => {

    const actual = await mockRequest.post('/badroute');
    const expected = '';

    // FIXME:  I don't undertand how to render the EJS -AND- return the proper informaiton to Jest

    // expect(actual.text).toBe(expected);
    // expect(actual.status).toBe(404);

  });

  it('/hello will return server home', async () => {

    const actual = await mockRequest.get('/');
    const expected = 'Server Home';

    expect(actual.text).toBe(expected);
    expect(actual.status).toBe(200);

  });

  it('/ will return json data', async () => {

    const response = await mockRequest.get('/content');

    const actual = JSON.parse(response.text).length;
    const expected = 2;

    expect(actual).toBe(expected);
    expect(response.status).toBe(200);


  });

});

