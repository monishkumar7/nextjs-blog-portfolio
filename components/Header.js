import ActiveLink from './ActiveLink';
import { useRouter } from 'next/router';
import {
  DocumentTextIcon,
  HomeIcon,
  BriefcaseIcon,
} from '@heroicons/react/outline';

export default function Header() {
  const router = useRouter();
  return (
    <div className="flex justify-between items-center pt-20">
      <div>
        {router.pathname === '/' ? (
          <></>
        ) : (
          <ActiveLink href="/">
            <a className="nav-link">
              <HomeIcon className="mr-1 h-4 w-4" aria-hidden="true" />
              Home
            </a>
          </ActiveLink>
        )}
      </div>
      <div className="flex flex-row items-center space-x-8">
        <ActiveLink activeClassName="active-link" href="/projects">
          <a className="nav-link">
            <BriefcaseIcon className="mr-1 h-4 w-4" aria-hidden="true" />
            Projects
          </a>
        </ActiveLink>
        <ActiveLink activeClassName="active-link" href="/blog">
          <a className="nav-link">
            <DocumentTextIcon className="mr-1 h-4 w-4" aria-hidden="true" />
            Blog
          </a>
        </ActiveLink>
      </div>
    </div>
  );
}
