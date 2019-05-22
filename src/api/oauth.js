import ClientOAuth2 from 'client-oauth2';

export const oauth = new ClientOAuth2({
    clientId: 'my-trusted-client',
    clientSecret: 'secret',
    accessTokenUri: 'http://192.168.1.59:4411/oauth/token'
});
