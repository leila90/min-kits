import Link from "next/link";
import type {Lang} from "@/app/i18n/config";
import type {Messages} from "@/app/i18n/messages";
type Props={lang:Lang;dict:Messages["breadcrumbs"];page:"about"|"blog"};
export default function Breadcrumb({lang,dict,page}:Props){return <section className="mt-20 md:mx-30 mx-5"><nav><ol className="flex items-center gap-2 whitespace-nowrap py-2 border-y border-zinc-400"><li><Link href={"/"+lang} className="text-sm text-zinc-500">{dict.home}</Link></li><li aria-hidden>›</li><li className="text-sm font-semibold">{page==="about"?dict.about:dict.blog}</li></ol></nav></section>}