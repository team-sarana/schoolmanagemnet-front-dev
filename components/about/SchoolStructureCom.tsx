"use client"
import React from 'react'
import Image from 'next/image'
import { useTranslation } from 'react-i18next';


export default function SchoolStructureCom() {
  const { t } = useTranslation();
  return (
    <>
      <div className="section-padding">
        <div className='container'>
          <div className='row'>
            <div className='col-md-12 khmer-text'>
              {/* Our Journey Section */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-blue-600 mb-4 text-center">{t("ourJourney")}</h2>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700 leading-relaxed">
                    {t("journeyDescription")}
                  </p>
                </div>
              </section>

              {/* Our Principals Section */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-blue-600 mb-6 text-center">{t("ourPrincipals")}</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Principal 1 */}
                  <div className="text-center">
                    <div className="w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden bg-blue-100 flex items-center justify-center">
                      <Image 
                        src="/assets/img/team-1.jpg" 
                        alt="Mr. Lok Lundy" 
                        width={160} 
                        height={160} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="font-semibold text-lg text-center">{t("principal1Name")}</h3>
                    <p className="text-blue-600 font-medium">{t("principal")}</p>
                    <p className="text-sm text-gray-600">2017-{t("now")}</p>
                  </div>

                  {/* Principal 2 */}
                  <div className="text-center">
                    <div className="w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden bg-blue-100 flex items-center justify-center">
                      <Image 
                        src="/assets/img/team-2.jpg" 
                        alt="Mrs. Leak Malay" 
                        width={160} 
                        height={160} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="font-semibold text-lg text-center">{t("principal2Name")}</h3>
                    <p className="text-blue-600 font-medium">{t("formerPrincipal")}</p>
                    <p className="text-sm text-gray-600">2016-2017</p>
                  </div>

                  {/* Principal 3 */}
                  <div className="text-center">
                    <div className="w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden bg-blue-100 flex items-center justify-center">
                      <Image 
                        src="/assets/img/team-3.jpg" 
                        alt="Mr. Hun Phanthang" 
                        width={160} 
                        height={160} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="font-semibold text-lg text-center">{t("principal3Name")}</h3>
                    <p className="text-blue-600 font-medium">{t("formerPrincipal")}</p>
                    <p className="text-sm text-gray-600">2015-2016</p>
                  </div>
                </div>
              </section>

              {/* Our Teachers Section */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-blue-600 mb-6 text-center">{t("ourTeachers")}</h2>

                {/* Foreign Language Programme */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">{t("foreignLanguageProgramme")}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Teacher 1 */}
                    <div className="text-center">
                      <div className="w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden bg-blue-100 flex items-center justify-center">
                        <Image 
                          src="/assets/img/team-1.jpg" 
                          alt="Mr. Grant" 
                          width={160} 
                          height={160} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h4 className="font-semibold text-lg text-center">{t("teacher1Name")}</h4>
                      <p className="text-blue-600 font-medium">{t("flpTeacher")}</p>
                    </div>

                    {/* Teacher 2 */}
                    <div className="text-center">
                      <div className="w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden bg-blue-100 flex items-center justify-center">
                        <Image 
                          src="/assets/img/team-2.jpg" 
                          alt="Mr. John O'Leary" 
                          width={160} 
                          height={160} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h4 className="font-semibold text-lg text-center">{t("teacher2Name")}</h4>
                      <p className="text-blue-600 font-medium">{t("flpTeacher")}</p>
                    </div>

                    {/* Teacher 3 */}
                    <div className="text-center">
                      <div className="w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden bg-blue-100 flex items-center justify-center">
                        <Image 
                          src="/assets/img/team-3.jpg" 
                          alt="Ms. Lauren Ellis" 
                          width={160} 
                          height={160} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h4 className="font-semibold text-lg text-center">{t("teacher3Name")}</h4>
                      <p className="text-blue-600 font-medium">{t("flpTeacher")}</p>
                    </div>
                  </div>
                </div>

                {/* Khmer Programme */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">{t("khmerProgramme")}</h3>
                  <p className="text-gray-600 italic text-center">{t("khmerTeachersComingSoon")}</p>
                </div>
              </section>

              {/* Communities Section */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-blue-600 mb-6 text-center">{t("communities")}</h2>

                {/* Main Community Image */}
                <div className="mb-6">
                  <Image 
                    src="/assets/img/about-3.jpg" 
                    alt="Community Engagement" 
                    width={800} 
                    height={400} 
                    className="w-full h-auto rounded-lg"
                  />
                  <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <p className="text-gray-700 leading-relaxed">
                    {t("communityDescription")}
                  </p>
                </div>
                </div>

                {/* Community Description */}
                
              </section>
            </div>
            {/* <div className='col-md-3'>
              <RelatedMenu />
            </div> */}
          </div>
        </div>
      </div>
    </>
  )
}
