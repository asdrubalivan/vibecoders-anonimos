import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const pasos = [
  {
    num: 1,
    titulo: "Admitimos nuestra impotencia",
    texto:
      "Admitimos que somos impotentes ante el autocompletado — que nuestro código se ha vuelto ingobernable. Reconocimos que cuando Copilot sugiere, aceptamos. Siempre. Sin leer.",
    cita: '"Tab. Tab. Tab. Yo solo soy las manos."',
    icon: "🤚",
  },
  {
    num: 2,
    titulo: "Llegamos a creer",
    texto:
      "Llegamos a creer que un Poder Superior a nosotros — como Stack Overflow, la documentación oficial, o un compañero senior — podría devolvernos la cordura y el entendimiento del código.",
    cita: '"¿La documentación? ¿Eso todavía existe?"',
    icon: "📖",
  },
  {
    num: 3,
    titulo: "Decisión de entregar nuestra voluntad",
    texto:
      "Decidimos poner nuestra voluntad y nuestras vidas al cuidado de la lógica tal y como la entendemos nosotros mismos, no como la entiende el modelo de lenguaje.",
    cita: '"Deja de preguntarle a Claude qué hace el código. Léelo tú."',
    icon: "🙏",
  },
  {
    num: 4,
    titulo: "Inventario moral del código",
    texto:
      "Sin miedo hicimos un minucioso inventario moral de nuestro repositorio. Contamos los commits que dicen 'fix' sin describir qué se arregló. Fueron muchos. Demasiados.",
    cita: '"git log --oneline: fix, fix, fix ai suggestion, wtf fix, fix final, fix final v2"',
    icon: "📊",
  },
  {
    num: 5,
    titulo: "Admitimos ante otro ser humano",
    texto:
      "Admitimos ante Dios, ante nosotros mismos, y ante otro ser humano la naturaleza exacta de nuestros errores. Eso incluye aquella vez que pusimos credenciales en un repositorio público.",
    cita: '"El PR review es tu confesionario. El tech lead, tu sacerdote."',
    icon: "😳",
  },
  {
    num: 6,
    titulo: "Estuvimos listos para eliminar defectos",
    texto:
      "Estuvimos enteramente dispuestos a que se nos quitaran todos estos defectos: el cargo de 'senior' sin haber debuggeado nunca, los microservicios que nadie entiende, el código sin tests.",
    cita: '"Un senior que no puede explicar su código no es senior. Es un vibecoder con antigüedad."',
    icon: "🔧",
  },
  {
    num: 7,
    titulo: "Humildemente pedimos que se nos quitaran nuestros defectos",
    texto:
      "Humildemente pedimos aprender a leer mensajes de error antes de pegarlos en ChatGPT. Un mensaje de error es información, no un conjuro que hay que exorcizar con IA.",
    cita: '"TypeError: Cannot read property of undefined" tiene solución. Léela."',
    icon: "📝",
  },
  {
    num: 8,
    titulo: "La lista de todos a quienes habíamos dañado",
    texto:
      "Hicimos una lista de todas las personas a quienes habíamos perjudicado: compañeros que heredaron nuestro código, usuarios que sufrieron los bugs, el junior que preguntó cómo funcionaba y le dijimos 'la IA lo sabe'.",
    cita: '"Cada función incomprensible es una deuda moral con quien la lea después."',
    icon: "📜",
  },
  {
    num: 9,
    titulo: "Reparamos el daño directamente",
    texto:
      "Reparamos directamente el daño causado donde nos fue posible, excepto cuando hacerlo perjudicaba a otros. Esto significa: añadir comentarios, escribir tests, documentar las decisiones de arquitectura.",
    cita: '"El comentario que no escribiste hoy es la pregunta de las 3am de mañana."',
    icon: "🛠️",
  },
  {
    num: 10,
    titulo: "Continuamos el inventario personal",
    texto:
      "Continuamos haciendo inventario personal y cuando nos equivocamos lo admitimos rápidamente. No borramos el commit. No culpamos a la IA. El código lo aprobaste tú.",
    cita: '"La IA propone. El programador dispone. Tú apretaste merge."',
    icon: "🔍",
  },
  {
    num: 11,
    titulo: "Buscamos mejorar nuestro contacto con el código",
    texto:
      "Buscamos mejorar nuestro contacto con el código a través de la lectura y el estudio, pidiéndonos solamente conocimiento de los fundamentos y fortaleza para practicarlos sin asistencia de IA.",
    cita: '"Escribe primero, luego pide revisión. No al revés."',
    icon: "📚",
  },
  {
    num: 12,
    titulo: "El mensaje a otros vibecoders",
    texto:
      "Habiendo obtenido un despertar espiritual como resultado de estos pasos, tratamos de llevar este mensaje a los vibecoders que aún sufren, y de practicar estos principios en todos nuestros pull requests.",
    cita: '"Cada programador recuperado es un sistema de producción más estable."',
    icon: "📣",
  },
];

export default function Los12Pasos() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <header className="bg-[#8b1a1a] text-[#f5f0e8] py-14 px-4 text-center">
        <p className="text-[#d4a017] text-xs uppercase tracking-widest font-bold mb-3">
          El Programa de Recuperación
        </p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Los 12 Pasos</h1>
        <p className="text-base opacity-80 max-w-xl mx-auto">
          Adaptados para el vibecoder moderno. Basados en décadas de AA y semanas de
          vergüenza en pull requests.
        </p>
      </header>

      <main className="flex-1 py-16 px-4 bg-[#faf6ee]">
        <div className="max-w-3xl mx-auto space-y-8">
          {pasos.map((paso) => (
            <div
              key={paso.num}
              className="bg-white border border-[#c9b99a] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-4 bg-[#f0e8d8] px-6 py-4 border-b border-[#c9b99a]">
                <span className="text-3xl">{paso.icon}</span>
                <div>
                  <span className="text-xs font-bold text-[#d4a017] uppercase tracking-widest">
                    Paso {paso.num}
                  </span>
                  <h2 className="text-lg font-bold text-[#2a1f1a]">
                    {paso.titulo}
                  </h2>
                </div>
              </div>
              <div className="px-6 py-5">
                <p className="text-[#4a3728] leading-relaxed mb-4 text-sm">
                  {paso.texto}
                </p>
                <blockquote className="border-l-3 border-[#8b1a1a] pl-4 italic text-[#8b1a1a] text-sm">
                  {paso.cita}
                </blockquote>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto mt-12 text-center">
          <div className="bg-[#2a1f1a] text-[#f5f0e8] rounded-xl px-8 py-10">
            <div className="text-4xl mb-4">🎖️</div>
            <h3 className="text-xl font-bold mb-3">¿Completaste los 12 pasos?</h3>
            <p className="text-[#c9b99a] text-sm mb-6">
              Recibe tu certificado de recuperación y comparte tu historia en nuestra
              próxima reunión.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contador"
                className="bg-[#d4a017] text-[#1a1a1a] font-bold px-6 py-3 rounded hover:bg-[#e6b420] transition-colors text-sm uppercase tracking-wide"
              >
                Mi Contador de Sobriedad
              </Link>
              <Link
                href="/reuniones"
                className="border-2 border-[#c9b99a] text-[#f5f0e8] font-bold px-6 py-3 rounded hover:bg-[#3d2d24] transition-colors text-sm uppercase tracking-wide"
              >
                Ver Reuniones
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
