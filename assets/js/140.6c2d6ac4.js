(window.webpackJsonp=window.webpackJsonp||[]).push([[140],{434:function(e,t,r){"use strict";r.r(t);var a=r(16),i=Object(a.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("p",[e._v("每月都有小程序期刊，这个月新功能特别多~~")]),e._v(" "),r("h1",{attrs:{id:"小程序-latest"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#小程序-latest","aria-hidden":"true"}},[e._v("#")]),e._v(" 小程序 latest")]),e._v(" "),r("h2",{attrs:{id:"小程序能力"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#小程序能力","aria-hidden":"true"}},[e._v("#")]),e._v(" 小程序能力")]),e._v(" "),r("h3",{attrs:{id:"「小程序评测」功能上线"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#「小程序评测」功能上线","aria-hidden":"true"}},[e._v("#")]),e._v(" 「小程序评测」功能上线")]),e._v(" "),r("p",[e._v("小程序评测能力已上线 beta 版本，登录管理后台-【功能】-【小程序评测】可以查看。\n评测达标的小程序，可获得「2 小时极速审核」和「内测功能体验」奖励。")]),e._v(" "),r("ul",[r("li",[e._v("常见问题查看：http://kf.qq.com/faq/190108BJnmUN190108RrEnqE.html")])]),e._v(" "),r("h3",{attrs:{id:"小程序管理后台新增页面收录设置的开关"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#小程序管理后台新增页面收录设置的开关","aria-hidden":"true"}},[e._v("#")]),e._v(" 小程序管理后台新增页面收录设置的开关")]),e._v(" "),r("p",[e._v("小程序管理后台新增页面收录设置的开关，开发者可根据业务需要进行设置：")]),e._v(" "),r("ol",[r("li",[e._v("小程序管理后台-【设置】-【基本设置】-【页面收录设置】，可对你的小程序帐号进行收录的开启和关闭的设置。")]),e._v(" "),r("li",[e._v("更新 微信开发者工具 ，可对 sitemap 进行特定页面的配置，可参考"),r("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/framework/sitemap.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("小程序开发文档"),r("OutboundLink")],1),e._v("。")]),e._v(" "),r("li",[e._v("此设置默认开启。若小程序中存在不适合展示的内容，或开发者不希望使用微信展示其小程序，建议开发者自行关闭该设置，"),r("a",{attrs:{href:"https://mp.weixin.qq.com/wxopen/readtemplate?t=config/collection_agreement_tmpl",target:"_blank",rel:"noopener noreferrer"}},[e._v("详情查看"),r("OutboundLink")],1),e._v("。")])]),e._v(" "),r("p",[e._v("PS: sitemap 功能仿原生目前是不会被收录的。开关的逻辑他们会特殊处理下，默认关闭（目前是默认开启）。同时：")]),e._v(" "),r("ol",[r("li",[e._v("如果设置了不允许被搜索，但开启了允许被收录：不会进入搜索。")]),e._v(" "),r("li",[e._v("如果关闭了允许被收录，sitemap 设置会无效。")])]),e._v(" "),r("h3",{attrs:{id:"小程序关联公众号策略调整"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#小程序关联公众号策略调整","aria-hidden":"true"}},[e._v("#")]),e._v(" 小程序关联公众号策略调整")]),e._v(" "),r("p",[e._v("为了降低公众号与小程序间的合作门槛，我们将调整小程序关联公众号策略如下：")]),e._v(" "),r("ol",[r("li",[e._v("公众号关联小程序将无需小程序管理员确认。")]),e._v(" "),r("li",[e._v("取消“小程序最多关联 500 个公众号”的限制。")]),e._v(" "),r("li",[e._v("若希望小程序在被关联时保留管理员确认环节，可前往“小程序管理后台-设置-基本设置-关联公众号设置”修改设置项。")]),e._v(" "),r("li",[e._v("公众号文章中可直接使用小程序素材，无需关联小程序。\n开发者可在小程序管理后台-【设置】-【关联设置】中管理已关联的公众号。")])]),e._v(" "),r("h3",{attrs:{id:"小程序用户访问数据上报优化"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#小程序用户访问数据上报优化","aria-hidden":"true"}},[e._v("#")]),e._v(" 小程序用户访问数据上报优化")]),e._v(" "),r("p",[e._v("为了提供更准确的用户访问数据，小程序数据上报做了系统优化，由微信客户端上报切换为基础库上报。当用户离开小程序页面，触发"),r("code",[e._v("onHide")]),e._v("或"),r("code",[e._v("onUnload")]),e._v("函数时，公共库会上报此次用户访问行为。\n优化详情如下：")]),e._v(" "),r("ul",[r("li",[e._v("优化了部分小程序存在页面脏数据的问题")]),e._v(" "),r("li",[e._v("优化了部分小程序存在错误小程序跳转数据的问题")]),e._v(" "),r("li",[e._v("当用户点击进入小程序，但小程序框架未加载完成，用户退出小程序，则不做上报，确保每次上报数据均为有效访问行为")])]),e._v(" "),r("h3",{attrs:{id:"更新日志"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#更新日志","aria-hidden":"true"}},[e._v("#")]),e._v(" 更新日志")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://developers.weixin.qq.com/community/develop/doc/000c8033998118cb3168228965b401",target:"_blank",rel:"noopener noreferrer"}},[e._v("周社区问题反馈以及功能优化更新（04.01-04.05）"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://developers.weixin.qq.com/community/develop/doc/0006882b218580bcaf58036f556c01",target:"_blank",rel:"noopener noreferrer"}},[e._v("周社区问题反馈以及功能优化更新（03.25-03.29）"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://developers.weixin.qq.com/community/develop/doc/000c249a62c968e59648fdcd051001",target:"_blank",rel:"noopener noreferrer"}},[e._v("周社区问题反馈以及功能优化更新（03.11-03.16）"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://developers.weixin.qq.com/community/develop/doc/000e8a372e0608040c481445956001",target:"_blank",rel:"noopener noreferrer"}},[e._v("周社区问题反馈以及功能优化更新（03.04-03.08）"),r("OutboundLink")],1)])]),e._v(" "),r("h2",{attrs:{id:"开发者工具"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#开发者工具","aria-hidden":"true"}},[e._v("#")]),e._v(" 开发者工具")]),e._v(" "),r("h3",{attrs:{id:"「微信开发者工具」新增企业微信小程序插件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#「微信开发者工具」新增企业微信小程序插件","aria-hidden":"true"}},[e._v("#")]),e._v(" 「微信开发者工具」新增企业微信小程序插件")]),e._v(" "),r("p",[e._v("企业微信小程序模拟器插件是为了方便用户在微信开发者工具中进行企业微信小程序开发、调试和代码上传。")]),e._v(" "),r("ul",[r("li",[e._v("参考文档：https://developers.weixin.qq.com/miniprogram/dev/devtools/qywx-dev.html")])]),e._v(" "),r("h3",{attrs:{id:"「小程序·云开发」云函数本地调试功能上线"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#「小程序·云开发」云函数本地调试功能上线","aria-hidden":"true"}},[e._v("#")]),e._v(" 「小程序·云开发」云函数本地调试功能上线")]),e._v(" "),r("p",[e._v("小程序·云开发提供了云函数本地调试功能，方便开发者在本地进行云函数调试，提高开发效率。开发者可通过右键点击云函数名唤起本地调试界面。目前云函数本地调试的支持手动触发和模拟器触发两种请求方式。")]),e._v(" "),r("ul",[r("li",[e._v("参考文档：https://developers.weixin.qq.com/miniprogram/dev/wxcloud/guide/functions/local-debug.html")])]),e._v(" "),r("h3",{attrs:{id:"「小程序·云开发」新增云调用"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#「小程序·云开发」新增云调用","aria-hidden":"true"}},[e._v("#")]),e._v(" 「小程序·云开发」新增云调用")]),e._v(" "),r("p",[e._v("云调用是云开发提供的基于云函数使用小程序开放接口的能力。目前覆盖服务端调用的场景，后续将会陆续开放开放数据调用、消息推送、支付等其他多种使用场景。\n云调用需要在云函数中通过"),r("code",[e._v("wx-server-sdk")]),e._v("使用。在云函数中使用云调用调用服务端接口无需换取"),r("code",[e._v("access_token")]),e._v("，只要是在从小程序端触发的云函数中发起的云调用都经过微信自动鉴权，可以在登记权限后直接调用如发送模板消息等开放接口。")]),e._v(" "),r("ul",[r("li",[e._v("云调用文档：https://developers.weixin.qq.com/miniprogram/dev/wxcloud/guide/functions/openapi.html")])]),e._v(" "),r("h3",{attrs:{id:"「小程序·云开发」全新云控制台上线"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#「小程序·云开发」全新云控制台上线","aria-hidden":"true"}},[e._v("#")]),e._v(" 「小程序·云开发」全新云控制台上线")]),e._v(" "),r("p",[e._v("云开发控制台经过全新设计和改版，优化交互和视觉体验，功能分类更加清晰、各项功能更加易用")]),e._v(" "),r("h3",{attrs:{id:"其他"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#其他","aria-hidden":"true"}},[e._v("#")]),e._v(" 其他")]),e._v(" "),r("p",[r("strong",[e._v("开发工具新增版本区分：")])]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/devtools/nightly.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("开发版 Nightly Build"),r("OutboundLink")],1),e._v(": 日常构建版本，用于尽快修复缺陷和敏捷上线小的特性；开发自测验证，稳定性欠佳")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/devtools/rc.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("预发布版 RC Build"),r("OutboundLink")],1),e._v(": 预发布版本，包含大的特性；通过内部测试，稳定性尚可")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/devtools/stable.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("稳定版 Stable Build"),r("OutboundLink")],1)])]),e._v(" "),r("p",[e._v("大家可以根据需要，下载对应的版本开发~")]),e._v(" "),r("h1",{attrs:{id:"小程序教程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#小程序教程","aria-hidden":"true"}},[e._v("#")]),e._v(" 小程序教程")]),e._v(" "),r("h2",{attrs:{id:"社区精选文章"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#社区精选文章","aria-hidden":"true"}},[e._v("#")]),e._v(" 社区精选文章")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://developers.weixin.qq.com/community/develop/article/doc/0004e0543b8878a53b589986451413",target:"_blank",rel:"noopener noreferrer"}},[e._v("小程序自定义组件知多少"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://developers.weixin.qq.com/community/develop/article/doc/000eaadb944de06374485c3ed51813",target:"_blank",rel:"noopener noreferrer"}},[e._v("小程序多端框架全面测评"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://developers.weixin.qq.com/community/develop/article/doc/000caad3c4cbc03a5648e01e951013",target:"_blank",rel:"noopener noreferrer"}},[e._v("一种小成本的线下定位方案 ---2019 腾讯数字文创节小程序开发有感"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://developers.weixin.qq.com/community/develop/article/doc/000aa4e19a0d50bf0f6893b9f56c13",target:"_blank",rel:"noopener noreferrer"}},[e._v("Comi - 小程序 markdown 渲染和代码高亮解决方案"),r("OutboundLink")],1)])]),e._v(" "),r("p",[e._v("更多可以查看"),r("a",{attrs:{href:"https://developers.weixin.qq.com/community/develop/article",target:"_blank",rel:"noopener noreferrer"}},[e._v("文章分享"),r("OutboundLink")],1),e._v("。")]),e._v(" "),r("h2",{attrs:{id:"最新踩坑-tips"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#最新踩坑-tips","aria-hidden":"true"}},[e._v("#")]),e._v(" 最新踩坑 && Tips")]),e._v(" "),r("ol",[r("li",[r("p",[e._v("如果小程序里已经授权过，例如地理位置信息，取消授权的方法：右上角... -> 关于 xxx -> 设置。")])]),e._v(" "),r("li",[r("p",[e._v("【小程序体验评分】遇到性能体验的问题，可以在小程序开发工具里找到协助定位性能的能力。\n体验评分是一项给小程序的体验好坏打分的功能，它会在小程序运行过程中实时检查，分析出一些可能导致体验不好的地方，并且定位出哪里有问题，以及给出一些优化建议。")])]),e._v(" "),r("li",[r("p",[e._v("小程序里嵌套 web-view，小程序往 web-view 里传数据方法：")])]),e._v(" "),r("li",[r("p",[e._v("把参数拼装在 url 中传进去，可通过 hash。")])]),e._v(" "),r("li",[r("p",[e._v("通过 postMessage 传递，只会在特定时机（小程序后退、组件销毁、分享）触发并收到消息， 参考：https://developers.weixin.qq.com/miniprogram/dev/component/web-view.html。")])]),e._v(" "),r("li",[r("p",[e._v("通过后台拉取。")])]),e._v(" "),r("li",[r("p",[e._v("setData 单次设置的数据超过 1024kB，工具上测试正常，手机上会报错。Taro 在 setData 的时候会带上一些不需要的数据。")])]),e._v(" "),r("li",[r("p",[e._v("小程序的 setStorage 缓存，会在客户端保存尽量久的时间，以下两种情况（会从最不常用的小程序删起）：")])]),e._v(" "),r("li",[r("p",[e._v("客户端空间不够。")])]),e._v(" "),r("li",[r("p",[e._v("小程序总体容量超过客户端容量 5%。")])])]),e._v(" "),r("h1",{attrs:{id:"结束语"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#结束语","aria-hidden":"true"}},[e._v("#")]),e._v(" 结束语")]),e._v(" "),r("p",[e._v("这种没人关注依然狗狗祟祟坚持做的事情，大概是我最喜欢和最擅长的了。^_^")])])},[],!1,null,null,null);t.default=i.exports}}]);