import Uppy from '@uppy/core';
import FormContent from './FormContent';
import FormHeader from './FormHeader';

const FormBody = ({ upy }: { upy: Uppy }) => {
    return (
        <>
            <FormHeader />
            <FormContent upy={upy} />
        </>
    );
};

export default FormBody;
