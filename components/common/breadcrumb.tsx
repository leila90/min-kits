import Link from "next/link";
import type {Lang} from "@/app/i18n/config";
import type {Messages} from "@/app/i18n/messages";
import Container from "@/components/ui/container";
type Props={lang:Lang;dict:Messages["breadcrumbs"];page:"about"|"blog"};
export default function Breadcrumb({lang,dict,page}:Props){return <section className="mt-20 scroll-mt-36 md:scroll-mt-44"><Container><nav><ol className="flex items-center gap-2 whitespace-nowrap border-y border-breadcrumb-border py-2"><li><Link href={"/"+lang} className="text-sm text-breadcrumb-muted">{dict.home}</Link></li><li aria-hidden>›</li><li className="text-sm font-semibold text-breadcrumb-text">{page==="about"?dict.about:dict.blog}</li></ol></nav></Container></section>}