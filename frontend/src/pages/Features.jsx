// frontend/src/pages/Features.jsx
import React from 'react';
import Sidebar from '../components/Sidebar.jsx';
import Navbar from '../components/Navbar.jsx';
import FeatureCard from '../components/FeatureCard.jsx';
import useFeatureToggle from '../hooks/useFeatureToggle.js';
import { ReactComponent as BotIcon } from '../assets/icons/bot.svg';
import { ReactComponent as PremiumIcon } from '../assets/icons/premium.svg';
import { ReactComponent as SettingsIcon } from '../assets/icons/settings.svg';

const Features = () => {
  const antiLink = useFeatureToggle(false);
  const downloader = useFeatureToggle(true);
  const aiAssistant = useFeatureToggle(false);

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="p-6 space-y-4">
          <h1 className="text-2xl font-bold mb-4">Features</h1>

          <FeatureCard
            icon={BotIcon}
            title="Anti-Link"
            description="Blokir link yang dikirim di grup WhatsApp."
            enabled={antiLink.enabled}
            onToggle={antiLink.toggle}
          />

          <FeatureCard
            icon={PremiumIcon}
            title="Media Downloader"
            description="Download video dari TikTok, Instagram, dan YouTube."
            enabled={downloader.enabled}
            onToggle={downloader.toggle}
          />

          <FeatureCard
            icon={SettingsIcon}
            title="AI Assistant"
            description="Gunakan AI untuk menjawab pertanyaan otomatis."
            enabled={aiAssistant.enabled}
            onToggle={aiAssistant.toggle}
          />
        </main>
      </div>
    </div>
  );
};

export default Features;