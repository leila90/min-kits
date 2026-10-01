export default function TeamContact() {
    return (
        <div className="grid min-w-0 grid-cols-1 gap-10 py-24 md:grid-cols-2 lg:grid-cols-3">
            <div className="relative min-w-0 overflow-hidden rounded-lg bg-team-contact-map p-10 md:col-span-1 lg:col-span-2">
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
                <div className="relative flex flex-wrap rounded bg-team-contact-background py-6 shadow-md">
                    <div className="px-6 lg:w-1/2">
                        <h2 className="title-font text-xs font-semibold tracking-widest text-team-contact-heading">ADDRESS</h2>
                        <p className="mt-1">Photo booth tattooed prism, portland taiyaki hoodie neutra
                            typewriter</p>
                    </div>
                    <div className="mt-4 px-6 lg:mt-0 lg:w-1/2">
                        <h2 className="title-font text-xs font-semibold tracking-widest text-gray-900">EMAIL</h2>
                        <a className="text-team-contact-link leading-relaxed">example@email.com</a>
                        <h2 className="title-font mt-4 text-xs font-semibold tracking-widest text-gray-900">PHONE</h2>
                        <p className="leading-relaxed">123-456-7890</p>
                    </div>
                </div>
            </div>
            <div className="mt-8 flex w-full flex-col bg-white md:ml-auto md:mt-0 md:w-1/2 md:py-8 lg:w-1/3">
                <h2 className="title-font mb-1 text-lg font-medium text-gray-900">Feedback</h2>
                <p className="mb-5 leading-relaxed text-team-contact-muted">Post-ironic portland shabby chic echo park,
                    banjo fashion axe</p>
                <div className="relative mb-4">
                    <label htmlFor="name" className="text-sm leading-7 text-gray-600">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full rounded border border-team-contact-border bg-white px-3 py-1 text-base leading-8 text-team-contact-muted outline-none transition-colors duration-200 ease-in-out focus:border-team-contact-focus focus:ring-2 focus:ring-team-contact-focus-ring"
                    />
                </div>
                <div className="relative mb-4">
                    <label htmlFor="email" className="text-sm leading-7 text-gray-600">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full rounded border border-gray-300 bg-white px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                    />
                </div>
                <div className="relative mb-4">
                    <label htmlFor="message" className="text-sm leading-7 text-gray-600">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        className="h-32 w-full resize-none rounded border border-gray-300 bg-white px-3 py-1 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                    />
                </div>
                <button className="rounded border-0 bg-team-contact-button px-6 py-2 text-lg text-white focus:outline-none hover:bg-team-contact-button-hover">Button</button>
                <p className="mt-3 text-xs text-team-contact-note">Chicharrones blog helvetica normcore iceland tousled
                    brook viral artisan.</p>
            </div>
        </div>
    );
}
