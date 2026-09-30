export default function Card() {
    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <div className="max-w-4xl w-full px-4 py-24 mx-auto sm:px-6 lg:px-8">
                <div className="relative overflow-hidden bg-white shadow-2xl rounded-3xl">

                    {/* Content */}
                    <div className="relative z-10 p-8 text-center md:p-16 lg:p-20">
                        <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl">
                            Own an AI Tool?
                        </h2>

                        <p className="max-w-2xl mx-auto mb-8 text-lg text-zinc-600">
                            Join our curated collection of AI tools and reach thousands of potential users
                        </p>

                        <a
                            href="https://eliteai.tools/tool/submit-new-tool"
                            className="inline-block px-8 py-4 text-lg font-semibold text-white transition-all duration-200 bg-indigo-600 rounded-xl hover:bg-indigo-700 hover:shadow-lg transform hover:-translate-y-0.5"
                        >
                            Submit Your Tool
                        </a>
                    </div>

                    {/* Floating Icons */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <img
                            className="absolute w-16 h-26 animate-float opacity-40"
                            style={{ animationDelay: "0.1s", top: "15%", left: "5%" }}
                            src="https://eliteai.tools/images/home/1.svg"
                            alt="AI Icon"
                        />
                        <img
                            className="absolute w-16 h-16 animate-float opacity-40"
                            style={{ animationDelay: "0.6s", top: "5%", right: "5%" }}
                            src="https://eliteai.tools/images/home/3.svg"
                            alt="AI Icon"
                        />
                        <img
                            className="absolute w-16 h-16 animate-float opacity-40"
                            style={{ animationDelay: "0.8s", top: "45%", left: "15%" }}
                            src="https://eliteai.tools/images/home/5.svg"
                            alt="AI Icon"
                        />
                        <img
                            className="absolute w-16 h-16 animate-float opacity-40"
                            style={{ animationDelay: "1.2s", top: "45%", right: "15%" }}
                            src="https://eliteai.tools/images/home/10.svg"
                            alt="AI Icon"
                        />
                        <img
                            className="absolute w-16 h-16 animate-float opacity-40"
                            style={{ animationDelay: "1.4s", top: "85%", left: "5%" }}
                            src="https://eliteai.tools/images/home/4.svg"
                            alt="AI Icon"
                        />
                        <img
                            className="absolute w-16 h-16 animate-float opacity-40"
                            style={{ animationDelay: "1.8s", top: "85%", right: "5%" }}
                            src="https://eliteai.tools/images/home/8.svg"
                            alt="AI Icon"
                        />
                        <img
                            className="absolute w-16 h-16 animate-float opacity-40 hidden md:block"
                            style={{ animationDelay: "2s", top: "25%", left: "30%" }}
                            src="https://eliteai.tools/images/home/9.svg"
                            alt="AI Icon"
                        />
                        <img
                            className="absolute w-16 h-16 animate-float opacity-40 hidden md:block"
                            style={{ animationDelay: "2.2s", top: "65%", right: "30%" }}
                            src="https://eliteai.tools/images/home/7.svg"
                            alt="AI Icon"
                        />
                    </div>

                </div>
            </div>
        </div>
    )
}
