(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{374:function(t,e,a){"use strict";a.r(e);var s=a(42),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("blockquote",[a("p",[t._v("造飞机系列第三章，渐进式框架的Vue的一些疑难杂症。")])]),t._v(" "),a("h1",{attrs:{id:"vue"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue"}},[t._v("#")]),t._v(" Vue")]),t._v(" "),a("h2",{attrs:{id:"watch和computed的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#watch和computed的区别"}},[t._v("#")]),t._v(" watch和computed的区别")]),t._v(" "),a("h3",{attrs:{id:"watch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#watch"}},[t._v("#")]),t._v(" watch")]),t._v(" "),a("p",[t._v("watch是一个动作")]),t._v(" "),a("blockquote",[a("p",[t._v("watch的监听主要负责的是一对多监听，当watch监听的值变化时，可以进行一系列操作；\nwatch的回调参数是新旧值，可以对两个值进行特定的操作。")])]),t._v(" "),a("h3",{attrs:{id:"computed"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#computed"}},[t._v("#")]),t._v(" computed")]),t._v(" "),a("p",[t._v("computed是一个计算值")]),t._v(" "),a("blockquote",[a("p",[t._v("computed的监听主要负责的是多对一监听，只要computed所依赖的值改变，computed计算的属性就会跟进；ounted\ncomputed具由缓存性，还有setter功能")])]),t._v(" "),a("h2",{attrs:{id:"生命周期钩子"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#生命周期钩子"}},[t._v("#")]),t._v(" 生命周期钩子")]),t._v(" "),a("blockquote",[a("p",[t._v("beforeCreate、created、beforeMount、mounted、beforeUpdate、updated、beforeDestory、destoryed")])]),t._v(" "),a("h3",{attrs:{id:"created和mounted"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#created和mounted"}},[t._v("#")]),t._v(" created和mounted")]),t._v(" "),a("blockquote",[a("p",[t._v("create一般用于数据的初始化，mounted一般用于特殊的插件对DOM进行操作")])]),t._v(" "),a("h2",{attrs:{id:"组件通信"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组件通信"}},[t._v("#")]),t._v(" 组件通信")]),t._v(" "),a("blockquote",[a("p",[t._v("方法一：父子组件props、$emit传递\n方法二：爷孙（兄弟）组件，二次父子组件\n方法三："),a("code",[t._v("var eventBus = new Vue()")]),t._v("\n方法四：Vuex状态管理")])]),t._v(" "),a("h2",{attrs:{id:"vue的双向绑定-数据响应"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue的双向绑定-数据响应"}},[t._v("#")]),t._v(" Vue的双向绑定（数据响应）")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("v-model")]),t._v("来实现数据响应式\n原理是使用 "),a("code",[t._v("Object.defineProperty")]),t._v(" 把这些属性全部转为 "),a("code",[t._v("getter/setter")]),t._v("，但Vue无法检测到对象属性的添加或删除，应当使用"),a("code",[t._v("Vue.set(object, propertyName, value)")]),t._v("方法向嵌套对象添加响应式属性。")])]),t._v(" "),a("h1",{attrs:{id:"vuex"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vuex"}},[t._v("#")]),t._v(" Vuex")]),t._v(" "),a("h2",{attrs:{id:"vuex是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vuex是什么"}},[t._v("#")]),t._v(" Vuex是什么")]),t._v(" "),a("blockquote",[a("p",[t._v("Vuex是专门为Vue.js开发的状态管理模式")])]),t._v(" "),a("h2",{attrs:{id:"核心概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#核心概念"}},[t._v("#")]),t._v(" 核心概念")]),t._v(" "),a("h3",{attrs:{id:"state"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#state"}},[t._v("#")]),t._v(" State")]),t._v(" "),a("blockquote",[a("p",[t._v("State是Vuex的数据源")])]),t._v(" "),a("h3",{attrs:{id:"getter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getter"}},[t._v("#")]),t._v(" Getter")]),t._v(" "),a("blockquote",[a("p",[t._v("Getter就是Vuex里的计算属性")])]),t._v(" "),a("h3",{attrs:{id:"mutation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mutation"}},[t._v("#")]),t._v(" Mutation")]),t._v(" "),a("blockquote",[a("p",[t._v("Mutation是更改State的唯一方法")])]),t._v(" "),a("h3",{attrs:{id:"action"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#action"}},[t._v("#")]),t._v(" Action")]),t._v(" "),a("blockquote",[a("p",[t._v("Action就是Vuex用来逻辑操作的，在action提交mutation来改变Mutation")])]),t._v(" "),a("h3",{attrs:{id:"module"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#module"}},[t._v("#")]),t._v(" Module")]),t._v(" "),a("blockquote",[a("p",[t._v("modules就是用来合并多个store模块")])]),t._v(" "),a("h1",{attrs:{id:"vue-router"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-router"}},[t._v("#")]),t._v(" Vue-router")]),t._v(" "),a("h2",{attrs:{id:"vue-router是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-router是什么"}},[t._v("#")]),t._v(" Vue-router是什么")]),t._v(" "),a("blockquote",[a("p",[t._v("Vue-router是Vue.js官方的路由管理器")])]),t._v(" "),a("h2",{attrs:{id:"如何使用vue-router"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何使用vue-router"}},[t._v("#")]),t._v(" 如何使用Vue-router")]),t._v(" "),a("blockquote",[a("p",[t._v("通过组合组件来组成页面，将组件映射到路由。根据需求配置动态路由、路由守卫、嵌套路由、路由懒加载等功能。")])]),t._v(" "),a("h2",{attrs:{id:"动态路由"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#动态路由"}},[t._v("#")]),t._v(" 动态路由")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("VueRouter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  routes"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 动态路径参数 以冒号开头")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" path"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/user/:id'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" component"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" User "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("blockquote",[a("p",[t._v("以冒号开头，冒号后的参数名会被设置到"),a("code",[t._v("this.$route.params")]),t._v("中。")])]),t._v(" "),a("h2",{attrs:{id:"路由守卫"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#路由守卫"}},[t._v("#")]),t._v(" 路由守卫")]),t._v(" "),a("blockquote",[a("p",[t._v("比较常用的是前置守卫，使用"),a("code",[t._v("router.beforeEach(fn)")]),t._v("来注册一个前置守卫，可以在进入该组件之前进行逻辑判断，是否要进行其他操作，例如取消本次跳转，跳转至其他页面等。路由守卫中一定要"),a("code",[t._v("next()")])])]),t._v(" "),a("h2",{attrs:{id:"嵌套路由"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#嵌套路由"}},[t._v("#")]),t._v(" 嵌套路由")]),t._v(" "),a("blockquote",[a("p",[t._v("使用"),a("code",[t._v("children")]),t._v("配置嵌套路由")])]),t._v(" "),a("h2",{attrs:{id:"路由懒加载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#路由懒加载"}},[t._v("#")]),t._v(" 路由懒加载")]),t._v(" "),a("blockquote",[a("p",[t._v("使用"),a("code",[t._v("import")]),t._v("来引入组件")])])])}),[],!1,null,null,null);e.default=r.exports}}]);