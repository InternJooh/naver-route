import { Route, Routes } from "react-router-dom";
import { BlogNav } from "./BlogNav"
import { BlogHome } from "./content/BlogHome";
import { BlogChallenge } from "./content/BlogChallenge";
import { BlogOfficial } from "./content/BlogOfficial";
import { BlogThemePost } from "./content/BlogThemePost";
import { BlogThisMonth } from "./content/BlogThisMonth";

export function BlogRoutes() {
  return (
    <Routes>
      <Route element={<BlogNav />}>
        <Route index element={<BlogHome />} />
        <Route path="/theme" element={<BlogThemePost />} />
        <Route path="/this-month" element={<BlogThisMonth />} />
        <Route path="/official" element={<BlogOfficial />} />
        <Route path="/challenge" element={<BlogChallenge />} />
      </Route>
    </Routes>
  )
}