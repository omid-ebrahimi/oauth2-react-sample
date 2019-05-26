import {createTransform} from 'redux-persist';

export const tokenTransform = createTransform(

    (inboundToken, key = 'token') => {
        const {data, expiryDate} = inboundToken;
        return {data, expiryDate};
    },

    (outboundToken, key = 'token') => {
        const {data} = outboundToken;
        const expiryDate = new Date(outboundToken.expiryDate);

        return {data, expiryDate};
    },
    // define which reducers this transform gets called for.
    {whitelist: ['token']}
);
