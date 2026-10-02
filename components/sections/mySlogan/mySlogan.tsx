import Container from "@/components/ui/container";

type SloganProps = {
    dict: {
        slogan: string;
        mainSlogan: string;
    };
};

const patternPath =
    "M44.7881 154.576L133.211 154.576L177.423 78L133.211 1.42382L44.7881 1.42383L0.576176 78L44.7881 154.576Z";

const patterns = [
    "bottom-0 end-4 lg:end-8 opacity-20",
    "-bottom-5 end-20 lg:-bottom-12 lg:end-56 opacity-30",
    "bottom-0 start-4 lg:start-8 opacity-30",
    "-bottom-5 start-20 lg:-bottom-12 lg:start-56 opacity-20",
];

export default function MySlogan({ dict }: SloganProps) {
    return (
        <section className="relative z-10 -mt-10 md:-my-10">
            <Container>
                <div className="relative min-h-[140px] overflow-hidden rounded-2xl flex items-center justify-center bg-slogan-background px-3.5 py-6 text-center text-xs shadow-2xl lg:py-10 lg:text-base">
                    <p className="h-fit w-full whitespace-pre-line text-slogan-text">
                        {dict.slogan} <em> “</em><em>{dict.mainSlogan}</em><em>” </em>
                    </p>

                    {patterns.map((className, index) => (
                        <svg
                            key={index}
                            width="178"
                            height="91"
                            viewBox="0 0 178 91"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            className={`absolute w-16 text-slogan-pattern lg:w-auto ${className}`}
                        >
                            <path d={patternPath} stroke="currentColor" />
                        </svg>
                    ))}
                </div>
            </Container>
        </section>
    );
}
