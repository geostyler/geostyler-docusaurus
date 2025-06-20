import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description='GeoStyler is about styling maps. Maybe you are a developer looking for a set of UI components to build custom and flexible styling widgets for your geospatial application. Maybe you are a cartographer trying to get the style you worked so hard on in your favorite (Q)GIS into the web. Or maybe you are a project lead worrying about migrating all your styles to that new fancy rendering engine everyone (and in particular your boss) is talking about.'>
      <HomepageHeader />
      <main>
        <div
          className="grid"
        >
          <div />
          <div>
            <p>
            Welcome to the GeoStyler website. Here you will find documentations, tutorials, demos...
            </p>
            
          </div>
          <div />
        </div>
      </main>
    </Layout>
  );
}
