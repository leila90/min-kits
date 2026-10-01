import Image from "next/image";
type sloganProps = {
    dict: {
        slogan: string,
        mainSlogan: string
    }
}

export default function MySlogan({ dict }: sloganProps) {
    return (
        <section className="md:-my-10 md:mx-30 -mt-10 mx-5 relative z-3">
            <div className="wrapper myContainer mx-auto w-full px-0 min-w-[90%] lg:min-w-[1224px]">
                <div className="w-full flex flex-col gap-6 text-start">
                    <div style={{ opacity: 1, transform: 'none' }}>
                        <div className="relative bg-black shadow-2xl rounded-2xl text-center lg:text-base text-xs lg:py-10 py-6 px-[14px] whitespace-pre-line overflow-hidden max-h-[140px]">
                            <p className="w-full h-fit text-white">
                                {dict.slogan} <em> “</em><em>{dict.mainSlogan}</em><em>” </em>
                            </p>

                            {/* شکل‌های SVG به صورت absolute در اطراف */}
                            <Image
                                width={100}
                                height={100}
                                className="absolute bottom-0 right-4 lg:right-8 w-16 lg:w-auto"
                                src="data:image/svg+xml,%3csvg%20width='178'%20height='91'%20viewBox='0%200%20178%2091'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M44.7881%20154.576L133.211%20154.576L177.423%2078L133.211%201.42382L44.7881%201.42383L0.576176%2078L44.7881%20154.576Z'%20stroke='white'%20stroke-opacity='0.2'/%3e%3c/svg%3e"
                                alt=""
                            />
                            <Image
                                width={100}
                                height={100}
                                className="absolute -bottom-5 lg:-bottom-12 right-20 lg:right-56 w-16 lg:w-auto"
                                src="data:image/svg+xml,%3csvg%20width='178'%20height='91'%20viewBox='0%200%20178%2091'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M44.7881%20154.576L133.211%20154.576L177.423%2078L133.211%201.42382L44.7881%201.42383L0.576176%2078L44.7881%20154.576Z'%20stroke='white'%20stroke-opacity='0.3'/%3e%3c/svg%3e"
                                alt=""
                            />
                            <Image
                                width={100}
                                height={100}
                                className="absolute bottom-0 left-4 lg:left-8 w-16 lg:w-auto"
                                src="data:image/svg+xml,%3csvg%20width='178'%20height='91'%20viewBox='0%200%20178%2091'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M44.7881%20154.576L133.211%20154.576L177.423%2078L133.211%201.42382L44.7881%201.42383L0.576176%2078L44.7881%20154.576Z'%20stroke='white'%20stroke-opacity='0.3'/%3e%3c/svg%3e"
                                alt=""
                            />
                            <Image
                                width={100}
                                height={100}
                                className="absolute -bottom-5 lg:-bottom-12 left-20 lg:left-56 w-16 lg:w-auto"
                                src="data:image/svg+xml,%3csvg%20width='178'%20height='91'%20viewBox='0%200%20178%2091'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M44.7881%20154.576L133.211%20154.576L177.423%2078L133.211%201.42382L44.7881%201.42383L0.576176%2078L44.7881%20154.576Z'%20stroke='white'%20stroke-opacity='0.2'/%3e%3c/svg%3e"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}