import { Route, Routes } from "react-router-dom";
import { CafeNav } from "./CafeNav";
import { CafeHome } from "./content/CafeHome";
import { CafeThemes } from "./content/CafeThemes";
import { CafeAreas } from "./content/CafeAreas";
import { CafeRankings } from "./content/CafeRankings";
import { CafePowers } from "./content/CafePowers";

export function CafeRoutes() {
  return (
    <Routes>
      <Route element={<CafeNav />}>
        <Route index element={<CafeHome />}/>
        <Route path="/themes" element={<CafeThemes />} />
        <Route path="/areas" element={<CafeAreas />} />
        <Route path="/rankings" element={<CafeRankings />} />
        <Route path="/powers" element={<CafePowers />} />
      </Route>
    </Routes>
  )
}