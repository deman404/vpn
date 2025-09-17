import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeftIcon, 
  SearchIcon, 
  CheckIcon,
  CrownIcon,
  WifiIcon,
  SignalIcon
} from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';
import { useVPN, Country } from '../../hooks/useVPN';

const countries: Country[] = [
  { code: 'US', name: 'United States', flag: '🇺🇸', premium: false },
  { code: 'GB', name: 'United Kingdom', flag: '🇬🇧', premium: false },
  { code: 'DE', name: 'Germany', flag: '🇩🇪', premium: false },
  { code: 'FR', name: 'France', flag: '🇫🇷', premium: false },
  { code: 'CA', name: 'Canada', flag: '🇨🇦', premium: false },
  { code: 'AU', name: 'Australia', flag: '🇦🇺', premium: true },
  { code: 'JP', name: 'Japan', flag: '🇯🇵', premium: true },
  { code: 'KR', name: 'South Korea', flag: '🇰🇷', premium: true },
  { code: 'SG', name: 'Singapore', flag: '🇸🇬', premium: true },
  { code: 'NL', name: 'Netherlands', flag: '🇳🇱', premium: false },
  { code: 'CH', name: 'Switzerland', flag: '🇨🇭', premium: true },
  { code: 'SE', name: 'Sweden', flag: '🇸🇪', premium: false },
  { code: 'NO', name: 'Norway', flag: '🇳🇴', premium: true },
  { code: 'IT', name: 'Italy', flag: '🇮🇹', premium: false },
  { code: 'ES', name: 'Spain', flag: '🇪🇸', premium: false },
  { code: 'BR', name: 'Brazil', flag: '🇧🇷', premium: true },
  { code: 'IN', name: 'India', flag: '🇮🇳', premium: true },
  { code: 'MX', name: 'Mexico', flag: '🇲🇽', premium: true },
];

const getSignalStrength = () => Math.floor(Math.random() * 3) + 1;
const getPing = () => Math.floor(Math.random() * 50) + 20;

export const CountrySelector = (): JSX.Element => {
  const navigate = useNavigate();
  const { selectedCountry, setSelectedCountry } = useVPN();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCountries = countries.filter(country =>
    country.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCountrySelect = (country: Country) => {
    if (country.premium) {
      // Show premium modal or navigate to premium page
      navigate('/premium');
      return;
    }
    
    setSelectedCountry(country);
    // Add a small delay to show selection feedback before navigating
    setTimeout(() => {
      navigate('/');
    }, 300);
  };

  const renderSignalBars = (strength: number) => {
    return (
      <div className="flex items-end gap-0.5">
        {[1, 2, 3].map((bar) => (
          <div
            key={bar}
            className={`w-1 rounded-sm ${
              bar <= strength 
                ? 'bg-green-500 h-3' 
                : 'bg-neutral-300 h-1'
            }`}
            style={{ height: `${bar * 4 + 4}px` }}
          />
        ))}
      </div>
    );
  };

  return (
    <main className="bg-neutral-100 w-full min-w-[375px] min-h-[812px] relative">
      {/* Header */}
      <header className="flex items-center justify-between p-6 pt-16 bg-neutralwhite shadow-sm">
        <Button
          variant="ghost"
          onClick={() => navigate('/')}
          className="p-2 hover:bg-neutral-100"
        >
          <ArrowLeftIcon className="w-6 h-6 text-neutralblack" />
        </Button>
        
        <h1 className="[font-family:'Sora',Helvetica] font-bold text-xl text-neutralblack">
          Select Location
        </h1>
        
        <div className="w-10" />
      </header>

      {/* Search Bar */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="p-6 bg-neutralwhite"
      >
        <div className="relative">
          <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-500" />
          <input
            type="text"
            placeholder="Search countries..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-neutral-100 rounded-2xl border-0 focus:outline-none focus:ring-2 focus:ring-primary-500 [font-family:'Sora',Helvetica] text-base"
          />
        </div>
      </motion.div>

      {/* Countries List */}
      <div className="flex-1 overflow-y-auto px-6 pb-6">
        <AnimatePresence>
          {filteredCountries.map((country, index) => {
            const signalStrength = getSignalStrength();
            const ping = getPing();
            const isSelected = selectedCountry.code === country.code;
            
            return (
              <motion.div
                key={country.code}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: index * 0.05 }}
                className="mb-3"
              >
                <Card 
                  className={`bg-neutralwhite border-2 cursor-pointer transition-all duration-200 ${
                    isSelected 
                      ? 'border-primary-500 shadow-md' 
                      : 'border-transparent shadow-sm hover:shadow-md'
                  }`}
                  onClick={() => handleCountrySelect(country)}
                >
                  <CardContent className="flex items-center gap-4 p-4">
                    {/* Flag */}
                    <div className="text-2xl">
                      {country.flag}
                    </div>
                    
                    {/* Country Info */}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="[font-family:'Sora',Helvetica] font-semibold text-neutralblack text-base">
                          {country.name}
                        </h3>
                        {country.premium && (
                          <CrownIcon className="w-4 h-4 text-primary-500" />
                        )}
                      </div>
                      <div className="flex items-center gap-4 text-sm text-neutral-600">
                        <div className="flex items-center gap-1">
                          {renderSignalBars(signalStrength)}
                          <span className="ml-1">{ping}ms</span>
                        </div>
                        {!country.premium && (
                          <div className="flex items-center gap-1">
                            <WifiIcon className="w-3 h-3" />
                            <span>Free</span>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    {/* Selection Indicator */}
                    <div className="flex items-center gap-2">
                      {country.premium && (
                        <div className="px-2 py-1 bg-primary-100 rounded-full">
                          <span className="text-xs font-medium text-primary-500">
                            Premium
                          </span>
                        </div>
                      )}
                      
                      {isSelected && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center"
                        >
                          <CheckIcon className="w-4 h-4 text-neutralwhite" />
                        </motion.div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </AnimatePresence>
        
        {filteredCountries.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="[font-family:'Sora',Helvetica] text-neutral-600 text-base">
              No countries found matching "{searchQuery}"
            </p>
          </motion.div>
        )}
      </div>

      {/* Premium Banner */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="p-6 bg-neutralwhite border-t border-neutral-200"
      >
        <Card className="bg-gradient-to-r from-primary-500 to-primary-400 border-0">
          <CardContent className="flex items-center gap-4 p-4">
            <CrownIcon className="w-8 h-8 text-neutralwhite" />
            <div className="flex-1">
              <h3 className="[font-family:'Sora',Helvetica] font-semibold text-neutralwhite text-base mb-1">
                Unlock All Locations
              </h3>
              <p className="[font-family:'Sora',Helvetica] text-neutralwhite/80 text-sm">
                Access 50+ premium servers worldwide
              </p>
            </div>
            <Button
              onClick={() => navigate('/premium')}
              className="bg-neutralwhite text-primary-500 hover:bg-neutralwhite/90 px-4 py-2 rounded-xl font-semibold"
            >
              Upgrade
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    </main>
  );
};