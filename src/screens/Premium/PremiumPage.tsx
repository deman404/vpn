import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeftIcon, 
  CheckIcon, 
  CrownIcon, 
  ShieldIcon, 
  ZapIcon, 
  GlobeIcon,
  WifiIcon,
  LockIcon
} from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';

const features = [
  {
    icon: ShieldIcon,
    title: 'Advanced Security',
    description: 'Military-grade encryption for ultimate protection'
  },
  {
    icon: ZapIcon,
    title: 'Ultra-Fast Speeds',
    description: 'Premium servers with unlimited bandwidth'
  },
  {
    icon: GlobeIcon,
    title: '50+ Countries',
    description: 'Access servers in over 50 countries worldwide'
  },
  {
    icon: WifiIcon,
    title: 'Multiple Devices',
    description: 'Connect up to 10 devices simultaneously'
  },
  {
    icon: LockIcon,
    title: 'No Logs Policy',
    description: 'Your privacy is our priority - zero logs kept'
  }
];

const plans = [
  {
    name: 'Monthly',
    price: '$9.99',
    period: '/month',
    popular: false
  },
  {
    name: '6 Months',
    price: '$6.99',
    period: '/month',
    popular: true,
    savings: 'Save 30%'
  },
  {
    name: 'Annual',
    price: '$4.99',
    period: '/month',
    popular: false,
    savings: 'Save 50%'
  }
];

export const PremiumPage = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <main className="bg-neutral-100 w-full min-w-[375px] min-h-[812px] relative overflow-y-auto">
      {/* Header */}
      <header className="flex items-center justify-between p-6 pt-16">
        <Button
          variant="ghost"
          onClick={() => navigate('/')}
          className="p-2 bg-neutralwhite rounded-xl shadow-sm hover:bg-neutralwhite"
        >
          <ArrowLeftIcon className="w-6 h-6 text-neutralblack" />
        </Button>
        
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
          className="flex items-center gap-2"
        >
          <CrownIcon className="w-6 h-6 text-primary-500" />
          <h1 className="[font-family:'Sora',Helvetica] font-bold text-xl text-neutralblack">
            Go Premium
          </h1>
        </motion.div>
        
        <div className="w-10" />
      </header>

      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="px-6 mb-8"
      >
        <div className="text-center mb-6">
          <h2 className="[font-family:'Sora',Helvetica] font-bold text-2xl text-neutralblack mb-2">
            Unlock Premium Features
          </h2>
          <p className="[font-family:'Sora',Helvetica] text-neutral-600 text-base">
            Experience the fastest, most secure VPN with unlimited access
          </p>
        </div>
      </motion.section>

      {/* Features */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="px-6 mb-8"
      >
        <div className="space-y-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
            >
              <Card className="bg-neutralwhite border-0 shadow-sm">
                <CardContent className="flex items-center gap-4 p-4">
                  <div className="p-2 bg-primary-100 rounded-xl">
                    <feature.icon className="w-6 h-6 text-primary-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="[font-family:'Sora',Helvetica] font-semibold text-neutralblack text-base mb-1">
                      {feature.title}
                    </h3>
                    <p className="[font-family:'Sora',Helvetica] text-neutral-600 text-sm">
                      {feature.description}
                    </p>
                  </div>
                  <CheckIcon className="w-5 h-5 text-green-500" />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Pricing Plans */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="px-6 mb-8"
      >
        <h3 className="[font-family:'Sora',Helvetica] font-bold text-lg text-neutralblack mb-4 text-center">
          Choose Your Plan
        </h3>
        
        <div className="space-y-3">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9 + index * 0.1 }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-primary-500 text-neutralwhite px-3 py-1 rounded-full text-xs font-semibold">
                    Most Popular
                  </div>
                </div>
              )}
              
              <Card className={`bg-neutralwhite border-2 ${plan.popular ? 'border-primary-500' : 'border-transparent'} shadow-sm`}>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="[font-family:'Sora',Helvetica] font-semibold text-neutralblack text-base">
                        {plan.name}
                      </h4>
                      {plan.savings && (
                        <p className="text-green-500 text-sm font-medium">
                          {plan.savings}
                        </p>
                      )}
                    </div>
                    <div className="text-right">
                      <div className="flex items-baseline">
                        <span className="[font-family:'Sora',Helvetica] font-bold text-2xl text-neutralblack">
                          {plan.price}
                        </span>
                        <span className="[font-family:'Sora',Helvetica] text-neutral-600 text-sm ml-1">
                          {plan.period}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CTA Button */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="px-6 pb-8"
      >
        <Button className="w-full bg-primary-500 hover:bg-primary-500/90 text-neutralwhite py-4 rounded-2xl shadow-lg">
          <CrownIcon className="w-5 h-5 mr-2" />
          <span className="[font-family:'Sora',Helvetica] font-semibold text-base">
            Start Premium Trial
          </span>
        </Button>
        
        <p className="text-center text-neutral-600 text-sm mt-3">
          7-day free trial • Cancel anytime
        </p>
      </motion.div>
    </main>
  );
};