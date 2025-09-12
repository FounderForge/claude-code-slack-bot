const REGISTERED_CHANNELS = [] as string[];

export function isChannelRegistered(ch: string) {
  return REGISTERED_CHANNELS.includes(ch);
}

export function registerChannel(ch: string) {
  if (isChannelRegistered(ch)) return;
  REGISTERED_CHANNELS.push(ch);
}
