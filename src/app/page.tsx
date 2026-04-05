import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const testimonios = [
  {
    nombre: "Alejandro G.",
    tiempo: "3 semanas sobrio",
    texto:
      "Pedí a ChatGPT que me hiciera un CRUD completo y lo desplegué en producción sin leerlo. El lunes me llamó el CTO. Ahora estoy aquí.",
    emoji: "😰",
  },
  {
    nombre: "María T.",
    tiempo: "2 meses sobria",
    texto:
      "Tenía una función de 800 líneas que generé con Copilot. No sabía qué hacía. Pasaba los tests. Funcionaba en prod hasta que no funcionó.",
    emoji: "😭",
  },
  {
    nombre: "Roberto K.",
    tiempo: "5 días sobrio",
    texto:
      "Le pregunté a Claude por qué fallaba mi código. Me respondió con otro código. Se lo pregunté de nuevo. Llevamos 3 horas así.",
    emoji: "🤡",
  },
  {
    nombre: "Sofía M.",
    tiempo: "1 año sobria",
    texto:
      "Empezó con un script sencillo. Luego un microservicio. Luego toda la arquitectura. Cuando quise aprender a leer el código, la IA ya me miraba como a una hija.",
    emoji: "🧠",
  },
];

const señales = [
  "Copias y pegas código sin leerlo porque 'si funciona, funciona'",
  "Tu git log es solo commits de 'fix from AI suggestion'",
  "No sabes explicar qué hace tu propio proyecto",
  "Abres el IDE y lo primero que haces es abrir el chat de IA",
  "Has dicho 'la IA lo sabe mejor que yo' más de una vez esta semana",
  "Tu plan de depuración es 'preguntarle a Cursor'",
  "Tienes miedo de que la IA te juzgue por tu código",
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="relative bg-[#8b1a1a] text-[#f5f0e8] py-20 px-4 text-center overflow-hidden torn-edge">
        <div className="absolute inset-0 opacity-10 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(255,255,255,0.03)_10px,rgba(255,255,255,0.03)_20px)]" />
        <div className="relative max-w-3xl mx-auto">
          <div className="inline-block bg-[#d4a017] text-[#1a1a1a] text-xs font-bold px-4 py-1 rounded-full uppercase tracking-widest mb-6">
            Centro de Rehabilitación Tecnológica · Fundado en 2024
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 flicker leading-tight">
            Vibecoders<br />
            <span className="text-[#d4a017]">Anónimos</span>
          </h1>
          <p className="text-xl md:text-2xl mb-3 italic opacity-90">
            &ldquo;Admitimos que somos impotentes ante el autocompletado&rdquo;
          </p>
          <p className="text-base opacity-75 mb-10 max-w-xl mx-auto">
            Un espacio seguro para programadores que generan código con IA sin entenderlo,
            que despliegan sin revisar, y que rezan para que los tests pasen.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/los-12-pasos"
              className="bg-[#d4a017] text-[#1a1a1a] font-bold px-8 py-3 rounded hover:bg-[#e6b420] transition-colors text-sm uppercase tracking-wide"
            >
              Los 12 Pasos
            </Link>
            <Link
              href="/confesionario"
              className="border-2 border-[#f5f0e8] text-[#f5f0e8] font-bold px-8 py-3 rounded hover:bg-[#f5f0e8] hover:text-[#8b1a1a] transition-colors text-sm uppercase tracking-wide"
            >
              Confesarme
            </Link>
          </div>
        </div>
      </section>

      {/* ¿Eres un vibecoder? */}
      <section className="py-16 px-4 bg-[#faf6ee]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#8b1a1a] mb-2">
            ¿Eres un Vibecoder?
          </h2>
          <p className="text-center text-[#6b5a4e] italic mb-10">
            Tómate un momento. Respira. Marca las que aplican.
          </p>
          <div className="space-y-3">
            {señales.map((s, i) => (
              <label
                key={i}
                className="flex items-start gap-3 bg-white border border-[#c9b99a] rounded-lg px-5 py-4 cursor-pointer hover:border-[#8b1a1a] hover:bg-[#fdf9f2] transition-colors group"
              >
                <input
                  type="checkbox"
                  className="mt-1 accent-[#8b1a1a] w-4 h-4 shrink-0"
                />
                <span className="text-[#2a1f1a] text-sm leading-relaxed group-hover:text-[#8b1a1a] transition-colors">
                  {s}
                </span>
              </label>
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className="text-[#6b5a4e] text-sm italic mb-4">
              Si marcaste 3 o más, bienvenido a casa.
            </p>
            <Link
              href="/contador"
              className="inline-block bg-[#8b1a1a] text-[#f5f0e8] font-bold px-8 py-3 rounded hover:bg-[#6b1414] transition-colors text-sm uppercase tracking-wide"
            >
              Iniciar mi Contador de Sobriedad →
            </Link>
          </div>
        </div>
      </section>

      {/* Cómo funciona */}
      <section className="py-16 px-4 bg-[#f0e8d8]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#8b1a1a] mb-12">
            El Programa
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                num: "01",
                title: "Admite el problema",
                desc: "El primer paso es reconocer que llevas meses sin escribir una línea de código por ti mismo. Estamos aquí para escucharte sin juzgarte (mucho).",
                icon: "🤚",
              },
              {
                num: "02",
                title: "Sigue los 12 Pasos",
                desc: "Nuestro programa adapta los clásicos 12 pasos de AA a la realidad del vibecoder moderno. Incluye aprender qué es un bucle for.",
                icon: "📋",
              },
              {
                num: "03",
                title: "Únete a las reuniones",
                desc: "Cada jueves, un grupo de valientes comparte sus peores historias de vibecoding. Terapia de grupo con buen café y mucha vergüenza.",
                icon: "👥",
              },
            ].map((item) => (
              <div
                key={item.num}
                className="bg-white border border-[#c9b99a] rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <div className="text-xs font-bold text-[#d4a017] uppercase tracking-widest mb-1">
                  Paso {item.num}
                </div>
                <h3 className="text-lg font-bold text-[#2a1f1a] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[#6b5a4e] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-16 px-4 bg-[#faf6ee]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#8b1a1a] mb-3">
            Testimonios
          </h2>
          <p className="text-center text-[#6b5a4e] italic mb-10 text-sm">
            Historias reales de recuperación (los nombres han sido cambiados para proteger la dignidad profesional)
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {testimonios.map((t, i) => (
              <div
                key={i}
                className="bg-white border-l-4 border-[#8b1a1a] rounded-r-xl px-6 py-5 shadow-sm"
              >
                <div className="text-3xl mb-3">{t.emoji}</div>
                <p className="text-sm text-[#2a1f1a] italic leading-relaxed mb-4">
                  &ldquo;{t.texto}&rdquo;
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-[#2a1f1a] text-sm">
                    — {t.nombre}
                  </span>
                  <span className="text-xs bg-[#e8f5e9] text-[#2e7d32] font-semibold px-2 py-1 rounded-full">
                    ✓ {t.tiempo}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-16 px-4 bg-[#2a1f1a] text-[#f5f0e8] text-center">
        <div className="max-w-2xl mx-auto">
          <div className="text-5xl mb-4">🙏</div>
          <h2 className="text-3xl font-bold mb-4">
            La recuperación es posible.
          </h2>
          <p className="text-[#c9b99a] mb-8 leading-relaxed">
            Miles de programadores han aprendido a escribir un bucle while sin ayuda de la IA.
            Tú también puedes. Pero primero tienes que querer.
          </p>
          <Link
            href="/reuniones"
            className="inline-block bg-[#d4a017] text-[#1a1a1a] font-bold px-10 py-4 rounded hover:bg-[#e6b420] transition-colors uppercase tracking-wide"
          >
            Ver próximas reuniones
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
