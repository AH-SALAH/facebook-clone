import { Dashboard } from '@uppy/react';

/**
 * uppy file uploader
 *
 * @param {{ upy: any, modalSize?: string }} { upy, modalSize }
 * @returns
 */
const FileUpload = ({ upy, modalSize }: { upy: any, modalSize?: string }) => {

    return (
        <div className='w-full max-h-80 h-auto px-3 pb-6'>
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
            />
        </div>
    );
};

export default FileUpload;
