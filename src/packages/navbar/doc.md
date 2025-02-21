# Navbar 头部导航

## 介绍

提供导航功能。

## 安装

```tsx
import { NavBar } from '@nutui/nutui-react';
```

## 代码演示

### 基础用法

:::demo

```tsx
import  React from "react";
import { NavBar, Toast } from '@nutui/nutui-react';
import { ArrowLeft, Share, Close } from '@nutui/icons-react'

const App = () => {
  return ( 
    <NavBar
        back={
        <>
            <ArrowLeft color="#979797" />
            返回
        </>
        }
        left={<Close width={12} />}
        right={
        <span onClick={(e) =>  Toast.show('icon')}>
            <Share />
        </span>
        }
        onBackClick={(e) =>  Toast.show("返回")}
    >
        <span onClick={(e) =>  Toast.show("标题")}>
        订单详情
        </span>
    </NavBar>
  );
};  
export default App;

```

:::

:::demo

```tsx
import  React from "react";
import { NavBar, Toast } from '@nutui/nutui-react';
import { ArrowLeft } from '@nutui/icons-react'

const App = () => {
  return ( 
    <NavBar
        right={
        <span onClick={(e) =>  Toast.show('清空')}>
            清空
        </span>
        }
        back={<ArrowLeft color="#979797" />}
        onBackClick={(e) =>  Toast.show("返回")}
    >
        <span onClick={(e) =>  Toast.show("标题")}>
        浏览记录
        </span>
    </NavBar>
  );
};  
export default App;

```

:::

:::demo

```tsx
import  React from "react";
import { NavBar, Toast } from '@nutui/nutui-react';
import { Cart, ArrowLeft, More} from '@nutui/icons-react'

const App = () => {
  return ( 
    <NavBar
        back={<ArrowLeft color="#979797" />}
        right={
        <>
            <span style={{ marginRight: '5px' }} onClick={(e) =>  Toast.show('编辑')}>
            编辑
            </span>
            <More onClick={(e) =>  Toast.show('icon')} />
        </>
        }
        onBackClick={(e) =>  Toast.show("返回")}
    >
        <span onClick={(e) =>  Toast.show("标题")}>
        购物车
        </span>
        <i style={{ marginLeft: '5px' }} onClick={(e) =>  Toast.show('icon')}>
            <Cart />
        </i>
    </NavBar>
  );
};  
export default App;

```

:::

:::demo

```tsx
import  React, { useState } from "react";
import { NavBar, Tabs, TabPane, Toast } from '@nutui/nutui-react';
import { ArrowLeft,More } from '@nutui/icons-react'

const App = () => {
  const [tab1value, setTab1value] = useState('0')
  return (   
      <NavBar
         titleAlign="left"
         back={<ArrowLeft color="#979797" />}
          right={
            <>
              <span style={{ marginRight: '5px' }}  onClick={(e) =>  Toast.show("编辑")}>
                编辑
              </span>
              <More onClick={(e) =>  Toast.show('icon')} />
            </>
          }
          onBackClick={(e) =>  Toast.show("返回")}
        >
            <Tabs value={tab1value} onChange={({ paneKey }) => { setTab1value(paneKey) }}>
              <TabPane title="Tab 1"> Tab 1 </TabPane>
              <TabPane title="Tab 2"> Tab 2 </TabPane>
              <TabPane title="Tab 3"> Tab 3 </TabPane>
            </Tabs>
      </NavBar>
  );
};  
export default App;

```

:::

:::demo

```tsx
import  React from "react";
import { NavBar, Toast } from '@nutui/nutui-react';
import { ArrowLeft, Share, Close } from '@nutui/icons-react'

const App = () => {
  return ( 
    <NavBar
        back={
        <>
            <ArrowLeft color="#979797" />
            返回
        </>
        }
        left={<Close width={12} />}
        right={
        <span onClick={(e) =>  Toast.show('icon')}>
            <Share />
        </span>
        }
        onBackClick={(e) =>  Toast.show("返回")}
    >
        <span onClick={(e) =>  Toast.show("标题")}>
        订单详情
        </span>
    </NavBar>
  );
};  
export default App;

```

:::

## Navbar

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| right | 右侧内容 | `ReactNode` | `-` |
| left | 左侧内容，渲染在返回区域的右侧 | `ReactNode` | `-` |
| back | 返回区域的文字 | `ReactNode` | `-` |
| titleAlign | 标题位置,可选值center left | `string` | `center` |
| fixed | 是否固定 | `boolean` | `false` |
| safeArea | 是否适配安全区 | `boolean` | `false` |
| placeholder | 固定在顶部时，是否在标签位置生成一个等高的占位元素 | `boolean` | `false` |
| zIndex | 导航栏层级 | `number` \| `string` | `10` |
| onBackClick | 点击返回区域后的回调 | `onBackClick:(event: Event)=>void` | `false` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-navbar-width | 头部导航的宽度 | `100%` |
| \--nutui-navbar-height | 头部导航的高度 | `44px` |
| \--nutui-navbar-margin-bottom | 头部导航的下边距 | `20px` |
| \--nutui-navbar-background | 头部导航的背景颜色 | `$white` |
| \--nutui-navbar-box-shadow | 头部导航的阴影 | `0px 1px 7px 0px rgba(237, 238, 241, 1)` |
| \--nutui-navbar-color | 头部导航的字体颜色 | `$color-text` |
| \--nutui-navbar-font-size | 头部导航的字体大小 | `$font-size-base` |
| \--nutui-navbar-title-font-size | 头部导航标题的字体大小 | `$font-size-base` |
| \--nutui-navbar-title-font-weight | 头部导航标题的字体粗细 | `0` |
| \--nutui-navbar-title-font-color | 头部导航标题的字体颜色 | `$color-title` |