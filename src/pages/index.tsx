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
            Welcome to the <strong>GeoStyler Beginner Workshop</strong>. This workshop will give you a first overview of the GeoStyler, a web-based tool for interactive styling of geographic data.
            </p>
            <p>
            In this workshop, we will create a basic application that allows users to style geographic data via a graphical user interface.
            </p>
            <p>The final application will look like this:</p>
            <img src="/assets/img/geostyler-workshop.gif"/>
            
          </div>
          <div />
        </div>
      </main>
    </Layout>
  );
}
