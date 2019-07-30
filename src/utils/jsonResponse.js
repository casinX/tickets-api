export default async (response, data={}, code=200) => {
  try {
    response.writeHead(code, {"Content-Type": "application/json"});
    const json = JSON.stringify(data);
    response.end(json);
  }catch (e) {}
}