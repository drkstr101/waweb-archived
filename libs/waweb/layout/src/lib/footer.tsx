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

import { useConfig } from '@watheia/waweb.config';
import cn from 'clsx';
import Link from 'next/link';
import styles from './footer.module.css';

export default function Footer() {
  const config = useConfig();
  return (
    <footer
      className={cn(styles['footer'], 'border-t border-dotted border-secondary bg-base-700')}
      data-testid="waweb.layout/footer"
    >
      <div className={styles['footer-legal']}>
        <div data-testid="waweb.layout/footer:copyright" className={styles['footer-copyright']}>
          {config.footer.copyrightText}
        </div>
        <div className={styles['footer-center-group']}>
          <p className={styles['footer-paragraph']}>
            <a
              data-testid="waweb.layout/footer:view-source"
              href="https://gitlab.com/watheia/waweb"
              className={styles['footer-link']}
              target="_blank"
              rel="noopener noreferrer"
            >
              Source
            </a>
          </p>
          <div className={styles['footer-separator']} />
          <p className={styles['footer-paragraph']}>
            <Link href="/terms-and-conditions">
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a className={styles['footer-link']}>Terms</a>
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
