export const URLpath = 'https://5bs7906zqb.execute-api.ap-southeast-1.amazonaws.com/v1';
export async function sendRequest(URL, init) {
    const myRequest = new Request(URL, init);
    let result = await fetch(myRequest)
        .then((response) => {
            if (response.status === 200) {
                return response.json();
            } else {
                return response.text();
            }
        })
    return result;
}

export function isAuthen() {
    //TODO: 
    return true;
}
export function isAdmin() {
    //TODO: 
    return true;
}