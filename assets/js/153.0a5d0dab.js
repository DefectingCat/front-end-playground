(window.webpackJsonp=window.webpackJsonp||[]).push([[153],{427:function(v,a,e){"use strict";e.r(a);var t=e(16),_=Object(t.a)({},function(){var v=this,a=v.$createElement,e=v._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("p",[v._v("前端的框架太多让人眼花缭乱，很多相似的地方，优秀的地方大家都会借鉴，同时又会有各自的一些特点。小程序也好，其他框架也好，理解他们的设计缘由、实现原理，还是能学到很多很多东西的。")]),v._v(" "),e("h1",{attrs:{id:"一切始于双线程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一切始于双线程","aria-hidden":"true"}},[v._v("#")]),v._v(" 一切始于双线程")]),v._v(" "),e("h2",{attrs:{id:"技术选型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#技术选型","aria-hidden":"true"}},[v._v("#")]),v._v(" 技术选型")]),v._v(" "),e("p",[v._v("上一节"),e("router-link",{attrs:{to:"/wxapp/wxapp-principle/1-wxapp-generate.html"}},[v._v("《小程序的诞生》")]),v._v("中，我们也提到了小程序的双线程设计。")],1),v._v(" "),e("p",[v._v("目前来说，"),e("strong",[v._v("页面渲染的方式主要有三种")]),v._v("：")]),v._v(" "),e("ol",[e("li",[v._v("Web 渲染。")]),v._v(" "),e("li",[v._v("Native 原生渲染。")]),v._v(" "),e("li",[v._v("Web 与 Native 两者掺杂，也即我们常说的 Hybrid 渲染。")])]),v._v(" "),e("p",[v._v("前面也说过，小程序最终的呈现形式，是 WebView + 原生组件，Hybrid 方式。我们结合之前对小程序的期望来看：")]),v._v(" "),e("ul",[e("li",[v._v("开发门槛：Web 门槛低，不过 Native 也有像 RN 这样的框架支持")]),v._v(" "),e("li",[v._v("体验：Native 体验比 Web 不要好太多，Hybrid 在一定程度上比 Web 接近原生体验")]),v._v(" "),e("li",[v._v("版本更新：Web 支持在线更新，Native 则需要打包到微信一起审核发布")]),v._v(" "),e("li",[v._v("管控和安全：Web 可跳转或是改变页面内容，存在一些不可控因素和安全风险")])]),v._v(" "),e("p",[v._v("由于小程序的宿主是微信，如果用纯客户端原生技术来编写小程序 ，那小程序代码需要与微信代码一起编包，跟随微信发版本，这种方式跟开发节奏必然都是不对的。\n所以方向应该是需要像 Web 技术那样，有一份随时可更新的资源包放在云端，通过下载到本地，动态执行后即可渲染出界面。")]),v._v(" "),e("p",[v._v("如果用纯 Web 技术来渲染小程序，在一些有复杂交互的页面上可能会面临一些性能问题。\n这是因为在 Web 技术中，UI 渲染跟 JavaScript 的脚本执行都在一个单线程中执行，这就容易导致一些逻辑任务抢占 UI 渲染的资源。")]),v._v(" "),e("p",[v._v("总地看来，小程序选择了 Hybrid 的渲染方式，可以用一种近似 Web 的方式来开发，并且还可以实现在线更新代码。同时，引入原生组件有以下好处：")]),v._v(" "),e("ul",[e("li",[v._v("扩展 Web 的能力。比如像输入框组件（input, textarea）有更好地控制键盘的能力")]),v._v(" "),e("li",[v._v("体验更好，同时也减轻 WebView 的渲染工作")]),v._v(" "),e("li",[v._v("绕过 setData、数据通信和重渲染流程，使渲染性能更好")])]),v._v(" "),e("p",[v._v("现在，我们还剩下一个很重要的问题：管控性和安全性。于是，双线程的设计被提出来了。")]),v._v(" "),e("h2",{attrs:{id:"双线程的小程序"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#双线程的小程序","aria-hidden":"true"}},[v._v("#")]),v._v(" 双线程的小程序")]),v._v(" "),e("p",[v._v("也不知道是哪位大佬，能想出双线程这样的模型，反正我是佩服得 666 的。")]),v._v(" "),e("p",[v._v("双线程是什么？我们先来看个官方的图：\n"),e("img",{attrs:{src:"https://github-imglib-1255459943.cos.ap-chengdu.myqcloud.com/%E4%B8%8B%E8%BD%BD.png",alt:"image"}})]),v._v(" "),e("p",[e("strong",[v._v("小程序的渲染层和逻辑层分别由 2 个线程管理：渲染层的界面使用了 WebView 进行渲染，逻辑层采用 JsCore 线程运行 JS 脚本。")])]),v._v(" "),e("p",[v._v("为什么要这么设计呢？前面提到的管控和安全，为了解决这些问题，我们需要阻止开发者使用一些浏览器提供的，诸如跳转页面、操作 DOM、动态执行脚本的开放性接口。")]),v._v(" "),e("p",[v._v("我们可以使用客户端系统的 JavaScript 引擎，iOS 下的 JavaScriptCore 框架，安卓下腾讯 x5 内核提供的 JsCore 环境。通过提供一个沙箱环境来运行开发者的 JavaScript 代码来解决。这个沙箱环境只提供纯 JavaScript 的解释执行环境，没有任何浏览器相关接口。")]),v._v(" "),e("p",[v._v("这就是小程序双线程模型的由来：")]),v._v(" "),e("ul",[e("li",[e("strong",[v._v("逻辑层：创建一个单独的线程去执行 JavaScript，在这个环境下执行的都是有关小程序业务逻辑的代码")])]),v._v(" "),e("li",[e("strong",[v._v("渲染层：界面渲染相关的任务全都在 WebView 线程里执行，通过逻辑层代码去控制渲染哪些界面。一个小程序存在多个界面，所以渲染层存在多个 WebView 线程")])])]),v._v(" "),e("h2",{attrs:{id:"双线程通信"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#双线程通信","aria-hidden":"true"}},[v._v("#")]),v._v(" 双线程通信")]),v._v(" "),e("p",[v._v("把开发者的 JS 逻辑代码放到单独的线程去运行，但在 Webview 线程里，开发者就没法直接操作 DOM。那要怎么去实现动态更改界面呢？")]),v._v(" "),e("p",[v._v("前面我们知道，**逻辑层和渲染层的通信会由 Native （微信客户端）做中转，逻辑层发送网络请求也经由 Native 转发。**这是不是意味着，我们可以把 DOM 的更新通过简单的数据通信来实现呢？")]),v._v(" "),e("p",[v._v("Virtual DOM 相信大家都已有了解，大概是这么个过程："),e("strong",[v._v("用 JS 对象模拟 DOM 树 -> 比较两棵虚拟 DOM 树的差异 -> 把差异应用到真正的 DOM 树上")]),v._v("。")]),v._v(" "),e("p",[v._v("在这里我们可以用上，如图：")]),v._v(" "),e("p",[e("img",{attrs:{src:"https://github-imglib-1255459943.cos.ap-chengdu.myqcloud.com/13333.png",alt:"image"}})]),v._v(" "),e("ol",[e("li",[v._v("在渲染层把 WXML 转化成对应的 JS 对象。")]),v._v(" "),e("li",[v._v("在逻辑层发生数据变更的时候，通过宿主环境提供的 setData 方法把数据从逻辑层传递到 Native，再转发到渲染层。")]),v._v(" "),e("li",[v._v("经过对比前后差异，把差异应用在原来的 DOM 树上，更新界面。")])]),v._v(" "),e("p",[v._v("我们通过把 WXML 转化为数据，通过 Native 进行转发，来实现逻辑层和渲染层的交互和通信。而这样完整的一套框架，基本上都是通过小程序的基础库来完成的。")]),v._v(" "),e("h2",{attrs:{id:"小程序的基础库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#小程序的基础库","aria-hidden":"true"}},[v._v("#")]),v._v(" 小程序的基础库")]),v._v(" "),e("p",[v._v("小程序的基础库是 JavaScript 编写的，它可以被注入到渲染层和逻辑层运行。主要用于：")]),v._v(" "),e("ul",[e("li",[v._v("在渲染层，提供各类组件来组建界面的元素")]),v._v(" "),e("li",[v._v("在逻辑层，提供各类 API 来处理各种逻辑")]),v._v(" "),e("li",[v._v("处理数据绑定、组件系统、事件系统、通信系统等一系列框架逻辑")])]),v._v(" "),e("p",[v._v("由于小程序的渲染层和逻辑层是两个线程管理，两个线程各自注入了基础库。**小程序的基础库不会被打包在某个小程序的代码包里边，它会被提前内置在微信客户端。**这样可以：")]),v._v(" "),e("ul",[e("li",[v._v("降低业务小程序的代码包大小")]),v._v(" "),e("li",[v._v("可以单独修复基础库中的 Bug，无需修改到业务小程序的代码包")])]),v._v(" "),e("h3",{attrs:{id:"exparser-框架"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#exparser-框架","aria-hidden":"true"}},[v._v("#")]),v._v(" Exparser 框架")]),v._v(" "),e("p",[v._v("Exparser 是微信小程序的组件组织框架，内置在小程序基础库中，为小程序的各种组件提供基础的支持。小程序内的所有组件，包括内置组件和自定义组件，都由 Exparser 组织管理。Exparser 特点包括：")]),v._v(" "),e("ol",[e("li",[v._v("基于 Shadow DOM 模型：模型上与 WebComponents 的 ShadowDOM 高度相似，但不依赖浏览器的原生支持，也没有其他依赖库；实现时，还针对性地增加了其他 API 以支持小程序组件编程。")]),v._v(" "),e("li",[v._v("可在纯 JS 环境中运行：这意味着逻辑层也具有一定的组件树组织能力。")]),v._v(" "),e("li",[v._v("高效轻量：性能表现好，在组件实例极多的环境下表现尤其优异，同时代码尺寸也较小。")])]),v._v(" "),e("p",[v._v("关于基础库和 Exparser 框架，更多的也可以参考："),e("a",{attrs:{href:"https://developers.weixin.qq.com/ebook?action=get_post_info&token=935589521&volumn=1&lang=zh_CN&book=miniprogram&docid=0000e82f924ca0bb00869a5de5ec0a",target:"_blank",rel:"noopener noreferrer"}},[v._v("《小程序开发指南》"),e("OutboundLink")],1)]),v._v(" "),e("h1",{attrs:{id:"结束语"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#结束语","aria-hidden":"true"}},[v._v("#")]),v._v(" 结束语")]),v._v(" "),e("p",[v._v("这节里大概讲了小程序设计中比较重要的一个模型——双线程，关于双线程的出现、设计、数据通信，到基础库、Exparser 框架，都是一个个相关而又相互影响的选择。"),e("br"),v._v("\n关于小程序的底层框架设计，其实还涉及更多更多我们未能一时半会掌握完的内容，自定义组件、原生组件，还有他们做了很多的性能优化工作，都不是只言片语能讲完的。我们能做的，就是多去思考。")])])},[],!1,null,null,null);a.default=_.exports}}]);