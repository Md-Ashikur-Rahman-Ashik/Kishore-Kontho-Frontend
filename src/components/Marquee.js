export default function Marquee({ text }) {
  return (
    <div className="bg-yellow-300 py-2 overflow-hidden whitespace-nowrap animate-scroll">
      <p className="inline-block font-medium">{text}</p>
    </div>
  );
}