# 第一章 使用说明

**在这里填下您的文档简介,可参考如下说明**
* 必备技能
    * markdown 语法
    * git 软件的使用
    * gitbook 软件的使用
* 需要安装的软件，请自行搜索教程并安装
    * markdown 编辑器，这里推荐使用 [atom](https://atom.io/) 或 [Typora](https://www.typora.io/)
    * [git](https://git-scm.com/downloads)
    * [gitbook](https://www.gitbook.com/?t=11)，[安装参考](http://gitbook.zhangjikai.com/installation.html)
* 开始步骤
    * clone 仓库

    * 文档负责人修改 SUMMARY.md

    * 文档负责人根据项目需求自定义配置文件 book.js 中的主题 theme 属性，theme 配置说明如下表所示

      示例：

      ```javascript
      'theme': {
  		header: {
  			logo: '',                     // 文档 logo 地址
  			src: '',                      // 文档 logo 外链
  			title: '',                    // 文档标题
  			favicon: '',                  // 文档 favicon 地址
  			nav: [                        // 文档头部外链
  				{
  					link: '',             // 外链地址
  					label: ''             // 外链标题
  				}
  			]
  		},
  		footer: {
  			links: [                      // 文档尾部外链
  				{
  					link: '',             // 外链地址
  					label: ''             // 外链标题
  				}
  			],
  			copyright: ''                 // 版权
  		}
  	   }
      ```

    * 修改对应的文档的 md 文件

    * commit 修改后的文件，并且上传到远程服务器

    * 过几秒钟后将在您的文档地址中看到更新后的文档
* 更多请前往 [ABook文档中心](http://abook.jd.com)

