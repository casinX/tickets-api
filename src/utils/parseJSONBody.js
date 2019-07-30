export default async (request) => {

  return new Promise((resolve) => {

    let result = null;
    const bodyBuf = [];

    request.on('data', (chunk) => {
      bodyBuf.push(chunk);
    }).on('end', () => {
      result = JSON.parse(Buffer.concat(bodyBuf).toString());
      resolve(result);
    });
  });
}