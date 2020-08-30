(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{372:function(e,o,r){"use strict";r.r(o);var t=r(16),v=Object(t.a)({},function(){var e=this,o=e.$createElement,r=e._self._c||o;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("p",[e._v("最近依然在研究大型项目，而大型项目最容易遇到的问题便是性能问题。一般来说，当我们遇到性能瓶颈的时候，才会开始去进行相应的分析。分析的方向除了业务本身的特点相关之外，常见的我们还可以借助一些工具来发现问题。本文一起来研究下，前端性能分析可以怎么走~")]),e._v(" "),r("h1",{attrs:{id:"前端性能分析工具（chrome-devtools）"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#前端性能分析工具（chrome-devtools）","aria-hidden":"true"}},[e._v("#")]),e._v(" 前端性能分析工具（Chrome DevTools）")]),e._v(" "),r("p",[e._v("一般来说，前端的性能分析通常可以从"),r("strong",[e._v("时间")]),e._v("和"),r("strong",[e._v("空间")]),e._v("两个角度来进行：")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("时间")]),e._v("：常见耗时，如页面加载耗时、渲染耗时、网络耗时、脚本执行耗时等")]),e._v(" "),r("li",[r("strong",[e._v("空间")]),e._v("：资源占用，包括 CPU 占用、内存占用、本地缓存占用等")])]),e._v(" "),r("p",[e._v("那么，下面来看看有哪些常见的工具可以借来用用。由于我们的网页基本上跑在浏览器中，所以基本上大多数的工具都来源于浏览器自身提供，首当其冲的当然是 "),r("a",{attrs:{href:"https://developers.google.com/web/tools/chrome-devtools",target:"_blank",rel:"noopener noreferrer"}},[e._v("Chrome DevTools"),r("OutboundLink")],1),e._v("。本文我们也主要围绕 Chrome DevTools 来进行说明。")]),e._v(" "),r("h2",{attrs:{id:"lighthouse"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#lighthouse","aria-hidden":"true"}},[e._v("#")]),e._v(" Lighthouse")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/GoogleChrome/lighthouse",target:"_blank",rel:"noopener noreferrer"}},[e._v("Lighthouse"),r("OutboundLink")],1),e._v(" 的前身是 Chrome DevTools 面板中的 Audits。在 Chrome 60 之前的版本中, 这个面板只包含网络使用率和页面性能两个测量类别，从 Chrome 60 版本开始， Audits 面板已经被 Lighthouse 的集成版取代。而在最新版本的 Chrome 中，则需要单独安装 Lighthouse 拓展程序来使用，也可以通过脚本来使用。")]),e._v(" "),r("h3",{attrs:{id:"架构"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#架构","aria-hidden":"true"}},[e._v("#")]),e._v(" 架构")]),e._v(" "),r("p",[r("img",{attrs:{src:"https://github-imglib-1255459943.cos.ap-chengdu.myqcloud.com/front-end-performance-analyze_7.png",alt:"Lighthouse 架构"}})]),e._v(" "),r("p",[e._v("下面是 Lighthouse 的组成部分：")]),e._v(" "),r("ul",[r("li",[e._v("驱动（Driver）：和 "),r("a",{attrs:{href:"https://chromedevtools.github.io/devtools-protocol/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Chrome Debugging Protocol"),r("OutboundLink")],1),e._v(" 进行交互的接口")]),e._v(" "),r("li",[e._v("收集器（Gatherers）：使用驱动程序收集页面的信息，收集器的输出结果被称为 Artifact")]),e._v(" "),r("li",[e._v("审查器（Audits）：将 Artifact 作为输入，审查器会对其运行测试，然后分配通过/失败/得分的结果")]),e._v(" "),r("li",[e._v("报告（Report）：将审查的结果分组到面向用户的报告中（如最佳实践），对该部分应用加权和总体然后得出评分")])]),e._v(" "),r("h3",{attrs:{id:"主要功能"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#主要功能","aria-hidden":"true"}},[e._v("#")]),e._v(" 主要功能")]),e._v(" "),r("p",[e._v("Lighthouse 会在一系列的测试下运行网页，比如不同尺寸的设备和不同的网络速度。它还会检查页面对辅助功能指南的一致性，例如颜色对比度和 ARIA 最佳实践。")]),e._v(" "),r("p",[e._v("在比较短的时间内，Lighthouse 可以给出这样一份报告（可将报告生成为 JSON 或 HTML）：")]),e._v(" "),r("p",[r("img",{attrs:{src:"https://github-imglib-1255459943.cos.ap-chengdu.myqcloud.com/front-end-performance-analyze_2.png",alt:"Lighthouse 架构"}})]),e._v(" "),r("p",[e._v("这份报告从 5 个方面来分析页面： "),r("strong",[e._v("性能")]),e._v("、"),r("strong",[e._v("辅助功能")]),e._v("、"),r("strong",[e._v("最佳实践")]),e._v("、"),r("strong",[e._v("搜索引擎优化")]),e._v("和 "),r("strong",[e._v("PWA")]),e._v("。像性能方面，会给出一些常见的耗时统计。除此以外，还会给到一些详细的优化方向。")]),e._v(" "),r("p",[e._v("如果你希望短时间内对你的网站进行较全面的评估，可以使用 Lighthouse 来跑一下分数，确定大致的优化方向。")]),e._v(" "),r("h2",{attrs:{id:"performance-面板"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#performance-面板","aria-hidden":"true"}},[e._v("#")]),e._v(" Performance 面板")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://developers.google.com/web/tools/chrome-devtools/evaluate-performance/reference",target:"_blank",rel:"noopener noreferrer"}},[e._v("Performance"),r("OutboundLink")],1),e._v(" 面板同样有个前身，叫 "),r("a",{attrs:{href:"https://developers.google.com/web/tools/chrome-devtools/evaluate-performance/timeline-tool?hl=zh-cn",target:"_blank",rel:"noopener noreferrer"}},[e._v("Timeline"),r("OutboundLink")],1),e._v("。该面板用于记录和分析"),r("strong",[e._v("运行时性能")]),e._v("，运行时性能是页面运行时（而不是加载）的性能。")]),e._v(" "),r("h3",{attrs:{id:"使用步骤"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#使用步骤","aria-hidden":"true"}},[e._v("#")]),e._v(" 使用步骤")]),e._v(" "),r("p",[e._v("Performance 面板功能特别多，具体的分析也可以单独讲一篇了。这里我们简单说一下使用的步骤：")]),e._v(" "),r("ol",[r("li",[e._v("在隐身模式下打开 Chrome。隐身模式可确保 Chrome 以干净状态运行，例如浏览器的扩展可能会在性能评估中产生影响。")]),e._v(" "),r("li",[e._v("在 DevTools 中，单击“Performance”选项卡，并进行一些基础配置（更多参考"),r("a",{attrs:{href:"https://developers.google.com/web/tools/chrome-devtools/evaluate-performance",target:"_blank",rel:"noopener noreferrer"}},[e._v("官方说明"),r("OutboundLink")],1),e._v("）。")]),e._v(" "),r("li",[e._v("按照提示单击记录，开始记录。进行完相应的操作之后，点击停止。")]),e._v(" "),r("li",[e._v("当页面运行时，DevTools 捕获性能指标。停止记录后，DevTools 处理数据，然后在 Performance 面板上显示结果。")])]),e._v(" "),r("h3",{attrs:{id:"主要功能-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#主要功能-2","aria-hidden":"true"}},[e._v("#")]),e._v(" 主要功能")]),e._v(" "),r("p",[e._v("关于 Performance 怎么使用的文章特别多，大家网上随便搜一下就能搜到。一般来说，主要使用以下功能：")]),e._v(" "),r("p",[r("img",{attrs:{src:"https://github-imglib-1255459943.cos.ap-chengdu.myqcloud.com/front-end-performance-analyze_5.jpg",alt:""}})]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("查看 FPS 图表")]),e._v("：当在 FPS 上方看到红色条形时，表示帧速率下降得太低，以至于可能损害用户体验。通常，绿色条越高，FPS 越高")]),e._v(" "),r("li",[r("strong",[e._v("查看 CPU 图表")]),e._v("：CPU 图表在 FPS 图表下方。CPU 图表的颜色对应于性能板的底部的 Summary 选项卡")]),e._v(" "),r("li",[r("strong",[e._v("查看 火焰图")]),e._v("：火焰图直观地表示出了内部的 CPU 分析，横轴是时间，纵轴是调用指针，调用栈最顶端的函数在最下方。启用 JS 分析器后，火焰图会显示调用的每个 JavaScript 函数，可用于分析具体函数")]),e._v(" "),r("li",[r("strong",[e._v("查看 Buttom-up")]),e._v("：此视图可以看到某些函数对性能影响最大，并能够检查这些函数的调用路径")])]),e._v(" "),r("p",[e._v("具体要怎么定位某些性能瓶颈，可以参考"),r("a",{attrs:{href:"https://developers.google.com/web/tools/chrome-devtools/evaluate-performance/reference",target:"_blank",rel:"noopener noreferrer"}},[e._v("官方文档系列文章"),r("OutboundLink")],1),e._v("，这里就不详细介绍啦。")]),e._v(" "),r("h3",{attrs:{id:"performance-monitor"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#performance-monitor","aria-hidden":"true"}},[e._v("#")]),e._v(" Performance Monitor")]),e._v(" "),r("p",[e._v("打开 Chrome 控制台后，按组合键"),r("code",[e._v("ctrl + p")]),e._v("(Mac 快捷键为"),r("code",[e._v("command + p")]),e._v(")，输入"),r("code",[e._v("> Show Performance Monitor")]),e._v("，就可以打开 Performance Monitor 性能监视器。主要的监控指标包括：")]),e._v(" "),r("ul",[r("li",[e._v("CPU usage：CPU 占用率")]),e._v(" "),r("li",[e._v("JS head size：JS 内存使用大小")]),e._v(" "),r("li",[e._v("DOM Nodes：内存中挂载的 DOM 节点个数")]),e._v(" "),r("li",[e._v("JS event listeners：事件监听数")]),e._v(" "),r("li",[e._v("...：其他等等")])]),e._v(" "),r("p",[e._v("大多数情况下，我们在进行性能优化的时候，使用上面一些工具也足以确定大致的优化方向。更多的细节和案例，就不在这里详述了。")]),e._v(" "),r("h1",{attrs:{id:"前端性能监控"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#前端性能监控","aria-hidden":"true"}},[e._v("#")]),e._v(" 前端性能监控")]),e._v(" "),r("p",[e._v("除了具体的性能分析和定位，我们也经常需要对业务进行性能监控。前端性能监控包括两种方式：合成监控（Synthetic Monitoring，SYN）、真实用户监控（Real User Monitoring，RUM）。")]),e._v(" "),r("h2",{attrs:{id:"合成监控"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#合成监控","aria-hidden":"true"}},[e._v("#")]),e._v(" 合成监控")]),e._v(" "),r("p",[e._v("合成监控就是在一个模拟场景里，去提交一个需要做性能审计的页面，通过一系列的工具、规则去运行你的页面，提取一些性能指标，得出一个审计报告。例如上面介绍的 Lighthouse 就是合成监控。")]),e._v(" "),r("p",[e._v("合成监控的使用场景不多，一般可能出现在开发和测试的过程中，例如结合流水线跑性能报告、定位性能问题时本地跑的一些简单任务分析等。该方式的优点显而易见：")]),e._v(" "),r("ul",[r("li",[e._v("可采集更丰富的数据指标，例如结合 "),r("a",{attrs:{href:"https://chromedevtools.github.io/devtools-protocol/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Chrome Debugging Protocol"),r("OutboundLink")],1),e._v(" 获取到的数据")]),e._v(" "),r("li",[e._v("较成熟的解决方案和工具，实现成本低")]),e._v(" "),r("li",[e._v("不影响真实用户的性能体验")])]),e._v(" "),r("h2",{attrs:{id:"真实用户监控"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#真实用户监控","aria-hidden":"true"}},[e._v("#")]),e._v(" 真实用户监控")]),e._v(" "),r("p",[e._v("真实用户监控，就是用户在我们的页面上访问，访问之后就会产生各种各样的性能指标。我们在用户访问结束的时候，把这些性能指标上传到我们的日志服务器上，进行数据的提取清洗加工，最后在我们的监控平台上进行展示的一个过程。")]),e._v(" "),r("p",[e._v("我们提及前端监控的时候，大多数都包括了真实用户监控。常见的一些性能监控包括加载耗时、DOM 渲染耗时、接口耗时统计等，而对于页面加载过程，可以看到它被定义成了很多个阶段：")]),e._v(" "),r("p",[r("img",{attrs:{src:"https://github-imglib-1255459943.cos.ap-chengdu.myqcloud.com/front-end-performance-analyze_6.png",alt:"RUM 性能模型"}})]),e._v(" "),r("p",[e._v("而我们要做的，则是在力所能及的地方进行打点、计算、采集、上报，该过程常常需要借助 Performance Timeline API。将需要的数据发送到服务端，然后再对这些数据进行处理，最终通过可视化等方式进行监控。因此，真实用户监控往往需要结合业务本身的前后端架构设计来建设，其优点也比较容易理解：")]),e._v(" "),r("ul",[r("li",[e._v("完全还原真实场景，减去模拟成本")]),e._v(" "),r("li",[e._v("数据样本足够抹平个体的差异")]),e._v(" "),r("li",[e._v("采集数据可用于更多场景的分析和优化")])]),e._v(" "),r("p",[e._v("对比合成监控，真实用户监控在有些场景下无法拿到更多的性能分析数据（例如具体哪里 CPU 占用、内存占用高），因此更多情况下作为优化效果来参考。这些情况下，具体的分析和定位可能还是得依赖合成监控。")]),e._v(" "),r("p",[e._v("但真实用户监控也有自身的优势，例如 TCP、DNS 连接耗时过高，在各种环境下的一些运行耗时问题，合成监控是很难发现的。")]),e._v(" "),r("h1",{attrs:{id:"性能分析自动化"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#性能分析自动化","aria-hidden":"true"}},[e._v("#")]),e._v(" 性能分析自动化")]),e._v(" "),r("p",[e._v("我们在开发过程中，也常常需要进行性能分析。而前端的性能分析上手成本也不低，除了基本的页面加载耗时、网络耗时，更具体的定位往往需要结合前面介绍的 Performance 面板、FPS、CPU、火焰图等一点点来分析。")]),e._v(" "),r("p",[e._v("如果这一块想要往自动化方向发展，我们可以怎么做呢？")]),e._v(" "),r("h2",{attrs:{id:"使用-lighthouse"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#使用-lighthouse","aria-hidden":"true"}},[e._v("#")]),e._v(" 使用 Lighthouse")]),e._v(" "),r("p",[e._v("前面也有介绍 Lighthouse，它提供了脚本的方式使用。因此，我们可以通过自动化任务跑脚本的方式，使用 Lighthouse 跑分析报告，通过对比以往的数据来进行功能变更、性能优化等场景的性能回归。")]),e._v(" "),r("p",[e._v("使用 Lighthouse 的优势在于开发成本低，只需要按照"),r("a",{attrs:{href:"https://github.com/GoogleChrome/lighthouse/blob/master/docs/configuration.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("官方提供的配置"),r("OutboundLink")],1),e._v("来调整、获取自己需要的一些数据，就可以快速接入较全面的 Lighthouse 拥有的性能分析能力。")]),e._v(" "),r("p",[e._v("不过由于 Lighthouse 同样基于 CDP(Chrome DevTools Protocol)，因此除了实现成本降低了，CDP 缺失的一些能力它也一样会缺失。")]),e._v(" "),r("h2",{attrs:{id:"chrome-devtools-protocol"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#chrome-devtools-protocol","aria-hidden":"true"}},[e._v("#")]),e._v(" Chrome DevTools Protocol")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://chromedevtools.github.io/devtools-protocol/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Chrome DevTools Protocol"),r("OutboundLink")],1),e._v(" 允许第三方对基于 Chrome 的 Web 应用程序进行检测、检查、调试、分析等。有了这个协议，我们就可以自己开发工具获取 Chrome 的数据了。")]),e._v(" "),r("h3",{attrs:{id:"认识-chrome-devtools-协议"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#认识-chrome-devtools-协议","aria-hidden":"true"}},[e._v("#")]),e._v(" 认识 Chrome DevTools 协议")]),e._v(" "),r("p",[e._v("Chrome DevTools 协议基于 WebSocket，利用 WebSocket 建立连接 DevTools 和浏览器内核的快速数据通道。")]),e._v(" "),r("p",[e._v("我们使用的 Chrome DevTools 其实也是一个 Web 应用。我们使用 DevTools 的时候，浏览器内核 Chromium 本身会作为一个服务端，我们看到的浏览器调试工具界面，通过 Websocket 和 Chromium 进行通信。建立过程如下：")]),e._v(" "),r("ol",[r("li",[e._v("DevTools 将作为 Web 应用程序，Chromium 作为服务端提供连接。")]),e._v(" "),r("li",[e._v("通过 HTTP 提取 HTML、JavaScript 和 CSS 文件。")]),e._v(" "),r("li",[e._v("资源加载后，DevTools 会建立与浏览器的 Websocket 连接，并开始交换 JSON 消息。")])]),e._v(" "),r("p",[e._v("同样的，当我们通过 DevTools 从 Windows、Mac 或 Linux 计算机远程调试 Android 设备上的实时内容时，使用的也是该协议。当 Chromium 以一个"),r("code",[e._v("--remote-debugging-port=0")]),e._v("标志启动时，它将启动 Chrome DevTools 协议服务器。")]),e._v(" "),r("h3",{attrs:{id:"chrome-devtools-协议域划分"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#chrome-devtools-协议域划分","aria-hidden":"true"}},[e._v("#")]),e._v(" Chrome DevTools 协议域划分")]),e._v(" "),r("p",[e._v("Chrome DevTools协议具有与浏览器的许多不同部分（例如页面、Service Worker 和扩展程序）进行交互的 API。该协议把不同的操作划分为了不同的域（domain），每个域负责不同的功能模块。比如"),r("code",[e._v("DOM")]),e._v("、"),r("code",[e._v("Debugger")]),e._v("、"),r("code",[e._v("Network")]),e._v("、"),r("code",[e._v("Console")]),e._v("和"),r("code",[e._v("Performance")]),e._v("等，可以理解为 DevTools 中的不同功能模块。")]),e._v(" "),r("p",[e._v("使用该协议我们可以：")]),e._v(" "),r("ul",[r("li",[e._v("获取 JS 的 Runtime 数据，常用的如"),r("code",[e._v("window.performance")]),e._v("和"),r("code",[e._v("window.chrome.loadTimes()")]),e._v("等")]),e._v(" "),r("li",[e._v("获取"),r("code",[e._v("Network")]),e._v("及"),r("code",[e._v("Performance")]),e._v("数据，进行自动性能分析")]),e._v(" "),r("li",[e._v("使用 "),r("a",{attrs:{href:"https://github.com/GoogleChrome/lighthouse/blob/master/docs/puppeteer.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("Puppeteer"),r("OutboundLink")],1),e._v(" 的 "),r("a",{attrs:{href:"https://pptr.dev/#?product=Puppeteer&version=v1.13.0&show=api-class-cdpsession",target:"_blank",rel:"noopener noreferrer"}},[e._v("CDPSession"),r("OutboundLink")],1),e._v("，与浏览器的协议通信会变得更加简单")])]),e._v(" "),r("h3",{attrs:{id:"与性能相关的域"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#与性能相关的域","aria-hidden":"true"}},[e._v("#")]),e._v(" 与性能相关的域")]),e._v(" "),r("p",[e._v("本文讲性能分析相关，因此这里我们只关注和性能相关的域。")]),e._v(" "),r("p",[r("strong",[e._v("1. Performance。")]),e._v("\n从"),r("code",[e._v("Performance")]),e._v("域中"),r("code",[e._v("Performance.getMetrics()")]),e._v("可以拿到获取运行时性能指标包括：")]),e._v(" "),r("ul",[r("li",[r("code",[e._v("Timestamp")]),e._v(": 采取度量样本的时间戳")]),e._v(" "),r("li",[r("code",[e._v("Documents")]),e._v(": 页面中的文档数")]),e._v(" "),r("li",[r("code",[e._v("Frames")]),e._v(": 页面中的帧数")]),e._v(" "),r("li",[r("code",[e._v("JSEventListeners")]),e._v(": 页面中的事件数")]),e._v(" "),r("li",[r("code",[e._v("Nodes")]),e._v(": 页面中的 DOM 节点数")]),e._v(" "),r("li",[r("code",[e._v("LayoutCount")]),e._v(": 全部或部分页面布局的总数")]),e._v(" "),r("li",[r("code",[e._v("RecalcStyleCount")]),e._v(": 页面样式重新计算的总数")]),e._v(" "),r("li",[r("code",[e._v("LayoutDuration")]),e._v(": 所有页面布局的合并持续时间")]),e._v(" "),r("li",[r("code",[e._v("RecalcStyleDuration")]),e._v(": 所有页面样式重新计算的总持续时间")]),e._v(" "),r("li",[r("code",[e._v("ScriptDuration")]),e._v(":  JavaScript 执行的持续时间")]),e._v(" "),r("li",[r("code",[e._v("TaskDuration")]),e._v(": 浏览器执行的所有任务的合并持续时间")]),e._v(" "),r("li",[r("code",[e._v("JSHeapUsedSize")]),e._v(": 使用的 JavaScript 栈大小")]),e._v(" "),r("li",[r("code",[e._v("JSHeapTotalSize")]),e._v(": JavaScript 栈总大小")])]),e._v(" "),r("p",[r("strong",[e._v("2. Tracing。")]),e._v(" "),r("code",[e._v("Tracing")]),e._v("域可获取页面加载的 DevTools 性能跟踪。可以使用"),r("code",[e._v("Tracing.start")]),e._v("和"),r("code",[e._v("Tracing.stop")]),e._v("创建可在 Chrome DevTools 或时间轴查看器中打开的跟踪文件。")]),e._v(" "),r("p",[e._v("我们能看到生成的 JSON 文件长这样：\n"),r("img",{attrs:{src:"https://github-imglib-1255459943.cos.ap-chengdu.myqcloud.com/front-end-performance-analyze_8.png",alt:""}})]),e._v(" "),r("p",[e._v("这样的 JSON 文件，我们可以丢到 "),r("a",{attrs:{href:"https://chromedevtools.github.io/timeline-viewer/",target:"_blank",rel:"noopener noreferrer"}},[e._v("DevTools Timeline Viewer"),r("OutboundLink")],1),e._v(" 中，可以看到对应的时间轴和火焰图：")]),e._v(" "),r("p",[r("img",{attrs:{src:"https://github-imglib-1255459943.cos.ap-chengdu.myqcloud.com/front-end-performance-analyze_9.jpg",alt:""}})]),e._v(" "),r("p",[r("strong",[e._v("3. Runtime。")]),e._v(" "),r("code",[e._v("Runtime")]),e._v("域通过远程评估和镜像对象暴露 JavaScript 的运行时。可以通过"),r("code",[e._v("Runtime.getHeapUsage")]),e._v("获取 JavaScript 栈的使用情况，通过"),r("code",[e._v("Runtime.evaluate")]),e._v("计算全局对象的表达式，通过"),r("code",[e._v("Runtime.queryObjects")]),e._v("迭代 JavaScript 栈并查找具有给定原型的所有对象（可用于计算原型链中某处具有相同原型的所有对象，衡量 JavaScript 内存泄漏）。")]),e._v(" "),r("p",[e._v("除了上面介绍的这些，还有"),r("code",[e._v("Network")]),e._v("可以分析网络相关的性能，以及其他可能涉及 DOM 节点、JS 执行等各种各样的数据分析，更多的可能需要大家自己去研究了。")]),e._v(" "),r("h3",{attrs:{id:"自动化性能分析"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#自动化性能分析","aria-hidden":"true"}},[e._v("#")]),e._v(" 自动化性能分析")]),e._v(" "),r("p",[e._v("通过使用 Chrome DevTools 协议，我们可以获取 DevTools 提供的很多数据，包括网络数据、性能数据、运行时数据。")]),e._v(" "),r("p",[e._v("对于如何使用该协议，其实已经有很多大神针对这个协议封装出不同语言的库，包括 Node.js、Python、Java等，可以根据需要在 "),r("a",{attrs:{href:"https://github.com/ChromeDevTools/awesome-chrome-devtools#chrome-devtools-protocol",target:"_blank",rel:"noopener noreferrer"}},[e._v("awesome-chrome-devtools"),r("OutboundLink")],1),e._v(" 这个项目中找到。")]),e._v(" "),r("p",[e._v("至于我们到底能拿到怎样的数据，可以做到怎样的自动化程度，就不在本文里讲述啦，后面有机会再开篇文章详细讲讲。")]),e._v(" "),r("h1",{attrs:{id:"参考"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参考","aria-hidden":"true"}},[e._v("#")]),e._v(" 参考")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://www.zcfy.cc/article/the-new-chrome-devtool-feature-you-want-to-know-about-3318.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("你一定要知道的 Chrome DevTool 新功能"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://juejin.im/post/6844904045774110733",target:"_blank",rel:"noopener noreferrer"}},[e._v("前端性能分析利器-Chrome性能分析&性能监视器"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://www.infoq.cn/article/Dxa8aM44oz*Lukk5Ufhy",target:"_blank",rel:"noopener noreferrer"}},[e._v("蚂蚁金服如何把前端性能监控做到极致?"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://testerhome.com/topics/15817",target:"_blank",rel:"noopener noreferrer"}},[e._v("chrome devtools protocol——Web 性能自动化实践介绍"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://chromedevtools.github.io/devtools-protocol/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Chrome DevTools Protocol"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://addyosmani.com/blog/puppeteer-recipes/#measuring-memory-leaks",target:"_blank",rel:"noopener noreferrer"}},[e._v("Web Performance Recipes With Puppeteer"),r("OutboundLink")],1)])]),e._v(" "),r("h1",{attrs:{id:"结束语"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#结束语","aria-hidden":"true"}},[e._v("#")]),e._v(" 结束语")]),e._v(" "),r("p",[e._v("前端性能分析相关的文章不算多，而由于性能分析本身的场景就跟业务特性结合比较紧密，可以用来借鉴的内容、较统一的解决方案也不多。而性能的监控、自动化等方向的介绍比较少，也希望这篇文章能给到你们一些方向吧~")])])},[],!1,null,null,null);o.default=v.exports}}]);