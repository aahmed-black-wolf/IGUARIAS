"use client";
import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useMemo,
  useState,
} from "react";

import Boarding from "./Phases/Boarding";
import Consultation from "./Phases/Consultation";
import Contract from "./Phases/Contract";
import Selection from "./Phases/Selection";
import Situation from "./Phases/Situation";

export type Phase =
  | "boarding"
  | "selection"
  | "situation"
  | "consultation"
  | "contract";

const GBookingContext = createContext<{
  setPhase: Dispatch<SetStateAction<Phase>>;
  setPreviousPhase: Dispatch<SetStateAction<Phase>>;
}>({
  setPhase: () => {},
  setPreviousPhase: () => {},
});

export default function Booking() {
  const [phase, setPhase] = useState<Phase>("selection");
  const [prevPhase, setPreviousPhase] = useState<Phase>("selection");
  const renderPhaseComponent = useMemo(() => {
    switch (phase) {
      case "boarding":
        return <Boarding />;
      case "selection":
        return <Selection />;
      case "situation":
        return <Situation />;
      case "consultation":
        return <Consultation />;
      case "contract":
        return <Contract />;
      default:
        return null;
    }
  }, [phase]);
  return (
    <GBookingContext.Provider value={{ setPhase, setPreviousPhase }}>
      <div className="min-h-[400px]">{renderPhaseComponent}</div>
    </GBookingContext.Provider>
  );
}

export const useGBookingContext = () => useContext(GBookingContext);
