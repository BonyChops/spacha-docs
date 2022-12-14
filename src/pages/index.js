import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

import Translate, { translate } from '@docusaurus/Translate';
import { SpachaPlayground } from '@site/src/components/SpachaPlayground/SpachaPlayground';
import BrowserOnly from '@docusaurus/BrowserOnly';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle"><Translate id='tag-line' description='Tag line of this site'>YouTube superchat like image generator</Translate></p>
        <div className={styles.buttons}>
          <BrowserOnly fallback={<div>Loading...</div>}>
            {() => {
              return (window.location.pathname !== '/ja/' && <Link
                className="button button--secondary button--lg"
                to="/ja/">
                日本語
              </Link>)
            }}
          </BrowserOnly>

        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <SpachaPlayground />
        <div style={{
          textAlign: "center"
        }}>
          <Link
            className="button button--primary button--lg"
            style={{
              marginTop: "10px",
              marginBottom: "10px"
            }}
            to="./docs/intro">
            {<Translate>Start Developing!</Translate>}
          </Link>
        </div>
      </main>
    </Layout>
  );
}
