"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const confesionesEjemplo = [
  {
    pecado: "Generé una API REST completa con ChatGPT, la desplegué en producción, y cuando mi CTO me preguntó cómo funcionaba el middleware de autenticación, dije 'déjame mirarlo'.",
    penitencia: "Leer la documentación de OAuth 2.0 completa. Sin saltarse las notas al pie.",
    gravedad: "mortal",
    absuelto: true,
    tiempo: "hace 2 semanas",
  },
  {
    pecado: "Copié y pegué código de la IA que incluía comentarios como 'TODO: fix this properly'. Lo dejé en producción 3 meses.",
    penitencia: "Revisar todos los TODO de tu repositorio y resolverlos uno por uno, sin ayuda de IA.",
    gravedad: "venial",
    absuelto: true,
    tiempo: "hace 1 semana",
  },
  {
    pecado: "Le pregunté a Claude qué hacía una línea de código de mi propio proyecto. Me dijo que él no la había escrito. Tenía razón, la había escrito Copilot.",
    penitencia: "Escribir a mano (papel y lapicero) las 20 líneas más importantes de tu proyecto.",
    gravedad: "mortal",
    absuelto: false,
    tiempo: "hace 3 días",
  },
  {
    pecado: "He nombrado variables según lo que sugería la IA aunque no tuvieran sentido para mí. Mi código tiene variables que se llaman 'temporaryDataProcessingHandlerInstance'.",
    penitencia: "Refactorizar todas las variables con nombres absurdos. Tú eliges los nombres esta vez.",
    gravedad: "venial",
    absuelto: true,
    tiempo: "hace 4 días",
  },
  {
    pecado: "Hice un PR con 847 líneas generadas por IA. Cuando el revisor pidió explicación de cada función, dije 'está bien documentado'. No lo estaba.",
    penitencia: "Documentar retroactivamente el PR. Cada función. Sin mentir.",
    gravedad: "mortal",
    absuelto: false,
    tiempo: "ayer",
  },
];

const penitencias = [
  "Leer la documentación oficial de principio a fin, sin saltarte nada.",
  "Escribir el mismo código tres veces sin copiar y pegar.",
  "Explicar tu último PR a una persona no técnica de tu entorno.",
  "Hacer un code review de tu propio código de hace 6 meses, sin juzgarte.",
  "Escribir tests para una función que jamás los tuvo.",
  "Leer un libro de programación. Un libro. Con páginas.",
  "Depurar un bug sin buscar en Google ni en la IA. Solo con el debugger.",
  "Reescribir desde cero una función que generaste con IA. Tú solo.",
  "Enseñarle a alguien junior lo que aprendiste esta semana.",
  "Hacer un commit con un mensaje descriptivo de más de 10 palabras.",
];

type Gravedad = "venial" | "mortal" | "capital";

const gravedadLabels: Record<Gravedad, { label: string; color: string }> = {
  venial: { label: "Pecado Venial", color: "bg-yellow-100 text-yellow-800" },
  mortal: { label: "Pecado Mortal", color: "bg-red-100 text-red-800" },
  capital: { label: "Pecado Capital", color: "bg-[#2a1f1a] text-[#f5f0e8]" },
};

export default function Confesionario() {
  const [paso, setPaso] = useState<"inicio" | "formulario" | "absolucion">("inicio");
  const [confesion, setConfesion] = useState("");
  const [gravedad, setGravedad] = useState<Gravedad>("venial");
  const [penitencia, setPenitencia] = useState("");

  function confesar() {
    if (!confesion.trim()) return;
    const p = penitencias[Math.floor(Math.random() * penitencias.length)];
    setPenitencia(p);
    setPaso("absolucion");
  }

  function nueva() {
    setConfesion("");
    setGravedad("venial");
    setPaso("formulario");
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <header className="bg-[#2a1f1a] text-[#f5f0e8] py-14 px-4 text-center">
        <p className="text-[#d4a017] text-xs uppercase tracking-widest font-bold mb-3">
          Espacio Sagrado de Reconocimiento
        </p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">El Confesionario</h1>
        <p className="text-base opacity-80 max-w-xl mx-auto">
          Un espacio anónimo y seguro para confesar tus pecados como vibecoder.
          El padre Código escucha sin juzgar. Bueno, un poco sí.
        </p>
      </header>

      <main className="flex-1 py-16 px-4 bg-[#faf6ee]">
        <div className="max-w-2xl mx-auto">

          {paso === "inicio" && (
            <div className="text-center">
              <div className="bg-[#2a1f1a] rounded-2xl p-10 mb-8 shadow-xl inline-block">
                <div className="text-8xl mb-4">⛪</div>
                <p className="text-[#c9b99a] text-sm italic max-w-sm">
                  &ldquo;Antes de confesar, recuerda: la absolución no te libera
                  de hacer el code review.&rdquo;
                </p>
              </div>
              <div>
                <p className="text-[#4a3728] mb-6 leading-relaxed">
                  El confesionario de Vibecoders Anónimos es un espacio anónimo donde
                  puedes reconocer tus errores como programador dependiente de IA.
                  No guardamos datos. No te juzgamos (mucho). Sí te damos penitencia.
                </p>
                <button
                  onClick={() => setPaso("formulario")}
                  className="bg-[#8b1a1a] text-[#f5f0e8] font-bold px-10 py-4 rounded-lg hover:bg-[#6b1414] transition-colors uppercase tracking-wide text-sm"
                >
                  Entrar al confesionario
                </button>
              </div>
            </div>
          )}

          {paso === "formulario" && (
            <div className="bg-white border border-[#c9b99a] rounded-xl p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">🕯️</span>
                <div>
                  <h2 className="text-xl font-bold text-[#2a1f1a]">
                    Bienvenido, hijo pródigo del prompt engineering
                  </h2>
                  <p className="text-sm text-[#6b5a4e]">
                    ¿Cuánto tiempo llevas sin confesar?
                  </p>
                </div>
              </div>

              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-bold text-[#2a1f1a] mb-2">
                    Tu confesión
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Padre Código, me acuso de... (sé específico, la vaguedad no te absolverá)"
                    value={confesion}
                    onChange={(e) => setConfesion(e.target.value)}
                    className="w-full border border-[#c9b99a] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#8b1a1a] bg-[#faf6ee] resize-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-[#2a1f1a] mb-2">
                    Gravedad del pecado
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {(["venial", "mortal", "capital"] as Gravedad[]).map((g) => (
                      <button
                        key={g}
                        onClick={() => setGravedad(g)}
                        className={`py-3 px-2 rounded-lg border-2 text-xs font-bold uppercase tracking-wide transition-colors ${
                          gravedad === g
                            ? "border-[#8b1a1a] bg-[#8b1a1a] text-[#f5f0e8]"
                            : "border-[#c9b99a] bg-[#faf6ee] text-[#4a3728] hover:border-[#8b1a1a]"
                        }`}
                      >
                        {g === "venial" && "😅 Venial"}
                        {g === "mortal" && "😰 Mortal"}
                        {g === "capital" && "💀 Capital"}
                      </button>
                    ))}
                  </div>
                  <p className="text-xs text-[#6b5a4e] mt-2 italic">
                    {gravedad === "venial" && "Generar código sin leerlo con cuidado. Frecuente, perdonable."}
                    {gravedad === "mortal" && "Desplegar en producción código que no entiendes. Grave."}
                    {gravedad === "capital" && "Decir que eres senior sin poder explicar tu propio proyecto. Imperdonable, pero aquí estás."}
                  </p>
                </div>

                <button
                  onClick={confesar}
                  disabled={!confesion.trim()}
                  className="w-full bg-[#2a1f1a] text-[#f5f0e8] font-bold py-4 rounded-lg hover:bg-[#3d2d24] transition-colors disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-wide text-sm"
                >
                  🙏 Confesar y recibir penitencia
                </button>
              </div>
            </div>
          )}

          {paso === "absolucion" && (
            <div className="space-y-6 text-center">
              <div className="bg-white border border-[#c9b99a] rounded-xl p-8 shadow-sm">
                <div className="text-5xl mb-4">✝️</div>
                <div className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-4 ${gravedadLabels[gravedad].color}`}>
                  {gravedadLabels[gravedad].label}
                </div>
                <h2 className="text-xl font-bold text-[#2a1f1a] mb-4">
                  Tu confesión ha sido recibida
                </h2>
                <div className="bg-[#faf6ee] border border-[#c9b99a] rounded-lg px-5 py-4 text-left mb-5">
                  <p className="text-xs font-bold text-[#6b5a4e] uppercase tracking-widest mb-2">
                    Tu pecado:
                  </p>
                  <p className="text-sm text-[#2a1f1a] italic">&ldquo;{confesion}&rdquo;</p>
                </div>

                <div className="bg-[#2a1f1a] text-[#f5f0e8] rounded-lg px-6 py-5 text-left">
                  <p className="text-xs font-bold text-[#d4a017] uppercase tracking-widest mb-2">
                    Tu penitencia:
                  </p>
                  <p className="text-sm leading-relaxed">{penitencia}</p>
                </div>

                <div className="mt-6 bg-[#f0fdf4] border border-[#86efac] rounded-lg px-5 py-4">
                  <p className="text-sm text-[#166534] font-bold mb-1">
                    Ego te absolvo
                  </p>
                  <p className="text-xs text-[#166534]">
                    En el nombre del Código Limpio, del Pull Request Bien Descrito,
                    y del Test Unitario. Amén.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={nueva}
                  className="flex-1 bg-[#8b1a1a] text-[#f5f0e8] font-bold py-3 rounded-lg hover:bg-[#6b1414] transition-colors text-sm"
                >
                  Confesar otro pecado
                </button>
                <button
                  onClick={() => setPaso("inicio")}
                  className="flex-1 bg-[#faf6ee] border border-[#c9b99a] text-[#4a3728] font-bold py-3 rounded-lg hover:bg-[#f0e8d8] transition-colors text-sm"
                >
                  Salir del confesionario
                </button>
              </div>
            </div>
          )}

          {/* Confesiones recientes */}
          <div className="mt-14">
            <h2 className="text-xl font-bold text-[#2a1f1a] mb-2">
              Confesiones recientes de la comunidad
            </h2>
            <p className="text-sm text-[#6b5a4e] italic mb-6">
              Publicadas con permiso anónimo. La vergüenza compartida es vergüenza aliviada.
            </p>
            <div className="space-y-4">
              {confesionesEjemplo.map((c, i) => (
                <div
                  key={i}
                  className="bg-white border border-[#c9b99a] rounded-xl overflow-hidden shadow-sm"
                >
                  <div className="px-5 py-4">
                    <p className="text-sm text-[#2a1f1a] italic mb-3">
                      &ldquo;{c.pecado}&rdquo;
                    </p>
                    <div className="bg-[#f0e8d8] rounded-lg px-4 py-3 mb-3">
                      <p className="text-xs font-bold text-[#8b1a1a] mb-1">
                        Penitencia asignada:
                      </p>
                      <p className="text-xs text-[#4a3728]">{c.penitencia}</p>
                    </div>
                    <div className="flex items-center justify-between text-xs text-[#6b5a4e]">
                      <span>{c.tiempo}</span>
                      <span
                        className={`font-bold px-2 py-0.5 rounded-full ${
                          c.absuelto
                            ? "bg-[#e8f5e9] text-[#2e7d32]"
                            : "bg-[#ffeedd] text-[#b45309]"
                        }`}
                      >
                        {c.absuelto ? "✓ Absuelto" : "⏳ Pendiente de penitencia"}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
