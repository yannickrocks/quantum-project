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

export const focusRing: NestedCSSProperties = {
  outline: '2px solid #ff7d25',
  outlineOffset: '2px',
}

export const unstyledButton: NestedCSSProperties = {
  display: 'block',
  padding: 0,
  border: 'none',
  background: 'none',
  color: 'inherit',
  font: 'inherit',
  cursor: 'pointer',
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

export const palette = {
  red: '#b75053',
  redHover: '#8a2c2f',
  green: '#33835c',
  greenHover: '#1f5c3e',
}

export const smallButton = (
  backgroundColor: string,
  hoverBackgroundColor: string,
): NestedCSSProperties => ({
  width: '15%',
  border: 'none',
  borderRadius: '6px',
  backgroundColor,
  color: '#ffffff',
  fontSize: '14px',
  fontWeight: 800,
  textAlign: 'center',
  height: '35px',
  marginTop: '5px',
  textDecoration: 'none',
  $nest: {
    [mobile]: {
      ...mobileButton,
    },
    '&:hover': {
      backgroundColor: hoverBackgroundColor,
      color: '#ffffff',
      textDecoration: 'none',
    },
  },
})
