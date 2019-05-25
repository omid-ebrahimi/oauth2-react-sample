import {createTransform} from 'redux-persist';
import {oauth} from '../../../api/oauth';

export const tokenTransform = createTransform(

    (inboundToken, key = 'token') => {
        const {data, expiryDate} = inboundToken;
        return {data, expiryDate};
    },

    (outboundToken, key = 'token') => {
        const {data} = outboundToken;
        const expiryDate = new Date(outboundToken.expiryDate);

        data.expires_in = (expiryDate.getTime() - new Date().getTime()) / 1000;
        const token = oauth.createToken(data);
        token.expires = expiryDate;
        token.expiryDate = expiryDate;

        return token;
    },
    // define which reducers this transform gets called for.
    {whitelist: ['token']}
);
