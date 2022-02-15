import { DocumentData } from 'firebase/firestore';
import Image from 'next/image';
import ShimmerPlaceholder from '../../../../../Skeletons/ShimmerPlaceholder';

const Content = ({ post }: { post: DocumentData }) => {
    return (
        <div className="flex flex-col place-items-start w-full">
            <p className="px-4 mb-2">{post?.message}</p>
            {
                post?.post_image &&
                <div className="relative max-h-[261px] h-[161px] md:h-[261px] mt-2 w-full flex place-content-stretch place-items-center">
                    <Image
                        priority
                        src={post?.post_image}
                        layout={'fill'}
                        className={'w-full h-auto aspect-[inherit] object-fill'}
                        alt={"feed image"}
                        placeholder="blur"
                        blurDataURL={`data:image/svg+xml;base64,${ShimmerPlaceholder(100, 100)}`}
                    />
                </div>
                ||
                ''
            }
        </div>
    );
};

export default Content;
