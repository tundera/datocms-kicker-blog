import { FC } from 'react'

import Alert from './alert'
import Footer from './footer'

interface LayoutProps {
  preview: boolean
}

const Layout: FC<LayoutProps> = ({ preview, children }) => {
  return (
    <>
      <div className="min-h-screen">
        <Alert preview={preview} />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
