import { ReactNode } from 'react'
import { Link } from '../../navigation'

type Props = {
  children: ReactNode
  params: { locale: string }
}

export default async function LocaleLayout({
  children,
  params: { locale }
}: Props) {
  return (
    <html lang={locale}>
      <head>
        <title>next-intl-bug-repro-app-router</title>
      </head>
      <body>
        {children}
        {/* BUG: Where is "/checkout/[cartId]" dynamic pathname in href attribute? */}
        <Link href='' />
      </body>
    </html>
  )
}
