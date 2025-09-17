import {
  ArrowDownIcon,
  ArrowUpIcon,
  ChevronUpIcon,
  CrownIcon,
  MenuIcon,
  PowerIcon,
} from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Separator } from "../../components/ui/separator";
import { useVPN } from "../../hooks/useVPN";

export const MainDefault = (): JSX.Element => {
  const navigate = useNavigate();
  const { status, selectedCountry, connectionTime, connect, disconnect } =
    useVPN();

  const handleStartStop = async () => {
    if (status === "disconnected") {
      await connect();
    } else if (status === "connected") {
      await disconnect();
    }
  };

  const getStatusText = () => {
    switch (status) {
      case "connecting":
        return "Connecting...";
      case "connected":
        return "Connected";
      case "disconnecting":
        return "Disconnecting...";
      default:
        return "Not connected";
    }
  };

  const getButtonText = () => {
    switch (status) {
      case "connecting":
        return "Connecting";
      case "connected":
        return "Stop";
      case "disconnecting":
        return "Stopping";
      default:
        return "Start";
    }
  };

  return (
    <main className="bg-neutral-100 w-full min-w-[375px] min-h-[812px] relative">
      {/* Status Section */}
      <section className="inline-flex flex-col items-center absolute left-[calc(50.00%_-_62px)] bottom-[122px]">
        <motion.div
          className="relative w-fit mt-[-1.00px] [font-family:'Sora',Helvetica] font-semibold text-neutralblack text-base tracking-[0] leading-6 whitespace-nowrap"
          animate={{
            color:
              status === "connected"
                ? "#10b981"
                : status === "connecting" || status === "disconnecting"
                ? "#f59e0b"
                : "#000000",
          }}
          transition={{ duration: 0.3 }}
        >
          {getStatusText()}
        </motion.div>

        <motion.div
          className="relative w-fit [font-family:'Sora',Helvetica] font-semibold text-neutral-600 text-sm tracking-[0] leading-6 whitespace-nowrap"
          animate={{ opacity: status === "connected" ? 1 : 0.5 }}
        >
          {connectionTime}
        </motion.div>
      </section>

      {/* Country Selector */}
      <Button
        variant="ghost"
        onClick={() => navigate("/countries")}
        className="flex w-[calc(100%_-_48px)] items-center gap-4 px-4 py-3 absolute left-6 bottom-[34px] bg-neutralwhite rounded-2xl shadow-[0px_8px_12px_#0000000d] h-auto hover:bg-neutralwhite"
      >
        <div className="relative w-6 h-6 flex items-center justify-center text-xl">
          {selectedCountry.flag}
        </div>

        <div className="relative flex-1 mt-[-1.00px] [font-family:'Sora',Helvetica] font-semibold text-neutralblack text-base tracking-[0] leading-6 text-left">
          {selectedCountry.name}
        </div>

        <ChevronUpIcon className="relative w-4 h-4" />
      </Button>

      {/* Start Button */}
      <div className="absolute left-[calc(50.00%_-_64px)] bottom-[194px]">
        <Button
          variant="ghost"
          onClick={handleStartStop}
          disabled={status === "connecting" || status === "disconnecting"}
          className="w-32 h-32 bg-transparent rounded-[160px] hover:bg-transparent p-0 disabled:opacity-70 relative overflow-hidden"
        >
          {/* Animated GIF Background */}
          <div className="absolute inset-0 w-32 h-32 rounded-full overflow-hidden">
            {status === "connecting" || status === "disconnecting" ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="w-full h-full bg-gradient-to-r from-amber-400 via-orange-500 to-amber-400 bg-[length:200%_200%] animate-pulse"
                style={{
                  backgroundImage:
                    "conic-gradient(from 0deg, #f59e0b, #f97316, #f59e0b, #f97316, #f59e0b)",
                  animation: "spin 2s linear infinite",
                }}
              />
            ) : status === "connected" ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="w-full h-full bg-gradient-to-br from-green-400 to-green-600"
              />
            ) : (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="w-full h-full bg-gradient-to-br from-primary-400 to-primary-600"
              />
            )}
          </div>

          {/* Inner Circle */}
          <div className="absolute inset-2 bg-neutralwhite rounded-full shadow-inner flex items-center justify-center flex-col">
            {/* Power Icon */}
            <motion.div
              animate={{
                color:
                  status === "connected"
                    ? "#10b981"
                    : status === "connecting" || status === "disconnecting"
                    ? "#f59e0b"
                    : "#f06a30",
              }}
              transition={{ duration: 0.3 }}
              className="mb-1"
            >
              <PowerIcon className="w-6 h-6" />
            </motion.div>

            {/* Button Text */}
            <motion.div
              className="[font-family:'Sora',Helvetica] font-semibold text-xs text-center tracking-[0] leading-4 whitespace-nowrap"
              animate={{
                color:
                  status === "connected"
                    ? "#10b981"
                    : status === "connecting" || status === "disconnecting"
                    ? "#f59e0b"
                    : "#f06a30",
              }}
            >
              {getButtonText()}
            </motion.div>
          </div>

          {/* Connecting Animation Overlay */}
          {(status === "connecting" || status === "disconnecting") && (
            <motion.div
              className="absolute inset-0 rounded-full border-4 border-transparent border-t-white"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
          )}
        </Button>
      </div>

      {/* Stats Card */}
      <Card className="flex w-[calc(100%_-_48px)] items-center justify-center gap-4 px-4 py-0 absolute top-[140px] left-6 bg-neutralwhite rounded-2xl shadow-[0px_8px_12px_#0000000d] border-0">
        <CardContent className="flex items-center justify-center gap-4 p-0 w-full">
          <div className="flex flex-col items-start gap-4 relative flex-1 grow">
            <div className="flex items-start justify-between relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Sora',Helvetica] font-semibold text-neutralblack text-sm tracking-[0] leading-6 whitespace-nowrap">
                Download
              </div>

              <div className="inline-flex items-start gap-2.5 p-1 relative flex-[0_0_auto] bg-primary-100 rounded">
                <ArrowDownIcon className="relative w-4 h-4 text-primary-500" />
              </div>
            </div>

            <motion.div
              className="relative self-stretch [font-family:'Sora',Helvetica] font-semibold text-transparent text-2xl tracking-[0] leading-6"
              animate={{ opacity: status === "connected" ? 1 : 0.5 }}
            >
              <span
                className={
                  status === "connected"
                    ? "text-green-500 leading-8"
                    : "text-[#aaaaaa] leading-8"
                }
              >
                {status === "connected" ? "45.2" : "0.00"}
              </span>

              <span className="text-[#aaaaaa] text-base leading-[0.1px]">
                &nbsp;
              </span>

              <span className="text-[#aaaaaa] text-sm leading-[0.1px]">
                mb/s
              </span>
            </motion.div>
          </div>

          <Separator
            orientation="vertical"
            className="relative w-px h-[104px] bg-neutral-200"
          />

          <div className="flex flex-col items-start gap-4 relative flex-1 grow">
            <div className="flex items-start justify-between relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Sora',Helvetica] font-semibold text-neutralblack text-sm tracking-[0] leading-6 whitespace-nowrap">
                Upload
              </div>

              <div className="inline-flex items-start gap-2.5 p-1 relative flex-[0_0_auto] bg-primary-100 rounded">
                <ArrowUpIcon className="relative w-4 h-4 text-primary-500" />
              </div>
            </div>

            <motion.div
              className="relative self-stretch [font-family:'Sora',Helvetica] font-semibold text-transparent text-2xl tracking-[0] leading-6"
              animate={{ opacity: status === "connected" ? 1 : 0.5 }}
            >
              <span
                className={
                  status === "connected"
                    ? "text-green-500 leading-8"
                    : "text-[#aaaaaa] leading-8"
                }
              >
                {status === "connected" ? "12.8" : "0.00"}
              </span>

              <span className="text-[#aaaaaa] text-base leading-[0.1px]">
                &nbsp;
              </span>

              <span className="text-[#aaaaaa] text-sm leading-8">mb/s</span>
            </motion.div>
          </div>
        </CardContent>
      </Card>

      {/* Go Premium Button */}
      <Button
        onClick={() => navigate("/premium")}
        className="px-4 py-3 right-6 bg-primary-500 shadow-[0px_8px_12px_#f06a2f33] inline-flex items-center justify-center gap-4 absolute top-[68px] rounded-2xl h-auto hover:bg-primary-500/90"
      >
        <CrownIcon className="relative w-6 h-6 text-neutralwhite" />

        <div className="relative w-fit mt-[-1.00px] [font-family:'Sora',Helvetica] font-semibold text-neutralwhite text-base tracking-[0] leading-6 whitespace-nowrap">
          Go Premium
        </div>
      </Button>

      {/* MenuIcon Button */}
      <Button
        variant="ghost"
        className="p-3 left-6 bg-neutralwhite shadow-[0px_8px_12px_#0000000d] inline-flex items-center justify-center gap-4 absolute top-[68px] rounded-2xl hover:bg-neutralwhite"
      >
        <MenuIcon className="relative w-6 h-6 text-neutralblack" />
      </Button>
    </main>
  );
};
