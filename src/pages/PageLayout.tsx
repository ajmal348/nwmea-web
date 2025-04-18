import { FooterComponent } from './UIComponents/Footer/FooterComponent';
import { HeaderComponent } from './UIComponents/Header/HeaderComponent';

export default function PageLayout({ children }: any) {
    return (
        <div className="theme-scope b5-iso">
            <HeaderComponent />
            {children}
            <FooterComponent />
        </div>
    );
}
