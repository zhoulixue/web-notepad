import axios from 'axios';

export async function getTestMiniProgram() {
  const url = 'https://node.video.qq.com/x/api/wuji_cache/object?appid=live_product&schemaid=live_product_test_whitelist&schemakey=9f8e108cf3e64c138c4a610525f4417f';
  const res = await axios.get(url, {
    headers: {
      referer: 'https://m.v.qq.com',
      origin: 'https://m.v.qq.com',
    }
  })
  if (!res._failure) {
    return res.data;
  }
  return false;
}
