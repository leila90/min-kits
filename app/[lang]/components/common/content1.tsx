import SectionTitle from "@/app/[lang]/components/common/sectionTitle";
import {CheckBadgeIcon, CheckCircleIcon, LockClosedIcon} from "@heroicons/react/16/solid";
import Image from "next/image";

type Props = {
    lang: "fa" | "en"
}

export default function Content1({lang}: Props) {

    return (
        <section id={"aboutUs"} className="pb-10 mx-5 bg-transparent">
            {/*<SectionTitle brand='MinKits Team' title='Our Exceptional Team' subTitle='Empowered by passion and skill, our Exceptional Team turns*/}
            {/*            challenges into opportunities for growth.' lang={lang}/>*/}
            {/*<section className="py-24 bg-transparent">*/}
            <div className="mx-auto max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">

                    {/* Left content */}
                    <div className="bg-white rounded-2xl flex flex-col justify-between">
                        <div>

                            <p className="text-zinc-500 leading-relaxed mb-8 text-justify">
                                the creation of environments where everyone has the opportunity
                                to thrive. This approach not only promotes individual success
                                but also contributes to the overall resilience and cohesion of
                                society.
                            </p>

                            <ul className="space-y-4 mb-10">
                                {[
                                    "More than 10 years of experience.",
                                    "Over 100k happy customers and finished projects.",
                                    "It has 20 branches around the world.",
                                    "60 Team members are individuals",
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckBadgeIcon
                                            aria-hidden="true" className="size-5 flex-none text-zinc-900" />
                                        <span className="text-zinc-600">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            {/* Stats */}
                            {/*<div className="grid grid-cols-3 gap-6 border-t border-zinc-900 pt-6">*/}
                            {/*    <Stat value="5.6M+" label="Downloads"/>*/}
                            {/*    <Stat value="3.2+" label="Active Users"/>*/}
                            {/*    <Stat value="4.9" label="Ratings"/>*/}
                            {/*</div>*/}
                            {/* Stats */}
                            <div className="bg-white dark:bg-neutral-800">
                                <div className="max-w-5xl px-4 xl:px-0 py-10 mx-auto">
                                    {/*<div className="border border-gray-200 dark:border-neutral-700 rounded-xl">*/}
                                        <div className="p-4 lg:p-8">
                                            <div className="grid grid-cols-1 sm:grid-cols-3 items-center gap-y-20 gap-x-12">
                                                {/* Stats */}
                                                <div className="relative text-center first:before:hidden before:absolute before:-top-full sm:before:top-1/2 before:inset-s-1/2 sm:before:-inset-s-6 before:h-20 before:border-s before:border-gray-200 dark:before:border-neutral-700 before:rotate-60 sm:before:rotate-12 before:transform sm:before:-translate-y-1/2 before:-translate-x-1/2 sm:before:translate-x-0 before:mt-3.5 sm:before:mt-0">
                                                    <svg className="shrink-0 size-6 sm:size-8 text-gray-800 dark:text-white mx-auto" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m11 17 2 2a1 1 0 1 0 3-3"/><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"/><path d="m21 3 1 11h-2"/><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"/><path d="M3 4h8"/></svg>
                                                    <div className="mt-3 sm:mt-5">
                                                        <h3 className="text-lg sm:text-3xl font-semibold text-gray-800 dark:text-neutral-200">5.6M+</h3>
                                                        <p className="mt-1 text-sm sm:text-base text-gray-500 dark:text-neutral-400">Downloads</p>
                                                    </div>
                                                </div>
                                                {/* End Stats */}

                                                {/* Stats */}
                                                <div className="relative text-center first:before:hidden before:absolute before:-top-full sm:before:top-1/2 before:inset-s-1/2 sm:before:-inset-s-6 before:h-20 before:border-s before:border-gray-600 dark:before:border-neutral-700 before:rotate-60 sm:before:rotate-12 before:transform sm:before:-translate-y-1/2 before:-translate-x-1/2 sm:before:translate-x-0 before:mt-3.5 sm:before:mt-0">
                                                    <div className="flex justify-center items-center -space-x-5">
                                                        <svg className="shrink-0 size-6 sm:size-8 text-gray-800 dark:text-white mx-auto" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m11 17 2 2a1 1 0 1 0 3-3"/><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"/><path d="m21 3 1 11h-2"/><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"/><path d="M3 4h8"/></svg>
                                                    </div>
                                                    <div className="mt-3 sm:mt-5">
                                                        <h3 className="text-lg sm:text-3xl font-semibold text-gray-800 dark:text-neutral-200">3.2+</h3>
                                                        <p className="mt-1 text-sm sm:text-base text-gray-500 dark:text-neutral-400">Active Users</p>
                                                    </div>
                                                </div>
                                                {/* End Stats */}

                                                {/* Stats */}
                                                <div className="relative text-center first:before:hidden before:absolute before:-top-full sm:before:top-1/2 before:inset-s-1/2 sm:before:-inset-s-6 before:h-20 before:border-s before:border-gray-600 dark:before:border-neutral-700 before:rotate-60 sm:before:rotate-12 before:transform sm:before:-translate-y-1/2 before:-translate-x-1/2 sm:before:translate-x-0 before:mt-3.5 sm:before:mt-0">
                                                    <svg className="shrink-0 size-6 sm:size-8 text-gray-800 dark:text-white mx-auto" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17"/><path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"/><path d="m2 16 6 6"/><circle cx="16" cy="9" r="2.9"/><circle cx="6" cy="5" r="3"/></svg>
                                                    <div className="mt-3 sm:mt-5">
                                                        <h3 className="text-lg sm:text-3xl font-semibold text-gray-800 dark:text-neutral-200">4.9</h3>
                                                        <p className="mt-1 text-sm sm:text-base text-gray-500 dark:text-neutral-400">Ratings</p>
                                                    </div>
                                                </div>
                                                {/* End Stats */}
                                            </div>
                                        </div>
                                    {/*</div>*/}
                                </div>
                            </div>
                            {/* End Stats */}
                        </div>
                    </div>

                    {/* Right image card */}
                    <div className="relative overflow-hidden rounded-2xl">
                        <Image
                            src="/images/about2.webp"
                            alt="About us"
                            className="h-full w-full object-cover"
                            width={100}
                            height={100}
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/40"/>

                        {/* Content */}
                        <div className="absolute inset-0 flex flex-col justify-between p-8">
                            <div>
                            </div>

                            <div>
                                <span className="text-xl font-bold text-white/80">About us</span>
                                <h3 className="mt-3 text-xl text-white leading-snug text-justify">
                                    I&apos;m absolutely floored by the level of care and attention to detail the team at Preline have put into this project and for one can guarantee that we will be a return customer.
                                </h3>
                            </div>                        </div>
                    </div>

                </div>
            </div>
            {/*</section>*/}
        </section>
    )
}

function Stat({value, label}: { value: string; label: string }) {
    return (
        <div className="flex flex-col items-center">
            <p className="text-2xl font-semibold text-zinc-900">{value}</p>
            <p className="text-sm text-zinc-700">{label}</p>
        </div>
    )
}
