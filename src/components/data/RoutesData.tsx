import { BlogChallenge } from "../../pages/blog/content/BlogChallenge";
import { BlogHome } from "../../pages/blog/content/BlogHome";
import { BlogOfficial } from "../../pages/blog/content/BlogOfficial";
import { BlogThemePost } from "../../pages/blog/content/BlogThemePost";
import { BlogThisMonth } from "../../pages/blog/content/BlogThisMonth";
import { CafeAreas } from "../../pages/cafe/content/CafeAreas";
import { CafeHome } from "../../pages/cafe/content/CafeHome";
import { CafePowers } from "../../pages/cafe/content/CafePowers";
import { CafeRankings } from "../../pages/cafe/content/CafeRankings";
import { CafeThemes } from "../../pages/cafe/content/CafeThemes";
import { FinanceDomestic } from "../../pages/finance/content/FinanceDomestic";
import { FinanceHome } from "../../pages/finance/content/FinanceHome";
import { FinanceMarketIndex } from "../../pages/finance/content/FinanceMarketIndex";
import { FinanceMy } from "../../pages/finance/content/FinanceMy";
import { FinanceNews } from "../../pages/finance/content/FinanceNews";
import { FinanceResearch } from "../../pages/finance/content/FinanceResearch";
import { FinanceWorld } from "../../pages/finance/content/FinanceWorld";
import { LandAuction } from "../../pages/land/content/LandAuction";
import { LandCommunity } from "../../pages/land/content/LandCommunity";
import { LandForSale } from "../../pages/land/content/LandForSale";
import { LandHome } from "../../pages/land/content/LandHome";
import { LandMyHouse } from "../../pages/land/content/LandMyHouse";
import { LandMyPage } from "../../pages/land/content/LandMyPage";
import { LandNews } from "../../pages/land/content/LandNews";
import { LandParcel } from "../../pages/land/content/LandParcel";
import { NewsAlgorithm } from "../../pages/news/content/NewsAlgorithm";
import { NewsByCompany } from "../../pages/news/content/NewsByCompany";
import { NewsEconomy } from "../../pages/news/content/NewsEconomy";
import { NewsFactCheck } from "../../pages/news/content/NewsFactCheck";
import { NewsITScience } from "../../pages/news/content/NewsITScience";
import { NewsLifeCulture } from "../../pages/news/content/NewsLifeCulture";
import { NewsOpinion } from "../../pages/news/content/NewsOpinion";
import { NewsPaper } from "../../pages/news/content/NewsPaper";
import { NewsPolitics } from "../../pages/news/content/NewsPolitics";
import { NewsRanking } from "../../pages/news/content/NewsRanking";
import { NewsSocial } from "../../pages/news/content/NewsSocial";
import { NewsTV } from "../../pages/news/content/NewsTV";
import { NewsWorld } from "../../pages/news/content/NewsWorld";
import { ShopAitem } from "../../pages/shop/content/ShopAitem";
import { ShopArt } from "../../pages/shop/content/ShopArt";
import { ShopBook } from "../../pages/shop/content/ShopBook";
import { ShopFashion } from "../../pages/shop/content/ShopFashion";
import { ShopFood } from "../../pages/shop/content/ShopFood";
import { ShopGrocery } from "../../pages/shop/content/ShopGrocery";
import { ShopHome } from "../../pages/shop/content/ShopHome";
import { ShopHotItem } from "../../pages/shop/content/ShopHotItem";
import { ShopKids } from "../../pages/shop/content/ShopKids";
import { ShopLiving } from "../../pages/shop/content/ShopLiving";
import { ShopLogistics } from "../../pages/shop/content/ShopLogistics";
import { ShopLuxury } from "../../pages/shop/content/ShopLuxury";
import { ShopMr } from "../../pages/shop/content/ShopMr";
import { ShopOnePlus } from "../../pages/shop/content/ShopOnePlus";
import { ShopPet } from "../../pages/shop/content/ShopPet";
import { ShopPlan } from "../../pages/shop/content/ShopPlan";
import { ShopPlay } from "../../pages/shop/content/ShopPlay";

interface Data {
  path: string;
  component: JSX.Element;
}

// 카페
export const cafeRoutesData:Data[] = [
  {
    path: '',
    component: <CafeHome />
  },
  {
    path: '/themes',
    component: <CafeThemes />
  },
  {
    path: '/areas',
    component: <CafeAreas />
  },
  {
    path: '/rankings',
    component: <CafeRankings />
  },
  {
    path: '/powers',
    component: <CafePowers />
  }
]

// 블로그
export const blogRoutesData:Data[] = [
  {
    path: '',
    component: <BlogHome />
  },
  {
    path: '/theme',
    component: <BlogThemePost />
  },
  {
    path: '/this-month',
    component: <BlogThisMonth />
  },
  {
    path: '/official',
    component: <BlogOfficial />
  },
  {
    path: '/challenge',
    component: <BlogChallenge />
  }
]

// 쇼핑
export const shopRoutesData:Data[] = [
  {
    path: '',
    component: <ShopHome />
  },
  {
    path: '/logistics',
    component: <ShopLogistics />
  },
  {
    path: '/fashion',
    component: <ShopFashion />
  },
  {
    path: '/luxury',
    component: <ShopLuxury />
  },
  {
    path: '/living',
    component: <ShopLiving />
  },
  {
    path: '/food',
    component: <ShopFood />
  },
  {
    path: '/grocery',
    component: <ShopGrocery />
  },
  {
    path: '/kids',
    component: <ShopKids />
  },
  {
    path: '/pet',
    component: <ShopPet />
  },
  {
    path: '/play',
    component: <ShopPlay />
  },
  {
    path: '/art',
    component: <ShopArt />
  },
  {
    path: '/book',
    component: <ShopBook />
  },
  {
    path: '/mr',
    component: <ShopMr />
  },
  {
    path: '/one-plus',
    component: <ShopOnePlus />
  },
  {
    path: '/plan',
    component: <ShopPlan />
  },
  {
    path: '/hot-item',
    component: <ShopHotItem />
  },
  {
    path: '/aitems',
    component: <ShopAitem />
  }    
]

// 뉴스
export const newsRoutesData:Data[] = [
  {
    path: '',
    component: <NewsByCompany />
  },
  {
    path: '/politics',
    component: <NewsPolitics />
  },
  {
    path: '/economy',
    component: <NewsEconomy />
  },
  {
    path: '/social',
    component: <NewsSocial />
  },
  {
    path: '/life-culture',
    component: <NewsLifeCulture />
  },
  {
    path: '/it-science',
    component: <NewsITScience />
  },
  {
    path: '/world',
    component: <NewsWorld />
  },
  {
    path: '/ranking',
    component: <NewsRanking />
  },
  {
    path: '/paper',
    component: <NewsPaper />
  },
  {
    path: '/opinion',
    component: <NewsOpinion />
  },
  {
    path: '/tv',
    component: <NewsTV />
  },
  {
    path: '/fact-check',
    component: <NewsFactCheck />
  },
  {
    path: '/algorithm',
    component: <NewsAlgorithm />
  }
]

// 증권
export const financeRoutesData:Data[] = [
  {
    path: '',
    component: <FinanceHome />
  },
  {
    path: '/domestic',
    component: <FinanceDomestic />
  },
  {
    path: '/world',
    component: <FinanceWorld />
  },
  {
    path: '/market-index',
    component: <FinanceMarketIndex />
  },
  {
    path: '/research',
    component: <FinanceResearch />
  },
  {
    path: '/news',
    component: <FinanceNews />
  },
  {
    path: '/my',
    component: <FinanceMy />
  }
]

// 부동산
export const landRoutesData:Data[] = [
  {
    path: '',
    component: <LandHome />
  },
  {
    path: '/for-sale',
    component: <LandForSale />
  },
  {
    path: '/parcel',
    component: <LandParcel />
  },
  {
    path: '/news',
    component: <LandNews />
  },
  {
    path: '/community',
    component: <LandCommunity />
  },
  {
    path: '/auction',
    component: <LandAuction />
  },
  {
    path: '/my-page',
    component: <LandMyPage />
  },
  {
    path: '/my-house',
    component: <LandMyHouse />
  }
]