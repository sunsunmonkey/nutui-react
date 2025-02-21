# Cell

## Intro

The cell is a single display item in the list.

## Install

```tsx
import { Cell } from '@nutui/nutui-react'
```

## Demo

### Basic Usage

:::demo

```tsx
import React from 'react'
import { Cell, Toast } from '@nutui/nutui-react'

const App = () => {
  const testClick = (
    event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
  ) => {
    Toast.show('Click Test')
  }
  return (
    <>
      <Cell title="Title" extra="extra" />
      <Cell title="Title" description="Description" extra="extra" />
      <Cell
        title="Click Test"
        onClick={(
          event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
        ) => testClick(event)}
      />
      <Cell title="Round Radius 0" radius={0} />
    </>
  )
}
export default App
```

:::

### Customize Content

:::demo

```tsx
import React from 'react'
import { Cell } from '@nutui/nutui-react'

const App = () => {
  return (
    <Cell>
      <div>Customize Content</div>
    </Cell>
  )
}
export default App
```

:::

### Customize the title area

:::demo

```tsx
import React from 'react'
import { Cell } from '@nutui/nutui-react'
import { User } from '@nutui/icons-react'

const App = () => {
  return (
    <Cell
      title={
        <div style={{ display: 'inline-flex', alignItems: 'center' }}>
          <User />
          Title<span style={{ marginLeft: '5px' }}>Description</span>
        </div>
      }
      description={
        <span>
          Description<b style={{ color: 'red' }}>1</b>
        </span>
      }
      extra="extra"
    />
  )
}
export default App
```

:::

### Customize the right area

:::demo

```tsx
import React from 'react'
import { Cell, Switch } from '@nutui/nutui-react'

const App = () => {
  return (
    <Cell.Group title="Customize the right arrow area">
      <Cell title="Switch" extra={<Switch defaultChecked />} />
    </Cell.Group>
  )
}
export default App
```

:::

### Vertical Center

You can align the left and right contents of the cell vertically through the 'center' attribute.

:::demo

```tsx
import React from 'react'
import { Cell } from '@nutui/nutui-react'

const App = () => {
  return (
    <Cell align="center" title="Title" description="Description" extra="Desc" />
  )
}
export default App
```

:::

### Link | Cell.Group Usage

:::demo

```tsx
import React from 'react'
import { Cell, Button } from '@nutui/nutui-react'
import { ArrowRight, User } from '@nutui/icons-react'

const App = () => {
  const onJumpclick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    url: string
  ) => {
    const replace = false
    if (url) {
      replace ? window.location.replace(url) : (window.location.href = url)
    }
  }
  return (
    <>
      <Cell.Group
        title="Link | Cell.Group Usage"
        extra="Usage nut-cell-group support title extra"
      >
        <Cell
          lassName="nutui-cell-clickable"
          title="Link Usage"
          align="center"
          extra={<ArrowRight />}
        />
        <Cell
          className="nutui-cell-clickable"
          title="URL Jump"
          extra={
            <>
              <span style={{ marginRight: '5px' }}>https://jd.com</span>
              <ArrowRight />
            </>
          }
          align="center"
          onClick={(
            event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
          ) => onJumpclick(event, 'https://jd.com')}
        />
      </Cell.Group>

      <Cell.Group>
        <Cell
          title={
            <div style={{ display: 'flex', alignItems: 'flex-end' }}>
              <span style={{ fontWeight: '500' }}>Title</span>
              <span
                style={{
                  color: '#8C8C8C',
                  fontSize: '10px',
                  marginLeft: '5px',
                  lineHeight: 1.5,
                }}
              >
                Description
              </span>
            </div>
          }
          extra={
            <div style={{ display: 'flex', alignItems: 'center' }}>
              More
              <ArrowRight width={12} height={12} style={{ marginLeft: '5px' }} />
            </div>
          }
        />
        <Cell>
          <div style={{ minHeight: '50px' }}>Content</div>
        </Cell>
        <Cell
          align="center"
          title={
            <div
              style={{
                color: '#8C8C8C',
                fontSize: '12px',
              }}
            >
              Description
            </div>
          }
          extra={<Button type="primary">Action</Button>}
        />
      </Cell.Group>

      <Cell.Group>
        <Cell
          title={
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <User style={{ marginRight: '5px' }} /> Title
            </div>
          }
          extra={<ArrowRight />}
        />
        <Cell>
          <div style={{ minHeight: '50px' }}>Content</div>
        </Cell>
        <Cell align="center" extra={<Button type="primary">Action</Button>} />
      </Cell.Group>

      <Cell.Group>
        <Cell
          title={
            <div
              style={{ display: 'flex', alignItems: 'center', color: 'blue' }}
            >
              Title
            </div>
          }
        />
        <Cell>
          <div style={{ color: '#26bf26' }}>Content</div>
        </Cell>
      </Cell.Group>
    </>
  )
}
export default App
```

:::

### Grouping usage

The 'divider' property allows you to keep the lower edge from being displayed between cells.

:::demo

```tsx
import React from 'react'
import { Cell } from '@nutui/nutui-react'

const App = () => {
  return (
    <Cell.Group
      divider={false}
      title="Grouping usage"
      description="The bottom edge is not displayed between cells"
    >
      <Cell title="Title" extra="extra" />
      <Cell title="Title" extra="extra" />
    </Cell.Group>
  )
}
export default App
```

:::

## Cell.Group

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| title | Title | `ReactNode` | `-` |
| description | ReactNode | `string` | `-` |
| divider | Whether there are dividers between cells | `boolean` | `true` |

## Cell

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| title | Title | `ReactNode` | `-` |
| description | Description | `ReactNode` | `-` |
| extra | Extra | `ReactNode` | `-` |
| radius | Corner radius | `string` | `6px` |
| align | Alignment in the vertical direction, with an optional value of`flex-start`、`center`、`flex-end` | `string` | `flex-start` |
| onClick | Emitted when cell is clicked | `onClick: (event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => void` | `false` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default |
| --- | --- | --- |
| \--nutui-cell-title-color | The cell title the font color | `$color-title` |
| \--nutui-cell-title-font-size | The cell title the font size | `$font-size-base` |
| \--nutui-cell-description-color | The cell describes the font color | `$color-text` |
| \--nutui-cell-description-font-size | The cell describes the font size | `$font-size-small` |
| \--nutui-cell-extra-color | The right side of the cell describes the font color | `$color-text` |
| \--nutui-cell-extra-font-size | The right side of the cell describes the font size | `$font-size-base` |
| \--nutui-cell-border-radius | The rounded corner size of the cell | `6px` |
| \--nutui-cell-padding | Inside margins of cells | `13px 16px` |
| \--nutui-cell-line-height | The row height of the cell | `20px` |
| \--nutui-cell-divider-left | Left margin of cell divider | `16px` |
| \--nutui-cell-divider-right | ArrowRight margin of cell divider | `16px` |
| \--nutui-cell-divider-border-bottom | Border bottom of cell divider | `2px solid #f5f6f7` |
| \--nutui-cell-background-color | The background color of the cell | `$white` |
| \--nutui-cell-box-shadow | The shadow of the cell | `0px 1px 7px 0px rgba(237, 238, 241, 1)` |
| \--nutui-cell-group-title-padding | The padding of the title of the cell group | `0 10px` |
| \--nutui-cell-group-title-color | The title font color of the cell group | `#909ca4` |
| \--nutui-cell-group-title-font-size | The title font size of the cell group | `$font-size-base` |
| \--nutui-cell-group-title-line-height | The title row height of the cell group | `20px` |
| \--nutui-cell-group-description-padding | The description padding for cell groups | `0 10px` |
| \--nutui-cell-group-description-color | The description color of the cell group | `#909ca4` |
| \--nutui-cell-group-description-font-size | The description font size of the cell group | `$font-size-small` |
| \--nutui-cell-group-description-line-height | The description row height of cell group | `16px` |
| \--nutui-cell-group-background-color | The background color of the cell group | `$white` |