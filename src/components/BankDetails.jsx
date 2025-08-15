import React, { useState } from 'react';

const BankDetails = () => {
  const [copiedField, setCopiedField] = useState('');

  const bankInfo = {
    accountName: "GHR LAB AND RESEARCH CENTRE",
    accountNumber: "624205013277",
    ifscCode: "ICIC0006242",
    bankName: "ICICI BANK"
  };

  const copyToClipboard = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    
    // Clear the copied state after 2 seconds
    setTimeout(() => {
      setCopiedField('');
    }, 2000);
  };

  return (
    <section className="bg-gradient-to-br from-purple-50 via-white to-indigo-50 py-12 px-4">
      <div className="container mx-auto max-w-lg">
        <div className="bg-white rounded-2xl shadow-lg border border-purple-100 overflow-hidden">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-6 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-3">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M2 6c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2v2H2V6zm0 4h20v8c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2v-8zm4 2v2h8v-2H6z"/>
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-white mb-1">
              BANK <span className="text-purple-200">DETAILS</span>
            </h2>
            <p className="text-sm text-purple-100">
              Payment information for registration
            </p>
          </div>

          {/* Bank Details Content */}
          <div className="p-6 space-y-4">
            
            {/* Account Name */}
            <div className="group">
              <label className="block text-xs font-semibold text-gray-600 mb-2 uppercase tracking-wide">
                Account Name
              </label>
              <div className="relative">
                <div className="bg-gray-50 rounded-lg p-3 border border-gray-100 group-hover:border-purple-200 transition-colors duration-200">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-gray-800 flex-1 pr-2">
                      {bankInfo.accountName}
                    </p>
                    <button 
                      onClick={() => copyToClipboard(bankInfo.accountName, 'Account Name')}
                      className="p-1.5 text-gray-400 hover:text-purple-600 hover:bg-purple-50 rounded transition-all duration-200 flex-shrink-0"
                      title="Copy to clipboard"
                    >
                      {copiedField === 'Account Name' ? (
                        <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                        </svg>
                      ) : (
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
                        </svg>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Account Number */}
            <div className="group">
              <label className="block text-xs font-semibold text-gray-600 mb-2 uppercase tracking-wide">
                Account Number
              </label>
              <div className="relative">
                <div className="bg-gray-50 rounded-lg p-3 border border-gray-100 group-hover:border-purple-200 transition-colors duration-200">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-mono font-bold text-gray-800">
                      {bankInfo.accountNumber}
                    </p>
                    <button 
                      onClick={() => copyToClipboard(bankInfo.accountNumber, 'Account Number')}
                      className="p-1.5 text-gray-400 hover:text-purple-600 hover:bg-purple-50 rounded transition-all duration-200"
                      title="Copy to clipboard"
                    >
                      {copiedField === 'Account Number' ? (
                        <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                        </svg>
                      ) : (
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
                        </svg>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* IFSC Code */}
            <div className="group">
              <label className="block text-xs font-semibold text-gray-600 mb-2 uppercase tracking-wide">
                IFSC Code
              </label>
              <div className="relative">
                <div className="bg-gray-50 rounded-lg p-3 border border-gray-100 group-hover:border-purple-200 transition-colors duration-200">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-mono font-bold text-gray-800">
                      {bankInfo.ifscCode}
                    </p>
                    <button 
                      onClick={() => copyToClipboard(bankInfo.ifscCode, 'IFSC Code')}
                      className="p-1.5 text-gray-400 hover:text-purple-600 hover:bg-purple-50 rounded transition-all duration-200"
                      title="Copy to clipboard"
                    >
                      {copiedField === 'IFSC Code' ? (
                        <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                        </svg>
                      ) : (
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
                        </svg>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Bank Name */}
            <div className="group">
              <label className="block text-xs font-semibold text-gray-600 mb-2 uppercase tracking-wide">
                Bank Name
              </label>
              <div className="relative">
                <div className="bg-gray-50 rounded-lg p-3 border border-gray-100 group-hover:border-purple-200 transition-colors duration-200">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-bold text-gray-800">
                      {bankInfo.bankName}
                    </p>
                    <button 
                      onClick={() => copyToClipboard(bankInfo.bankName, 'Bank Name')}
                      className="p-1.5 text-gray-400 hover:text-purple-600 hover:bg-purple-50 rounded transition-all duration-200"
                      title="Copy to clipboard"
                    >
                      {copiedField === 'Bank Name' ? (
                        <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                        </svg>
                      ) : (
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
                        </svg>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Security Notice */}
            <div className="mt-5 p-3 bg-blue-50 border border-blue-200 rounded-lg">
              <div className="flex items-start space-x-2">
                <svg className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                <div>
                  <h4 className="font-semibold text-blue-800 text-sm mb-1">Secure Transaction</h4>
                  <p className="text-xs text-blue-700">
                    Verify all details before payment. Keep receipt for reference.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Toast Notification */}
        {copiedField && (
          <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 animate-bounce">
            <div className="bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg flex items-center space-x-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
              </svg> 
              <span className="text-sm font-medium">
                {copiedField} copied!
              </span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default BankDetails;
