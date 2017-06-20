const isClientProcess = typeof window === 'object';

/**
* Check if the process is in the client
*
*/
export function isClient() {
  return isClientProcess;
}
