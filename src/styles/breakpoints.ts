import type { NestedCSSProperties } from 'typestyle/lib/types'

export const mobile = '@media screen and (max-width: 1023px)'
export const shortLandscape =
  '@media screen and (max-width: 1023px) and (orientation: landscape) and (max-height: 500px)'

export const mobileCtaMaxWidth = '420px'
export const mobileCtaMinHeight = '56px'

export const mobileButton: NestedCSSProperties = {
  width: 'auto',
  minWidth: '140px',
  height: '48px',
  lineHeight: '48px',
  fontSize: '16px',
  margin: 0,
}

export const mobileGutters: NestedCSSProperties = {
  marginLeft: 'max(16px, env(safe-area-inset-left))',
  marginRight: 'max(16px, env(safe-area-inset-right))',
}

export const mobilePage: NestedCSSProperties = {
  width: 'auto',
  ...mobileGutters,
  paddingBottom: 'calc(32px + env(safe-area-inset-bottom))',
}

export const coverViewport: NestedCSSProperties = {
  minWidth: '100%',
  minHeight: '100%',
  objectFit: 'cover',
}

export const mobileTextColumn: NestedCSSProperties = {
  width: '100%',
  minHeight: 0,
  maxWidth: '65ch',
  marginLeft: 'auto',
  marginRight: 'auto',
  boxSizing: 'border-box',
  padding: 0,
  marginTop: '24px',
}
