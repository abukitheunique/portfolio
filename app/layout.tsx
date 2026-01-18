import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "ABUBEKER | Full-Stack Developer",
  description:
    "Full-Stack Developer building scalable, high-performance web applications.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
