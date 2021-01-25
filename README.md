
## 移动端布局方案

移动端vant3.0 + vue3.0 + vite2.0 + ts + REM布局 + Viewport (VW) 布局的实例运用

## 在线预览
http://buqiyuan.gitee.io/vite-vant3

提供三个布局方案

**1. REM 布局** 

使用js动态设置html的font-size，css使用rem单位，文本大小可选择使用px

js设置viewport的scale以支持高清设备的1px

可设置页面最大最小宽度

**2. VW 布局**

css使用vw单位，文本大小可选择使用px

使用transform以支持高清设备的边框1px（包括圆角），使用 @mixin `./vw/scss/_border.scss`

可设置容器固定纵横比，不可设置页面最大最小宽度

**3. REM + VW 布局**

html的font-size使用vw单位，css使用rem单位，文本大小可选择使用px

使用transform以支持高清设备的边框1px（包括圆角），使用 @mixin `./vw-rem/scss/_border.scss`

可设置容器固定纵横比，可设置页面最大最小宽度

## 使用
1. yarn dev

4. 业务代码中样式的调用方式可参考 `./rem/scss/rem.scss` 及  `./vw/scss/vw.scss` 及 `./vw-rem/scss/vw-rem.scss` 三个文件；可在html文件相应位置配置 `data-content-max` 属性来限制容器最大最小宽


