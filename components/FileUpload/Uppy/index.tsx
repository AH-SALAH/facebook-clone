import Uppy from '@uppy/core';
import { useUppy } from '@uppy/react';
import ImageEditor from '@uppy/image-editor';
import Webcam from '@uppy/webcam';
import '@uppy/core/dist/style.css';
import '@uppy/image-editor/dist/style.css';
import '@uppy/webcam/dist/style.css';

/**
 * uppy uploader instance
 *
 * @param {{}} [options]
 */
export const uppy = (options?: {}) => new Uppy({
    id: 'fup',
    autoProceed: false,
    allowMultipleUploadBatches: true,
    debug: true,
    ...options,
})
    .use(ImageEditor, {
        id: 'ImageEditor',
        quality: 0.8,
    })
    .use(Webcam, {
        modes: [
            // 'video-audio',
            // 'video-only',
            // 'audio-only',
            'picture',
        ],
        // mirror: true,
        // videoConstraints: {
        //     facingMode: 'user',
        //     width: { min: 720, ideal: 1280, max: 1920 },
        //     height: { min: 480, ideal: 800, max: 1080 },
        // },
    });

/**
 * uppy hook
 * get it with a new uppy or new options for the current uppy instance
 *
 * @param {Uppy} [upy]
 * @param {{}} [options]
 */
export const useUppyUpload = (upy?: Uppy, options?: {}) => useUppy(() => upy || uppy(options));