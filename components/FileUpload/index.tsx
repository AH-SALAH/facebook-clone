import { Dashboard } from '@uppy/react';
import Uppy from '@uppy/core';
/**
 * uppy file uploader
 *
 * @param {{ upy: any, modalSize?: string }} { upy, modalSize }
 * @returns
 */
const FileUpload = ({ upy, modalSize, loading = false }: { upy: Uppy, modalSize?: string, loading?: boolean }) => {

    return (
        <div className='w-full max-h-80 h-auto px-2 pb-6'>
            <Dashboard
                uppy={upy}
                width={'100%'}
                height={'100%'}
                theme={'auto'}
                className={`w-full h-60 2xl:h-96`}
                proudlyDisplayPoweredByUppy={false}
                plugins={["ImageEditor", "Webcam"]}
                metaFields={[
                    { id: 'name', name: 'Name', placeholder: 'File name' },
                ]}
                locale={{
                    strings: {
                        dropPasteFiles: '📄 %{browseFiles} or drag & drop',
                        browseFiles: 'Add files',
                    }
                }}
                hideUploadButton
                disabled={loading}
            />
        </div>
    );
};

export default FileUpload;
