import { useTranslation } from 'next-i18next';

const GreetingComponent = () => {
    const { t } = useTranslation('common'); // 'common' is the namespace for the translation file

    return <h1>{t('greeting')}</h1>;
};

export default GreetingComponent;
