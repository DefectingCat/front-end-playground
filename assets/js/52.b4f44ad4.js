(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{368:function(_,v,t){"use strict";t.r(v);var a=t(16),e=Object(a.a)({},function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("p",[_._v("最近接触到一些针对多人同时操作进行冲突处理的场景，简单介绍下相关的实现方式。\n")]),_._v(" "),t("h2",{attrs:{id:"operational-transformation-ot"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#operational-transformation-ot","aria-hidden":"true"}},[_._v("#")]),_._v(" Operational transformation(OT)")]),_._v(" "),t("p",[_._v("OT 算法最初是为在纯文本文档的协作编辑中的一致性维护和并发控制而发明的，在本文中我们也主要掌握一致性维护相关的一些方法。")]),_._v(" "),t("h3",{attrs:{id:"协同软件的冲突"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#协同软件的冲突","aria-hidden":"true"}},[_._v("#")]),_._v(" 协同软件的冲突")]),_._v(" "),t("p",[_._v("想必大家都知道，在多人协同场景下，必然会出现各种各样的冲突场景。")]),_._v(" "),t("p",[_._v("举个例子，团队接到一个超大型的项目需要开发，老板说10分钟给出排期和分工。然后瑟瑟发抖的大家二话不说打开腾讯文档，创建了一个表格，让每个模块负责人先针对自己模块来进行工作量拆分和预估。")]),_._v(" "),t("p",[_._v("PM 创建了表格之后，将表格丢到群里，说前端后台各自创建一个子表来写相应的工作量情况。")]),_._v(" "),t("p",[_._v("前端张三马上点开了表格，点击添加子表，系统自动生成“工作表2”这样一个子表。与此同时，后台李四也进行了同样的操作。")]),_._v(" "),t("p",[_._v("那么问题来了，一个表格中原则上并不允许两个同样名字的子表，这个时候冲突就出现了，我们要怎么处理呢？")]),_._v(" "),t("p",[_._v("虽然是两个同样名字的子表，但我们并不能将它们进行合并，因为对于张三和李四来说，他们就是在自己创建的子表里写工作拆分和排期情况。所以，我们需要使用对用户影响最小的方式，来解决掉这个冲突。")]),_._v(" "),t("h3",{attrs:{id:"操作的拆分"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#操作的拆分","aria-hidden":"true"}},[_._v("#")]),_._v(" 操作的拆分")]),_._v(" "),t("p",[_._v("为了处理冲突，我们需要将一些操作进行拆分。例如，我们插入一个子表这样一个操作，除了插入自身的操作，可能需要对其他子表进行移动操作。那么，对于一个子表来说，我们的操作可能会包括：")]),_._v(" "),t("ul",[t("li",[_._v("插入")]),_._v(" "),t("li",[_._v("重命名")]),_._v(" "),t("li",[_._v("移动")]),_._v(" "),t("li",[_._v("删除")]),_._v(" "),t("li",[_._v("更新内容")]),_._v(" "),t("li",[_._v("...")])]),_._v(" "),t("p",[_._v("只要拆分得足够仔细，对于子表的所有用户行为，都可以由这些操作来组合成最终的效果。例如，复制粘贴一张子表，可以拆分为"),t("code",[_._v("插入-重命名-更新内容")]),_._v("；剪切一张子表，可以拆分为"),t("code",[_._v("插入-更新内容-删除-移动其他子表")]),_._v("。通过分析用户行为，我们可以提取出这些基本操作。")]),_._v(" "),t("h3",{attrs:{id:"操作间的冲突处理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#操作间的冲突处理","aria-hidden":"true"}},[_._v("#")]),_._v(" 操作间的冲突处理")]),_._v(" "),t("p",[_._v("基本操作提取出来之后，我们就可以很仔细地梳理和分析操作和操作之间是否会产生冲突，以及要怎么处理了。")]),_._v(" "),t("p",[_._v("例如，我们上面提取出来的关于子表的操作中，包括"),t("code",[_._v("插入")]),_._v("、"),t("code",[_._v("重命名")]),_._v("、"),t("code",[_._v("移动")]),_._v("、"),t("code",[_._v("删除")]),_._v("、"),t("code",[_._v("更新内容")]),_._v("五种操作，实际上，每种操作都可能和自身、以及其他四种操作都发生冲突，于是我们可能有"),t("code",[_._v("5*5=25")]),_._v("种需要考虑的冲突情况。")]),_._v(" "),t("p",[_._v("我们先来大致看看这 25 组冲突中，是不是全都需要进行冲突处理的。例如，"),t("code",[_._v("更新内容")]),_._v("一般来说跟其他几个操作都不会发生什么冲突，因为更新内容改变的是表格的内容，而不是位置、名字这些，一个表格内部和另一个表格内部基本上不会发生冲突。但"),t("code",[_._v("重命名")]),_._v("和"),t("code",[_._v("插入")]),_._v("之间，满足一定条件的时候（插入的子表名字和重命名的名字相同）可能就会产生冲突。")]),_._v(" "),t("p",[_._v("你可能会觉得疑惑，"),t("code",[_._v("插入-重命名")]),_._v("和"),t("code",[_._v("重命名-插入")]),_._v("不是一样的吗？我们先带着这个疑问继续往后看。")]),_._v(" "),t("h3",{attrs:{id:"最终一致性的实现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#最终一致性的实现","aria-hidden":"true"}},[_._v("#")]),_._v(" 最终一致性的实现")]),_._v(" "),t("p",[_._v("说了那么多，看起来跟 OT 算法完全没有关系呀？？")]),_._v(" "),t("p",[_._v("OT 算法的一个核心目标，是实现最终一致性。为什么会有最终一致性的需求呢？")]),_._v(" "),t("p",[_._v("我们再看回张三和李四的例子，由于系统不允许存在有两个同样名称的子表，因此服务器会根据收到请求的顺序，将第二个子表进行重命名。假设张三的请求先到达服务端，那么李四创建的表格则需要被自动重命名为“工作表2（自动重命名）”。")]),_._v(" "),t("p",[_._v("为了让用户体验更流畅，我们在用户侧使用无锁、非阻塞的方式来进行协同。也就是对于李四来说，他已经创建了这样一个叫“工作表2”的子表了，由于网络延迟等原因可能还已经编辑上了。这时候服务端告诉李四，张三已经创建了一个“工作表2”的子表了，你自己看着办吧。")]),_._v(" "),t("p",[_._v("李四说，我已经编辑了这么多，你总不能让我全删掉重来吧。所以李四想了个办法，先将自己本地的表格"),t("code",[_._v("重命名")]),_._v('为"工作表2（自动重命名）"，然后将张三的子表'),t("code",[_._v("插入")]),_._v("。除此之外，由于自己的插入顺序在后面，还需要将自己的子表"),t("code",[_._v("移动")]),_._v("到后面一个位置。做完这些操作之后，李四告诉服务器，自己也"),t("code",[_._v("插入")]),_._v("了一个叫“工作表2（自动重命名）”的子表。")]),_._v(" "),t("p",[_._v("我们梳理下逻辑，可以得到：")]),_._v(" "),t("ul",[t("li",[_._v("对于李四本地，需要进行的操作是："),t("code",[_._v("重命名 + 插入 + 移动")])]),_._v(" "),t("li",[_._v("对于服务器，需要进行的操作是："),t("code",[_._v("插入")]),_._v("更新后的子表")])]),_._v(" "),t("p",[_._v("我们来看看这个 OT 算法的简略说明图：\n"),t("img",{attrs:{src:"https://github-imglib-1255459943.cos.ap-chengdu.myqcloud.com/google_ot.jpg",alt:""}})]),_._v(" "),t("p",[_._v("我们代入到张三李四这个场景下：\n"),t("img",{attrs:{src:"https://github-imglib-1255459943.cos.ap-chengdu.myqcloud.com/sheet_ot.png",alt:""}})]),_._v(" "),t("p",[_._v("可以看到，对于服务端来说，最终就是新增了两个子表，一个是张三的“工作表2”，另一个是李四的“工作表2（自动重命名）”。")]),_._v(" "),t("p",[_._v("除此之外，这个场景中还存在比较细致的时间问题。上面我们说李四收到服务器发来的张三的操作之后，在本地进行"),t("code",[_._v("重命名 + 插入 + 移动")]),_._v("，然后告诉服务器的操作是"),t("code",[_._v("插入")]),_._v("更新后的子表。但是还有个可能性，就是李四收到服务器的消息之前，就已经把自己"),t("code",[_._v("插入")]),_._v("“工作表2”的操作发出去给服务器了。这种情况下，服务器也需要具备处理冲突的能力，来维持最终一致性。")]),_._v(" "),t("p",[_._v("也就是说，我们在本地和服务器都有一套一致的冲突处理逻辑，才能保证算法的最终一致性。")]),_._v(" "),t("p",[_._v("但除了最终一致性，冲突处理还有其他很多需要考虑的场景，例如版本管理、性能问题等，后面有机会再慢慢介绍吧。")])])},[],!1,null,null,null);v.default=e.exports}}]);