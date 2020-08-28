import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Hero from './parts/Hero';
import Reviews from './parts/Reviews';
import NonProfitOrganization from './parts/NonProfitOrganization';
import ImageResize from './parts/ImageResize';
import { brands } from './parts/imageHelper';

import m1grantor2x from '../../../assets/img/nonprofit/m1grantor@2x.png';
import d1grantor from '../../../assets/img/nonprofit/d1grantor.png';
import m1grantor from '../../../assets/img/nonprofit/m1grantor.png';
import d1grantor2x from '../../../assets/img/nonprofit/d1grantor@2x.png';

import m3customizevoc2x from '../../../assets/img/nonprofit/m3customize-voc@2x.png';
import d3customizevoc from '../../../assets/img/nonprofit/d3customize-voc.png';
import m3customizevoc from '../../../assets/img/nonprofit/m3customize-voc.png';
import d3customizevoc2x from '../../../assets/img/nonprofit/d3customize-voc@2x.png';

import useWindowSize from '../../hooks/useWindowSize';

import css from './Main.module.scss';

const Main = () => {
  const size = useWindowSize();
  return (
    <main className={size.width < 768 ? 'mt-4' : 'mt-6'}>
      <Hero />
      <Container>
        <div className={`mx-auto text-center mb-4 ${css.title}`}>
          <h3 className={`mb-md-3 ${css.titleH3}`}>
            Over 14,800 Customers Trust TimeLedger
          </h3>
        </div>
        <Row>
          {brands.map((brand, index) => (
            <Col xs={12} lg={4} key={index}>
              <ImageResize path={brand.img} />
            </Col>
          ))}

          <Col xs={12} lg={4}>
            <div className={`pl-2 mb-3 mb-md-0 ${css.feature}`}>
              Meets all non-profit auditing requirements including Single Audit
              and Program-Specific Auditing.
            </div>
          </Col>
          <Col xs={12} lg={4}>
            <div className={`pl-2 mb-3 mb-md-0 ${css.feature}`}>
              TimeLedger’s extensive reports include specialized non-profit
              reports that distribute fringe pool expenses by user and project.
            </div>
          </Col>
        </Row>
        <div className={`mx-auto text-center mb-4 ${css.title}`}>
          <h2 className={`mb-md-3 ${css.titleH2}`}>
            Labor automatically allocated across grants/funding sources
          </h2>
          Users can enter their time by grant or funding source.
        </div>
        <Row className="d-flex justify-content-center mb-6">
          <picture className="d-flex justify-contnet-center">
            <source media="(min-width: 1600px)" srcSet={d1grantor2x} />
            <source media="(min-width: 768px)" srcSet={d1grantor} />
            <img
              src={m1grantor}
              alt="Grantor"
              style={{ maxWidth: '100%' }}
              srcSet={m1grantor2x}
            />
          </picture>
        </Row>
        <div className={`mx-auto text-center mb-4 mt-6 ${css.title}`}>
          <h2 className={`mb-md-3 text-primary ${css.titleH2}`}>
            Non-Profit Organization, NPO Contracts Profitability Report
          </h2>
          With automatic Fringe Pool disbursement by project and user resource.
        </div>

        <NonProfitOrganization />

        <div className={`mx-auto text-center mb-4 mt-6 ${css.title}`}>
          <h2 className={`mb-md-3 ${css.titleH2}`}>Customizable vocabulary</h2>
          Get fast user adoption by using your terms for users, clients, grants,
          and funding sources.
        </div>
        <Row className="d-flex justify-content-center mb-6">
          <picture className="d-flex justify-contnet-center">
            <source media="(min-width: 1600px)" srcSet={d3customizevoc2x} />
            <source media="(min-width: 768px)" srcSet={d3customizevoc} />
            <img
              src={m3customizevoc}
              alt="Grantor"
              style={{ width: '100%' }}
              srcSet={m3customizevoc2x}
            />
          </picture>
        </Row>
        <Reviews />
      </Container>
    </main>
  );
};

export default Main;
