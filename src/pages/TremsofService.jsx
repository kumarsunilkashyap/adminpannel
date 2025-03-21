import React from "react";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6 pb-20">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Terms of Service
        </h1>
        <p className="text-gray-600 mb-4">
          Welcome to our Admin Panel. By accessing or using our services, you
          agree to comply with and be bound by the following terms and
          conditions. Please read them carefully.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
          1. Acceptance of Terms
        </h2>
        <p className="text-gray-600 mb-4">
          By using this platform, you agree to these Terms of Service and our
          Privacy Policy. If you do not agree, please do not use our services.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
          2. User Responsibilities
        </h2>
        <p className="text-gray-600 mb-4">
          You are responsible for maintaining the confidentiality of your
          account and password. You agree to notify us immediately of any
          unauthorized use of your account.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
          3. Prohibited Activities
        </h2>
        <p className="text-gray-600 mb-4">
          You agree not to engage in any activity that disrupts or interferes
          with the functionality of our services, including but not limited to
          hacking, spamming, or distributing malware.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
          4. Termination
        </h2>
        <p className="text-gray-600 mb-4">
          We reserve the right to terminate or suspend your access to our
          services at any time, without notice, for conduct that we believe
          violates these terms or is harmful to other users.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
          5. Limitation of Liability
        </h2>
        <p className="text-gray-600 mb-4">
          We are not liable for any damages arising from your use of our
          services. Use our platform at your own risk.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
          6. Changes to Terms
        </h2>
        <p className="text-gray-600 mb-4">
          We reserve the right to update these terms at any time. Continued use
          of our services after changes are made constitutes your acceptance of
          the new terms.
        </p>

        <p className="text-gray-600 mt-6">
          If you have any questions about these Terms of Service, please contact
          us at <span className="text-blue-500">support@example.com</span>.
        </p>
      </div>
    </div>
  );
};

export default TermsOfService;
