import React from 'react';
import { translate } from '../translate';
import { Link } from 'react-router';
import PageHeader from '../components/PageHeader';

const PageHeaderContainer = () =>
(
  <PageHeader>
    <Link to="/venues">{translate('_venues')}</Link>
    <Link to="/promotions">{translate('_promotions')}</Link>
    <Link to="/city-guides">{translate('_city_guides')}</Link>
  </PageHeader>
);

export default PageHeaderContainer;
