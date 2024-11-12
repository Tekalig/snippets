import "./globals.css";

export const metadata = {
  title: "snippets",
  description: "snippets for study",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-neutral-50">
        <div className="container mx-auto px-12">{children}</div>
      </body>
    </html>
  );
}
