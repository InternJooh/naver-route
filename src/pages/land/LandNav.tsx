// LandNav.tsx
import React from "react";
import { landNavData } from "../../components/data/NavData";
import { NavMenu } from "../../components/gnb/NavMenu";

export function LandNav() {
  return <NavMenu navTitles={landNavData} />;
}