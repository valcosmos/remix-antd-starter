import { isBrowser } from '@minko-fe/lodash-pro'
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react'
import './tailwind.css'
import AntdConfigProvider from './components/antd-config-provider'

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        {!isBrowser() && '__ANTD_STYLE__'}
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function App() {
  return (
    <AntdConfigProvider>
      <Outlet />
    </AntdConfigProvider>
  )
}
