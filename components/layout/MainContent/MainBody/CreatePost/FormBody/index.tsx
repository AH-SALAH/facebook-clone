import React, { FC } from 'react';
import FormContent from './FormContent';
import FormHeader from './FormHeader';

const FormBody:FC = () => {
    return (
        <>
            <FormHeader />
            <FormContent />
        </>
    );
};

export default FormBody;
