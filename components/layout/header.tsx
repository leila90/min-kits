type HeaderProps = {
    overlap?: boolean;
};

export default function Header({overlap = true}: HeaderProps) {
    return (
        <section className="">
            <div className={`bg-white ${overlap ? "-mt-20" : ""} relative rounded-tr-4xl rounded-tl-4xl`}>
                <div
                    className={`bg-[url('/images/heroHeader.png')] opacity-20 relative z-2 ${overlap ? "-mt-20" : ""} h-40 w-full bg-cover bg-no-repeat`}>

                </div>
            </div>
        </section>
    )
}