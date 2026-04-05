import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const reuniones = [
  {
    dia: "Lunes",
    hora: "19:00 ARG/VEN",
    tipo: "Presencial",
    nombre: "Grupo Cursor Anónimo",
    lugar: "Sala Turing — Café El Compilador, Av. Corrientes 1337, Buenos Aires",
    descripcion:
      "Para usuarios de Cursor que han perdido la capacidad de escribir código sin sugerencias inline. Nivel: principiante avanzado.",
    aforo: "12 personas",
    nivel: "principiante",
    emoji: "🖥️",
  },
  {
    dia: "Martes",
    hora: "20:30 ARG/VEN",
    tipo: "Virtual",
    nombre: "ChatGPT Dependientes",
    lugar: "Zoom — ID: 420-69-1337 (contraseña en Discord)",
    descripcion:
      "Reunión para los que han tenido conversaciones de más de 50 mensajes con GPT intentando que su código funcione. Traigan capturas.",
    aforo: "Sin límite",
    nivel: "todos",
    emoji: "💬",
  },
  {
    dia: "Miércoles",
    hora: "18:00 ARG/VEN",
    tipo: "Taller",
    nombre: "Escribe una función tú solo",
    lugar: "Centro Cultural Digital, Sala Ada Lovelace — Caracas",
    descripcion:
      "Taller práctico. Vamos a escribir funciones simples sin IA, debuggear sin pedir ayuda, y leer mensajes de error con nuestros propios ojos.",
    aforo: "8 personas",
    nivel: "avanzado",
    emoji: "✍️",
  },
  {
    dia: "Jueves",
    hora: "20:00 ARG/VEN",
    tipo: "Virtual",
    nombre: "Reunión General Semanal",
    lugar: "Discord — Canal #reuniones-jueves",
    descripcion:
      "La reunión principal de Vibecoders Anónimos. Compartimos historias de la semana, celebramos sobriedad y recibimos a nuevos miembros. Presentarse es obligatorio.",
    aforo: "Sin límite",
    nivel: "todos",
    emoji: "🏛️",
    destacada: true,
  },
  {
    dia: "Viernes",
    hora: "17:30 ARG/VEN",
    tipo: "Taller",
    nombre: "Git sin miedo",
    lugar: "Virtual — Google Meet",
    descripcion:
      "Para los que llevan 6 meses con un solo branch llamado 'main' y nunca han hecho un rebase. Vamos a aprender git de verdad, no los comandos que nos da la IA.",
    aforo: "10 personas",
    nivel: "principiante",
    emoji: "🌿",
  },
  {
    dia: "Sábado",
    hora: "11:00 ARG/VEN",
    tipo: "Especial",
    nombre: "Retiro de Desconexión Digital",
    lugar: "Parque Centenario — Bajo el árbol más cercano a la laguna, Buenos Aires",
    descripcion:
      "Un sábado al mes: nada de IA, nada de IDE, nada de código. Solo papel, lápiz y ejercicios de lógica. Para los casos más graves.",
    aforo: "15 personas",
    nivel: "crisis",
    emoji: "🌳",
  },
];

const nivelColores: Record<string, string> = {
  principiante: "bg-blue-100 text-blue-700",
  avanzado: "bg-purple-100 text-purple-700",
  todos: "bg-green-100 text-green-700",
  crisis: "bg-red-100 text-red-700",
};

const tipoColores: Record<string, string> = {
  Presencial: "bg-[#d4a017] text-[#1a1a1a]",
  Virtual: "bg-[#4a3728] text-[#f5f0e8]",
  Taller: "bg-[#8b1a1a] text-[#f5f0e8]",
  Especial: "bg-[#2e7d32] text-white",
};

export default function Reuniones() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <header className="bg-[#8b1a1a] text-[#f5f0e8] py-14 px-4 text-center">
        <p className="text-[#d4a017] text-xs uppercase tracking-widest font-bold mb-3">
          Horario Semanal
        </p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Reuniones</h1>
        <p className="text-base opacity-80 max-w-xl mx-auto">
          La recuperación no se hace sola. Cada semana, cientos de vibecoders
          se juntan para compartir, aprender y recordar que el código lo escriben
          las personas. Todos los horarios en hora Argentina / Venezuela.
        </p>
      </header>

      <main className="flex-1 py-16 px-4 bg-[#faf6ee]">
        <div className="max-w-4xl mx-auto">

          {/* Aviso */}
          <div className="bg-[#fff3cd] border border-[#d4a017] rounded-xl px-6 py-4 mb-10 flex gap-3 items-start">
            <span className="text-2xl shrink-0">📌</span>
            <div>
              <p className="font-bold text-[#4a3728] text-sm">Normas de las reuniones</p>
              <p className="text-sm text-[#4a3728] mt-1 leading-relaxed">
                Lo que se dice en las reuniones, se queda en las reuniones. No se juzga a nadie por su stack tecnológico.
                Prohibido abrir el celular para pedirle a la IA que complete sus frases durante la reunión.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {reuniones.map((r, i) => (
              <div
                key={i}
                className={`bg-white border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow ${r.destacada ? "border-[#d4a017] ring-2 ring-[#d4a017]/30" : "border-[#c9b99a]"}`}
              >
                {r.destacada && (
                  <div className="bg-[#d4a017] text-[#1a1a1a] text-xs font-bold text-center py-1 uppercase tracking-widest">
                    ⭐ Reunión Principal de la Semana
                  </div>
                )}
                <div className="p-6">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{r.emoji}</span>
                      <div>
                        <h2 className="text-lg font-bold text-[#2a1f1a]">{r.nombre}</h2>
                        <p className="text-[#8b1a1a] font-semibold text-sm">
                          {r.dia} · {r.hora}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className={`text-xs font-bold px-2 py-1 rounded-full ${tipoColores[r.tipo] || "bg-gray-100 text-gray-700"}`}>
                        {r.tipo}
                      </span>
                      <span className={`text-xs font-semibold px-2 py-1 rounded-full ${nivelColores[r.nivel]}`}>
                        {r.nivel}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-[#4a3728] leading-relaxed mb-3">
                    {r.descripcion}
                  </p>
                  <div className="flex flex-wrap gap-4 text-xs text-[#6b5a4e]">
                    <span>📍 {r.lugar}</span>
                    <span>👥 Aforo: {r.aforo}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Añadir reunión */}
          <div className="mt-12 bg-[#f0e8d8] border border-[#c9b99a] rounded-xl px-8 py-8 text-center">
            <div className="text-3xl mb-3">➕</div>
            <h3 className="text-lg font-bold text-[#2a1f1a] mb-2">
              ¿Quieres organizar una reunión en tu ciudad?
            </h3>
            <p className="text-sm text-[#6b5a4e] mb-5">
              Si tienes un grupo de al menos 3 vibecoders dispuestos a recuperarse,
              podemos certificar sus reuniones como grupo oficial de Vibecoders Anónimos.
              Solo necesitan: un local, café y ganas de leer documentación.
            </p>
            <button className="bg-[#8b1a1a] text-[#f5f0e8] font-bold px-6 py-3 rounded hover:bg-[#6b1414] transition-colors text-sm uppercase tracking-wide">
              Solicitar certificación de grupo
            </button>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
