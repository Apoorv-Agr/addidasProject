// import axios from "axios";

/* const headers = {
    'Access-Control-Allow-Origin': '*',
    'X-Requested-With': 'XMLHttpRequest',
    'Access-Control-Allow-Headers': "Origin, X-Requested-With, Content-Type, Accept",
} */


// const proxyUrl = "https://cors-anywhere.herokuapp.com/";
export const loginUser = async ({ username, password }) => {
    if (username && password) {
        const responsePromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('eyJuYW1lIjoiaHR0cHM6Ly90ZXN0LnNhbGVzZm9yY2UuY29tL2lkLzAwRDFqMDAwMDAwMWRJTUVBWS8wMDUxajAwMDAwNDdIQUVBQTIiLCJwcmVmZXJyZWRVc2VybmFtZSI6ImdhYnJpZWwucmFkdWN1QGV4dGVybmFscy5hZGlkYXMuY29tLnNydC5xYSIsImlzQWRtaW4iOnRydWUsImFsZyI6IkhTMjU2In0.e30.-F9tCmYbgo949bnOO-GmPPkZ68w1ezv0PkAPC-suWys')
            }, 1000)
        })
        const loginResp = await responsePromise;
        return loginResp;
        /* await axios
            .post(
                `${proxyUrl}https://test.salesforce.com/id/00D1j0000001dIMEAY/0051j0000047HAEAA2`,
                {
                    username: (username.trim()),
                    password: (password.trim())
                },
                { headers: headers }
            )
            .then((data) => {
                return data;
            })
            .catch((err) => {
                return err;
            });
        return loginResp; */
    }
    return null;
}