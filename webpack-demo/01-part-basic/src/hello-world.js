function getString() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('hello world!!');
    }, 1000);
  });
}
async function helloWorld () {
  const str = await getString();
  console.log(str);
}
export default helloWorld;
