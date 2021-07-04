import React, { useMemo } from 'react'
import { browser } from '../../utils/browserName'
import { UnsupportedBrowser } from '../../components/unsupported-browser'

export const SupportedBrowserWrapper: React.FC = ({ children }) => {
  const isSupportedBrowser = useMemo(() => {
    if (!browser) {
      return true
    }

    switch (browser.name) {
      case 'aol':
      case 'edge':
      case 'edge-ios':
      case 'yandexbrowser':
      case 'kakaotalk':
      case 'samsung':
      case 'silk':
      case 'miui':
      case 'beaker':
      case 'edge-chromium':
      case 'chromium-webview':
      case 'phantomjs':
      case 'crios':
      case 'firefox':
      case 'fxios':
      case 'opera-mini':
      case 'opera':
      case 'bb10':
      case 'android':
      case 'ios':
      case 'safari':
      case 'facebook':
      case 'instagram':
      case 'ios-webview':
      case 'searchbot':
      case 'bot':
      case 'node':
      case 'chrome':
        return true
      case 'ie':
        return false
      default:
        return false
    }
  }, [])

  return <>{isSupportedBrowser ? children : <UnsupportedBrowser />}</>
}
