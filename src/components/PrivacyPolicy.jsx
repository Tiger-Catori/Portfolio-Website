// PrivacyPolicy.js
import React from "react";
import "../css/PrivacyPolicy.css";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-container">
      <IntroSection />
      <DefinitionsSection />
      <ScopeSection />
      <DataCollectedSection />
      <HowWeCollectDataSection />
      <UseOfDataSection />
      <WhoWeShareDataWithSection />
      <DataRetentionSection />
      <YourRightsSection />
    </div>
  );
};

export default PrivacyPolicy;

const IntroSection = () => {
  return (
    <>
      <h2>Privacy Policy</h2>
      <p>
        This privacy policy applies between you, the User of this Website and
        Help4Landlords, the owner and provider of this Website…
      </p>
      <h4>Please read this privacy policy carefully.</h4>
    </>
  );
};

const DefinitionsSection = () => {
  return (
    <div>
      <h4>Definitions and Interpretation</h4>
      <p>In this privacy policy, the following definitions are used:</p>
      <h4>Data</h4>
      <p>
        Collectively all information that you submit to Help4Landlords via the
        Website. This definition incorporates, where applicable, the definitions
        provided in the Data Protection Laws.
      </p>
      <h4>Cookies</h4>
      <p>
        A small text file placed on your computer by this Website when you visit
        certain parts of the Website and/or when you use certain features of the
        Website.
      </p>
      <h4>Data Protection Laws</h4>
      <p>
        Any applicable law relating to the processing of personal data,
        including but not limited to the Directive 96/46/EC (Data Protection
        Directive) or the GDPR.
      </p>
      <h4>GDPR</h4>
      <p>The General Data Protection Regulation (EU) 2016/679.</p>
    </div>
  );
};

const ScopeSection = () => {
  return (
    <div>
      <h4>Scope of this Privacy Policy</h4>
      <p>
        This privacy policy applies only to the actions of Help4Landlords and
        Users with respect to this Website. It does not extend to any websites
        that can be accessed from this Website including, but not limited to,
        any links we may provide to social media websites.
      </p>
    </div>
  );
};

const DataCollectedSection = () => {
  return (
    <div>
      <h4>Data Collected</h4>
      <p>
        We may collect the following Data, which includes personal Data, from
        you:
      </p>
      <ul>
        <li>name;</li>
        <li>
          contact Information such as email addresses and telephone numbers;
        </li>
        <li>
          demographic information such as postcode, preferences, and interests;
        </li>
        <li>financial information such as credit/debit card numbers;</li>
        <li>IP address (automatically collected);</li>
        <li>web browser type and version (automatically collected);</li>
        <li>operating system (automatically collected);</li>
      </ul>
    </div>
  );
};

const HowWeCollectDataSection = () => {
  return (
    <div>
      <h4>How We Collect Data</h4>
      <p>We collect Data in the following ways:</p>
      <ul>
        <li>Data is given to us by you.</li>
        <li>Data is collected automatically.</li>
      </ul>
    </div>
  );
};

const UseOfDataSection = () => {
  return (
    <div>
      <h4>Our Use of Data</h4>
      <p>
        Any or all of the above Data may be required by us from time to time in
        order to provide you with the best possible service and experience when
        using our Website.
      </p>
      <p>Specifically, Data may be used by us for the following reasons:</p>
      <ul>
        <li>Internal record keeping.</li>
        <li>Improvement of our products/services.</li>
        <li>
          Transmission by email of marketing materials that may be of interest
          to you.
        </li>
        <li>
          Contact for market research purposes which may be done using email,
          telephone, fax, or mail.
        </li>
      </ul>
    </div>
  );
};

const WhoWeShareDataWithSection = () => {
  return (
    <div>
      <h4>Who We Share Data With</h4>
      <p>
        We may share your Data with the following groups of people for the
        following reasons:
      </p>
      <ul>
        <li>Our employees, agents, and/or professional advisors.</li>
        <li>
          Third party service providers who process personal data on our behalf.
        </li>
        <li>
          Third party payment providers who process payments made over the
          Website.
        </li>
      </ul>
    </div>
  );
};

const DataRetentionSection = () => {
  return (
    <div>
      <h4>Data Retention</h4>
      <p>
        Unless a longer retention period is required or permitted by law, we
        will only hold your Data on our systems for the period necessary to
        fulfil the purposes outlined in this privacy policy or until you request
        that the Data be deleted.
      </p>
    </div>
  );
};

const YourRightsSection = () => {
  return (
    <div>
      <h4>Your Rights</h4>
      <p>You have the following rights in relation to your Data:</p>
      <ul>
        <li>
          Right to access: The right to request copies of the information we
          hold about you.
        </li>
        <li>
          Right to correct: The right to have your Data rectified if it is
          inaccurate or incomplete.
        </li>
        <li>
          Right to erase: The right to request that we delete or remove your
          Data from our systems.
        </li>
        <li>
          Right to restrict: The right to "block" us from using your Data or
          limit the way in which we can use it.
        </li>
        <li>
          Right to data portability: The right to request that we move, copy or
          transfer your Data.
        </li>
        <li>
          Right to object: The right to object to our use of your Data including
          where we use it for our legitimate interests.
        </li>
      </ul>
    </div>
  );
};
