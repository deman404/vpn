import { useState, useCallback } from 'react';

export type VPNStatus = 'disconnected' | 'connecting' | 'connected' | 'disconnecting';

export interface Country {
  code: string;
  name: string;
  flag: string;
  premium?: boolean;
}

export const useVPN = () => {
  const [status, setStatus] = useState<VPNStatus>('disconnected');
  const [selectedCountry, setSelectedCountry] = useState<Country>({
    code: 'US',
    name: 'United States',
    flag: '🇺🇸'
  });
  const [connectionTime, setConnectionTime] = useState(0);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  const connect = useCallback(async () => {
    setStatus('connecting');
    // Simulate connection process
    await new Promise(resolve => setTimeout(resolve, 2000));
    setStatus('connected');
    
    // Start timer
    const id = setInterval(() => {
      setConnectionTime(prev => prev + 1);
    }, 1000);
    setIntervalId(id);
  }, []);

  const disconnect = useCallback(async () => {
    // Clear timer first
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
    
    setStatus('disconnecting');
    // Simulate disconnection process
    await new Promise(resolve => setTimeout(resolve, 1500));
    setStatus('disconnected');
    setConnectionTime(0);
  }, [intervalId]);

  const formatTime = useCallback((seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }, []);

  return {
    status,
    selectedCountry,
    setSelectedCountry,
    connectionTime: formatTime(connectionTime),
    connect,
    disconnect
  };
};