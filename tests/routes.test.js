const supertest = require('supertest');
const express = require('express');
const pageRouter = require('../routes');

const app = express();
app.use('/', pageRouter);

describe('Routes tests', function () {
    it('responds to /', async () => {
        const res = await supertest(app).get('/');
        expect(res.header['content-type']).toBe('text/html; charset=utf-8');
    });

    it('responds to /about', async () => {
        const res = await supertest(app).get('/about');
        expect(res.header['content-type']).toBe('text/html; charset=utf-8');
    });

    it('responds to /project', async () => {
        const res = await supertest(app).get('/project');
        expect(res.header['content-type']).toBe('text/html; charset=utf-8');
    });

    it('responds to /contact', async () => {
        const res = await supertest(app).get('/contact');
        expect(res.header['content-type']).toBe('text/html; charset=utf-8');
    });

    it('responds to /privacy', async () => {
        const res = await supertest(app).get('/privacy');
        expect(res.header['content-type']).toBe('text/html; charset=utf-8');
    });
});