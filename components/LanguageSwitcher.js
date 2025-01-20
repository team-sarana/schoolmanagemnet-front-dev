"use client"
import { useRouter } from 'next/navigation';
import { FaGlobe } from 'react-icons/fa';
import { BsFillFlagFill } from 'react-icons/bs';
import { useState } from 'react';

const LanguageSwitcher = () => {
    const { locale, locales, asPath } = useRouter();
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => setShowDropdown((prevState) => !prevState);

    const handleLanguageChange = (lng) => {
        window.location.href = `/${lng}${asPath}`;
        setShowDropdown(false); // Close dropdown after selecting a language
    };

    return (
        <div>
            <button onClick={toggleDropdown} style={{ display: 'flex', alignItems: 'center' }}>
                <FaGlobe style={{ marginRight: 8 }} />
                {locale === 'en' ? 'English' : 'Khmer'}
            </button>

            {showDropdown && (
                <div style={{ position: 'absolute', backgroundColor: '#fff', border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}>
                    {locales?.map((lng) => (
                        <button
                            key={lng}
                            onClick={() => handleLanguageChange(lng)}
                            style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}
                        >
                            <BsFillFlagFill style={{ marginRight: 8 }} />
                            {lng === 'en' ? 'English' : 'Khmer'}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default LanguageSwitcher;
