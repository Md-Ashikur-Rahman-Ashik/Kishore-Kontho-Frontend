export default function Footer({ info }) {
  return (
    <footer className="bg-gray-900 text-white p-6 mt-12 text-center">
      <p className="mb-4">{info?.footerText}</p>
      <div className="flex justify-center gap-4 flex-wrap text-sm">
        {info?.facebook && <a href={info.facebook} target="_blank" className="hover:underline">Facebook</a>}
        {info?.youtube && <a href={info.youtube} target="_blank" className="hover:underline">YouTube</a>}
        {info?.instagram && <a href={info.instagram} target="_blank" className="hover:underline">Instagram</a>}
        {info?.linkedIn && <a href={info.linkedIn} target="_blank" className="hover:underline">LinkedIn</a>}
      </div>
    </footer>
  );
}