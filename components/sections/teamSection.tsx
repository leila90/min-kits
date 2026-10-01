import SectionTitle from "@/components/common/sectionTitle";
import Image from "next/image";

type Props = { lang: "fa" | "en"; dict: { title: string; subtitle: string } }

export default function TeamSection({lang, dict}: Props) {
    const team = [
        {
            name: "Priya Bhatt",
            role: "Owner",
            image: "/images/avatar2.jpg",
            highlight: false,
        },
        {
            name: "Kiran Saxena",
            role: "Founder",
            image: "/images/avatar2.jpg",
            highlight: true,
        },
        {
            name: "Rajesh Dixit",
            role: "HR",
            image: "/images/avatar2.jpg",
            highlight: false,
        }
    ]

    return (
        <section id={"team"} className="md:my-10 md:mx-30 my-5 mx-5 bg-transparent">
            <SectionTitle brand='MinKits Team' title='Our Exceptional Team' subTitle='Empowered by passion and skill, our Exceptional Team turns
                        challenges into opportunities for growth.' lang={lang}/>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-20">
                    {team.map((member, i) => (
                        <div
                            key={i}
                            className="relative rounded-xl border-2 bg-white px-6 my-5 text-center transition border-zinc-200 shadow-xl hover:border-zinc-500"
                        >
                            {/* Avatar */}
                            <div
                                className="absolute -top-1/2 left-1/2 -translate-x-1/2 rounded-full p-0.5 bg-linear-to-b from-white to-zinc-500">
                                <div
                                    className="rounded-full p-2 bg-white">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        className="h-20 w-20 rounded-full object-cover"
                                        width={100}
                                        height={100}
                                    />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="mt-14">
                                <h3 className="text-sm font-semibold text-zinc-900">
                                    {member.name}
                                </h3>
                                <p
                                    className="text-sm text-zinc-500">
                                    {member.role}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
            <section className="text-gray-600 body-font relative">
                <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
                    <div
                        className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                        <iframe width="100%" height="100%" className="absolute inset-0" frameBorder="0" title="map"
                                scrolling="no"
                                src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
                                style={{filter: "grayscale(1)", opacity:"0.4"}}></iframe>
                        <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                            <div className="lg:w-1/2 px-6">
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                                <p className="mt-1">Photo booth tattooed prism, portland taiyaki hoodie neutra
                                    typewriter</p>
                            </div>
                            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                                <a className="text-blue-500 leading-relaxed">example@email.com</a>
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                                <p className="leading-relaxed">123-456-7890</p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                        <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
                        <p className="leading-relaxed mb-5 text-gray-600">Post-ironic portland shabby chic echo park,
                            banjo fashion axe</p>
                        <div className="relative mb-4">
                            <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                            <input type="text" id="name" name="name"
                                   className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                            <input type="email" id="email" name="email"
                                   className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                            <textarea id="message" name="message"
                                      className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                        </div>
                        <button
                            className="text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">Button
                        </button>
                        <p className="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled
                            brook viral artisan.</p>
                    </div>
                </div>
            </section>
        </section>
    )
}
