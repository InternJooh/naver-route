// LandNav.tsx
import React from "react";
import { landNavData } from "../../data/NavData";
import { NavMenu } from "../../components/gnb/NavMenu";

export function LandNav() {
  return <NavMenu navTitles={landNavData} />;
}