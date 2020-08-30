(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{370:function(t,a,s){"use strict";s.r(a);var n=s(16),r=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("第二章介绍物理世界，包括世界初始化类，以及创建一个世界。")]),t._v(" "),s("h2",{attrs:{id:"物理世界"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#物理世界","aria-hidden":"true"}},[t._v("#")]),t._v(" 物理世界")]),t._v(" "),s("h3",{attrs:{id:"世界初始化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#世界初始化","aria-hidden":"true"}},[t._v("#")]),t._v(" 世界初始化")]),t._v(" "),s("p",[t._v("每个 Box2D 程序都是从一个世界对象(world object)的创建开始的，它是一个管理内存，对象和模拟的中心，在这个世界中，刚体将遵循物理规律运动。")]),t._v(" "),s("p",[t._v("所以，我们首先需要创建一个世界，世界初始化类即用于创建一个世界对象，并设定有关世界的初始参数。")]),t._v(" "),s("ul",[s("li",[t._v("创建物理世界")])]),t._v(" "),s("p",[t._v("利用 Box2D 开发程序时，首先要创建一个世界对象。它负责管理内部一切对象的内存和模拟过程。")]),t._v(" "),s("ul",[s("li",[t._v("添加物理边界")])]),t._v(" "),s("p",[t._v("要创建一个世界中的对象，首先要为世界定义边界区域，Box2D 针对区域内的所有对象进行模拟碰撞，区域的大小并不重要，但更适合的区域将提高程序性能，一般来讲这个区域设置的要比演示区域更大一些，因为一旦对象在运动时到达了边界，它就会被“冻结”并停止一切模拟活动。")]),t._v(" "),s("ul",[s("li",[t._v("添加基本力--重力")])]),t._v(" "),s("p",[t._v("然后要为这个世界设置重力，用向量"),s("code",[t._v("b2Vec2(x,y)")]),t._v("来表示的，x 代表水平运动，正数向右，负数向左，y 代表垂直运动，正数向下，负数向上；")]),t._v(" "),s("p",[t._v("同时需要定义一个布尔型参数用来表示是否允许睡眠，在这个世界中生成的一切对象的模拟效果都是实时计算出来的，当 doSleep=false 的时候，即使物体停止了运动，计算机还是在不停的进行着运算，其实这是完全不必要的，所以一般都设为 true，这样当物体停止之后就不会进行无谓的 cpu 消耗了。")]),t._v(" "),s("ul",[s("li",[t._v("添加物理对象")])]),t._v(" "),s("p",[t._v("参数都准备好之后，传入 b2World 对象中并将其实例化，这样一个物理引擎的模拟区域就做好了，可以开始加入模拟的对象了。\n基本步骤为：")]),t._v(" "),s("ol",[s("li",[t._v("创建并定义刚体位置；")]),t._v(" "),s("li",[t._v("给刚体定义皮肤；")]),t._v(" "),s("li",[t._v("用世界对象添加刚体实例;")]),t._v(" "),s("li",[t._v("根据皮肤形状创建模拟图形类：摩擦力、密度、弹力等等；")]),t._v(" "),s("li",[t._v("在刚体上添加模拟图形实例；")]),t._v(" "),s("li",[t._v("根据刚体的密度和面积计算出质量，密度*面积=质量。")])]),t._v(" "),s("ul",[s("li",[t._v("更新状态")])]),t._v(" "),s("p",[t._v("然后，就可以通过监听帧频率而不断刷新实现让所有对象模拟运动，把上面那两个参数传入世界对象的 Step 方法中即可，同时我们需要遍历世界中的一切对象，并对每个对象的坐标和角度进行更新。")]),t._v(" "),s("h2",{attrs:{id:"b2world"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#b2world","aria-hidden":"true"}},[t._v("#")]),t._v(" b2World")]),t._v(" "),s("h3",{attrs:{id:"介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#介绍","aria-hidden":"true"}},[t._v("#")]),t._v(" 介绍")]),t._v(" "),s("p",[t._v("b2World 类包含着物体和关节。它管理着模拟的方方面面，并允许异步查询(就像 AABB 查询)。你与 Box2D 的大部分交互都将通过 b2World 对象来完成。")]),t._v(" "),s("p",[t._v("创建一个世界十分的简单。你只需提供一个包围盒和一个重力向量。")]),t._v(" "),s("p",[t._v("轴对齐包围盒(AABB)应该包围着世界。稍微比世界大一些的包围盒可以提升性能，比方 2 倍大小才安全。如果你的许多物体都掉进了深渊，你应该侦测并移除它们。这能提升性能并预防浮点溢出。")]),t._v(" "),s("h3",{attrs:{id:"创建一个世界"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建一个世界","aria-hidden":"true"}},[t._v("#")]),t._v(" 创建一个世界")]),t._v(" "),s("p",[t._v("创建一个世界，并设置其有效区域的大小，重力大小及方向，以及是否允许休眠等。")]),t._v(" "),s("ol",[s("li",[t._v("定义有效区域大小：创建一个"),s("code",[t._v("b2AABB")]),t._v("类，然后设定其左上角及右下角坐标。有效区域即 box2d 可以发挥作用，反映各种物理规律的区域。")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("worldAABB "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("b2AABB")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nworldAABB"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("minVertex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nworldAABB"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("maxVertex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1200")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("注意 ： worldAABB 应该永远比物体所在的区域要大，让 worldAABB 更大总比太小要好。如果一个物体到达了 worldAABB 的边界，它就会被冻结并停止模拟。")]),t._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[t._v("设置重力大小及方向：通过定义一个二维矢量来实现，创建一个"),s("code",[t._v("b2Vec2")]),t._v("类，并在括号中给出其 x，y 方向的大小。")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("gravity "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("b2Vec2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("备注：gravity 是重力加速度。")]),t._v(" "),s("ol",{attrs:{start:"3"}},[s("li",[t._v("设置世界是否会休眠：true 即允许休眠，false 不允许休眠。当世界被设置为允许休眠时，物体静止一段时间后会被判定为休眠，直到有碰撞发生或者人为激活。一个休眠中的物体不需要任何模拟。")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" doSleep "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("ol",{attrs:{start:"4"}},[s("li",[t._v("创建世界：利用"),s("code",[t._v("b2World")]),t._v("创建拥有上述性质的世界。")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("world "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("b2World")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("worldAABB"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" gravity"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" doSleep"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"创建一个世界的完整代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建一个世界的完整代码","aria-hidden":"true"}},[t._v("#")]),t._v(" 创建一个世界的完整代码")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" worldAABB "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("b2AABB")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nworldAABB"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("minVertex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nworldAABB"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("maxVertex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" gravity "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("b2Vec2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("300")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" doSleep "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" world "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("b2World")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("worldAABB"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" gravity"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" doSleep"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])},[],!1,null,null,null);a.default=r.exports}}]);