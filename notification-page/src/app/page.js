'use client'
import clsx from 'clsx'
import styles from './components/Grid.module.scss'
import './globals.scss'
import { notiList } from './components'
import { useState, useLayoutEffect } from 'react'


function Noti() {
  const [isActive, setIsActive] = useState(true)
  const [notiCount, setNotiCount] = useState(() => {
    const activeList = notiList.filter(noti => noti.active)
    return activeList.length
  })

  function handleClick() {
    setIsActive(false)
    // console.log("click")
  }

  return (
    <div id={styles.container}>
      <div id={styles.header}>
        <div className={styles.leftHeader}>
          <h3>Notifications <span className={styles.notiNumber}>{notiCount}</span></h3>
        </div>
        <div >
          <span
            className={styles.rightHeader}
            onClick={handleClick}
          >Mark all as read</span>
        </div>
      </div>
      <div className={styles.notificationList}>
        {notiList.map(noti =>
          <NotiList
            noti={noti}
            isActive={isActive}
            setNotiCount={setNotiCount}
            key = {noti.id}
          />
        )}
      </div>
    </div>
  )
}

function NotiList({
  noti,
  isActive,
  setNotiCount,
}) {
  const classes = clsx(styles.notification, {
    [styles.message]: noti.message,
    [styles.active]: noti.active
  })
  const notiCategories = clsx({
    [styles.messageNoti]: noti.message,
    [styles.commentNoti]: noti.picture
  })
  const contentCategories = clsx({
    [styles.messageContent]: noti.message,
    [styles.commentPic]: noti.picture
  })

  const [id, setId] = useState('')
  const [active, setActive] = useState(true)

  if (noti.active) { noti.active = isActive }
  if (noti.active) { noti.active = active }

  const activeList = notiList.filter(noti => noti.active)

  function handleInactive(notiId) {
    if (notiId === id) {
      setActive(false)
    }
    // console.log("Inactive")
  }

  useLayoutEffect(() => {
    setNotiCount(activeList.length)
  }, [activeList, setNotiCount])

  return (
    <div className={classes}
      onMouseDown={() => {
        setId(noti.id)
        // console.log('setId')
      }}
      onMouseUp={() => {
        handleInactive(noti.id);
      }
      }
    >
      {noti.message || noti.picture ?
        <>
          <div className={notiCategories}>
            <PostNoti noti={noti} />
          </div>
          <div className={contentCategories}>
            {noti.message && noti.message}
            {noti.picture && <img src={noti.picture} alt='post-pic' className={styles.postPicture} />}
          </div>
        </> :
        <PostNoti noti={noti} />
      }
    </div>
  )
}

function PostNoti({ noti }) {
  return (
    <>
      <div id={styles.image}>
        <img src={noti.img} alt='profile' className={styles.picture}></img>
      </div>
      <div className={styles.content}>
        <span className={styles.name}>{noti.name}</span>
        <span className={styles.desc}>{` ${noti.content}`}</span>
        {noti.post && <span className={styles.post}>{` ${noti.post}`}</span>}
        {noti.group && <span className={styles.group}>{` ${noti.group}`}</span>}
        <span className={styles.redDot}></span>
        <br />
        <p className={styles.time}>{noti.time}</p>
      </div>
    </>
  )
}

export default Noti 