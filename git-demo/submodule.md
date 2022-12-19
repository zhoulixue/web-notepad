```bash
# 添加模块
git submodule add <url> <path>
# 模块下载
git submodule init
git submodule update
# 或者
git submodule update --init --recursive
# 删除
rm -rf <子模块目录>
# 删除子模块相关
vim .gitmodule
vim /git/config
rm .git/module/*
```