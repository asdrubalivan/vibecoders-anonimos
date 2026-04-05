export default function Footer() {
  return (
    <footer className="bg-[#2a1f1a] text-[#c9b99a] mt-auto py-10 px-4">
      <div className="max-w-5xl mx-auto text-center space-y-3">
        <p className="text-xl font-bold text-[#f5f0e8]">Vibecoders Anónimos</p>
        <p className="text-sm italic">
          &ldquo;No estamos en contra de la IA. Estamos en contra de no entender lo que hace.&rdquo;
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-xs mt-4 opacity-70">
          <span>📍 Reuniones virtuales cada jueves 20:00 CET</span>
          <span>|</span>
          <span>📞 Línea de crisis: No. Aprende a depurar.</span>
          <span>|</span>
          <span>✉️ contacto@vibecoders-anonimos.fake</span>
        </div>
        <p className="text-xs opacity-50 mt-4">
          © 2024 Vibecoders Anónimos · Organización sin ánimo de lucro (ni de código) ·{" "}
          <span className="italic">
            Ningún modelo de lenguaje fue dañado en la creación de esta web. Varios programadores, sí.
          </span>
        </p>
      </div>
    </footer>
  );
}
