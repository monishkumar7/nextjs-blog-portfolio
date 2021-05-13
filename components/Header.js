import ActiveLink from './ActiveLink'
import { useRouter } from 'next/router'

export default function Header() {
  const router = useRouter()
  return (
    <div className="flex justify-between items-center pt-20">
      <div>
        {router.pathname === '/' ? (
          <></>
        ) : (
          <ActiveLink href="/">
            <a className="nav-link">Home</a>
          </ActiveLink>
        )}
      </div>
      <div className="flex flex-row items-center space-x-8">
        <ActiveLink activeClassName="active-link" href="/projects">
          <a className="nav-link">Projects</a>
        </ActiveLink>
        <ActiveLink activeClassName="active-link" href="/blog">
          <a className="nav-link">Blog</a>
        </ActiveLink>
      </div>
    </div>
  )
}
