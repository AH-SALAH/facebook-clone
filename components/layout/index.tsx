import Footer from "./Footer";
import Header from "./Header";
import MainContent from "./MainContent";

const Layout = () => {
    return (
        <div className="flex flex-col items-start justify-center">
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

export default Layout;
