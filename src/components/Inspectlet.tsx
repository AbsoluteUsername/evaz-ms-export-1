'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    __insp: any[]
    __inspld?: number
  }
}

let initialized = false

export default function Inspectlet() {
  useEffect(() => {
    if (initialized || typeof window.__inspld !== 'undefined') return
    initialized = true

    window.__insp = window.__insp || []
    window.__insp.push(['wid', 1699072565])

    window.__inspld = 1
    const insp = document.createElement('script')
    insp.type = 'text/javascript'
    insp.async = true
    insp.id = 'inspsync'
    insp.src =
      'https://cdn.inspectlet.com/inspectlet.js?wid=1699072565&r=' +
      Math.floor(new Date().getTime() / 3600000)
    const x = document.getElementsByTagName('script')[0]
    x.parentNode?.insertBefore(insp, x)
  }, [])

  return null
}
