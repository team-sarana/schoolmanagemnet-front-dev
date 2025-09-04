import React from 'react'
import { useTranslation } from 'react-i18next';

export default function WelcomHome() {
    const { t, i18n } = useTranslation();
    return (
        <div className='section-padding'>
            <div className='container khmer-text wow fadeInUp' data-wow-delay="0.1s">
<<<<<<< HEAD
                <h2 className='text-center'>ការសិក្សានៅសាលាជំនាញព័ត៌មានវិទ្យា SITS</h2>
                <div className='mt-3 w-[80%] text-justify mx-auto text-[18px]'>
                    សាលាជំនាញព័ត៌មានវិទ្យា អេស អាយ ធី អេស គឺជាស្ថាប័នអប់រំឯកជនមួយដែលត្រូវបានបង្កើតឡើងនៅថ្ងៃទី០៩ ខែមិថុនា ឆ្នាំ២០២១។
                    សាលាមានអាស័យដ្ឋានស្ថិតនៅភូមិវត្តបូព៌ សង្កាត់សាលាកំរើក ក្រុងសៀមរាប ខេត្តសៀមរាប។
                    សាលាមានបេសកកម្មបណ្ដុះបណ្ដាលជំនាញកុំព្យូទ័រ និងបង្រៀនភាសាបរទេសប្រកបដោយគុណភាពអប់រំ
                    ប្រសិទ្ធភាព សីលធម៌ និងមានឥរិយាបថល្អ ដើម្បីរួមចំណែកក្នុងការអភិវឌ្ឍន៍ធនធានមនុស្សដ៏មានតម្លៃសម្រាប់សង្គមជាតិនាពេលអនាគត។
=======
                <h2 className='text-center'>{t("homePage.welComStudy")}</h2>
                <div className='mt-3 w-[80%] text-justify mx-auto'>
                    {t("homePage.descStudy")}
>>>>>>> fe9ec78118d04507a7529e367b222d04db540f39
                </div>
            </div>
        </div>
    )
}
