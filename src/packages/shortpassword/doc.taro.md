# ShortPassword 短密码

## 介绍

短密码输入框，可用于输入密码、短信验证码等

## 安装

```tsx
import { ShortPassword } from '@nutui/nutui-react-taro';
```

## 代码演示

### 基础用法

:::demo

```tsx
import React, { useState } from "react";
import { Cell, ShortPassword, NumberKeyboard } from '@nutui/nutui-react-taro';

const App = () => {
  const [visible1, setVisible1] = useState(false)
  const [visible, setVisible] = useState(false)
  const [value, setValue] = useState('')
  const onChange = (v: string) => {
    setValue((value) => value + v)
  }
  const onDelete = () => {
    setValue((value) => value.slice(0, -1))
  }
  return (
    <>
      <Cell title="基础用法" onClick={() => setVisible1(true)} />
      <ShortPassword
        visible={visible1}
        value={value}
        onFocus={() => setVisible(true)}
        onClose={() => {
          setVisible1(false)
          setValue('')
        }}
        onChange={(value) => setValue(value)}
      />
      <NumberKeyboard
        visible={visible}
        onClose={() => setVisible(false)}
        onChange={onChange}
        onDelete={onDelete}
      />
    </>
  )
}
export default App;

```

:::

### 显示明文

:::demo

```tsx
import React, { useState } from "react";
import { Cell, ShortPassword, NumberKeyboard } from '@nutui/nutui-react-taro';

const App = () => {
  const [visible2, setVisible2] = useState(false)
  const [visible, setVisible] = useState(false)
  const [value, setValue] = useState('')
  const onChange = (v: string) => {
    setValue((value) => value + v)
  }
  const onDelete = () => {
    setValue((value) => value.slice(0, -1))
  }
  return (
    <>
      <Cell title="显示明文" onClick={() => setVisible2(true)} />
      <ShortPassword
        visible={visible2}
        value={value}
        plain
        onFocus={() => setVisible(true)}
        onClose={() => {
          setVisible2(false)
          setValue('')
        }}
        onChange={(value) => setValue(value)}
      />
      <NumberKeyboard
        visible={visible}
        onClose={() => setVisible(false)}
        onChange={onChange}
        onDelete={onDelete}
      />
    </>
  )
}
export default App;

```

:::

### 显示按钮组

:::demo

```tsx
import React, { useState } from "react";
import { Cell, ShortPassword, NumberKeyboard } from '@nutui/nutui-react-taro';
import { Star } from '@nutui/icons-react-taro';

const App = () => {
  const [visible3, setVisible3] = useState(false)
  const [visible, setVisible] = useState(false)
  const [value, setValue] = useState('')
  const onChange = (v: string) => {
    setValue((value) => value + v)
  }
  const onDelete = () => {
    setValue((value) => value.slice(0, -1))
  }
  return (
    <>
      <Cell title="显示按钮组" onClick={() => setVisible3(true)} />
      <ShortPassword
        visible={visible3}
        value={value}
        tips={
          <>
            <Star size={11} />
            自定义提示语
          </>
        }
        hideFooter={false}
        onFocus={() => setVisible(true)}
        onClose={() => {
          setVisible3(false)
          setValue('')
        }}
        onChange={(value) => setValue(value)}
        onConfirm={() => setVisible3(false)}
        onCancel={() => setVisible3(false)}
      />
      <NumberKeyboard
        visible={visible}
        onClose={() => setVisible(false)}
        onChange={onChange}
        onDelete={onDelete}
      />
    </>
  )
}
export default App;

```

:::

### 自定义密码长度4

:::demo

```tsx
import React, { useState } from "react";
import { Cell, ShortPassword, NumberKeyboard } from '@nutui/nutui-react-taro';

const App = () => {
  const [visible4, setVisible4] = useState(false)
  const [visible, setVisible] = useState(false)
  const [value, setValue] = useState('')
  const onChange = (v: string) => {
    setValue((value) => value + v)
  }
  const onDelete = () => {
    setValue((value) => value.slice(0, -1))
  }
  return (
    <>
      <Cell title="自定义密码长度: 4" onClick={() => setVisible4(true)} />
      <ShortPassword
        visible={visible4}
        value={value}
        onFocus={() => setVisible(true)}
        onClose={() => {
          setVisible4(false)
          setValue('')
        }}
        onChange={(value) => setValue(value)}
        length={4}
      />
      <NumberKeyboard
        visible={visible}
        onClose={() => setVisible(false)}
        onChange={onChange}
        onDelete={onDelete}
      />
    </>
  )
}
export default App;

```

:::

### 忘记密码提示语事件回调

:::demo

```tsx
import React, { useState } from "react";
import { Cell, ShortPassword, NumberKeyboard } from '@nutui/nutui-react-taro';

const App = () => {
  const [visible5, setVisible5] = useState(false)
  const [visible, setVisible] = useState(false)
  const [value, setValue] = useState('')
  const onChange = (v: string) => {
    setValue((value) => value + v)
  }
  const onDelete = () => {
    setValue((value) => value.slice(0, -1))
  }
  const onTips = () => {
    console.log("忘记密码提示语事件回调")
  }
  return (
    <>
      <Cell title="忘记密码提示语事件回调" onClick={() => setVisible5(true)} />
      <ShortPassword
        visible={visible5}
        value={value}
        onFocus={() => setVisible(true)}
        onClose={() => {
          setVisible5(false)
          setValue('')
        }}
        onChange={(value) => setValue(value)}
        onTips={() => onTips()}
      />
      <NumberKeyboard
        visible={visible}
        onClose={() => setVisible(false)}
        onChange={onChange}
        onDelete={onDelete}
      />
    </>
  )
}
export default App;

```

:::

### 自动聚焦

:::demo

```tsx
import React, { useState } from "react";
import { Cell, ShortPassword, NumberKeyboard } from '@nutui/nutui-react-taro';

const App = () => {
  const [visible6, setVisible6] = useState(false)
  const [visible, setVisible] = useState(false)
  const [value, setValue] = useState('')
  const onChange = (v: string) => {
    setValue((value) => value + v)
  }
  const onDelete = () => {
    setValue((value) => value.slice(0, -1))
  }
  return (
    <>
      <Cell title="自动聚焦" onClick={() => setVisible6(true)} />
      <ShortPassword
        visible={visible6}
        value={value}
        onFocus={() => setVisible(true)}
        onClose={() => {
          setVisible6(false)
          setValue('')
        }}
        onChange={(value) => setValue(value)}
        autoFocus
      />
      <NumberKeyboard
        visible={visible}
        onClose={() => setVisible(false)}
        onChange={onChange}
        onDelete={onDelete}
      />
    </>
  )
}
export default App;

```

:::

## ShortPassword

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 密码字符串 | `string` | `-` |
| visible | 是否展示短密码框 | `boolean` | `false` |
| plain | 是否展示明文 | `boolean` | `false` |
| title | 标题 | `ReactNode` | `请输入密码` |
| description | 密码框描述 | `ReactNode` | `您使用了虚拟资产，请进行验证` |
| tips | 提示语 | `ReactNode` | `忘记密码` |
| hideFooter | 是否隐藏底部按钮 | `boolean` | `true` |
| length | 密码长度，取值为4~6 | `number` | `6` |
| error | 错误信息提示 | `ReactNode` | `-` |
| autoFocus | 自动聚焦 | `boolean` | `false` |
| onChange | 输入密码时触发事件 | `(value) => void` | `-` |
| onConfirm | 点击确认时触发事件 | `(value) => void` | `-` |
| onCancel | 点击取消时触发事件 | `() => void` | `-` |
| onClose | 点击关闭图标和遮罩时触发事件 | `() => void` | `-` |
| onTips | 点击忘记密码时触发事件 | `() => void` | `-` |
| onComplete | 输入完成的回调 | `(value) => void` | `-` |
| onFocus | 输入框聚焦 | `() => void` | `-` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-shortpassword-background-color | 背景颜色 | `rgba(245, 245, 245, 1)` |
| \--nutui-shortpassword-border-color | 边框颜色 | `#ddd` |
| \--nutui-shortpassword-error | 错误提示字体颜色 | `$color-primary` |
| \--nutui-shortpassword-forget | 忘记密码字体颜色 | `rgba(128, 128, 128, 1)` |