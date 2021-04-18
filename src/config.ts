/* eslint-disable import/prefer-default-export */

export const voiceflow = {
  versionId: process.env.VF_VERSION_ID,
  apiKey: process.env.VF_API_KEY,
};

if ([voiceflow.versionId, voiceflow.apiKey].includes(undefined)) {
  throw new TypeError('Missing required environment variables');
}
