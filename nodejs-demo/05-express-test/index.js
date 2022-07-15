var express = require('express');
var app = express();

function cookieToJson(cookie) {
// 服务端分号分割，没有空格，客户端有空格
const cookieArr = cookie.split(/;\s?/);
const obj = {};
cookieArr.forEach((i) => {
    const arr = i.split('=');
    const tmp = arr[1];
    obj[arr[0]] = tmp;
});
return obj;
}
const cookie = 'video_platform=2; vmall_channel=; txv_boss_uuid=a11707d6-090a-fb2d-b725-f5f09419fe03; tvfe_boss_uuid=6d0fd52f0c042d2f; pgv_pvid=371666836; video_guid=a459c2004408b5d2957838015498a904; RK=U395LxjwaI; ptcz=7a25fb85cd05224480140c667a3dbbddcba42d6a2f34acb2fe4deac7eb3401f2; video_guid=a459c2004408b5d2957838015498a904; video_platform=2; uin=o1953972410; skey=@6HmPHVejp; luin=o1953972410; lskey=0001000086f38ec1e574b4aef02a78eb53d0224324082e1491913b9ab09bf591506c42a90144ba4c68234890; main_login=qq; vuserid=1235471993; vusession=gAPZ5qcIv51UBlATeSIZXA.N; login_time_init=1653539446; next_refresh_time=6600; _video_qq_version=1.1; _video_qq_main_login=qq; _video_qq_appid=3000501; _video_qq_vuserid=1235471993; _video_qq_vusession=gAPZ5qcIv51UBlATeSIZXA.N; _video_qq_login_time_init=1653539446; _video_qq_next_refresh_time=6600'
const cookieJson = cookieToJson(cookie)
const domain1 = '.video.qq.com';
const domain2 = '.qq.com';

  
// 当对主页发出 GET 请求时，响应“hello world”
app.get('/', function(req, res) {
  Object.keys(cookieJson).forEach(name => {
    res.cookie(name, cookieJson[name], { expires: new Date(Date.now() + 900000), domain: domain1, sameSite: 'None', secure: true })
    res.cookie(name, cookieJson[name], { expires: new Date(Date.now() + 900000), domain: domain2, sameSite: 'None', secure: true })
  })
  res.set('Access-Control-Allow-Origin', '*')
  res.send('hello world');
});

app.listen(9000)