import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const UserAvatar = React.lazy(() => import("pages/UserAvatar"));
const Twofactorauthentication = React.lazy(
  () => import("pages/Twofactorauthentication"),
);
const Tutorials = React.lazy(() => import("pages/Tutorials"));
const Themes = React.lazy(() => import("pages/Themes"));
const TermsAndConditions = React.lazy(() => import("pages/TermsAndConditions"));
const Sorting = React.lazy(() => import("pages/Sorting"));
const SignupLoginModule = React.lazy(() => import("pages/SignupLoginModule"));
const Signin = React.lazy(() => import("pages/Signin"));
const SettingsOne = React.lazy(() => import("pages/SettingsOne"));
const RadioStations = React.lazy(() => import("pages/RadioStations"));
const Promocodes = React.lazy(() => import("pages/Promocodes"));
const PhoneLogin = React.lazy(() => import("pages/PhoneLogin"));
const Offlinework = React.lazy(() => import("pages/Offlinework"));
const Login = React.lazy(() => import("pages/Login"));
const LiveChat = React.lazy(() => import("pages/LiveChat"));
const LinkedInSignin = React.lazy(() => import("pages/LinkedInSignin"));
const LandingPage = React.lazy(() => import("pages/LandingPage"));
const KeywordSearch = React.lazy(() => import("pages/KeywordSearch"));
const FacebookSignin = React.lazy(() => import("pages/FacebookSignin"));
const HamburgerMenu = React.lazy(() => import("pages/HamburgerMenu"));
const FreeTrial = React.lazy(() => import("pages/FreeTrial"));
const ForgotPassword = React.lazy(() => import("pages/ForgotPassword"));
const CompressFile = React.lazy(() => import("pages/CompressFile"));
const FeatureSettings = React.lazy(() => import("pages/FeatureSettings"));
const FacebookSigninOne = React.lazy(() => import("pages/FacebookSigninOne"));
const Employeelogin = React.lazy(() => import("pages/Employeelogin"));
const EmailSignin = React.lazy(() => import("pages/EmailSignin"));
const DisplaySettings = React.lazy(() => import("pages/DisplaySettings"));
const Displayandtheme = React.lazy(() => import("pages/Displayandtheme"));
const DiscoverySettings = React.lazy(() => import("pages/DiscoverySettings"));
const Settings = React.lazy(() => import("pages/Settings"));
const ContactsList = React.lazy(() => import("pages/ContactsList"));
const ContactsIntegration = React.lazy(
  () => import("pages/ContactsIntegration"),
);
const Calendar = React.lazy(() => import("pages/Calendar"));
const AuthenticationinWear = React.lazy(
  () => import("pages/AuthenticationinWear"),
);
const AdvancedSearch = React.lazy(() => import("pages/AdvancedSearch"));
const AccountCreation = React.lazy(() => import("pages/AccountCreation"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/accountcreation" element={<AccountCreation />} />
          <Route path="/advancedsearch" element={<AdvancedSearch />} />
          <Route
            path="/authenticationinwear"
            element={<AuthenticationinWear />}
          />
          <Route path="/calendar" element={<Calendar />} />
          <Route
            path="/contactsintegration"
            element={<ContactsIntegration />}
          />
          <Route path="/contactslist" element={<ContactsList />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/discoverysettings" element={<DiscoverySettings />} />
          <Route path="/displayandtheme" element={<Displayandtheme />} />
          <Route path="/displaysettings" element={<DisplaySettings />} />
          <Route path="/emailsignin" element={<EmailSignin />} />
          <Route path="/employeelogin" element={<Employeelogin />} />
          <Route path="/facebooksigninone" element={<FacebookSigninOne />} />
          <Route path="/featuresettings" element={<FeatureSettings />} />
          <Route path="/compressfile" element={<CompressFile />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/freetrial" element={<FreeTrial />} />
          <Route path="/hamburgermenu" element={<HamburgerMenu />} />
          <Route path="/facebooksignin" element={<FacebookSignin />} />
          <Route path="/keywordsearch" element={<KeywordSearch />} />
          <Route path="/landingpage" element={<LandingPage />} />
          <Route path="/linkedinsignin" element={<LinkedInSignin />} />
          <Route path="/livechat" element={<LiveChat />} />
          <Route path="/login" element={<Login />} />
          <Route path="/offlinework" element={<Offlinework />} />
          <Route path="/phonelogin" element={<PhoneLogin />} />
          <Route path="/promocodes" element={<Promocodes />} />
          <Route path="/radiostations" element={<RadioStations />} />
          <Route path="/settingsone" element={<SettingsOne />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signuploginmodule" element={<SignupLoginModule />} />
          <Route path="/sorting" element={<Sorting />} />
          <Route path="/termsandconditions" element={<TermsAndConditions />} />
          <Route path="/themes" element={<Themes />} />
          <Route path="/tutorials" element={<Tutorials />} />
          <Route
            path="/twofactorauthentication"
            element={<Twofactorauthentication />}
          />
          <Route path="/useravatar" element={<UserAvatar />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
