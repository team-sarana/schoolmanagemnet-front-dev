import { appWithTranslation } from 'next-i18next';
import LanguageSwitcher from '../components/LanguageSwitcher';

function MyApp({ Component, pageProps }) {
    return (
        <div>
            <LanguageSwitcher />
            <Component {...pageProps} />
        </div>
    );
}

export default appWithTranslation(MyApp);
