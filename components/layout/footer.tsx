import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/container";
import {Button, Divider, Input} from "@/components/ui";

type FooterProps = { lang: "fa" | "en"; dict: { description: string; important: string; social: string; subscribe: string; emailPlaceholder: string; button: string; terms: string; privacy: string; copyright: string; home: string; about: string; portfolio: string; contact: string; faq: string; componentPacks: string } };

export default function Footer({ lang, dict }: FooterProps) {
    return (
        <section id="footer" className="scroll-mt-36 md:scroll-mt-44">
            <footer dir={lang === "fa" ? "rtl" : "ltr"} className="bg-footer-background pt-20 pb-12 md:pt-38">
                <Container>
                    <div className="flex flex-wrap justify-between gap-y-12 lg:gap-x-8">
                        <div className="w-full md:w-[45%] lg:w-[35%] flex flex-col items-center md:items-start text-center md:text-start">

                            <Image src="/logo-ww.png" alt="" height={150} width={150}/>
                            <div className="my-4 w-full"><Divider variant="gradient" direction={lang === "fa" ? "rtl" : "ltr"} className="from-footer-divider-start to-footer-divider-end" /></div>
                            <p className='max-w-sm text-sm leading-relaxed text-footer-muted'>{dict.description}</p>
                        </div>
                        <div className="w-full md:w-[45%] lg:w-[15%] flex flex-col items-center md:items-start text-center md:text-start">
                            <h3 className='text-sm font-medium text-footer-heading'>{dict.important}</h3>
                            <div className="flex flex-col gap-2 mt-6">
                                <Link href={`/${lang}`} className='text-sm text-footer-muted transition-colors hover:text-footer-heading'>{dict.home}</Link>
                                <Link href={`/${lang}/about`} className='text-sm text-footer-muted transition-colors hover:text-footer-heading'>{dict.about}</Link>                           <Link href={`/${lang}/components/component-packs`} className='text-sm text-footer-muted transition-colors hover:text-footer-heading'>{dict.componentPacks}</Link>
                                <span className='text-sm text-footer-muted'>{dict.portfolio}</span>
                                <Link href={`/${lang}#contactUs`} className='text-sm text-footer-muted hover:text-footer-heading transition-colors'>{dict.contact}</Link>
                                <span className='text-sm text-footer-muted'>{dict.faq}</span>
                            </div>
                        </div>
                        <div className="w-full md:w-[45%] lg:w-[15%] flex flex-col items-center md:items-start text-center md:text-start">
                            <h3 className='text-sm text-footer-heading font-medium'>{dict.social}</h3>
                            <div className="flex flex-col gap-2 mt-6">
                                <span className='text-sm text-footer-muted'>Twitter</span>
                                <span className='text-sm text-footer-muted'>Instagram</span>
                                <span className='text-sm text-footer-muted'>Youtube</span>
                                <span className='text-sm text-footer-muted'>Linkedin</span>
                            </div>
                        </div>
                        <div className="w-full md:w-[45%] lg:w-[25%] flex flex-col items-center md:items-start text-center md:text-start">
                            <h3 className='text-sm text-footer-heading font-medium'>{dict.subscribe}</h3>
                            <div className="mt-4 flex h-13 w-full max-w-80 min-w-0 items-center gap-2 overflow-hidden rounded-full border border-footer-border">
                                <Input
                                    type="email"
                                    name="newsletter-email"
                                    autoComplete="off"
                                    placeholder={dict.emailPlaceholder}
                                    required
                                    className="h-full rounded-full border-0 bg-transparent px-6 text-sm text-footer-heading focus:border-0 [&:-webkit-autofill]:[box-shadow:0_0_0_1000px_#000_inset] [&:-webkit-autofill]:[-webkit-text-fill-color:#fff]"
                                />
                                <Button
                                    type="button"
                                    size="sm"
                                    radius="full"
                                    className="me-1.5 h-10 shrink-0 rounded-full bg-linear-to-b from-footer-button-start to-footer-button-end px-5 text-sm text-footer-button-text hover:bg-linear-to-b hover:from-footer-button-hover-start hover:to-footer-button-hover-end"
                                >
                                    {dict.button}
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="mb-4 mt-16 w-full"><Divider className="bg-footer-border" /></div>
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className='text-xs text-footer-muted'>{dict.copyright}</p>
                        <div className="flex items-center gap-6">
                            <span className='text-xs text-footer-muted'>{dict.terms}</span>
                            <div className='h-4 w-px bg-footer-border'></div>
                            <span className='text-xs text-footer-muted'>{dict.privacy}</span>
                        </div>
                    </div>
                </Container>
            </footer>
        </section>
    );
};
