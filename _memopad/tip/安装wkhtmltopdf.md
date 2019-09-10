1. 下载最新的包 http://wkhtmltopdf.org/downloads.html --- Linux (Ubuntu Trusty) 32-bit / 64-bit built on Ubuntu 14.04.1
wget http://download.gna.org/wkhtmltopdf/0.12/0.12.2.1/wkhtmltox-0.12.2.1_linux-trusty-amd64.deb
1. 安装依赖的组件：
apt-get install libxfont1 xfonts-encodings xfonts-utils xfonts-base xfonts-75dpi
1. 安装wkhtmltopdf：
dpkg -i wkhtmltox-0.12.2.1_linux-trusty-amd64.deb
测试一下：
  wkhtmltopdf http://www.people.com.cn/ 1.pdf
