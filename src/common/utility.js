const URL = 'https://f2zwrr4086.execute-api.ap-southeast-1.amazonaws.com/v1';
export async function sendRequest(path, init) {
    const myRequest = new Request(URL + path, init);
    let result = await fetch(myRequest)
        .then((response) => {
            if (response.status === 200) {
                try {
                    return response.json();
                } catch {
                    return response.text();
                }
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