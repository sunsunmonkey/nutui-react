import React, { useState, useEffect } from 'react'
import { Jd } from '@nutui/icons-react'
import { useTranslate } from '../../sites/assets/locale'
import { InfiniteLoading } from './infiniteloading'
import Cell from '@/packages/cell'
import Toast from '@/packages/toast'
import './demo.scss'

interface T {
  '83913e71': string
  '84aa6bce': string
  eb4236fe: string
  '9ed40460': string
  '1254a90a': string
  '1254a90n': string
}
const InfiniteloadingDemo = () => {
  const [translated] = useTranslate<T>({
    'zh-CN': {
      '83913e71': '刷新成功',
      '84aa6bce': '基础用法',
      eb4236fe: '下拉刷新',
      '9ed40460': '自定义加载文案',
      '1254a90a': '没有啦~',
      '1254a90n': '基于window滚动',
    },
    'zh-TW': {
      '83913e71': '刷新成功',
      '84aa6bce': '基礎用法',
      eb4236fe: '下拉刷新',
      '9ed40460': '自定義加載文案',
      '1254a90a': '沒有啦~',
      '1254a90n': '基於window滾動',
    },
    'en-US': {
      '83913e71': 'Refresh successfully',
      '84aa6bce': 'Basic usage',
      eb4236fe: 'Pull down to refresh',
      '9ed40460': 'custom loading text',
      '1254a90a': 'nope~',
      '1254a90n': 'window scroll',
    },
  })

  const [defaultList, setDefaultList] = useState<string[]>([])
  const [customList, setCustomList] = useState<string[]>([])
  const [refreshList, setRefreshList] = useState<string[]>([])
  const [windowList, setWindowList] = useState<string[]>([])
  const [hasMore, setHasMore] = useState(true)
  const [customHasMore, setCustomHasMore] = useState(true)
  const [refreshHasMore, setRefreshHasMore] = useState(true)
  const [windownHasMore, setWindowHasMore] = useState(true)

  useEffect(() => {
    init()
  }, [])

  const loadMore = (done: () => void) => {
    setTimeout(() => {
      const curLen = defaultList.length
      for (let i = curLen; i < curLen + 10; i++) {
        defaultList.push(`${i}`)
      }
      if (defaultList.length >= 30) {
        setHasMore(false)
      } else {
        setDefaultList([...defaultList])
      }
      done()
    }, 500)
  }

  const refreshLoadMore = (done: () => void) => {
    setTimeout(() => {
      const curLen = refreshList.length
      for (let i = curLen; i < curLen + 10; i++) {
        refreshList.push(`${i}`)
      }
      if (refreshList.length >= 30) {
        setRefreshHasMore(false)
      } else {
        setRefreshList([...refreshList])
      }
      done()
    }, 500)
  }

  const customLoadMore = (done: () => void) => {
    setTimeout(() => {
      const curLen = customList.length
      for (let i = curLen; i < curLen + 10; i++) {
        customList.push(`${i}`)
      }
      if (customList.length >= 30) {
        setCustomHasMore(false)
      } else {
        setCustomList([...customList])
      }
      done()
    }, 500)
  }

  const windowLoadMore = (done: () => void) => {
    setTimeout(() => {
      const curLen = windowList.length
      for (let i = curLen; i < curLen + 10; i++) {
        windowList.push(`${i}`)
      }
      if (windowList.length >= 300) {
        setWindowHasMore(false)
      } else {
        setWindowList([...windowList])
      }
      done()
    }, 500)
  }

  const refresh = (done: () => void) => {
    setTimeout(() => {
      Toast.show(translated['83913e71'])
      done()
    }, 1000)
  }

  const init = () => {
    for (let i = 0; i < 10; i++) {
      defaultList.push(`${i}`)
      customList.push(`${i}`)
      refreshList.push(`${i}`)
      windowList.push(`${i}`)
    }
    setDefaultList([...defaultList])
    setCustomList([...customList])
    setRefreshList([...refreshList])
    setRefreshList([...windowList])
  }

  return (
    <>
      <div className="demo">
        <h2>{translated['84aa6bce']}</h2>
        <Cell>
          <ul className="infiniteUl" id="scroll">
            <InfiniteLoading
              target="scroll"
              hasMore={hasMore}
              onLoadMore={loadMore}
              loadingText={
                <>
                  <i className="bottom-box-icons">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <circle cx="2" cy="12" r="2" fill="#8C8C8C" />
                      <circle cx="12" cy="12" r="2" fill="#8C8C8C" />
                      <circle cx="22" cy="12" r="2" fill="#8C8C8C" />
                    </svg>
                  </i>
                  加载中
                </>
              }
              loadMoreText={
                <>
                  <i className="bottom-box-icons">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_202_858)">
                        <path
                          d="M23.1507 10.6435C21.8958 9.29889 21.6209 7.28491 20.8022 6.60353C19.9835 5.92216 18.7824 7.00753 18.3402 7.6467C15.896 5.92216 11.9879 6.00054 11.9879 6.00054C11.9879 6.00054 8.09759 5.92216 5.6475 7.6467C5.20528 7.00753 4.01012 5.92216 3.19143 6.60353C2.37274 7.28491 2.10383 9.29889 0.848906 10.6435C-0.0892994 11.6566 -0.166985 11.952 0.215468 12.754C0.591945 13.556 2.93447 14.2193 4.58977 12.6334C4.81088 13.4595 6.67534 18 11.9938 18C17.3123 18 19.1887 13.4595 19.4039 12.6334C21.0592 14.2193 23.4077 13.556 23.7901 12.754C24.1666 11.952 24.0889 11.6566 23.1507 10.6435Z"
                          fill="#8C8C8C"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_202_858">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </i>
                  没有更多了
                </>
              }
            >
              {defaultList.map((item, index) => {
                return (
                  <li className="infiniteLi" key={index}>
                    {item}
                  </li>
                )
              })}
            </InfiniteLoading>
          </ul>
        </Cell>

        <h2>{translated.eb4236fe}</h2>
        <Cell>
          <ul className="infiniteUl" id="refreshScroll">
            <InfiniteLoading
              pullingText={
                <>
                  <i className="top-box-icons">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="36"
                      height="26"
                      viewBox="0 0 36 26"
                      fill="none"
                    >
                      <path
                        d="M34.7243 10.965C32.842 8.94809 32.4297 5.92727 31.2018 4.90525C29.9738 3.88324 28.1722 5.51123 27.5089 6.46993C23.8429 3.88324 17.9809 4.00082 17.9809 4.00082C17.9809 4.00082 12.1458 3.88324 8.47083 6.46993C7.80754 5.51123 6.01488 3.88324 4.78691 4.90525C3.55894 5.92727 3.15559 8.94809 1.2733 10.965C-0.133943 12.4844 -0.250465 12.9276 0.323186 14.1305C0.887874 15.3334 4.40149 16.3283 6.88432 13.9496C7.21596 15.1887 10.0125 21.9991 17.9899 21.9991C25.9672 21.9991 28.7817 15.1887 29.1043 13.9496C31.5872 16.3283 35.1098 15.3334 35.6834 14.1305C36.2481 12.9276 36.1316 12.4844 34.7243 10.965Z"
                        fill="#8C8C8C"
                      />
                    </svg>
                  </i>
                  松开刷新
                </>
              }
              loadingText={<Jd />}
              target="refreshScroll"
              pullRefresh
              hasMore={refreshHasMore}
              onLoadMore={refreshLoadMore}
              onRefresh={refresh}
            >
              {refreshList.map((item, index) => {
                return (
                  <li className="infiniteLi" key={index}>
                    {item}
                  </li>
                )
              })}
            </InfiniteLoading>
          </ul>
        </Cell>

        <h2>{translated['9ed40460']}</h2>
        <Cell>
          <ul className="infiniteUl" id="customScroll">
            <InfiniteLoading
              target="customScroll"
              loadingText="loading"
              loadMoreText={translated['1254a90a']}
              hasMore={customHasMore}
              onLoadMore={customLoadMore}
            >
              {customList.map((item, index) => {
                return (
                  <li className="infiniteLi" key={index}>
                    {item}
                  </li>
                )
              })}
            </InfiniteLoading>
          </ul>
        </Cell>

        <h2>{translated['1254a90n']}</h2>
        <Cell>
          <ul className="infiniteUl2">
            <InfiniteLoading
              loadingText="loading"
              loadMoreText={translated['1254a90a']}
              hasMore={windownHasMore}
              onLoadMore={windowLoadMore}
            >
              {windowList.map((item, index) => {
                return (
                  <li className="infiniteLi" key={index}>
                    {item}
                  </li>
                )
              })}
            </InfiniteLoading>
          </ul>
        </Cell>
      </div>
    </>
  )
}

export default InfiniteloadingDemo
