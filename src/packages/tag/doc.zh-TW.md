# Tag 標簽

## 介紹

用於標記和分類的標簽。

## 安裝

```tsx
import { Tag } from '@nutui/nutui-react';

```

## 代碼演示

### 基礎用法

:::demo

```tsx
import React from "react";
import { Tag } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
      <Tag type="primary">標簽</Tag>
      <Tag type="info">標簽</Tag>
      <Tag type="success">標簽</Tag>
      <Tag type="danger">標簽</Tag>
      <Tag type="warning">標簽</Tag>
    </>
  )
}
export default App;
```

:::

### 樣式風格

:::demo

```tsx
import React from 'react'
import { Failure } from '@nutui/icons-react'
import { Tag } from '@nutui/nutui-react'

const App = () => {
  return (
    <>
      <Tag plain>標簽</Tag>
      <Tag round type='primary'>標簽</Tag>
      <Tag mark type='primary'>標簽</Tag>
      <Tag closeable
           onClose={() => alert('Tag closed')} 
           type='primary'>標簽</Tag>
      <Tag closeable
           closeIcon={<Failure width={8} height={8} />}
           onClose={() => alert('Tag closed')}
           type='primary'>標簽</Tag>
    </>
  )
}
export default App
```

:::

### 自定義顏色

:::demo

```tsx
import React from "react";
import { Tag } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
      <Tag background="#FA685D">標簽</Tag>
      <Tag background="#E9E9E9" color="#999999">標簽</Tag>
      <Tag background="#FA2400" plain>標簽</Tag>
    </>
  )
}
export default App;
```

:::


## Tag

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| type | 標簽類型 | `primary` \| `success` \| `danger` \| `warning` | `default` |
| background | 標簽顏色 | `string` | `-` |
| color | 文本顏色，優先級高於color屬性 | `string` | `white` |
| plain | 是否為空心樣式 | `boolean` | `false` |
| round | 是否為圓角樣式 | `boolean` | `false` |
| mark | 是否為標記樣式 | `boolean` | `false` |
| closeable | 是否為可關閉標簽 | `boolean` | `false` |
| closeIcon | 關閉按鈕 | `ReactNode` | `null` |
| onClick | 點擊事件 | `(e: MouseEvent<HTMLDivElement>) => void` | `-` |
| onClose | 關閉事件 | `(e?: any) => void` | `-` |

## 主題定制

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 說明 | 默認值 |
| --- | --- | --- |
| \--nutui-tag-padding | padding 值 | `0 2px` |
| \--nutui-tag-font-size | 字號 | `10px` |
| \--nutui-tag-border-radius | 圓角 | `2px` |
| \--nutui-tag-height | 高度 | `14px` |
| \--nutui-tag-color | 字色 | `#ffffff` |
| \--nutui-tag-border-width | 邊寬 | `1px` |
| \--nutui-tag-background-color | 背景色 | `$color-title` |
| \--nutui-tag-primary-background-color | 主色背景色 | `$color-primary-gradient-1` |
| \--nutui-tag-success-background-color | 成功背景色 | `#4fc08d` |
| \--nutui-tag-info-background-color | 信息背景色 | `$color-info` |
| \--nutui-tag-warning-background-color | 警告背景色 | `#f3812e` |
| \--nutui-tag-danger-background-color | 危險背景色 | `$color-primary` |
| \--nutui-tag-round-border-radius | round模式下的圓角 | `8px` |
| \--nutui-tag-mark-border-radius | mark模式下的圓角 | `0 8px 8px 0` |