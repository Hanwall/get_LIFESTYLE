import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'BASE OF LIFE',
    Svg: require('@site/static/img/cat1.svg').default,
    description: (
      <>
        LIFE IS MEANINGLESS.
      </>
    ),
  },
  {
    title: 'OTHERS OF LIFE',
    Svg: require('@site/static/img/cat2.svg').default,
    description: (
      <>
         MAY GOD BLESS U ALL.
      </>
    ),
  },
  {
    title: 'END OF LIFE',
    Svg: require('@site/static/img/cat3.svg').default,
    description: (
      <>
       LOST IN THE WORLD SO LONG TIME
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}