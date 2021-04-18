/* eslint-disable import/prefer-default-export */

export const voiceFlow = {
  versionId: process.env.VF_VERSION_ID,
  apiKey: process.env.VF_API_KEY,
};

if ([voiceFlow.versionId, voiceFlow.apiKey].includes(undefined)) {
  throw new TypeError('Missing required environment variables');
}
