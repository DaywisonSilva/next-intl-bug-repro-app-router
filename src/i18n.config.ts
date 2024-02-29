import { Pathnames } from 'next-intl/navigation'

export const locales = ['en'] as const

export const pathnames = {
  '/': '/',
  '/checkout/[cartId]': {
    en: '/checkout/[cartId]'
  },
  '/checkout/add-payment': '/checkout/add-payment'
} satisfies Pathnames<typeof locales>

// Use the default: `always`
export const localePrefix = 'as-needed'

export type AppPathnames = keyof typeof pathnames
