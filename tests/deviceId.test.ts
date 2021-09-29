import * as deviceId from '../lib/deviceId';

test('Returns a 36 character long string', () => {
  expect(deviceId.getDeviceId()).toHaveLength(36);
});
