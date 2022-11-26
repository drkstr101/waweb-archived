/**
 * Copyright 2022 Watheia Labs, LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {
  ActionButton,
  Content,
  Dialog,
  DialogTrigger,
  Divider,
  Heading
} from '@adobe/react-spectrum';
import Bell from '@spectrum-icons/workflow/Bell';
import ShowMenu from '@spectrum-icons/workflow/ShowMenu';
import Link from 'next/link';
import { useAuth } from '@watheia/waweb.auth';
import cn from 'clsx';
import { useRouter } from 'next/router';
import styles from './header.module.css';
import Logo from './logo';

export interface NavLink {
  label: string;
  url: string;
}

export interface HeaderProps {
  primaryLinks: NavLink[];
}

export default function Header(props: HeaderProps) {
  const router = useRouter();
  const activeRoute = router?.asPath ?? '/';
  const { isLoggedIn } = useAuth();

  return (
    <header className={cn(styles['header'])}>
      <div className={styles['headerLogos']}>
        <div className={styles['mobile-nav-btn']}>
          <MobileNav key={activeRoute} {...props} />
        </div>
        <Link href="/">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a className={styles['logo']}>
            <Logo />
          </a>
        </Link>
      </div>
      <div className={styles['tabs']}>
        {props.primaryLinks.map(({ label, url }) => (
          <Link key={label} href={url}>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a
              className={cn(styles['tab'], {
                [styles['tabActive']]: activeRoute.startsWith(url)
              })}
            >
              {label}
            </a>
          </Link>
        ))}
      </div>
      {isLoggedIn && (
        <div className="flex items-center ml-4 mr-16 md:ml-6">
          <button
            type="button"
            className="p-1 text-base-300 bg-base-content rounded-full hover:text-base-700 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
          >
            <span className="sr-only">View notifications</span>
            <Bell aria-hidden="true" />
          </button>

          {/* <UserMenu /> */}
        </div>
      )}
    </header>
  );
}

const MobileNav = ({ primaryLinks }: HeaderProps) => {
  const router = useRouter();
  const activeRoute = router?.asPath ?? '/';
  return (
    <DialogTrigger type="tray">
      <ActionButton aria-label="Navigator" UNSAFE_style={{ cursor: 'pointer' }}>
        <ShowMenu />
      </ActionButton>
      {(close) => (
        <Dialog>
          <Heading>Navigator</Heading>
          <Divider />
          <Content>
            <nav className={styles['mobile-nav']}>
              {primaryLinks.map(({ label, url }) => (
                <Link key={label} href={url}>
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a
                    onClick={close}
                    className={cn(styles['mobile-nav-item'], {
                      [styles['mobile-nav-active']]: activeRoute.startsWith(url)
                    })}
                  >
                    {label}
                  </a>
                </Link>
              ))}
            </nav>
          </Content>
        </Dialog>
      )}
    </DialogTrigger>
  );
};
