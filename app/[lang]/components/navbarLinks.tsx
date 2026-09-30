import Link from "next/link";

type Props = { links: readonly (readonly [string, string])[]; onClick?: () => void };

export default function NavbarLinks({ links, onClick }: Props) {
  return (
    <>
      {links.map(([href, label]) => (
        <Link key={href} href={href} onClick={onClick} className="block rounded-lg px-3 py-3 font-semibold hover:bg-zinc-100 lg:px-0 lg:py-0 lg:hover:bg-transparent lg:hover:text-white/70">
          {label}
        </Link>
      ))}
    </>
  );
}
