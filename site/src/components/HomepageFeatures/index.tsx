/* eslint-disable @typescript-eslint/no-var-requires */

import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Built with TypeScript',
    Svg: require('@site/static/img/homepage/pair-programming.svg').default,
    description: (
      <>
        Useful, reusable, and reliable utility functions available in both browser and server environments. A library
        encouraged to be utilized by all.
      </>
    )
  },
  {
    title: 'Open-Source Focused',
    Svg: require('@site/static/img/homepage/earth.svg').default,
    description: (
      <>
        One of the main goals of this project is to encourage newcomers to break into open-source while inviting others
        to do the same.
      </>
    )
  },
  {
    title: 'Easy to Contribute',
    Svg: require('@site/static/img/homepage/version-control.svg').default,
    description: (
      <>
        Have a commonly used utility function you want to share or show off? First open-source contribution? This is the
        place to ship it!
      </>
    )
  }
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
