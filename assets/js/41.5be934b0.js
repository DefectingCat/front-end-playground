(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{357:function(t,a,s){"use strict";s.r(a);var n=s(16),r=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("Javascript 包括三块：ECMAScript、DOM 和 BOM，本文主要介绍 ECMAScript。")]),t._v(" "),s("h1",{attrs:{id:"javascript"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#javascript","aria-hidden":"true"}},[t._v("#")]),t._v(" JavaScript")]),t._v(" "),s("h2",{attrs:{id:"ecmascript"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ecmascript","aria-hidden":"true"}},[t._v("#")]),t._v(" ECMAScript")]),t._v(" "),s("p",[t._v("我们常说的"),s("code",[t._v("JavaScript")]),t._v("，其实指的是"),s("code",[t._v("ECMAScript")]),t._v("。"),s("br"),t._v(" "),s("code",[t._v("ECMAScript")]),t._v("是形成"),s("code",[t._v("JavaScript")]),t._v("语言基础的脚本语言。")]),t._v(" "),s("p",[t._v("我们常说的"),s("code",[t._v("ES6")]),t._v("/"),s("code",[t._v("ES7")]),t._v("，其实是一些"),s("code",[t._v("ECMAScript")]),t._v("新特性，主要是语法糖，来提升开发效率。")]),t._v(" "),s("h2",{attrs:{id:"单线程的-javascript"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#单线程的-javascript","aria-hidden":"true"}},[t._v("#")]),t._v(" 单线程的 Javascript")]),t._v(" "),s("p",[t._v("为什么 javascript 是单线程的吗？其实更多是因为对页面交互的同步处理。作为浏览器脚本语言，"),s("code",[t._v("JavaScript")]),t._v("的主要用途是与用户互动，以及操作"),s("code",[t._v("DOM")]),t._v("，若是多线程会导致严重的同步问题。")]),t._v(" "),s("h3",{attrs:{id:"异步事件与任务队列"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#异步事件与任务队列","aria-hidden":"true"}},[t._v("#")]),t._v(" 异步事件与任务队列")]),t._v(" "),s("h4",{attrs:{id:"同步任务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#同步任务","aria-hidden":"true"}},[t._v("#")]),t._v(" 同步任务")]),t._v(" "),s("p",[t._v("在主线程上排队执行的任务，只有前一个任务执行完毕，才能执行后一个任务。")]),t._v(" "),s("h4",{attrs:{id:"异步任务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#异步任务","aria-hidden":"true"}},[t._v("#")]),t._v(" 异步任务")]),t._v(" "),s("p",[t._v("不进入主线程、而进入“任务队列”的任务，只有“任务队列”通知主线程，某个异步任务可以执行了，该任务才会进入主线程执行。")]),t._v(" "),s("p",[t._v("回调函数，就是那些会被主线程挂起来的代码。异步任务必须指定回调函数，当主线程开始执行异步任务，就是执行对应的回调函数。")]),t._v(" "),s("h3",{attrs:{id:"异步执行机制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#异步执行机制","aria-hidden":"true"}},[t._v("#")]),t._v(" 异步执行机制")]),t._v(" "),s("ol",[s("li",[t._v("所有同步任务都在主线程上执行，形成一个执行栈。")]),t._v(" "),s("li",[t._v("主线程之外，还存在一个“任务队列”。只要异步任务有了运行结果，就在“任务队列”之中放置一个事件。")]),t._v(" "),s("li",[t._v('一旦"执行栈"中的所有同步任务执行完毕，系统就会读取“任务队列”，看看里面有哪些事件。那些对应的异步任务，于是结束等待状态，进入执行栈，开始执行。')]),t._v(" "),s("li",[t._v("主线程不断重复上面的第三步。")])]),t._v(" "),s("h3",{attrs:{id:"eventloop"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#eventloop","aria-hidden":"true"}},[t._v("#")]),t._v(" EventLoop")]),t._v(" "),s("p",[t._v("参考偷来的图："),s("br"),t._v(" "),s("img",{attrs:{src:"https://github-imglib-1255459943.cos.ap-chengdu.myqcloud.com/bg2014100802.png",alt:"JS Event Loop"}}),t._v("\n图中，主线程运行的时候，产生堆（"),s("code",[t._v("heap")]),t._v("）和栈（"),s("code",[t._v("stack")]),t._v("），栈中的代码调用各种外部"),s("code",[t._v("API")]),t._v("，它们在“任务队列”中加入各种事件（"),s("code",[t._v("click")]),t._v("，"),s("code",[t._v("load")]),t._v("，"),s("code",[t._v("done")]),t._v("）。只要栈中的代码执行完毕，主线程就会去读取“任务队列”，依次执行那些事件所对应的回调函数。"),s("br"),t._v("\n执行栈中的代码（同步任务），总是在读取“任务队列”（异步任务）之前执行。")]),t._v(" "),s("p",[t._v("以上内容，大部分参考自"),s("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2014/10/event-loop.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("《JavaScript 运行机制详解：再谈 Event Loop》"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("h2",{attrs:{id:"原型和继承"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#原型和继承","aria-hidden":"true"}},[t._v("#")]),t._v(" 原型和继承")]),t._v(" "),s("p",[s("code",[t._v("Javascript")]),t._v("的原型和继承处处围绕着一点展开："),s("strong",[s("code",[t._v("JavaScript")]),t._v("中几乎所有的对象都是位于原型链顶端的"),s("code",[t._v("Object")]),t._v("的实例。")])]),t._v(" "),s("p",[t._v("当谈到继承时，"),s("code",[t._v("JavaScript")]),t._v("只有一种结构：对象。")]),t._v(" "),s("h3",{attrs:{id:"原型和原型链"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#原型和原型链","aria-hidden":"true"}},[t._v("#")]),t._v(" 原型和原型链")]),t._v(" "),s("p",[t._v("每个对象都有一个私有属性（称之为"),s("code",[t._v("[[Prototype]]")]),t._v("），它持有一个连接到另一个称为其"),s("code",[t._v("prototype")]),t._v("对象（原型对象）的链接。该"),s("code",[t._v("prototype")]),t._v("对象又具有一个自己的原型，层层向上直到一个对象的原型为"),s("code",[t._v("null")]),t._v("。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("Object"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getPrototypeOf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n")])])]),s("p",[t._v("根据定义，"),s("code",[t._v("null")]),t._v("没有原型，并作为这个原型链中的最后一个环节。")]),t._v(" "),s("h4",{attrs:{id:"属性的查找"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#属性的查找","aria-hidden":"true"}},[t._v("#")]),t._v(" 属性的查找")]),t._v(" "),s("p",[s("code",[t._v("JavaScript")]),t._v("对象是动态的属性“包”（指其自己的属性）。"),s("code",[t._v("JavaScript")]),t._v("对象有一个指向一个原型对象的链。"),s("br"),t._v("\n当试图访问一个对象的属性时，它不仅仅在该对象上搜寻，还会搜寻该对象的原型，以及该对象的原型的原型，依次层层向上搜索，直到找到一个名字匹配的属性或到达原型链的末尾。")]),t._v(" "),s("p",[t._v("我们来看个例子：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 让我们假设我们有一个对象 o, 其有自己的属性 a 和 b：")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" o "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// o 的原型 o.__proto__有属性 b 和 c：")]),t._v("\no"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__ "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 最后, o.__proto__.__proto__ 是 null.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这就是原型链的末尾，即 null，")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 根据定义，null 没有__proto__.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 综上，整个原型链如下:")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v("\n\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("o"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// o.a => 1")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("o"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// o.b => 2")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("o"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// o.c => o.__proto__.c => 4")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("o"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("d"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// o.c => o.__proto__.d => o.__proto__.__proto__ == null => undefined")]),t._v("\n")])])]),s("p",[t._v("属性的查找会带来性能问题："),s("br"),t._v("\n在原型链上查找属性比较耗时，对性能有副作用，这在性能要求苛刻的情况下很重要。另外，试图访问不存在的属性时会遍历整个原型链。")]),t._v(" "),s("p",[t._v("遍历对象的属性时，原型链上的每个可枚举属性都会被枚举出来。要检查对象是否具有自己定义的属性，而不是其原型链上的某个属性，则必须使用所有对象从"),s("code",[t._v("Object.prototype")]),t._v("继承的"),s("code",[t._v("hasOwnProperty")]),t._v("方法。")]),t._v(" "),s("h3",{attrs:{id:"创建对象和生成原型链"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建对象和生成原型链","aria-hidden":"true"}},[t._v("#")]),t._v(" 创建对象和生成原型链")]),t._v(" "),s("ol",[s("li",[t._v("使用普通语法创建对象（注释为原型链）。")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" o "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// o ---\x3e Object.prototype ---\x3e null")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"yo"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"whadup"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"?"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// a ---\x3e Array.prototype ---\x3e Object.prototype ---\x3e null")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("f")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// f ---\x3e Function.prototype ---\x3e Object.prototype ---\x3e null")]),t._v("\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[t._v("使用构造器（曾经最常使用的方式）。")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Graph")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vertices "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("edges "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Graph")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("addVertex")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("v")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vertices"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("v"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" g "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Graph")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// g是生成的对象,他的自身属性有'vertices'和'edges'.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在g被实例化时,g.__proto__指向了Graph.prototype.")]),t._v("\n")])])]),s("p",[t._v("当继承的函数被调用时，"),s("code",[t._v("this")]),t._v("指向的是当前继承的对象，而不是继承的函数所在的原型对象。")]),t._v(" "),s("ol",{attrs:{start:"3"}},[s("li",[s("p",[t._v("使用"),s("code",[t._v("Object.create")]),t._v("，这里不详细论述。")])]),t._v(" "),s("li",[s("p",[t._v("使用"),s("code",[t._v("class")]),t._v("关键字（"),s("code",[t._v("ECMAScript6")]),t._v("，只是语法糖，"),s("code",[t._v("JavaScript")]),t._v("仍然是基于原型的）。")])])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Graph")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("constructor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vertices "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("edges "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addVertex")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("v")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vertices"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("v"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" g "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Graph")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("除了"),s("code",[t._v("class")]),t._v("，还包括"),s("code",[t._v("constructor")]),t._v("，"),s("code",[t._v("static")]),t._v("，"),s("code",[t._v("extends")]),t._v("和"),s("code",[t._v("super")]),t._v("关键字，这里也不详细说明。")]),t._v(" "),s("h3",{attrs:{id:"proto-与-prototype"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#proto-与-prototype","aria-hidden":"true"}},[t._v("#")]),t._v(" "),s("strong",[t._v("proto")]),t._v(" 与 prototype")]),t._v(" "),s("p",[s("code",[t._v("prototype")]),t._v("为显式原型：每一个函数在创建之后都会拥有一个名为"),s("code",[t._v("prototype")]),t._v("的属性，这个属性指向函数的原型对象。"),s("br"),t._v("\n显式原型的作用：用来实现基于原型的继承与属性的共享。")]),t._v(" "),s("p",[s("code",[t._v("__proto__")]),t._v("为隐式原型，指向创建这个对象的构造函数（"),s("code",[t._v("constructor")]),t._v("）的原型（"),s("code",[t._v("prototype")]),t._v("）。"),s("br"),t._v("\n隐式原型的作用：构成原型链，同样用于实现基于原型的继承。")]),t._v(" "),s("p",[t._v("附上一张从别人那扒来珍藏多年的图："),s("br"),t._v(" "),s("img",{attrs:{src:"https://github-imglib-1255459943.cos.ap-chengdu.myqcloud.com/e83bca5f1d1e6bf359d1f75727968c11_hd.jpg",alt:"image"}})]),t._v(" "),s("h2",{attrs:{id:"作用域和闭包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#作用域和闭包","aria-hidden":"true"}},[t._v("#")]),t._v(" 作用域和闭包")]),t._v(" "),s("p",[s("strong",[t._v("作用域链使得我们在函数内部可以直接读取外部以及全局变量。")]),s("br"),t._v(" "),s("strong",[t._v("闭包使得我们可以从外部读取局部变量。")])]),t._v(" "),s("h3",{attrs:{id:"作用域链"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#作用域链","aria-hidden":"true"}},[t._v("#")]),t._v(" 作用域链")]),t._v(" "),s("h4",{attrs:{id:"上下文"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#上下文","aria-hidden":"true"}},[t._v("#")]),t._v(" 上下文")]),t._v(" "),s("p",[t._v("上下文定义了一个函数正在执行时的作用域环境。")]),t._v(" "),s("h4",{attrs:{id:"作用域链-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#作用域链-2","aria-hidden":"true"}},[t._v("#")]),t._v(" 作用域链")]),t._v(" "),s("p",[t._v("当代码在一个环境中执行时，会创建变量对象的一个作用域链，来保证对执行环境有权访问的变量和函数的有序访问。"),s("br"),t._v("\n作用域第一个对象始终是当前执行代码所在环境的变量对象，常被称之为“活跃对象”。")]),t._v(" "),s("p",[t._v("每个"),s("code",[t._v("JavaScript")]),t._v("执行环境都有一个和它关联在一起的作用域链。这个作用域链是一个对象列表或对象链。")]),t._v(" "),s("h4",{attrs:{id:"搜寻标识符"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#搜寻标识符","aria-hidden":"true"}},[t._v("#")]),t._v(" 搜寻标识符")]),t._v(" "),s("p",[t._v("在函数运行过程中标识符的解析是沿着作用域链一级一级搜索的过程，从第一个对象开始，逐级向后回溯，直到找到同名标识符为止，找到后不再继续遍历，找不到就报错。")]),t._v(" "),s("p",[t._v("当函数执行结束之后，执行期上下文将被销毁。也就会销毁作用域链，激活对象也同样被销毁。")]),t._v(" "),s("h3",{attrs:{id:"闭包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#闭包","aria-hidden":"true"}},[t._v("#")]),t._v(" 闭包")]),t._v(" "),s("p",[t._v("闭包是使用被作用域封闭的变量，函数，闭包等执行的一个函数的作用域。")]),t._v(" "),s("h4",{attrs:{id:"闭包的出现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#闭包的出现","aria-hidden":"true"}},[t._v("#")]),t._v(" 闭包的出现")]),t._v(" "),s("p",[t._v("在"),s("code",[t._v("Javascript")]),t._v("语言中，只有函数内部的子函数才能读取局部变量。我们看下面的例子：")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("B")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" b "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("B")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//undefined")]),t._v("\n")])])]),s("p",[t._v("在全局环境下无法访问函数"),s("code",[t._v("B")]),t._v("内的变量，这是因为全局函数的作用域链里，不含有函数"),s("code",[t._v("B")]),t._v("内的作用域。"),s("br"),t._v("\n现在如果我们想要访问内部函数的变量，可以这样做：")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("B")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" b "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("C")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//2")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("C")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("A")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("B")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("A")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//2")]),t._v("\n")])])]),s("p",[t._v("此处，"),s("code",[t._v("A")]),t._v("变成一个闭包了。闭包是一种特殊的对象。它由两部分构成：函数，以及创建该函数的环境。环境由闭包创建时在作用域中的任何局部变量组成。"),s("br"),t._v("\n在本质上，闭包就是将函数内部和函数外部连接起来的一座桥梁。")]),t._v(" "),s("h4",{attrs:{id:"闭包的用途"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#闭包的用途","aria-hidden":"true"}},[t._v("#")]),t._v(" 闭包的用途")]),t._v(" "),s("ul",[s("li",[t._v("用于读取其他函数内部变量的函数")]),t._v(" "),s("li",[t._v("让这些变量的值始终保持在内存中")])]),t._v(" "),s("h2",{attrs:{id:"参考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考","aria-hidden":"true"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Inheritance_and_the_prototype_chain",target:"_blank",rel:"noopener noreferrer"}},[t._v("继承与原型链 | MDN"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Closures",target:"_blank",rel:"noopener noreferrer"}},[t._v("闭包 | MDN"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://godbasin.github.io/2016/07/03/js-closure/",target:"_blank",rel:"noopener noreferrer"}},[t._v("《谈谈 js 的闭包》"),s("OutboundLink")],1)])]),t._v(" "),s("h1",{attrs:{id:"结束语"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#结束语","aria-hidden":"true"}},[t._v("#")]),t._v(" 结束语")]),t._v(" "),s("p",[t._v("这里面主要介绍了一些 Javascript 比较基础的原理，像原理这样的东西呀，可以多去理解和深入学习。为什么这样设计呀，历史缘由呀，主要解决什么问题，又是在怎样的情况下提出的。"),s("br"),t._v("\n当我们对一个事物有了较完整的认识，对它的使用和打交道的效率，也会有质的提升的。")])])},[],!1,null,null,null);a.default=r.exports}}]);