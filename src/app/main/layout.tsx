import Footer from "@/components/Layout/Footer"
import Header from "@/components/Layout/Header"

export default function MainLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className="">
                <Header />
                <h2>layout</h2>
                {children}
                <Footer />
            </body>
        </html>
    )
}
