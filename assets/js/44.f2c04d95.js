(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{331:function(t,a,s){"use strict";s.r(a);var n=s(16),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("《前端入门》系列主要为个人对前端一些经验和认识总结。本节主要涉及 HTTP 协议和 Ajax 请求，日常开发的联调等内容。")]),t._v(" "),s("h1",{attrs:{id:"ajax-请求"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ajax-请求","aria-hidden":"true"}},[t._v("#")]),t._v(" Ajax 请求")]),t._v(" "),s("p",[t._v("Ajax 不是 JavaScript 的规范，它只是 Jesse James Garrett 提出的新术语："),s("code",[t._v("Asynchronous JavaScript and XML")]),t._v("，意思是用 JavaScript 执行异步网络请求。")]),t._v(" "),s("h2",{attrs:{id:"网络请求的发展"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#网络请求的发展","aria-hidden":"true"}},[t._v("#")]),t._v(" 网络请求的发展")]),t._v(" "),s("p",[t._v("网络请求，是用来从服务端获取需要的信息，然后解析协议和内容，来进行页面渲染或者是信息获取的过程。前面"),s("router-link",{attrs:{to:"/front-end-basic/front-end/front-end-6.html"}},[t._v("《6. 认识浏览器》")]),t._v("一节已经大致说过关于浏览器渲染，以及完整的 HTTP 请求流程。")],1),t._v(" "),s("p",[t._v("在很久以前，我们的网络请求除了静态资源（"),s("code",[t._v("html/css/js")]),t._v("等）文件的获取，主要用于表单的提交。我们在完成表单内容的填写之后，点击"),s("code",[t._v("Submit")]),t._v("按钮，表单开始提交，浏览器就会刷新页面，然后在新页面里告诉你操作是成功了还是失败了。")]),t._v(" "),s("p",[t._v("然后随着时间发展，大家觉得这样每次都刷新页面的体验太糟了，然后开始使用"),s("code",[t._v("XMLHttpRequest")]),t._v("来获取请求内容，再更新到页面中。页面开始支持局部更新、动态加载，后面还有懒加载、首屏加载等等，其实都可以算是基于这个基础吧。")]),t._v(" "),s("p",[t._v("同步请求会阻塞进程，页面呈现假死状态，导致体验效果也较差。接下来，Ajax 的应用越来越广，慢慢大家都开始使用异步请求 + 回调的方式，来进行请求处理。那是一个浏览器兼容困难时期，jQuery 封装的"),s("code",[t._v("$.ajax()")]),t._v("，由于兼容性处理较好，也开始被大家广泛使用\n。")]),t._v(" "),s("p",[t._v("现在，我们用上了路由管理，编写单页应用，Ajax 已经是一个不可或缺的功能了。")]),t._v(" "),s("p",[t._v("我们先来认识下 Ajax 的核心："),s("code",[t._v("XMLHttpRequest")]),t._v(" API 。")]),t._v(" "),s("h2",{attrs:{id:"xmlhttprequest"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#xmlhttprequest","aria-hidden":"true"}},[t._v("#")]),t._v(" XMLHttpRequest")]),t._v(" "),s("p",[s("code",[t._v("XMLHttpRequest")]),t._v("让发送一个 HTTP 请求变得非常容易。你只需要简单的创建一个请求对象实例，打开一个 URL，然后发送这个请求。当传输完毕后，结果的 HTTP 状态以及返回的响应内容也可以从请求对象中获取。")]),t._v(" "),s("p",[t._v("来看个简单的例子（我们常用的 Ajax 处理）：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" request "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("XMLHttpRequest")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 新建XMLHttpRequest对象")]),t._v("\n\nrequest"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onreadystatechange")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 状态发生变化时，函数被回调")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("readyState "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 成功完成")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 判断响应结果:")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("status "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 成功，通过responseText拿到响应的文本")]),t._v("\n      console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("responseText"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 失败，根据响应码判断失败原因:")]),t._v("\n      console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("status"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 发送请求")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// open的参数：")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 一：请求方法，包括get/post等")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 二：请求地址")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 三：表示是否异步请求，若为false则是同步请求，会阻塞进程")]),t._v("\nrequest"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"GET"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/api/categories"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nrequest"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("send")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("大概就是上面这样，来处理一个 HTTP 请求。我们通常会将它封装成一个通用的方法，方便调用。上面例子中使用"),s("code",[t._v("200")]),t._v("来判断是否成功，但有些时候"),s("code",[t._v("200-400")]),t._v("（不包括"),s("code",[t._v("400")]),t._v("）的范围，都可以算是成功的。")]),t._v(" "),s("p",[t._v("如果说我们将其封装起来，同时使用 ES6 的 Promise 的方式来操作的话，大概会是这样：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ajax")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" method"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" url"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" params"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" contentType "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" xhr "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("XMLHttpRequest")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" formData "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FormData")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  Object"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("keys")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("params"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("key")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    formData"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("append")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" params"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Promise")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("resolve"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" reject")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      xhr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("method"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" url"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      xhr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setRequestHeader")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Content-Type"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" contentType"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      xhr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onreadystatechange")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("xhr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("readyState "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("xhr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("status "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" xhr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("status "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("400")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这里我们使用200-400来判断")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("xhr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("responseText"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 返回请求信息")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("reject")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("xhr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      xhr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("send")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("formData"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("reject")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("这里使用了"),s("code",[t._v("FormData")]),t._v("来处理。通过"),s("code",[t._v("FormData")]),t._v("对象可以组装一组用"),s("code",[t._v("XMLHttpRequest")]),t._v("发送请求的键/值对。"),s("br"),t._v("\n它可以更灵活方便的发送表单数据，因为可以独立于表单使用。如果你把表单的编码类型设置为"),s("code",[t._v("multipart/form-data")]),t._v("，则通过"),s("code",[t._v("FormData")]),t._v("传输的数据格式和表单通过"),s("code",[t._v("submit()")]),t._v("方法传输的数据格式相同。也支持文件的上传和添加。")]),t._v(" "),s("p",[t._v("上面的代码也只是一个简单的例子，如果要封装成完善的库，我们通常还需要处理一些问题：")]),t._v(" "),s("ul",[s("li",[t._v("浏览器兼容性")]),t._v(" "),s("li",[t._v("babel polyfill 处理 ES6")]),t._v(" "),s("li",[t._v("get 方法通过将 params 转换拼接 URL 处理")])]),t._v(" "),s("p",[t._v("如果想知道不使用"),s("code",[t._v("FormData")]),t._v("对象的情况下，通过 AJAX 序列化和提交表单，以及更多的"),s("code",[t._v("XMLHttpRequest")]),t._v("内容，可以参考"),s("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest",target:"_blank",rel:"noopener noreferrer"}},[t._v("Using XMLHttpRequest | MDN"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("h1",{attrs:{id:"http-协议"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http-协议","aria-hidden":"true"}},[t._v("#")]),t._v(" HTTP 协议")]),t._v(" "),s("p",[t._v("关于 HTTP 协议的内容，实在是太多太多，这里只大致讲一下接触比较多的。")]),t._v(" "),s("p",[t._v("更多与 HTTP 协议相关的详细说明，可参考"),s("router-link",{attrs:{to:"/front-end-basic/front-end/front-end-10.html"}},[t._v("《10. 理解 HTTP 协议》")]),t._v("。")],1),t._v(" "),s("p",[t._v("还有 TCP/IP 协议的就直接略过，可参考下"),s("router-link",{attrs:{to:"/front-end-basic/front-end/front-end-9.html"}},[t._v("《9. 网络协议基础》")]),t._v("。")],1),t._v(" "),s("h2",{attrs:{id:"理解-http-协议"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#理解-http-协议","aria-hidden":"true"}},[t._v("#")]),t._v(" 理解 HTTP 协议")]),t._v(" "),s("h3",{attrs:{id:"http-结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http-结构","aria-hidden":"true"}},[t._v("#")]),t._v(" HTTP 结构")]),t._v(" "),s("h4",{attrs:{id:"http-消息的结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http-消息的结构","aria-hidden":"true"}},[t._v("#")]),t._v(" HTTP 消息的结构")]),t._v(" "),s("ol",[s("li",[t._v("Request")])]),t._v(" "),s("div",{staticClass:"language-cmd extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("------------------\nRequest line\n（包括：请求方法、请求的资源、HTTP协议的版本号）\n------------------\nRequest header\n（包括：Cache头域、Client头域、Cookie/Login头域、Entity头域、Miscellaneous头域、Transport头域等）\n------------------\n空行\n------------------\nRequest body\n------------------\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[t._v("Response")])]),t._v(" "),s("div",{staticClass:"language-cmd extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("------------------\nResponse line\n（包括：HTTP协议的版本号、状态码、消息）\n------------------\nResponse header\n（包括：Cache头域、Cookie/Login头域、Entity头域、Miscellaneous头域、Transport头域、Location头域等）\n------------------\n空行\n------------------\nResponse body\n------------------\n")])])]),s("h4",{attrs:{id:"状态码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#状态码","aria-hidden":"true"}},[t._v("#")]),t._v(" 状态码")]),t._v(" "),s("p",[t._v("状态码由三位数字组成，第一个数字定义了响应的类别（括号中为常见的状态码）：")]),t._v(" "),s("ul",[s("li",[t._v("1XX--提示信息：表示请求已被成功接收，继续处理")]),t._v(" "),s("li",[t._v("2XX--成功：表示请求已被成功接收，理解，接受（200 OK）")]),t._v(" "),s("li",[t._v("3XX--重定向：要完成请求必须进行更进一步的处理（302 Found 重定向/304 Not Modified 缓存）")]),t._v(" "),s("li",[t._v("4XX--客户端错误：请求有语法错误或请求无法实现（400 Bad Request 客户端请求与语法错误/403 Forbidden 服务器拒绝提供服务/404 Not Found 请求资源不存在）")]),t._v(" "),s("li",[t._v("5XX--服务器端错误：服务器未能实现合法的请求（500 Internal Server Error 服务器发生了不可预期的错误）")])]),t._v(" "),s("h3",{attrs:{id:"无连接的-http"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#无连接的-http","aria-hidden":"true"}},[t._v("#")]),t._v(" 无连接的 HTTP")]),t._v(" "),s("h4",{attrs:{id:"无连接"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#无连接","aria-hidden":"true"}},[t._v("#")]),t._v(" 无连接")]),t._v(" "),s("p",[t._v("无连接的含义是限制每次连接只处理一个请求。服务器处理完客户的请求，并收到客户的应答后，即断开连接。")]),t._v(" "),s("h4",{attrs:{id:"keep-alive"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#keep-alive","aria-hidden":"true"}},[t._v("#")]),t._v(" Keep-Alive")]),t._v(" "),s("p",[t._v("Keep-Alive 功能使客户端到服务器端的连接持续有效，当出现对服务器的后继请求时，Keep-Alive 功能避免了建立或者重新建立连接。")]),t._v(" "),s("h3",{attrs:{id:"无状态的-http"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#无状态的-http","aria-hidden":"true"}},[t._v("#")]),t._v(" 无状态的 HTTP")]),t._v(" "),s("p",[t._v("无状态是指协议对于事务处理没有记忆能力，服务器不知道客户端是什么状态。")]),t._v(" "),s("p",[t._v("通常我们会根据场景，使用"),s("code",[t._v("Cookie")]),t._v("、"),s("code",[t._v("Token")]),t._v("、"),s("code",[t._v("Session")]),t._v("等方法来记录用户状态，完善上下请求的承接性。")]),t._v(" "),s("h2",{attrs:{id:"http-与浏览器缓存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http-与浏览器缓存","aria-hidden":"true"}},[t._v("#")]),t._v(" HTTP 与浏览器缓存")]),t._v(" "),s("p",[t._v("浏览器会在第一次请求完服务器后得到响应，我们可以在服务器中设置这些响应，从而达到在以后的请求中尽量减少甚至不从服务器获取资源的目的。")]),t._v(" "),s("p",[t._v("静态资源的缓存能减轻很多流量，如今我们的文件很多都加上了 md5，则缓存的使用越来越广泛。")]),t._v(" "),s("p",[t._v("浏览器是依靠请求和响应中的的头信息来控制缓存的，主要涉及"),s("code",[t._v("Expires")]),t._v("与"),s("code",[t._v("Cache-Control")]),t._v("、"),s("code",[t._v("Last-Modified/If-Modified-Since")]),t._v("、"),s("code",[t._v("ETag/If-None-Match")]),t._v("这几个。")]),t._v(" "),s("p",[t._v("第一次请求：\n"),s("img",{attrs:{src:"https://github-imglib-1255459943.cos.ap-chengdu.myqcloud.com/015343_psx2_568818.png",alt:"image"}})]),t._v(" "),s("p",[t._v("再次请求：\n"),s("img",{attrs:{src:"https://github-imglib-1255459943.cos.ap-chengdu.myqcloud.com/015353_P04w_568818.png",alt:"image"}})]),t._v(" "),s("h2",{attrs:{id:"http-与跨域"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http-与跨域","aria-hidden":"true"}},[t._v("#")]),t._v(" HTTP 与跨域")]),t._v(" "),s("h3",{attrs:{id:"浏览器同源政策"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#浏览器同源政策","aria-hidden":"true"}},[t._v("#")]),t._v(" 浏览器同源政策")]),t._v(" "),s("p",[t._v('同源政策的目的，是为了保证用户信息的安全，防止恶意的网站窃取数据。所谓"同源"指的是"三个相同": 协议相同、域名相同、端口相同。')]),t._v(" "),s("p",[t._v('随着互联网的发展，"同源政策"越来越严格。目前，如果非同源，共有三种行为受到限制。')]),t._v(" "),s("ol",[s("li",[s("code",[t._v("Cookie")]),t._v("、"),s("code",[t._v("LocalStorage")]),t._v("和"),s("code",[t._v("IndexDB")]),t._v("无法读取。")]),t._v(" "),s("li",[s("code",[t._v("DOM")]),t._v("无法获得。")]),t._v(" "),s("li",[s("code",[t._v("AJAX")]),t._v("请求不能发送。")])]),t._v(" "),s("h3",{attrs:{id:"前端解决跨域"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前端解决跨域","aria-hidden":"true"}},[t._v("#")]),t._v(" 前端解决跨域")]),t._v(" "),s("p",[t._v("跨域方法大概以下几种：")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("document.domain + iframe")]),t._v("(只有在主域相同的时候才能使用该方法)")]),t._v(" "),s("li",[t._v("动态创建"),s("code",[t._v("script")]),t._v("(JSONP)")]),t._v(" "),s("li",[s("code",[t._v("location.hash + iframe")])]),t._v(" "),s("li",[s("code",[t._v("window.name + iframe")])]),t._v(" "),s("li",[s("code",[t._v("postMessage")])]),t._v(" "),s("li",[t._v("CORS")]),t._v(" "),s("li",[s("code",[t._v("websockets")])])]),t._v(" "),s("p",[t._v("现在的话，应该是 CORS 的使用会更广泛吧。实现 CORS 通信的关键是服务器。只要服务器实现了 CORS 接口，就可以跨源通信。")]),t._v(" "),s("h1",{attrs:{id:"请求联调"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#请求联调","aria-hidden":"true"}},[t._v("#")]),t._v(" 请求联调")]),t._v(" "),s("p",[t._v("一般来说，我们的日常联调通常有两种：浏览器查看请求，或是工具抓包查看（Fiddler）。")]),t._v(" "),s("h2",{attrs:{id:"浏览器查看请求"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#浏览器查看请求","aria-hidden":"true"}},[t._v("#")]),t._v(" 浏览器查看请求")]),t._v(" "),s("p",[t._v("我们又来看浏览器的控制台了："),s("br"),t._v(" "),s("img",{attrs:{src:"https://github-imglib-1255459943.cos.ap-chengdu.myqcloud.com/1513065617%281%29.png",alt:"image"}})]),t._v(" "),s("h3",{attrs:{id:"network-面板"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#network-面板","aria-hidden":"true"}},[t._v("#")]),t._v(" Network 面板")]),t._v(" "),s("p",[t._v("Network 面板可以记录页面上的网络请求的详情信息，从发起网页页面请求 Request 后分析 HTTP 请求后得到的各个请求资源信息（包括状态、资源类型、大小、所用时间、Request 和 Response 等），可以根据这个进行网络性能优化。")]),t._v(" "),s("p",[t._v("该面板主要包括 5 大块窗格，如图："),s("br"),t._v(" "),s("img",{attrs:{src:"https://github-imglib-1255459943.cos.ap-chengdu.myqcloud.com/7f5c083982ec4c8378100687072118b9.png",alt:"image"}})]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Controls")]),t._v("：控制 Network 的外观和功能。")]),t._v(" "),s("li",[s("strong",[t._v("Filters")]),t._v("：控制 Requests Table 具体显示哪些内容。")]),t._v(" "),s("li",[s("strong",[t._v("Overview")]),t._v("：显示获取到资源的时间轴信息。")]),t._v(" "),s("li",[s("strong",[t._v("Requests Table")]),t._v("：按资源获取的前后顺序显示所有获取到的资源信息，点击资源名可以查看该资源的详细信息。")]),t._v(" "),s("li",[s("strong",[t._v("Summary")]),t._v("：显示总的请求数、数据传输量、加载时间信息。")])]),t._v(" "),s("h3",{attrs:{id:"查看具体资源的详情"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看具体资源的详情","aria-hidden":"true"}},[t._v("#")]),t._v(" 查看具体资源的详情")]),t._v(" "),s("p",[t._v("通过点击某个资源的 Name 可以查看该资源的详细信息，根据选择的资源类型显示的信息也不太一样，可能包括如下 Tab 信息：")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Headers")]),t._v("：该资源的 HTTP 头信息。")]),t._v(" "),s("li",[s("strong",[t._v("Preview")]),t._v("：根据你所选择的资源类型（JSON、图片、文本）显示相应的预览。")]),t._v(" "),s("li",[s("strong",[t._v("Response")]),t._v("：显示 HTTP 的 Response 信息。")]),t._v(" "),s("li",[s("strong",[t._v("Cookies")]),t._v("：显示资源 HTTP 的 Request 和 Response 过程中的 Cookies 信息。")]),t._v(" "),s("li",[s("strong",[t._v("Timing")]),t._v("：显示资源在整个请求生命周期过程中各部分花费的时间。")])]),t._v(" "),s("p",[t._v("一般来说，联调主要关注请求是否正确发送、回包是否是约定的格式，所以我们更多使用资源详情的查看，包括：")]),t._v(" "),s("ul",[s("li",[t._v("查看 HTTP 头信息是否正确")]),t._v(" "),s("li",[t._v("查看请求数据是否带上")]),t._v(" "),s("li",[t._v("查看请求是否成功，分析 HTTP 状态码")]),t._v(" "),s("li",[t._v("查看回包格式和内容是否正确")])]),t._v(" "),s("p",[t._v("而其他功能，或许对于性能优化的时候会使用更多，先不多介绍。"),s("br"),t._v("\n这里面有一篇文章写得挺详细的，可以参考"),s("a",{attrs:{href:"http://web.jobbole.com/89106/",target:"_blank",rel:"noopener noreferrer"}},[t._v("《Chrome 开发者工具详解(2)：Network 面板》"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"fiddler"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fiddler","aria-hidden":"true"}},[t._v("#")]),t._v(" Fiddler")]),t._v(" "),s("p",[t._v("Fiddler 是一个 HTTP 的调试代理，以代理服务器的方式，监听系统的 Http 网络数据流动。Fiddler 可以也可以让你检查所有的 HTTP 通讯，设置断点，以及 Fiddle 所有的“进出”的数据（可用于抓包、修改请求等）。")]),t._v(" "),s("p",[t._v("通常来说，我们会使用它来解决一些问题：")]),t._v(" "),s("ol",[s("li",[t._v("查看请求详情（类似上方的浏览器 Network 面板）。")]),t._v(" "),s("li",[t._v("请求失败时，抓包给后台查看问题。")]),t._v(" "),s("li",[t._v("模拟请求。")]),t._v(" "),s("li",[t._v("拦截请求，并更改请求内容。")]),t._v(" "),s("li",[t._v("移动端的请求查看和抓包。")])]),t._v(" "),s("p",[t._v("具体的使用方式，可以参考"),s("a",{attrs:{href:"http://www.cnblogs.com/FounderBox/p/4653588.html?utm_source=tuicool",target:"_blank",rel:"noopener noreferrer"}},[t._v("Fiddler 教程"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("h1",{attrs:{id:"其他深入学习"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#其他深入学习","aria-hidden":"true"}},[t._v("#")]),t._v(" 其他深入学习")]),t._v(" "),s("p",[t._v("就目前来说，大致的入门内容大概到这，还有很多内容或许分散在本骚年的各个系列博客中。这里放一些总结和整理相关的吧。")]),t._v(" "),s("h2",{attrs:{id:"前端阶段性总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前端阶段性总结","aria-hidden":"true"}},[t._v("#")]),t._v(" 前端阶段性总结")]),t._v(" "),s("blockquote",[s("p",[s("a",{attrs:{href:"https://godbasin.github.io/2017/05/20/front-end-notes-7-init-http/",target:"_blank",rel:"noopener noreferrer"}},[t._v("《前端阶段性总结之「理解 HTTP 协议」》"),s("OutboundLink")],1),t._v(" > "),s("a",{attrs:{href:"https://godbasin.github.io/2017/05/19/front-end-notes-6-network-protocol/",target:"_blank",rel:"noopener noreferrer"}},[t._v("《前端阶段性总结之「网络协议基础」》"),s("OutboundLink")],1),s("br"),t._v(" "),s("a",{attrs:{href:"https://godbasin.github.io/2017/05/14/front-end-notes-5-build-tool/",target:"_blank",rel:"noopener noreferrer"}},[t._v("《前端阶段性总结之「自动化和构建工具」》"),s("OutboundLink")],1),s("br"),t._v(" "),s("a",{attrs:{href:"https://godbasin.github.io/2017/05/12/front-end-notes-4-frame/",target:"_blank",rel:"noopener noreferrer"}},[t._v("《前端阶段性总结之「框架相关」》"),s("OutboundLink")],1),s("br"),t._v(" "),s("a",{attrs:{href:"https://godbasin.github.io/2017/05/07/front-end-notes-3-javascript-keep-moving/",target:"_blank",rel:"noopener noreferrer"}},[t._v("《前端阶段性总结之「javascript 新特性」》"),s("OutboundLink")],1),s("br"),t._v(" "),s("a",{attrs:{href:"https://godbasin.github.io/2017/05/06/front-end-notes-2-deep-into-javascript/",target:"_blank",rel:"noopener noreferrer"}},[t._v("《前端阶段性总结之「深入 javascript」》"),s("OutboundLink")],1),s("br"),t._v(" "),s("a",{attrs:{href:"https://godbasin.github.io/2017/05/01/front-end-notes-1-init-javascript/",target:"_blank",rel:"noopener noreferrer"}},[t._v("《前端阶段性总结之「掌握 javascript」》"),s("OutboundLink")],1),s("br"),t._v(" "),s("a",{attrs:{href:"https://godbasin.github.io/2017/04/30/front-end-notes-0-about/",target:"_blank",rel:"noopener noreferrer"}},[t._v("《前端阶段性总结之「总览整理」》"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"前端杂谈"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前端杂谈","aria-hidden":"true"}},[t._v("#")]),t._v(" 前端杂谈")]),t._v(" "),s("blockquote",[s("p",[s("router-link",{attrs:{to:"/understanding/template-engine.html"}},[t._v("《前端模板引擎》")]),s("br"),t._v(" "),s("router-link",{attrs:{to:"/understanding/dialogue-abstraction.html"}},[t._v("《对话抽象》")]),s("br"),t._v(" "),s("router-link",{attrs:{to:"/understanding/data-driven-or-event-driven.html"}},[t._v("《前端思维转变--从事件驱动到数据驱动》")]),s("br"),t._v("\n还有《纯前端的进军》系列，更多可以查看 github 上博客："),s("a",{attrs:{href:"https://github.com/godbasin/godbasin.github.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("godbasin/godbasin.github.io"),s("OutboundLink")],1),t._v("。")],1)]),t._v(" "),s("h1",{attrs:{id:"结束语"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#结束语","aria-hidden":"true"}},[t._v("#")]),t._v(" 结束语")]),t._v(" "),s("p",[t._v("这一节主要讲了 HTTP 请求相关，包括 Ajax（XMLHttpRequest）、HTTP 协议/跨域/缓存等，以及常用的前后台交互（联调）方式的介绍。这里面都是书面的介绍，我们需要更多的其实是实践，动手去写吧。")])])},[],!1,null,null,null);a.default=e.exports}}]);