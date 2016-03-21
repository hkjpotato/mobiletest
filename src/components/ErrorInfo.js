import React from 'react';
import { translate } from '../translate';
import Image from './Image';
const ErrorInfo = () => (
    <div>
      <div>
        <Image source="1" ratioOfHeightToWidth={0.1}/>
        <Image source="1" ratioOfHeightToWidth={0.1}/>
        <p>{translate('_error_information')}</p>
      </div>
    </div>
);

export default ErrorInfo;
