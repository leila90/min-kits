import SectionTitle from "@/components/common/sectionTitle";
import Container from "@/components/ui/container";
import type {Messages} from "@/app/i18n/messages";

type Props = {
    lang: "fa" | "en";
    dict: Messages["contact"];
};

export default function TeamContact({lang, dict}: Props) {
    return (
        <section id="teamContact" className="scroll-mt-36 py-16 md:scroll-mt-44 md:py-20">
            <Container>
                <SectionTitle
                    brand="MinKits Team"
                    title={dict.title}
                    subTitle={dict.subtitle}
                    marginTop="16"
                    lang={lang}
                />

                <div className="grid min-w-0 grid-cols-1 gap-10 lg:grid-cols-3">
                    <div className="relative min-w-0 overflow-hidden rounded-lg bg-team-contact-map p-10 lg:col-span-2">
                        <iframe
                            width="100%"
                            height="100%"
                            className="absolute inset-0"
                            frameBorder="0"
                            title="map"
                            scrolling="no"
                            src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
                            style={{filter: "grayscale(1)", opacity: "0.4"}}
                        />
                        <div className="relative flex min-w-0 flex-wrap rounded bg-team-contact-background py-6 shadow-md">
                            <div className="min-w-0 px-6 lg:w-1/2">
                                <h2 className="text-xs font-semibold tracking-widest text-team-contact-heading">ADDRESS</h2>
                                <p className="mt-1">Photo booth tattooed prism, portland taiyaki hoodie neutra
                                    typewriter</p>
                            </div>
                            <div className="mt-4 min-w-0 px-6 lg:mt-0 lg:w-1/2">
                                <h2 className="text-xs font-semibold tracking-widest text-team-contact-heading">EMAIL</h2>
                                <a className="text-team-contact-link leading-relaxed">example@email.com</a>
                                <h2 className="mt-4 text-xs font-semibold tracking-widest text-team-contact-heading">PHONE</h2>
                                <p className="leading-relaxed">123-456-7890</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex w-full min-w-0 flex-col bg-team-contact-background lg:py-8">
                        <h2 className="mb-1 text-lg font-medium text-team-contact-heading">Feedback</h2>
                        <p className="mb-5 leading-relaxed text-team-contact-muted">Post-ironic portland shabby chic echo park,
                            banjo fashion axe</p>

                        <div className="relative mb-4">
                            <label htmlFor="team-contact-name" className="text-sm leading-7 text-team-contact-muted">Name</label>
                            <input
                                type="text"
                                id="team-contact-name"
                                name="name"
                                className="w-full rounded border border-team-contact-border bg-team-contact-background px-3 py-1 text-base leading-8 text-team-contact-muted outline-none transition-colors duration-200 ease-in-out focus:border-team-contact-focus focus:ring-2 focus:ring-team-contact-focus-ring"
                            />
                        </div>

                        <div className="relative mb-4">
                            <label htmlFor="team-contact-email" className="text-sm leading-7 text-team-contact-muted">Email</label>
                            <input
                                type="email"
                                id="team-contact-email"
                                name="email"
                                className="w-full rounded border border-team-contact-border bg-team-contact-background px-3 py-1 text-base leading-8 text-team-contact-muted outline-none transition-colors duration-200 ease-in-out focus:border-team-contact-focus focus:ring-2 focus:ring-team-contact-focus-ring"
                            />
                        </div>

                        <div className="relative mb-4">
                            <label htmlFor="team-contact-message" className="text-sm leading-7 text-team-contact-muted">Message</label>
                            <textarea
                                id="team-contact-message"
                                name="message"
                                className="h-32 w-full resize-none rounded border border-team-contact-border bg-team-contact-background px-3 py-1 text-base leading-6 text-team-contact-muted outline-none transition-colors duration-200 ease-in-out focus:border-team-contact-focus focus:ring-2 focus:ring-team-contact-focus-ring"
                            />
                        </div>

                        <button
                            type="button"
                            className="rounded border-0 bg-team-contact-button px-6 py-2 text-lg text-white transition-colors hover:bg-team-contact-button-hover focus:outline-none"
                        >
                            Button
                        </button>
                        <p className="mt-3 text-xs text-team-contact-note">Chicharrones blog helvetica normcore iceland tousled
                            brook viral artisan.</p>
                    </div>
                </div>
            </Container>
        </section>
    );
}
