import React from 'react';
import { translations } from '../translations';

interface DatenschutzProps {
  language: string;
}

const Datenschutz: React.FC<DatenschutzProps> = ({ language }) => {
  return (
    <div className="min-h-screen bg-white pt-40 pb-12 px-16 sm:px-20 lg:px-32">
      <div>
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 text-left">
            {translations[language].datenschutzTitle}
          </h1>
        </div>
        
        {/* Content */}
        <div>
          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 text-left">{translations[language].datenschutzOverviewTitle}</h2>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900 text-left">{translations[language].datenschutzGeneralHints}</h3>
                <p className="text-gray-700 text-left">{translations[language].datenschutzGeneralText}</p>
                
                <h3 className="text-xl font-bold text-gray-900 text-left">{translations[language].datenschutzDataCollection}</h3>
                
                <h4 className="text-lg font-bold text-gray-900 text-left">{translations[language].datenschutzWhoResponsible}</h4>
                <p className="text-gray-700 text-left">{translations[language].datenschutzWhoResponsibleText}</p>
                
                <h4 className="text-lg font-bold text-gray-900 text-left">{translations[language].datenschutzHowCollect}</h4>
                <p className="text-gray-700 text-left">{translations[language].datenschutzHowCollectText1}</p>
                <p className="text-gray-700 text-left">{translations[language].datenschutzHowCollectText2}</p>
                
                <h4 className="text-lg font-bold text-gray-900 text-left">{translations[language].datenschutzWhyUse}</h4>
                <p className="text-gray-700 text-left">{translations[language].datenschutzWhyUseText}</p>
                
                <h4 className="text-lg font-bold text-gray-900 text-left">{translations[language].datenschutzYourRights}</h4>
                <p className="text-gray-700 text-left">{translations[language].datenschutzYourRightsText}</p>
                <p className="text-gray-700 text-left">{translations[language].datenschutzContactUs}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 text-left">{translations[language].datenschutzHostingTitle}</h2>
              <div className="space-y-4">
                <p className="text-gray-700 text-left">{translations[language].datenschutzHostingText}</p>
                
                <h3 className="text-xl font-bold text-gray-900 text-left">{translations[language].datenschutzHetznerTitle}</h3>
                <p className="text-gray-700 text-left">{translations[language].datenschutzHetznerText}</p>
                <p className="text-gray-700 text-left">{translations[language].datenschutzHetznerLegal} <a href={translations[language].datenschutzHetznerLink as string} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">{translations[language].datenschutzHetznerLink}</a>.</p>
                <p className="text-gray-700 text-left">{translations[language].datenschutzHetznerBasis}</p>
                
                <h3 className="text-xl font-bold text-gray-900 text-left">{translations[language].datenschutzOrderProcessing}</h3>
                <p className="text-gray-700 text-left">{translations[language].datenschutzOrderProcessingText}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 text-left">{translations[language].datenschutzGeneralInfoTitle}</h2>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900 text-left">{translations[language].datenschutzPrivacy}</h3>
                <p className="text-gray-700 text-left">{translations[language].datenschutzPrivacyText1}</p>
                <p className="text-gray-700 text-left">{translations[language].datenschutzPrivacyText2}</p>
                <p className="text-gray-700 text-left">{translations[language].datenschutzPrivacyText3}</p>
                
                <h3 className="text-xl font-bold text-gray-900 text-left">{translations[language].datenschutzResponsibleParty}</h3>
                <p className="text-gray-700 text-left">{translations[language].datenschutzResponsiblePartyText}</p>
                <div className="space-y-2">
                  <p className="text-gray-700 text-left"><strong>d3.net internet technologien gmbh</strong></p>
                  <p className="text-gray-700 text-left">Langenstr. 34</p>
                  <p className="text-gray-700 text-left">28195 Bremen (Germany)</p>
                  <p className="text-gray-700 text-left">Geschäftsführer: Marco Lutze</p>
                  <p className="text-gray-700 text-left">Amtsgericht Bremen HRB 27448</p>
                  <p className="text-gray-700 text-left">VAT-ID: DE284413301</p>
                  <p className="text-gray-700 text-left">Tel: +49 (0)421 9896 1510</p>
                  <p className="text-gray-700 text-left">Fax: +49 (0)421 9896 1516</p>
                </div>
                
                <div className="space-y-2">
                  <p className="text-gray-700 text-left"><strong>d3.net Asia Limited</strong></p>
                  <p className="text-gray-700 text-left">Shop 58, 2/F Beverley Commercial Centre, 87-105</p>
                  <p className="text-gray-700 text-left">Cahtham Road South, Tsim Sha Tsui</p>
                  <p className="text-gray-700 text-left">Hong Kong</p>
                  <p className="text-gray-700 text-left">RegNo: 2961914</p>
                </div>
                
                <div className="space-y-2">
                  <p className="text-gray-700 text-left">Telefon: +49 (0)421 9896 1510</p>
                  <p className="text-gray-700 text-left">E-Mail: info@d3.net</p>
                </div>
                
                <p className="text-gray-700 text-left">{translations[language].datenschutzResponsiblePartyDef}</p>
                
                <h3 className="text-xl font-bold text-gray-900 text-left">{translations[language].datenschutzStorageDuration}</h3>
                <p className="text-gray-700 text-left">{translations[language].datenschutzStorageDurationText}</p>
                
                <h3 className="text-xl font-bold text-gray-900 text-left">{translations[language].datenschutzLegalBasis}</h3>
                <p className="text-gray-700 text-left">{translations[language].datenschutzLegalBasisText}</p>
                
                <h3 className="text-xl font-bold text-gray-900 text-left">{translations[language].datenschutzRevokeConsent}</h3>
                <p className="text-gray-700 text-left">{translations[language].datenschutzRevokeConsentText}</p>
                
                <h3 className="text-xl font-bold text-gray-900 text-left">{translations[language].datenschutzObjection}</h3>
                <p className="text-gray-700 text-left font-bold">{translations[language].datenschutzObjectionText1}</p>
                <p className="text-gray-700 text-left font-bold">{translations[language].datenschutzObjectionText2}</p>
                
                <h3 className="text-xl font-bold text-gray-900 text-left">{translations[language].datenschutzComplaint}</h3>
                <p className="text-gray-700 text-left">{translations[language].datenschutzComplaintText}</p>
                
                <h3 className="text-xl font-bold text-gray-900 text-left">{translations[language].datenschutzDataPortability}</h3>
                <p className="text-gray-700 text-left">{translations[language].datenschutzDataPortabilityText}</p>
                
                <h3 className="text-xl font-bold text-gray-900 text-left">{translations[language].datenschutzInformation}</h3>
                <p className="text-gray-700 text-left">{translations[language].datenschutzInformationText}</p>
                
                <h3 className="text-xl font-bold text-gray-900 text-left">{translations[language].datenschutzRestriction}</h3>
                <p className="text-gray-700 text-left">{translations[language].datenschutzRestrictionText}</p>
                <ul className="list-disc pl-6 space-y-2 text-left">
                  {(translations[language].datenschutzRestrictionCases as string[]).map((item, index) => (
                    <li key={index} className="text-gray-700">{item}</li>
                  ))}
                </ul>
                <p className="text-gray-700 text-left">{translations[language].datenschutzRestrictionEnd}</p>
                
                <h3 className="text-xl font-bold text-gray-900 text-left">{translations[language].datenschutzSslTitle}</h3>
                <p className="text-gray-700 text-left">{translations[language].datenschutzSslText1}</p>
                <p className="text-gray-700 text-left">{translations[language].datenschutzSslText2}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 text-left">{translations[language].datenschutzDataCollectionTitle}</h2>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900 text-left">{translations[language].datenschutzCookiesTitle}</h3>
                <p className="text-gray-700 text-left">{translations[language].datenschutzCookiesText1}</p>
                <p className="text-gray-700 text-left">{translations[language].datenschutzCookiesText2}</p>
                <p className="text-gray-700 text-left">{translations[language].datenschutzCookiesText3}</p>
                <p className="text-gray-700 text-left">{translations[language].datenschutzCookiesText4}</p>
                <p className="text-gray-700 text-left">{translations[language].datenschutzCookiesText5}</p>
                <p className="text-gray-700 text-left">{translations[language].datenschutzCookiesText6}</p>
                
                <h3 className="text-xl font-bold text-gray-900 text-left">{translations[language].datenschutzContactTitle}</h3>
                <p className="text-gray-700 text-left">{translations[language].datenschutzContactText1}</p>
                <p className="text-gray-700 text-left">{translations[language].datenschutzContactText2}</p>
                <p className="text-gray-700 text-left">{translations[language].datenschutzContactText3}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 text-left">{translations[language].datenschutzPluginsTitle}</h2>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900 text-left">{translations[language].datenschutzGoogleFontsTitle}</h3>
                <p className="text-gray-700 text-left">{translations[language].datenschutzGoogleFontsText1}</p>
                <p className="text-gray-700 text-left">{translations[language].datenschutzGoogleFontsText2} <a href={translations[language].datenschutzGoogleFontsLink1 as string} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">{translations[language].datenschutzGoogleFontsLink1}</a> {translations[language].datenschutzGoogleFontsText3} <a href={translations[language].datenschutzGoogleFontsLink2 as string} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">{translations[language].datenschutzGoogleFontsLink2}</a>.</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Datenschutz; 