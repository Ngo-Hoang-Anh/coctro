const URL = "https://f2zwrr4086.execute-api.ap-southeast-1.amazonaws.com/v1";
export async function sendRequest(path, init) {
  const myRequest = new Request(URL + path, init);
  let result = await fetch(myRequest).then((response) => {
    return response
      .clone()
      .json()
      .catch(() => response.clone().text());
  });
  return result;
}
