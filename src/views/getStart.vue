<template>
  <article class="markdown-body">
    <h1>开始使用</h1>
    <p>请先<a href="#/doc/install">安装</a>本组件库。</p>
    <p>然后在您的代码中写入下面的代码</p>
    <pre><code>import {ButtonDemo, TabsDemo, TabDemo, SwitchDemo, DialogDemo, openDialog} from "gu-ui"</code></pre>
    <p>就可以使用我提供的组件了。</p>
    <h2>Vue单文件组件</h2>
    <p>代码示例：</p>
    <pre>
        <code>
&lt;template&gt;
  &lt;div&gt;
    &lt;ButtonDemo&gt;按钮&lt;/ButtonDemo&gt;
  &lt;/div&gt;
&lt;/template&gt;
&lt;script&gt;
  import {ButtonDemo, TabsDemo, TabDemo, SwitchDemo, DialogDemo, openDialog} from &quot;gu-ui&quot;
  export default {
    components: {ButtonDemo}
  }
&lt;/script&gt;
        </code>
        </pre>
  </article>
</template>
