export const URLpath = 'https://es3h2nxv2d.execute-api.ap-southeast-1.amazonaws.com/v1';
export async function sendRequest(URL, init) {
    const myRequest = new Request(URL, init);
    let result = await fetch(myRequest)
        .then(data => {
            console.log("data:");
            console.log(data);
            return data.json();
        }
        )

    // let finalResult= await result.body;
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