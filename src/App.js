import React from 'react';
import './css/main.css';

function App() {
  return (
    <div className="App">
      <div class="container">
        <h1 class="mt-4">Hi~</h1>
        <h2 class="mb-5">I'm Leo Sirius, a senior markdown engineer :)</h2>
        <p class="mt-5 font-weight-bold">You can contact me through following ways</p>
        <ul>
          <li><span class="font-weight-bold">Emails: </span>is.li.xiaoyu@qq.com, leosirius666@gmail.com (choose one, both works)</li>
          <li><span class="font-weight-bold">Github: </span><a target="_blank" href="https://github.com/LeoSirius">https://github.com/LeoSirius</a></li>
        </ul>
        <div>
          <h2>Projects</h2>
          <div class="work-main-content">
            <a href="https://leosirius.fun/" class="work-title">blog</a>
            <p>blog</p>
            <a href="https://github.com/LeoSirius/leetcode_solutions" class="work-title">leetcode刷题笔记</a>
            <p>几乎每题都有解题思路和单元测试，不断补充中</p>
            <a href="https://github.com/LeoSirius/code_apue" class="work-title">apue - 全书代码</a>
            <p>持续更新中...</p>
            <a href="https://github.com/LeoSirius/code_unp" class="work-title">unp - 全书代码</a>
            <p>持续更新中...</p>
            <a href="https://github.com/LeoSirius/code_go_tour" class="work-title">a tour of go - 全站代码</a>
            <p>持续更新中...</p>
            <a href="https://github.com/LeoSirius/code_beginning_linux_programming" class="work-title">linux程序设计 - 全书代码</a>
            <p>持续更新中...</p>
          </div>
          <div class="foot-content">
            <h5>关于本站</h5>
            <a href="https://github.com/LeoSirius/react-gh-pages" class="foot-title">本站源码</a>
            <p>本站是我的个人导航站。本站是用react写的静态网站，用gh-pages把编译后的代码托管到github pages仓库里</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
