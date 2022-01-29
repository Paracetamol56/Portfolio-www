const supertest = require('supertest');
const express = require('express');
const pageRouter = require('../routes');

const app = express();
app.use('/', pageRouter);

describe('Test Handlers', function () {
    it('responds to /project?id=0', async () => {
        const res = await supertest(app).get('/project?id=0');
        expect(res.header['content-type']).toBe('text/html; charset=utf-8');
    });

    it('responds to /project?id=-1', async () => {
        const res = await supertest(app).get('/project?id=-1');
        expect(res.status).toBe(404);
    });
});