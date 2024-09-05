'use client'
import styles from './_styles/aside-ad.module.scss'
import useWindowDimensions from '~/hooks/use-window-dimensions'
import dynamic from 'next/dynamic'
const GPTAd = dynamic(() => import('~/components/ads/gpt/gpt-ad'))

export default function AsideAd({ shownOnMobile }: { shownOnMobile: boolean }) {
  const { width: viewportWidth = 0 } = useWindowDimensions()
  if (shownOnMobile !== viewportWidth < 768) return null
  return (
    <aside className={styles.aside}>
      <GPTAd pageKey="show" adKey="PC_R1" />
      <GPTAd pageKey="show" adKey="PC_R2" />
      <GPTAd pageKey="show" adKey="PC_R3" />
    </aside>
  )
}