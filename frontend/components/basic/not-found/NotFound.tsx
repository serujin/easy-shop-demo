import Ratings from '@/components/ratings/Ratings'
import customStickersStyles from '@/styles/custom-stickers-page.module.css'
import styles from './NotFound.module.css'

type NotFoundProps = {
  isIndex?: boolean
}

const getHeader = (isIndex: boolean) => {
  if (!isIndex) {
    return
  }
  return (
    <div className={customStickersStyles.headerContainer}>
      <div className={customStickersStyles.ratingsContainer}>
        <Ratings
          title={'Custom stickers'}
          titleStyle="huge"
          rating={4.8}
          reviews={155761}
        />
      </div>
    </div>
  )
}

const getNotFoundText = (isIndex: boolean) => {
  const pageText = isIndex ? 'product' : 'product information'
  return `We could not load any ${pageText} right now, try again later`
}

export default function NotFound(props: NotFoundProps) {
  const { isIndex = false } = props
  const containerClassName = isIndex
    ? styles.notFoundIndexContainer
    : styles.notFoundProductContainer
  return (
    <main className={customStickersStyles.main}>
      {getHeader(isIndex)}
      <div className={containerClassName}>
        <p className={styles.notFoundText}>{getNotFoundText(isIndex)}</p>
        <p className={styles.notFoundText}>Sorry for the inconveniences</p>
      </div>
    </main>
  )
}
