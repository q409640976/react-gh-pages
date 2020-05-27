import React from 'react';
import './css/main.css';
import './css/project-item.css';

function ProjectItem(props) {
  return (
    <div className="project-item">
      <a className="project-title" href={props.url}>{props.name}</a>
      <p className="project-desc">{props.desc}</p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <div class="container">
        <h1 class="mt-4 maroon-text">Hi~</h1>
        <h2 class="mb-5 maroon-text">I'm Leo Sirius, a senior markdown engineer :)</h2>
        <p class="mt-5 font-weight-bold">You can contact me through following ways</p>
        <ul>
          <li><span class="font-weight-bold">Emails: </span>is.li.xiaoyu@qq.com, leosirius666@gmail.com (choose one, both works)</li>
          <li><span class="font-weight-bold">Github: </span><a target="_blank" href="https://github.com/LeoSirius">https://github.com/LeoSirius</a></li>
        </ul>
        <div>
          <h2 className="maroon-text">Projects</h2>
          <div class="project-list">
            <ProjectItem
              url={"https://leosirius.fun/"}
              name={"blog"}
              desc={"blog"}
            />
            <ProjectItem
              url={"https://github.com/LeoSirius/leetcode_solutions"}
              name={"leetcode刷题笔记"}
              desc={"几乎每题都有解题思路和单元测试，不断补充中"}
            />
            <ProjectItem
              url={"https://github.com/LeoSirius/code_apue"}
              name={"apue - 全书代码"}
              desc={"持续更新中..."}
            />
            <ProjectItem
              url={"https://github.com/LeoSirius/code_unp"}
              name={"unp - 全书代码"}
              desc={"持续更新中..."}
            />
            <ProjectItem
              url={"https://github.com/LeoSirius/code_beginning_linux_programming"}
              name={"linux程序设计 - 全书代码"}
              desc={"持续更新中..."}
            />
          </div>
          <div class="footer">
            <h5 className="maroon-text">关于本站</h5>
            <a href="https://github.com/LeoSirius/react-gh-pages" class="footer-title">本站源码</a>
            <p>本站是我的个人导航站。本站是用react写的静态网站，用gh-pages把编译后的代码托管到github pages仓库里</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
