// twitterService.js

import axios from 'axios';
import oauthSignature from 'oauth-signature';

const apiKey = 'tWVj7itD9HuoYzsGOxiqoW7jQ';
const apiSecretKey = 'E4rvH6TdZWRWrGfOwHjty5WYLv3ZMKcbpEqpbnNcYft9qUpXFL';
const accessToken = '1248886656335335425-4ztZg9WcT77mxTkopmS0Q7yT3xjZYm';
const accessTokenSecret = 'e20SJhbQV03MjluYTceuCPZS8Tf6E731k0DuQWzrUEpeu';

const baseUrl = 'https://api.twitter.com/1.1';

const createTwitterSignature = (url, params, method) => {
  const oauthObject = {
    oauth_consumer_key: apiKey,
    oauth_nonce: Math.random().toString(36).substring(2),
    oauth_signature_method: 'HMAC-SHA1',
    oauth_timestamp: Math.floor(Date.now() / 1000),
    oauth_token: accessToken,
    oauth_version: '1.0',
  };

  const signature = oauthSignature.generate(method, url, params, apiSecretKey, accessTokenSecret, oauthObject);
  oauthObject.oauth_signature = signature;

  return oauthObject;
};

export const getTweets = async (query) => {
  const url = `${baseUrl}/search/tweets.json`;
  const params = { q: query };

  const oauthObject = createTwitterSignature(url, params, 'GET');

  const response = await axios.get(url, {
    params,
    headers: {
      Authorization: oauthSignature.generateAuthorizationHeader('OAuth', oauthObject),
    },
  });

  return response.data;
};
