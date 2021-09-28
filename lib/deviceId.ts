import { v4 as uuidv4 } from 'uuid';

const getDeviceId = (): string => {
  const myuuid = uuidv4();
  console.log(`Your UUID is: ${myuuid}`);

  return uuidv4();
};

export { getDeviceId };
