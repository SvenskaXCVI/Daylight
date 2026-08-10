import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';

const root=new URL('../',import.meta.url);
const seedSource=fs.readFileSync(new URL('seed-data.js',root),'utf8');
const context={window:{}};
vm.runInNewContext(seedSource,context);
const seed=context.window.DAYLIGHT_SEED;

assert.equal(seed.profile.setupComplete,false,'new devices must require onboarding');
assert.deepEqual(Array.from(seed.people),[],'production seed must contain no children');
assert.deepEqual(Array.from(seed.customEvents),[],'production seed must contain no events');
assert.deepEqual(Array.from(seed.medications),[],'production seed must contain no health records');
assert.deepEqual(Array.from(seed.routeSettings.stops),[],'production seed must contain no school addresses');
assert.equal(seed.syncSettings.pairingCode,'','production seed must contain no family code');
assert.deepEqual(Array.from(seed.syncTombstones),[],'production seed must contain no deletion history');

const forbidden=/DeMiguel|Kacey|Kaelyn|Kenzie|Creekside|Proctor Elementary|Castro Valley High/i;
assert.equal(forbidden.test(seedSource),false,'production seed must not contain private legacy-family data');

const html=fs.readFileSync(new URL('index.html',root),'utf8');
const appSource=fs.readFileSync(new URL('app.js',root),'utf8');
assert.equal(forbidden.test(`${html}\n${appSource}`),false,'public mobile bundle must not contain private legacy-family data');
for(const id of ['onboarding','onboardingChoices','createFamilyForm','joinFamilyForm'])assert.match(html,new RegExp(`id=["']${id}["']`));
assert.match(appSource,/encrypted:await encryptSyncPayload/,'mobile sync payloads must be end-to-end encrypted');
assert.match(appSource,/syncTombstones/,'mobile sync must propagate deletions');

console.log('Daylight production-safety checks passed.');
