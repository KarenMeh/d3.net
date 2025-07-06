import React from 'react';
import { translations } from '../translations';

interface AGBProps {
  language: string;
}

const AGB: React.FC<AGBProps> = ({ language }) => {
  return (
    <div className="min-h-screen bg-white pt-40 pb-12 px-16 sm:px-20 lg:px-32">
      <div>
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 text-left">
            {translations[language].agbTitle}
          </h1>
        </div>
        
        {/* Content */}
        <div>
          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 text-left">{translations[language].agbSection1Title}</h2>
              <div className="space-y-4">
                <p className="text-gray-700 text-left">{translations[language].agbSection1Text1}</p>
                <p className="text-gray-700 text-left">{translations[language].agbSection1Text2}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 text-left">{translations[language].agbSection2Title}</h2>
              <div className="space-y-4">
                <p className="text-gray-700 text-left">{translations[language].agbSection2Text1}</p>
                <p className="text-gray-700 text-left">{translations[language].agbSection2Text2}</p>
                <p className="text-gray-700 text-left">{translations[language].agbSection2Text3}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 text-left">{translations[language].agbSection3Title}</h2>
              <div className="space-y-4">
                <p className="text-gray-700 text-left">{translations[language].agbSection3Text1}</p>
                <ul className="list-disc pl-6 space-y-2 text-left">
                  {(translations[language].agbSection3Services as string[]).map((service, index) => (
                    <li key={index} className="text-gray-700">{service}</li>
                  ))}
                </ul>
                <p className="text-gray-700 text-left">{translations[language].agbSection3Text2}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 text-left">{translations[language].agbSection4Title}</h2>
              <div className="space-y-4">
                <p className="text-gray-700 text-left">{translations[language].agbSection4Text1}</p>
                <p className="text-gray-700 text-left">{translations[language].agbSection4Text2}</p>
                <p className="text-gray-700 text-left">{translations[language].agbSection4Text3}</p>
                <p className="text-gray-700 text-left">{translations[language].agbSection4Text4}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 text-left">{translations[language].agbSection5Title}</h2>
              <div className="space-y-4">
                <p className="text-gray-700 text-left">{translations[language].agbSection5Text1}</p>
                <p className="text-gray-700 text-left">{translations[language].agbSection5Text2}</p>
                <p className="text-gray-700 text-left">{translations[language].agbSection5Text3}</p>
                <p className="text-gray-700 text-left">{translations[language].agbSection5Text4}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 text-left">{translations[language].agbSection6Title}</h2>
              <div className="space-y-4">
                <p className="text-gray-700 text-left">{translations[language].agbSection6Text1}</p>
                <p className="text-gray-700 text-left">{translations[language].agbSection6Text2}</p>
                <p className="text-gray-700 text-left">{translations[language].agbSection6Text3}</p>
                <p className="text-gray-700 text-left">{translations[language].agbSection6Text4}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 text-left">{translations[language].agbSection7Title}</h2>
              <div className="space-y-4">
                <p className="text-gray-700 text-left">{translations[language].agbSection7Text1}</p>
                <p className="text-gray-700 text-left">{translations[language].agbSection7Text2}</p>
                <p className="text-gray-700 text-left">{translations[language].agbSection7Text3}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 text-left">{translations[language].agbSection8Title}</h2>
              <div className="space-y-4">
                <p className="text-gray-700 text-left">{translations[language].agbSection8Text1}</p>
                <p className="text-gray-700 text-left">{translations[language].agbSection8Text2}</p>
                <p className="text-gray-700 text-left">{translations[language].agbSection8Text3}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 text-left">{translations[language].agbSection9Title}</h2>
              <p className="text-gray-700 text-left">{translations[language].agbSection9Text}</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 text-left">{translations[language].agbSection10Title}</h2>
              <div className="space-y-4">
                <p className="text-gray-700 text-left">{translations[language].agbSection10Text1}</p>
                <p className="text-gray-700 text-left">{translations[language].agbSection10Text2}</p>
                <p className="text-gray-700 text-left">{translations[language].agbSection10Text3}</p>
                <p className="text-gray-700 text-left">{translations[language].agbSection10Text4}</p>
              </div>
            </section>

            <section>
              <div className="space-y-2">
                <p className="text-sm text-gray-600 text-left">
                  <strong>{translations[language].agbFooterDate}</strong> {new Date().toLocaleDateString(language === 'de' ? 'de-DE' : 'en-US')}
                </p>
                <p className="text-sm text-gray-600 text-left">
                  <strong>{translations[language].agbFooterProvider}</strong> d3.net GmbH
                </p>
                <p className="text-sm text-gray-600 text-left">
                  <strong>{translations[language].agbFooterAddress}</strong> {translations[language].agbFooterAddressValue}
                </p>
                <p className="text-sm text-gray-600 text-left">
                  <strong>{translations[language].agbFooterContact}</strong> info@d3.net
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AGB; 