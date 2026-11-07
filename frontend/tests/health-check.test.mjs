/**
 * EP35 — Business Health Check scoring tests (language-independent logic)
 */
import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  answerPoints,
  stateForPoints,
  evaluateHealthCheck,
  healthQuestions,
  healthDimensions,
} from '../src/lib/healthCheck.ts';

const all = (value) => Object.fromEntries(healthQuestions.map((q) => [q.id, value]));

test('12 questions, 2 per dimension, every dimension has services', () => {
  assert.equal(healthQuestions.length, 12);
  for (const d of healthDimensions) {
    assert.equal(healthQuestions.filter((q) => q.dimension === d.id).length, 2, d.id);
    assert.ok(d.services.length > 0, d.id);
  }
});

test('answer points and reverse scoring', () => {
  assert.equal(answerPoints('yes'), 2);
  assert.equal(answerPoints('partly'), 1);
  assert.equal(answerPoints('no'), 0);
  assert.equal(answerPoints('yes', true), 0);
  assert.equal(answerPoints('no', true), 2);
});

test('state boundaries (out of 4)', () => {
  assert.equal(stateForPoints(4, 4), 'stable');
  assert.equal(stateForPoints(3, 4), 'stable');
  assert.equal(stateForPoints(2, 4), 'review');
  assert.equal(stateForPoints(1, 4), 'attention');
  assert.equal(stateForPoints(0, 4), 'attention');
});

test('no answers: incomplete, no focus, no result', () => {
  const r = evaluateHealthCheck({});
  assert.equal(r.complete, false);
  assert.equal(r.answered, 0);
  assert.deepEqual(r.focus, []);
});

test('partially answered is never complete and gives no focus', () => {
  const r = evaluateHealthCheck({ q1: 'yes', q2: 'no' });
  assert.equal(r.complete, false);
  assert.equal(r.answered, 2);
  assert.deepEqual(r.focus, []);
});

test('all "yes": complexity flagged (reverse), others stable', () => {
  const r = evaluateHealthCheck(all('yes'));
  assert.equal(r.complete, true);
  const byId = Object.fromEntries(r.dimensions.map((d) => [d.id, d.state]));
  assert.equal(byId.complexity, 'attention');
  for (const id of ['foundation', 'cost', 'visibility', 'planning', 'management-info']) assert.equal(byId[id], 'stable', id);
  assert.deepEqual(r.focus, ['complexity']);
});

test('all "no": every area except complexity needs attention', () => {
  const r = evaluateHealthCheck(all('no'));
  assert.deepEqual(r.focus, ['foundation', 'cost', 'visibility', 'planning', 'management-info']);
});

test('focus orders attention before review', () => {
  const answers = { ...all('yes'), q11: 'no', q12: 'no', q3: 'partly', q4: 'partly', q7: 'no', q8: 'no' };
  const r = evaluateHealthCheck(answers);
  assert.deepEqual(r.focus, ['planning', 'cost']);
});
