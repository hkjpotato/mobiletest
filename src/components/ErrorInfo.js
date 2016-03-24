import React from 'react';
import { translate } from '../translate';
import Image from './Image';
import Banner from './Banner';

const ErrorInfo = () => (
  <div>
    <Banner isTransparent={false} />
    <Image source="1" ratioOfHeightToWidth={0.1}/>
    <p>{translate('_error_information')}</p>
  </div>
);

export default ErrorInfo;
