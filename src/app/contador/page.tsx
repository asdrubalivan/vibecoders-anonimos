"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const logros = [
  { dias: 1, titulo: "Primer día", desc: "Sobreviviste 24 horas sin pedirle código a una IA. Histórico.", emoji: "🌱" },
  { dias: 3, titulo: "3 días", desc: "Has escrito al menos una función tú solo. O eso esperamos.", emoji: "🌿" },
  { dias: 7, titulo: "Una semana", desc: "Una semana entera. Tus compañeros empiezan a notar algo diferente en ti.", emoji: "🌳" },
  { dias: 14, titulo: "Dos semanas", desc: "Mereces una mención en la reunión del jueves. Habla con el coordinador.", emoji: "⭐" },
  { dias: 30, titulo: "Un mes", desc: "Recibes la medalla de bronce de Vibecoders Anónimos. No existe, pero moralmente sí.", emoji: "🥉" },
  { dias: 90, titulo: "Tres meses", desc: "Nivel: Senior de verdad. Puedes explicar tu código sin tartamudear.", emoji: "🥈" },
  { dias: 180, titulo: "Seis meses", desc: "Fenómeno. Probablemente también ayudas a otros en recuperación.", emoji: "🥇" },
  { dias: 365, titulo: "Un año", desc: "Iluminado. Leyenda. Probablemente ya no necesitas esta web.", emoji: "🏆" },
];

function getLogro(dias: number) {
  const obtenidos = logros.filter((l) => dias >= l.dias);
  return obtenidos[obtenidos.length - 1] || null;
}

function getProximo(dias: number) {
  return logros.find((l) => dias < l.dias) || null;
}

export default function Contador() {
  const [fechaInicio, setFechaInicio] = useState<string>("");
  const [fechaGuardada, setFechaGuardada] = useState<string | null>(null);
  const [diasSobrio, setDiasSobrio] = useState<number>(0);
  const [recaida, setRecaida] = useState(false);
  const [nombre, setNombre] = useState<string>("");
  const [nombreGuardado, setNombreGuardado] = useState<string>("");

  useEffect(() => {
    const saved = localStorage.getItem("va_fecha_inicio");
    const savedNombre = localStorage.getItem("va_nombre");
    if (saved) {
      setFechaGuardada(saved);
      calcularDias(saved);
    }
    if (savedNombre) setNombreGuardado(savedNombre);
  }, []);

  function calcularDias(fecha: string) {
    const inicio = new Date(fecha);
    const hoy = new Date();
    const diff = Math.floor((hoy.getTime() - inicio.getTime()) / (1000 * 60 * 60 * 24));
    setDiasSobrio(Math.max(0, diff));
  }

  function guardar() {
    if (!fechaInicio) return;
    localStorage.setItem("va_fecha_inicio", fechaInicio);
    if (nombre) localStorage.setItem("va_nombre", nombre);
    setFechaGuardada(fechaInicio);
    if (nombre) setNombreGuardado(nombre);
    calcularDias(fechaInicio);
    setRecaida(false);
  }

  function registrarRecaida() {
    const hoy = new Date().toISOString().split("T")[0];
    localStorage.setItem("va_fecha_inicio", hoy);
    setFechaGuardada(hoy);
    calcularDias(hoy);
    setDiasSobrio(0);
    setRecaida(true);
  }

  function resetear() {
    localStorage.removeItem("va_fecha_inicio");
    localStorage.removeItem("va_nombre");
    setFechaGuardada(null);
    setDiasSobrio(0);
    setNombreGuardado("");
    setRecaida(false);
    setFechaInicio("");
    setNombre("");
  }

  const logro = getLogro(diasSobrio);
  const proximo = getProximo(diasSobrio);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <header className="bg-[#8b1a1a] text-[#f5f0e8] py-14 px-4 text-center">
        <p className="text-[#d4a017] text-xs uppercase tracking-widest font-bold mb-3">
          Tu progreso personal
        </p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Contador de Sobriedad
        </h1>
        <p className="text-base opacity-80 max-w-xl mx-auto">
          Cada día sin pedirle código a la IA cuenta. Registra tu fecha de inicio
          y observa cómo recuperas tu dignidad como programador.
        </p>
      </header>

      <main className="flex-1 py-16 px-4 bg-[#faf6ee]">
        <div className="max-w-2xl mx-auto">

          {!fechaGuardada ? (
            /* Formulario inicial */
            <div className="bg-white border border-[#c9b99a] rounded-xl p-8 shadow-sm">
              <h2 className="text-xl font-bold text-[#2a1f1a] mb-2">
                Iniciar mi recuperación
              </h2>
              <p className="text-sm text-[#6b5a4e] mb-6">
                Elige la fecha en que decidiste dejar de vibecodearlo todo.
                Si fue hoy, selecciona hoy. Si llevas días ya, felicidades por ser honesto.
              </p>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-[#2a1f1a] mb-1">
                    Tu nombre (o apodo)
                  </label>
                  <input
                    type="text"
                    placeholder="Ej: Roberto K., El Tabero, Sr. Prompts..."
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    className="w-full border border-[#c9b99a] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#8b1a1a] bg-[#faf6ee]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#2a1f1a] mb-1">
                    Fecha de inicio de sobriedad
                  </label>
                  <input
                    type="date"
                    value={fechaInicio}
                    max={new Date().toISOString().split("T")[0]}
                    onChange={(e) => setFechaInicio(e.target.value)}
                    className="w-full border border-[#c9b99a] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#8b1a1a] bg-[#faf6ee]"
                  />
                </div>
                <button
                  onClick={guardar}
                  disabled={!fechaInicio}
                  className="w-full bg-[#8b1a1a] text-[#f5f0e8] font-bold py-3 rounded-lg hover:bg-[#6b1414] transition-colors disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-wide text-sm"
                >
                  Comenzar mi recuperación
                </button>
              </div>
            </div>
          ) : (
            /* Panel de sobriedad */
            <div className="space-y-6">
              {recaida && (
                <div className="bg-[#fff3cd] border border-[#d4a017] rounded-xl px-6 py-4 flex gap-3 items-start">
                  <span className="text-2xl">😔</span>
                  <div>
                    <p className="font-bold text-[#4a3728]">Recaída registrada</p>
                    <p className="text-sm text-[#4a3728]">
                      Está bien. Las recaídas son parte del proceso. Lo importante es que volviste.
                      El contador reinicia desde hoy.
                    </p>
                  </div>
                </div>
              )}

              {/* Contador principal */}
              <div className="bg-white border border-[#c9b99a] rounded-xl p-8 text-center shadow-sm">
                {nombreGuardado && (
                  <p className="text-[#6b5a4e] text-sm mb-2">
                    Hola, <strong className="text-[#2a1f1a]">{nombreGuardado}</strong>
                  </p>
                )}
                <div className="text-8xl font-bold text-[#8b1a1a] mb-2 pulse-slow">
                  {diasSobrio}
                </div>
                <p className="text-xl text-[#4a3728] font-semibold mb-1">
                  {diasSobrio === 1 ? "día sobrio" : "días sobrio"}
                </p>
                <p className="text-xs text-[#6b5a4e]">
                  Desde el {fechaGuardada ? new Date(fechaGuardada + "T12:00:00").toLocaleDateString("es-ES", { year: "numeric", month: "long", day: "numeric" }) : "—"}
                </p>

                {logro && (
                  <div className="mt-6 bg-[#f0fdf4] border border-[#86efac] rounded-lg px-5 py-4">
                    <div className="text-3xl mb-1">{logro.emoji}</div>
                    <p className="font-bold text-[#166534] text-sm">{logro.titulo}</p>
                    <p className="text-xs text-[#166534]">{logro.desc}</p>
                  </div>
                )}
              </div>

              {/* Próximo logro */}
              {proximo && (
                <div className="bg-white border border-[#c9b99a] rounded-xl p-6 shadow-sm">
                  <p className="text-xs font-bold text-[#d4a017] uppercase tracking-widest mb-2">
                    Próximo logro
                  </p>
                  <div className="flex items-center gap-4">
                    <span className="text-3xl">{proximo.emoji}</span>
                    <div className="flex-1">
                      <p className="font-bold text-[#2a1f1a] text-sm">{proximo.titulo}</p>
                      <p className="text-xs text-[#6b5a4e]">{proximo.desc}</p>
                      <div className="mt-2 bg-[#f0e8d8] rounded-full h-2 overflow-hidden">
                        <div
                          className="bg-[#8b1a1a] h-2 rounded-full transition-all duration-700"
                          style={{
                            width: `${Math.min(100, (diasSobrio / proximo.dias) * 100)}%`,
                          }}
                        />
                      </div>
                      <p className="text-xs text-[#6b5a4e] mt-1">
                        {proximo.dias - diasSobrio} {proximo.dias - diasSobrio === 1 ? "día" : "días"} para lograrlo
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Todos los logros */}
              <div className="bg-white border border-[#c9b99a] rounded-xl p-6 shadow-sm">
                <p className="text-xs font-bold text-[#d4a017] uppercase tracking-widest mb-4">
                  Tabla de logros
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {logros.map((l) => (
                    <div
                      key={l.dias}
                      className={`rounded-lg px-4 py-3 text-center border transition-colors ${
                        diasSobrio >= l.dias
                          ? "bg-[#f0fdf4] border-[#86efac]"
                          : "bg-[#faf6ee] border-[#c9b99a] opacity-40"
                      }`}
                    >
                      <div className="text-2xl">{l.emoji}</div>
                      <p className="text-xs font-bold text-[#2a1f1a] mt-1">{l.titulo}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Acciones */}
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={registrarRecaida}
                  className="flex-1 bg-[#fff3cd] border border-[#d4a017] text-[#4a3728] font-bold py-3 rounded-lg hover:bg-[#fde68a] transition-colors text-sm"
                >
                  😔 Registrar recaída
                </button>
                <button
                  onClick={resetear}
                  className="flex-1 bg-[#faf6ee] border border-[#c9b99a] text-[#6b5a4e] font-bold py-3 rounded-lg hover:bg-[#f0e8d8] transition-colors text-sm"
                >
                  🔄 Reiniciar todo
                </button>
              </div>

              <p className="text-xs text-center text-[#6b5a4e] italic">
                Tu contador se guarda en este navegador. Nadie más lo ve, igual que tus commits de madrugada.
              </p>
            </div>
          )}

          {/* Motivación */}
          <div className="mt-10 bg-[#2a1f1a] text-[#f5f0e8] rounded-xl px-8 py-8 text-center">
            <p className="italic text-[#c9b99a] text-base mb-3">
              &ldquo;No te pido que nunca uses IA. Te pido que entiendas lo que genera.&rdquo;
            </p>
            <p className="text-xs text-[#6b5a4e]">— Lema de Vibecoders Anónimos</p>
            <div className="mt-5">
              <Link
                href="/reuniones"
                className="text-[#d4a017] text-sm font-bold hover:underline"
              >
                Ver próximas reuniones →
              </Link>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
