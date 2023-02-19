import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

type FeatureItem = {
  title: string;
  to: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: '교양',
    to: 'docs/graduate-guide-of-2018/교양',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: <>들어야 하는 교양 정리</>,
  },
  {
    title: '공학인증',
    to: 'docs/graduate-guide-of-2018/공학인증',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: <>공학인증 졸업요건 정리</>,
  },
  {
    title: '글 모음',
    to: 'docs/popular-article',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: <>유용한 글 모음</>,
  },
];

function Feature({ title, to, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>
          <Link className="button button--primary button--small" to={to}>
            '{title}' 정리 글 보기
          </Link>
        </h3>
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
