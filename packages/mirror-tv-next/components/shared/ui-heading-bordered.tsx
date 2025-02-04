import styles from './_styles/ui-heading-bordered.module.scss'

type UiHeadingBorderedProps = {
  title: string
  className?: string
}

export default function UiHeadingBordered({
  title,
  className = '',
}: UiHeadingBorderedProps) {
  return (
    <div
      className={['heading-bordered-wrapper', styles.wrapper, className].join(
        ' '
      )}
    >
      <p className={styles.title}>{title}</p>
    </div>
  )
}
