import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: '요건 총 정리',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        여기저기 흩어져 있는 졸업 요건을 한 곳에 모아봤습니다. 졸업 요건을 쉽게
        알아보세요.
      </>
    ),
  },
  {
    title: '경험 총 정리',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        학부에는 여러가지 숨어있는 요건들이 있습니다. 일단 제 ICT인터십이 어떻게
        진행되는지부터 정리해보고자 합니다. 이러한 경험을 통해 여러 혜택을 쉽게 받을 수
        있으면 좋겠습니다.
      </>
    ),
  },
  {
    title: '다른 사람들과 함께 만들어가기',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        이 페이지는 일단 제가 알아낸 것을 제 기준으로 문서화합니다. 잘 못 알고 있는 것이
        있거나 더 좋은 방법이 있다면 언제든지 공유해주세요.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
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
