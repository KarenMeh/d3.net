import React from 'react';
import { translations } from '../translations';

interface ImpressumProps {
  language: string;
}

const Impressum: React.FC<ImpressumProps> = ({ language }) => {
  return (
    <div className="min-h-screen bg-white pt-40 pb-12 px-16 sm:px-20 lg:px-32">
      <div>
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 text-left">
            {translations[language].impressumTitle}
          </h1>
        </div>
        {/* Content */}
        <div>
          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 text-left">
                {translations[language].impressumTmgTitle}
              </h2>
              <div className="space-y-1">
                <p className="text-lg font-semibold text-gray-900 text-left">{translations[language].impressumCompany}</p>
                <p className="text-gray-700 text-left">{translations[language].impressumAddress}</p>
                <p className="text-gray-700 text-left">{translations[language].impressumCity}</p>
                <p className="text-gray-700 text-left">{translations[language].impressumCountry}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 text-left">
                {translations[language].impressumRegisterTitle}
              </h2>
              <div className="space-y-1">
                <p className="text-gray-700 text-left">{translations[language].impressumRegister}</p>
                <p className="text-gray-700 text-left">{translations[language].impressumRegisterCourt}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 text-left">
                {translations[language].impressumRepresentedBy}
              </h2>
              <div>
                <p className="text-gray-700 text-left">{translations[language].impressumManagingDirector}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 text-left">
                {translations[language].impressumContact}
              </h2>
              <div className="space-y-1">
                <p className="text-gray-700 text-left">{translations[language].impressumPhone}</p>
                <p className="text-gray-700 text-left">{translations[language].impressumFax}</p>
                <p className="text-gray-700 text-left">{translations[language].impressumEmail}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 text-left">
                {translations[language].impressumPostalAddress}
              </h2>
              <div className="space-y-1">
                <p className="text-lg font-semibold text-gray-900 text-left">{translations[language].impressumAsiaCompany}</p>
                <p className="text-gray-700 text-left">{translations[language].impressumAsiaAddress1}</p>
                <p className="text-gray-700 text-left">{translations[language].impressumAsiaAddress2}</p>
                <p className="text-gray-700 text-left">{translations[language].impressumAsiaCity}</p>
                <p className="text-gray-700 text-left">{translations[language].impressumAsiaRegNo}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 text-left">
                {translations[language].impressumVatTitle}
              </h2>
              <div>
                <p className="text-gray-700 text-left">{translations[language].impressumVatNumber}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 text-left">
                {translations[language].impressumEuDispute}
              </h2>
              <div className="space-y-1">
                <p className="text-gray-700 text-left">{translations[language].impressumEuDisputeText} <a href={translations[language].impressumEuDisputeLink as string} className="text-blue-600 hover:text-blue-800 underline">{translations[language].impressumEuDisputeLink}</a>.</p>
                <p className="text-gray-700 text-left">{translations[language].impressumEuDisputeEmail}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 text-left">
                {translations[language].impressumConsumerDispute}
              </h2>
              <div>
                <p className="text-gray-700 text-left">{translations[language].impressumConsumerDisputeText}</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impressum; 