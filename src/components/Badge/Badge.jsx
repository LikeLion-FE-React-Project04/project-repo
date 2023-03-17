import styles from './Badge.module.scss';

export function Badge({
    uiType = 'noticeBadge',
    children,
    className = '',
    ...restProps
}) {
  const combinedClassNames = `${styles.badge} ${getUiStyle(uiType)} ${className}`;

  return (
    <span className={combinedClassNames} {...restProps}>
      {children}
    </span>
  );
}

function getUiStyle(uiType) {
  let uiStyle;

  switch (uiType) {
    case 'noticeBadge':
      uiStyle = styles.noticeBadge;
      break;
    case 'bestBadge':
      uiStyle = styles.bestBadge;
      break;
    case 'purpleBadge':
      uiStyle = styles.purpleBadge;
      break;
  }

  return uiStyle;
}

