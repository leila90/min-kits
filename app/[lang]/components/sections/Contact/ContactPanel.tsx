export default function ContactPanel({ text }: { text: string }) {
  return (
    <div className="flex items-center justify-center rounded-2xl bg-black p-10 text-center text-white">
      <p className="max-w-sm text-lg leading-8 text-white/75">{text}</p>
    </div>
  );
}
