echo 开始提交代码到本地仓库
echo 当前目录是：%cd%

git add -A .
echo;
git commit -m "AutoPush"
echo;

git push origin master
echo;
echo 成功！
echo;
pause