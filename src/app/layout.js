import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: {
    default: "MindScribe | Where Thoughts Take Shape",
    template: "%s | MindScribe"
  },
  description: "Discover thought-provoking articles, personal essays, and intellectual explorations on MindScribe.",
  icons: {
    icon: '/Logo.png',
    shortcut: '/Logo.png',
    apple: '/Logo.png',
  },
  openGraph: {
    title: "MindScribe",
    description: "Your platform for meaningful writing",
    images: '/Logo.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}