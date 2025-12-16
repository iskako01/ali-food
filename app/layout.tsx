import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import "./globals.css";

export const metadata = {
  title: "Ali Food",
  description: "Delicious meals, shared by a food-loving community.",
};

interface PropsInterface {
  children: React.ReactNode;
}

export default function RootLayout({ children }: PropsInterface) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
