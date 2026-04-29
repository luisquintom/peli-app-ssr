import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Cine App - Versión SSR",
  description: "Práctica de Next.js para la Universidad Europea",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Navbar /> 
        <main style={{ padding: '2rem' }}>
          {children} {/* Home, Detalle, etc.) */}
        </main>
      </body>
    </html>
  );
}