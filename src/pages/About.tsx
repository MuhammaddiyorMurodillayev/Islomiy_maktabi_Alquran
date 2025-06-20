import React from 'react';
import { Heart, Target, Users, Award } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();

  const values = [
    {
      icon: <Heart className="h-8 w-8 text-emerald-600" />,
      title: t('faithBasedLearning'),
      description: t('faithBasedLearningDesc')
    },
    {
      icon: <Target className="h-8 w-8 text-emerald-600" />,
      title: t('academicExcellenceTitle'),
      description: t('academicExcellenceAboutDesc')
    },
    {
      icon: <Users className="h-8 w-8 text-emerald-600" />,
      title: t('communityFocus'),
      description: t('communityFocusDesc')
    },
    {
      icon: <Award className="h-8 w-8 text-emerald-600" />,
      title: t('characterDevelopment'),
      description: t('characterDevelopmentDesc')
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('aboutTitle')}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dedicated to providing quality Islamic education that prepares children for success in both this world and the hereafter.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-emerald-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('mission')}</h2>
              <p className="text-gray-700 leading-relaxed">
                {t('missionText')} 
              </p>
            </div>
            <div className="bg-blue-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('philosophy')}</h2>
              <p className="text-gray-700 leading-relaxed">
                {t('philosophyText')}  
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('ourCoreValues')}</h2>
            <p className="text-xl text-gray-600">{t('coreValuesDesc')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md">
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* School Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('ourStory')}</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Al-Quran Islamic School was founded with a vision to provide exceptional Islamic education to the Muslim community in Ohio. Our founders recognized the need for a school that would seamlessly integrate Islamic values with academic excellence.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Since our establishment, we have grown from a small community initiative to a respected educational institution serving families throughout the region. Our dedicated team of educators shares a common commitment to nurturing the next generation of Muslim leaders.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Today, we continue to uphold our founding principles while adapting to meet the evolving needs of our students and community. We are proud to be a non-charter school that maintains high standards of academic and Islamic education.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://i.postimg.cc/3JjncxXK/photo-2025-06-04-12-18-20.jpg"
                alt="School building"
                className="rounded-lg shadow-md"
              />
              <img
                src="https://i.postimg.cc/gkpK8bf1/photo-2025-06-04-12-17-40.jpg"
                alt="Students and teachers"
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Accreditation */}
      <section className="py-16 bg-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">{t('accreditationStandards')}</h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            As a non-charter private school, we maintain high educational standards while providing the flexibility to integrate Islamic education throughout our curriculum. Our programs meet and exceed state educational requirements.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">12+</div>
              <div className="text-emerald-100">{t('yearsOfService')}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">200+</div>
              <div className="text-emerald-100">{t('studentsServed')}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">15+</div>
              <div className="text-emerald-100">{t('dedicatedStaff')}</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;