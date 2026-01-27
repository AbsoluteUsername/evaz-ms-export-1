'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    fbq: any
    _fbq: any
  }
}

let initialized = false

export default function FacebookPixel() {
  useEffect(() => {
    if (initialized || window.fbq) return
    initialized = true

    const script = document.createElement('script')
    script.async = true
    script.src = 'https://connect.facebook.net/en_US/fbevents.js'
    document.head.appendChild(script)

    window.fbq = function () {
      window.fbq.callMethod
        ? window.fbq.callMethod.apply(window.fbq, arguments)
        : window.fbq.queue.push(arguments)
    }
    window._fbq = window.fbq
    window.fbq.push = window.fbq
    window.fbq.loaded = true
    window.fbq.version = '2.0'
    window.fbq.queue = []

    window.fbq('init', '1398563015298723')
    window.fbq('track', 'PageView')
  }, [])

  return (
    <noscript>
      <img
        height="1"
        width="1"
        style={{ display: 'none' }}
        src="https://www.facebook.com/tr?id=1398563015298723&ev=PageView&noscript=1"
        alt=""
      />
    </noscript>
  )
}
