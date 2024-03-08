import "../assets/css/samplex.css";

export const metadata = {
  title: "Samplex",
  description: "Web application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-[SamsungOne]">
        {children}
        <script
          defer
          src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"
        ></script>
        <script>window.Alpine.start();</script>
      </body>
    </html>
  );
}
