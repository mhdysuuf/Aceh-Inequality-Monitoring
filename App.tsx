import React, { useState } from 'react';
import { Home } from './components/Home';
import { Landing } from './components/Landing';
import { PersonalFlow } from './components/PersonalFlow';
import { PersonalResults } from './components/PersonalResults';
import { ExpertiseFlow } from './components/ExpertiseFlow';
import { ExpertiseDashboard } from './components/ExpertiseDashboard';
import { AppView, PersonalData, ExpertiseData } from './types';

function App() {
  const [currentView, setCurrentView] = useState<AppView>(AppView.HOME);
  const [personalData, setPersonalData] = useState<PersonalData | null>(null);
  const [expertiseData, setExpertiseData] = useState<ExpertiseData | null>(null);

  const navigateTo = (view: AppView) => {
    setCurrentView(view);
    window.scrollTo(0,0);
  };

  const handlePersonalComplete = (data: PersonalData) => {
    setPersonalData(data);
    navigateTo(AppView.PERSONAL_RESULT);
  };

  const handleExpertiseComplete = (data: ExpertiseData) => {
    setExpertiseData(data);
    navigateTo(AppView.EXPERTISE_DASHBOARD);
  };

  const renderView = () => {
    switch (currentView) {
      case AppView.HOME:
        return (
          <Home 
            onEnter={() => navigateTo(AppView.LANDING)}
          />
        );

      case AppView.LANDING:
        return (
          <Landing 
            onSelectPersonal={() => navigateTo(AppView.PERSONAL_ONBOARDING)}
            onSelectExpertise={() => navigateTo(AppView.EXPERTISE_ONBOARDING)}
          />
        );
      
      case AppView.PERSONAL_ONBOARDING:
        return (
          <PersonalFlow 
            onComplete={handlePersonalComplete}
            onBack={() => navigateTo(AppView.LANDING)}
          />
        );

      case AppView.PERSONAL_RESULT:
        return personalData ? (
          <PersonalResults 
            data={personalData}
            onBack={() => navigateTo(AppView.LANDING)}
          />
        ) : null;

      case AppView.EXPERTISE_ONBOARDING:
        return (
          <ExpertiseFlow 
            onComplete={handleExpertiseComplete}
            onBack={() => navigateTo(AppView.LANDING)}
          />
        );

      case AppView.EXPERTISE_DASHBOARD:
        return expertiseData ? (
          <ExpertiseDashboard 
            data={expertiseData}
            onBack={() => navigateTo(AppView.LANDING)}
          />
        ) : null;

      default:
        return <div>Error: Unknown View</div>;
    }
  };

  return (
    <div className="font-sans antialiased text-gh-black bg-gh-paper min-h-screen">
      {renderView()}
    </div>
  );
}

export default App;