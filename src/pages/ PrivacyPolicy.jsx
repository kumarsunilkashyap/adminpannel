import { useNavigate } from "react-router-dom";

const PrivacyPolicy = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6 pb-20">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Privacy Policy
        </h1>
        <p className="text-gray-600 leading-relaxed mb-4">
          Welcome to our Privacy Policy page. Your privacy is critically
          important to us. This policy outlines how we collect, use, and protect
          your personal information.
        </p>
        <h2 className="text-2xl font-semibold text-gray-700 mt-6 mb-4">
          Information We Collect
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          We collect information to provide better services to our users. This
          includes:
        </p>
        <ul className="list-disc list-inside text-gray-600 mb-4">
          <li>
            Personal identification information (Name, email address, etc.)
          </li>
          <li>Usage data and analytics</li>
          <li>Cookies and tracking technologies</li>
        </ul>
        <h2 className="text-2xl font-semibold text-gray-700 mt-6 mb-4">
          How We Use Your Information
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          The information we collect is used to:
        </p>
        <ul className="list-disc list-inside text-gray-600 mb-4">
          <li>Provide and maintain our services</li>
          <li>Improve user experience</li>
          <li>Communicate with you</li>
          <li>Ensure security and prevent fraud</li>
        </ul>
        <h2 className="text-2xl font-semibold text-gray-700 mt-6 mb-4">
          Protecting Your Information
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          We implement a variety of security measures to maintain the safety of
          your personal information. However, no method of transmission over the
          Internet is 100% secure.
        </p>
        <h2 className="text-2xl font-semibold text-gray-700 mt-6 mb-4">
          Your Consent
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          By using our site, you consent to our Privacy Policy.
        </p>
        <h2 className="text-2xl font-semibold text-gray-700 mt-6 mb-4">
          Changes to This Policy
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page.
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          If you have any questions about this Privacy Policy, please contact
          us.
        </p>
        <div className="text-center mt-8">
          <button
            onClick={() => navigate("contact-us")}
            className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-600 transition"
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
