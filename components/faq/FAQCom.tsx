'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type FAQItem = {
    question: string;
    answer: string;
};

const faqs: FAQItem[] = [
    {
        question: 'តើខ្ញុំអាចចុះឈ្មោះសិក្សាដោយរបៀបអនឡាញបានដែរឬទេ?',
        answer:
            'បាន។ សាលារបស់យើងផ្ដល់ជូនប្រព័ន្ធចុះឈ្មោះតាមអនឡាញ។ អ្នកអាចបំពេញពាក្យតាមទំព័រចុះឈ្មោះ ហើយបញ្ជាក់ព័ត៌មានឲ្យគ្រប់គ្រាន់។',
    },
    {
        question: 'តើមានវគ្គសិក្សាអ្វីខ្លះដែលអាចជ្រើសរើស?',
        answer:
            'យើងមានវគ្គសិក្សាជាច្រើន រួមមាន៖ កុំព្យូទ័រ ភាសាអង់គ្លេស ភាសាចិន ភាសាថៃ និងវគ្គអនុវត្តន៍ជាច្រើនទៀត។',
    },
    {
        question: 'តើសាលាធ្វើការថ្ងៃណាខ្លះ?',
        answer:
            'សាលារួមមានម៉ោងសិក្សាពេញម៉ោង និងក្រៅម៉ោង។ យើងបើកចាប់ពីថ្ងៃចន្ទ ដល់ថ្ងៃសៅរ៍ (7:30 ព្រឹក - 5:30 ល្ងាច)។',
    },
    {
        question: 'តើអាចបង់ថ្លៃសិក្សាដោយអនឡាញបានទេ?',
        answer:
            'បាន។ យើងគាំទ្រទូទាត់តាម ABA, Wing, និងប្រព័ន្ធអេឡិចត្រូនិកផ្សេងៗ។',
    },
];

export default function FAQCom() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="container max-w-3xl mx-auto px-4 py-10 khmer-text">
            <div className="banner_title">
                សំណួរញឹកញាប់ (FAQs)
            </div>
            <div className="space-y-4">
                {faqs.map((faq, index) => {
                    const isOpen = openIndex === index;
                    return (
                        <div key={index} className="border border-gray-300 rounded-xl bg-white shadow-sm">
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="flex justify-between items-center w-full px-5 py-4 text-left text-lg text-gray-800"
                            >
                                <span>{faq.question}</span>
                                <span className="text-2xl font-bold text-gray-500">{isOpen ? '-' : '+'}</span>
                            </button>

                            <AnimatePresence initial={false}>
                                {isOpen && (
                                    <motion.div
                                        layout
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="px-5 pb-4 text-gray-600"
                                    >
                                        <p>{faq.answer}</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
