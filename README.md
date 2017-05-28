# ICHT-TRAIN
- 国际站火车移动端APP开发文档。
- 查看&下载源码，请进入开发分支：https://github.com/lmrwork/icht-train/tree/feature/dev-react-redux-antd-mobile
## 开发技术栈
- 使用antd-mobile组件库做UI设计，保持三端（pc、ios、andriod）统一，参考：https://github.com/ant-design/ant-design-mobile
- 使用redux、immutableJs管理APP全局状态，参考：https://github.com/reactjs/redux、https://github.com/facebook/immutable-js
- 使用react-redux连接组件容器，参考：https://github.com/reactjs/react-redux
- 使用react-router开发APP路由，参考：https://github.com/ReactTraining/react-router
- 使用redux-thunk处理数据异步请求，参考：https://github.com/gaearon/redux-thunk
- 使用moment处理日期的国际化，参考：https://github.com/moment/moment
- 使用query-string处理表单数据提交和解析，参考：https://github.com/sindresorhus/query-string
- 使用rc-animate处理动画，参考：https://github.com/julianshapiro/velocity
- 使用rc-queue-anim切换页面，参考：https://motion.ant.design/api/queue-anim#API、https://github.com/fis-components/rc-queue-anim
- 使用react-lazyload处理列表懒加载，参考：https://jasonslyvia.github.io/react-lazyload/
## 开发进度
- 首页：100%
- 车站选择页：100%
- 搜索页：100%
- 座位选择页：10%
- 表单页：0%
- thanyou页：0%
## 开发日志
### 2017-05-25
- 开发loading组件，更新loading样式。
- 性别选择组件。
### 2017-05-24
- 开发座位选择list
- 订单页历史纪录保存过程开发。
### 2017-05-22
- 预定页布局。
- 初始化预定页的初始化state
### 2017-05-22
- 搜索结果基础排序：按运行时间，出发时间。
- 使用映射数组，优化数组sort性能。
- 使用RegExp优化城市检索正则。
- 优化细节样式。
- 初始化booking页面。
- 完成阿里国际动画组件的适配。
### 2017-05-19
- 使用props替换部分state，精简首页、站点页、搜索页，优化render性能。
### 2017-05-18
- 添加火车搜索测试程序。
- 添加“前一天”和“后一天”的按钮逻辑。
- 添加query-string处理JSON->POST数据之间的互转。
- 完成日历触发火车搜索更新。
### 2017-05-17
- 搜索结果flex布局和样式编写。
### 2017-05-15
- 构造APP所需要的搜索结构json。
- 在action中增加模拟接口请求的程序。
- 完成TrainSearch页面布局。
- 优化TrainSearch.shouldComponentUpdate。
### 2017-05-12
- 增加日期全局状态管理。
- 增加moment，完成日期国际化方案。
- 增加语言包全局加载模块。
### 2017-05-10
- 车站状态使用全局store管理。
### 2017-05-09
- 增加车站列表List。
- 车站的自动完成功能OK。
### 2017-05-09
- 分离routes逻辑到单独的routes文件夹中。
- 添加redux-thunk、es6-promise、isomorphic-fetch 处理action内异步调用。
- 完成车站名的异步获取。
- 增加加载状态变化。
### 2017-05-07
- 首页布局完成。
- webpack调整，可以按需载入antd样式。
- react-router高阶组件。
- （移除）添加切换CSS3动画，react-transition-group/CSSTransitionGroup。
- 整合router和动画组件。
### 2017-05-06
- 初始化开发环境，等待加入antd-mobile。