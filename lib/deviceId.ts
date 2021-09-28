import { v4 as uuidv4 } from 'uuid';
import { getLocalStorage, updateLocalStorage } from './localStorage';

const key = 'device-id';

const createDeviceId = (): string => {
  return uuidv4();
};

const getDeviceId = (): string => {
  // const myuuid = uuidv4();
  const deviceId = getLocalStorage(key);
  // console.log(`Your UUID is: ${deviceId}`);
  if (deviceId) {
    return deviceId;
  }
  if (!deviceId) {
    const newDeviceId = createDeviceId();
    updateLocalStorage({ key, value: newDeviceId });
    return getDeviceId();
  }
};

export { getDeviceId };
