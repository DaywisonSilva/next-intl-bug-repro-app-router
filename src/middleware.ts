import createMiddleware from 'next-intl/middleware'
import { pathnames, locales, localePrefix } from './i18n.config'

export default createMiddleware({
  defaultLocale: 'en',
  locales,
  pathnames,
  localePrefix,
  localeDetection: false
})

export const config = {
  matcher: ['/', '/(en)/:path*', '/checkout/(.+)*']
}
