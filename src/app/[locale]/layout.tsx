import { ReactNode } from 'react'
import { Link, usePathname } from '../../navigation'

type Props = {
  children: ReactNode
  params: { locale: string }
}

export default async function LocaleLayout({
  children,
  params: { locale }
}: Props) {
  const pathname = usePathname()

  const path = 'http://checkout/28283763'

  if (pathname === '/checkout/[cartId]') {
  }

  return (
    <html lang={locale}>
      <head>
        <title>next-intl-bug-repro-app-router</title>
      </head>
      <body>
        {children}
        {/* @ts-ignore */}
        {/* BUG: How can i pass "checkout/123" to href attribute without @ts-ignore? */}
        {/* <Link href={""} /> */}
      </body>
    </html>
  )
}
