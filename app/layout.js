export const metadata = {
  title: "Daily Learning",
  description: "E-learning Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
