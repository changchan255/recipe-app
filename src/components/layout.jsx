import { Header } from "./header";
import { Footer } from "./footer";

export const Layout =({children}) => {
    return(
        <>
        <Header/>
        <main className='mt-20'>{children}</main>
        <Footer/>
        </>
    );
}