import "../../../styles/globals.css"
import Image from "next/image";

export function Error404ExampleWithTags() {
    return (
        <section className="grid min-h-screen place-items-center bg-gradient-to-br from-neutral-50 to-neutral-100 px-4 dark:from-neutral-900 dark:to-neutral-950">
            <div className="container mx-auto">
                <div className="mx-auto max-w-3xl text-center">
                    <div className="mb-8 flex justify-center">
                        <div className="relative">
                            <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-orange-400 to-red-400 opacity-20 blur-xl" />
                            <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-red-500 shadow-xl">
                                <Image
                                    src={'/images/fileQuestion.svg'}
                                    alt={'Image'}
                                    className="h-12 w-12 text-white"
                                    width={200}
                                    height={200}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-orange-50 px-4 py-1.5 text-sm font-semibold text-orange-600 dark:bg-orange-950/30 dark:text-orange-400">
                        Error 404
                    </div>

                    <h1 className="mb-4 text-5xl leading-tight font-bold md:text-6xl lg:text-7xl">
                        Page Not Found
                    </h1>

                    <h2 className="text-muted-foreground mb-6 text-xl font-semibold md:text-2xl">
                        Sorry, We Misplaced That Page
                    </h2>

                    <p className="text-muted-foreground mx-auto mb-4 max-w-2xl text-base leading-relaxed md:text-lg">
                        Our digital librarian seems to have misplaced the page you
                        requested. The page you&#39;re looking for might have been moved,
                        deleted, or doesn&#39;t exist.
                    </p>

                    <p className="text-muted-foreground mx-auto mb-10 text-base md:text-lg">
                        Try searching or explore these helpful links:
                    </p>

                    <div className="mx-auto mb-10 max-w-md">
                        <label htmlFor="input-group-1" className="block mb-2.5 text-sm font-medium text-heading">Your
                            Email</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-body" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                     width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeWidth="2"
                                          d="m3.5 5.5 7.893 6.036a1 1 0 0 0 1.214 0L20.5 5.5M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"/>
                                </svg>
                            </div>
                            <input type="text" id="input-group-1"
                                   className="block w-full ps-9 pe-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body"
                                   placeholder="name@flowbite.com"/>
                        </div>
                    </div>

                    <div className="mb-10 flex flex-wrap items-center justify-center gap-3">
                        <button type="button"
                                className="text-white bg-[#0f1419] hover:bg-[#0f1419]/90 focus:ring-4 focus:outline-none focus:ring-[#0f1419]/50 box-border border border-transparent font-medium leading-5 rounded-base text-sm px-4 py-2.5 text-center inline-flex items-center dark:hover:bg-[#24292F] dark:focus:ring-[#24292F]/55">
                            <svg className="w-4 h-4 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                 width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd"
                                      d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"
                                      clipRule="evenodd"/>
                            </svg>
                            Sign in with Github
                        </button>
                        <button type="button"
                                className="text-white bg-[#0f1419] hover:bg-[#0f1419]/90 focus:ring-4 focus:outline-none focus:ring-[#0f1419]/50 box-border border border-transparent font-medium leading-5 rounded-base text-sm px-4 py-2.5 text-center inline-flex items-center dark:hover:bg-[#24292F] dark:focus:ring-[#24292F]/55">
                            <svg className="w-4 h-4 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                 width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd"
                                      d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"
                                      clipRule="evenodd"/>
                            </svg>
                            Sign in with Github
                        </button>
                    </div>

                    <div className="border-t pt-8 dark:border-neutral-800">
                        <p className="text-muted-foreground mb-4 text-sm font-medium">
                            Quick Links
                        </p>
                        gg
                    </div>
                </div>
            </div>
        </section>
    )
}
