import {createTransform} from 'redux-persist';
import {oauth} from '../../../api/oauth';

export const tokenTransform = createTransform(

    (inboundToken, key = 'token') => {
        const {data} = inboundToken;
        return {data};
    },

    (outboundToken, key = 'token') => {
        const {data} = outboundToken;

        data.expires_in = new Date(data.expires_in).getSeconds() - new Date().getSeconds();
        const token = oauth.createToken(data);
        token.data.expires_in = token.expires;

        return token;
    },
    // define which reducers this transform gets called for.
    {whitelist: ['token']}
);
