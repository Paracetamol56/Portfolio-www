const supertest = require('supertest');
const express = require('express');
const pageRouter = require('../routes');

const app = express();
app.use('/', pageRouter);

describe('Test Handlers', function () {
    it('responds to /', async () => {
        const res = await supertest(app).get('/');
        expect(res.header['content-type']).toBe('text/html; charset=utf-8');
    });

    it('responds to /about', async () => {
        const res = await supertest(app).get('/about');
        expect(res.header['content-type']).toBe('text/html; charset=utf-8');
    });

    it('responds to /contact', async () => {
        const res = await supertest(app).get('/contact');
        expect(res.header['content-type']).toBe('text/html; charset=utf-8');
    });
});