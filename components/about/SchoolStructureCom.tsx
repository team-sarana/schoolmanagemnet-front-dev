"use client"
import React from 'react'
import Image from 'next/image'
import RelatedMenu from './RelatedMenu'

export default function SchoolStructureCom() {
  return (
    <>
      <div className="section-padding">
        <div className='container'>
          <div className='row'>
            <div className='col-md-9 khmer-text'>
              {/* រចនាសម្ព័ន្ធការគ្រប់គ្រង */}
              <section className="mb-4">
                <h1 className="text-3xl font-bold text-blue-600 mb-4">រចនាសម្ព័ន្ធការគ្រប់គ្រង</h1>
                <p className="text-gray-700">
                  សាលារបស់យើងដឹកនាំដោយក្រុមអ្នកជំនាញដែលមានបទពិសោធន៍ ខិតខំដើម្បីផ្តល់ការអប់រំមានគុណភាព។
                </p>
                <ul className="list-disc ml-6 mt-4 text-gray-700">
                  <li><strong>នាយកសាលា:</strong> គ្រប់គ្រងការប្រតិបត្តិទាំងអស់ និងគោលនយោបាយរបស់សាលា។</li>
                  <li><strong>អនុនាយកសាលា:</strong> ជួយក្នុងការគ្រប់គ្រង និងវិន័យ។</li>
                  <li><strong>ប្រធានដេប៉ាតឺម៉ង់:</strong> ជាអ្នកដឹកនាំវិញ្ញាសាជាក់លាក់ (វិទ្យាសាស្ត្រ សិល្បៈ កីឡា ល។)</li>
                  <li><strong>គ្រូបង្រៀន និងបុគ្គលិក:</strong> ជាអ្នកបង្រៀន និងជួយដល់ការរៀនសូត្រ។</li>
                </ul>
              </section>

              {/* ផ្នែកសិក្សា */}
              <section className="mb-4">
                <h1 className="text-3xl font-bold text-green-600 mb-4">ផ្នែកសិក្សា</h1>
                <p className="text-gray-700">
                  ស្ថាប័នរបស់យើងផ្តល់នូវផ្លូវការរៀនសូត្រដែលមានរចនាសម្ព័ន្ធច្បាស់លាស់។
                </p>
                <ul className="list-disc ml-6 mt-4 text-gray-700">
                  <li><strong>មត្តេយ្យ:</strong> ថ្នាក់កុមារចាប់ផ្តើម និងការរៀនដំបូង។</li>
                  <li><strong>បឋមសិក្សា:</strong> ថ្នាក់ទី ១-៥ (ជាមូលដ្ឋានសិក្សាដំបូង។)</li>
                  <li><strong>មធ្យមសិក្សា:</strong> ថ្នាក់ទី ៦-១០ (វិញ្ញាសាកម្រិតខ្ពស់ និងបណ្ដុះបណ្ដាលជំនាញ។)</li>
                  <li><strong>អនុវិទ្យាល័យ:</strong> ថ្នាក់ទី ១១-១២ (ជម្រើសផ្នែកជំនាញ: វិទ្យាសាស្ត្រ ពាណិជ្ជកម្ម សិល្បៈ។)</li>
                </ul>
              </section>

              {/* សេវាកម្ម និងសម្ភារៈ */}
              <section className="mb-4">
                <h1 className="text-3xl font-bold text-indigo-600 mb-4">បរិក្ខារ និងសេវាកម្ម</h1>
                <p className="text-gray-700">វិស័យសិក្សារបស់យើងបំពាក់ដោយសម្ភារៈទំនើបសម្រាប់ការរៀនសូត្រ។</p>
                <ul className="list-disc ml-6 mt-4 text-gray-700">
                  <li>ថ្នាក់រៀនធំទូលាយមានក្តារចងចាំឆ្លាតវៃ</li>
                  <li>មន្ទីរពិសោធន៍វិទ្យាសាស្ត្រ និងកុំព្យូទ័របំពេញលម្អិត</li>
                  <li>បណ្ណាល័យមានសៀវភៅរាប់ពាន់ និងឯកសារស្រាវជ្រាវ</li>
                  <li>ទីលានកីឡា និងមជ្ឈមណ្ឌលសកម្មភាពក្នុងផ្ទះ</li>
                  <li>បន្ទប់តន្ត្រី សិល្បៈ និងរបាំ</li>
                </ul>
              </section>

              {/* តារាងរចនាសម្ព័ន្ធ */}
              <section className="mb-4">
                <h1 className="text-3xl font-bold text-purple-600 mb-4">តារាងរចនាសម្ព័ន្ធ</h1>
                <p className="text-gray-700">ប្រព័ន្ធដំណើរការរបស់សាលារបស់យើងត្រូវបានបង្ហាញខាងក្រោម។</p>
                <div className="flex justify-center mt-6">
                  <Image src="/assets/img/school_structure.png" alt="រចនាសម្ព័ន្ធសាលា" width={600} height={400} className="rounded-lg" />
                </div>
              </section>
            </div>
            <div className='col-md-3'>
              <RelatedMenu />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
