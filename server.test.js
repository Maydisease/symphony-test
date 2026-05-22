const test = require('node:test');
const assert = require('node:assert/strict');
const request = require('supertest');
const app = require('./server');

test('GET / 返回 Symphony 问候消息', async () => {
  const response = await request(app).get('/');

  assert.equal(response.status, 200);
  assert.deepEqual(response.body, { message: 'Hello from Symphony!' });
});

test('GET /health 返回正常状态', async () => {
  const response = await request(app).get('/health');

  assert.equal(response.status, 200);
  assert.deepEqual(response.body, { status: 'ok' });
});
