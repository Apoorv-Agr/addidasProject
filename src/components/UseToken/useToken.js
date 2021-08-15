import { useState } from 'react';

const useToken = () => {
    const getToken = () => {
        const tokenString = sessionStorage.getItem('DSTLoggedInTokenId');
        const userToken = JSON.parse(tokenString);
        return userToken
    };
    const [token, setToken] = useState(getToken());
    const saveToken = userToken => {
        sessionStorage.setItem('DSTLoggedInTokenId', JSON.stringify(userToken));
        setToken(userToken);
    };

    return {
        setToken: saveToken,
        token
    }
};
export default useToken;