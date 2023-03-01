# 学习笔记 #

这个项目是我的第一个项目，也总结了我之前学的很多内容，如HTML、CSS、JS、React期间我学到的不止是技术还有很多关于解决问题的思路。在此梳理一番也便于之后的复习

## 项目介绍 ##

airbnb仿站

## 技术栈 ##

- 框架：React + Redux + react-router-dom + antd + mui
- 构建：webpack + babel
- 测试：
- CI/CD：
- 统计和监控：
- 项目管理：

---

### 项目搭建 ###

最开始要对项目进行搭建，确定项目中使用的各技术，以及基本的项目目录结构

1. 这个项目是为了通过引用来熟悉之前我学到的React中的各个技术所以基本一开始就确定了**React + Redux + react-router-dom + antd + mui** 的技术选型，后续在学习了基本的测试，CI/CD和项目管理的内容之后也会继续完善这个项目。

2. 接下来就是目录的结构了

        |-- .gitignore          //git中忽略的文件
        |-- craco.config.js     //create-react-app 创建的项目默认是无法修改其内部的webpack配置的，不像vue-cli那样可以通过一个配置文件修改。 虽然有一个eject 命令可以是将配置完全暴露出来，但这是一个不可逆的操作，同时也会失去CRA带来的便利和后续升级。
        |-- package-lock.json 
        |-- package.json        //管理包
        |-- README.md
        |-- note
        |   |-- note.md
        |-- public              //图标等资源
        |   |-- favicon.ico
        |   |-- index.html
        |   |-- logo192.png
        |   |-- logo512.png
        |   |-- manifest.json
        |   |-- robots.txt
        |-- src                 //代码主要存放的地方
            |-- App.jsx         
            |-- index.js
            |-- assets          //全局CSS，部分数据，图片,SVG
            |   |-- css
            |   |   |-- common.less
            |   |   |-- index.less
            |   |   |-- reset.less
            |   |   |-- variables.less
            |   |-- data
            |   |   |-- filter_data.json
            |   |   |-- footer.json
            |   |   |-- search_titles.json
            |   |-- img
            |   |   |-- cover_01.jpeg
            |   |-- svg
            |   |   |-- icon-arrow-left.jsx
            |   |   |-- icon-arrow-right.jsx
            |   |   |-- icon-close.jsx
            |   |   |-- icon-more-arrow.jsx
            |   |   |-- icon-search-bar.jsx
            |   |   |-- icon-triangle-arrow-bottom.jsx
            |   |   |-- icon-triangle-arrow-top.jsx
            |   |   |-- icon_avatar.jsx
            |   |   |-- icon_global.jsx
            |   |   |-- icon_logo.jsx
            |   |   |-- icon_menu.jsx
            |   |   |-- utils
            |   |       |-- index.js
            |   |-- theme
            |       |-- index.js
            |-- base-ui            //一些通用的ui组件
            |   |-- indicator
            |   |   |-- index.jsx
            |   |   |-- style.js
            |   |-- picture-browser
            |   |   |-- index.jsx
            |   |   |-- style.js
            |   |-- scroll-view
            |       |-- index.jsx
            |       |-- style.js
            |-- components          //组件
            |   |-- app-footer
            |   |   |-- index.jsx
            |   |   |-- style.js
            |   |-- app-header
            |   |   |-- index.jsx
            |   |   |-- style.js
            |   |   |-- c-cpns
            |   |       |-- header-center
            |   |       |   |-- index.jsx
            |   |       |   |-- style.js
            |   |       |   |-- c-cpns
            |   |       |       |-- search-sections
            |   |       |       |   |-- index.jsx
            |   |       |       |   |-- style.js
            |   |       |       |-- search-tabs
            |   |       |           |-- index.jsx
            |   |       |           |-- style.js
            |   |       |-- header-left
            |   |       |   |-- index.jsx
            |   |       |   |-- style.js
            |   |       |-- header-right
            |   |           |-- index.jsx
            |   |           |-- style.js
            |   |-- longfor-item
            |   |   |-- index.jsx
            |   |   |-- style.js
            |   |-- room-item
            |   |   |-- index.jsx
            |   |   |-- style.js
            |   |-- section-footer
            |   |   |-- index.jsx
            |   |   |-- style.js
            |   |-- section-header
            |   |   |-- index.jsx
            |   |   |-- style.js
            |   |-- section-rooms
            |   |   |-- index.jsx
            |   |   |-- style.js
            |   |-- section-tabs
            |       |-- index.jsx
            |       |-- style.js
            |-- hooks           //自定义HooK
            |   |-- index.js
            |   |-- useScrollPosition.js
            |-- router          //React-router
            |   |-- index.js
            |-- services        //请求的封装
            |   |-- index.js
            |   |-- modules
            |   |   |-- entire.js
            |   |   |-- home.js
            |   |-- request
            |       |-- config.js
            |       |-- index.js
            |-- store
            |   |-- index.js
            |   |-- modules
            |       |-- detail.js
            |       |-- home.js
            |       |-- main.js
            |       |-- entire
            |           |-- actionsCreator.js
            |           |-- constants.js
            |           |-- index.js
            |           |-- reducer.js
            |-- utils               //小工具
            |   |-- index.js
            |   |-- is-empty-object.js
            |-- views               //页面
                |-- detail
                |   |-- index.jsx
                |   |-- style.js
                |   |-- c-cpns
                |       |-- detail-pictures
                |           |-- index.jsx
                |           |-- style.js
                |-- entire
                |   |-- index.jsx
                |   |-- style.js
                |   |-- c-cpns
                |       |-- entire-filter
                |       |   |-- index.jsx
                |       |   |-- style.js
                |       |-- entire-pagination
                |       |   |-- index.jsx
                |       |   |-- style.js
                |       |-- entire-rooms
                |           |-- index.jsx
                |           |-- style.js
                |-- home
                    |-- index.jsx
                    |-- style.js
                    |-- c-cpns
                        |-- home-banner
                        |   |-- index.jsx
                        |   |-- style.js
                        |-- home-longfor
                        |   |-- index.jsx
                        |   |-- style.js
                        |-- home-section-v1
                        |   |-- index.jsx
                        |   |-- style.js
                        |-- home-section-v2
                        |   |-- index.jsx
                        |   |-- style.js
                        |-- home-section-v3
                            |-- index.jsx
                            |-- style.js

3. 开始首页的搭建，把大的页面分成小块。一个页面一个页面来做，将整个站点分为两个页面（后续会发现两个页面并不够，但先顺着思路来）。分为Home和entire页面，在view目录下创建两个目录，home和entire。这个项目中使用的是目录下index.jsx的命名方式，并且使用style-components这个库来使用CSS in JS来编写CSS样式。

4. 把首页分为三个部分，Header、Room、Footer，从简单的开始做，将Header分为左中右三个部分。接着开始做Footer，这两个部分完成后。发现多个界面都用到了Header、Footer。将这两个部分抽成组件放在components下分别为app-header、app-footer

5. 然后就可以开始做Room部分了，这部分的数据需要从服务器中请求，开始编写services中的内容  

        |-- services        //请求的封装
            |   |-- index.js
            |   |-- modules
            |   |   |-- entire.js
            |   |   |-- home.js
            |   |-- request
            |       |-- config.js
            |       |-- index.js
    request文件夹下编写的是对axios进行二次封装代码然后module中的按各个页面为单位发送请求的代码，最后通过index统一导出。从服务端获取数据之后就可以把数据传给组件了，使用redux来储存数据，并将数据与业务逻辑分开，使用了传统方式与RTK的两种方式来实现。

        |-- store
            |   |-- index.js
            |   |-- modules
            |       |-- detail.js
            |       |-- home.js
            |       |-- main.js
            |       |-- entire  //使用传统方式实现
            |           |-- actionsCreator.js
            |           |-- constants.js
            |           |-- index.js
            |           |-- reducer.js  

    entire界面使用传统方式实现，home/main/detail界面使用RTK方式实现。接下来rooms就可以从redux中获得数据了。

6. rooms这部分可以分为三种，先实现最简单的显示，将它抽成三个部分，Header显示、图片以及文本显示、还有Footer。完成后发现后面后面的两个也会用到，把它们抽成组件。接着可以开始做第二种中不一样的部分，滚动条部分，再加上之前的部分就可以构成。后面也是一样。

7. 接着可以开始entire界面的制作，entire部分可以分为四部分，显示一个个item、item中的图片切换、上面的过滤器、还有下面的分页器。也是分为一个个组件来完成。

8. 开始detail界面的制作，detail界面分为两个部分，展示部分和详情部分。

9. 最后制作Header上的动画效果。 
