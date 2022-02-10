import Image from 'next/image';

const Content = () => {
    return (
        <div className="flex flex-col place-items-start w-full">
            <p className="px-4">First title from fb..</p>
            <div className="relative max-h-[261px] h-[161px] md:h-[261px] mt-2 w-full flex place-content-stretch place-items-center">
                <Image priority src={'https://api.lorem.space/image/house?w=500&h=261&hash=41xdvwba'} layout={'fill'} className={'w-full h-auto aspect-[inherit] object-cover'} alt={"feed image"} />
            </div>
        </div>
    );
};

export default Content;
