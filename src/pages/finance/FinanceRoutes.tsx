import { financeRoutesData } from "../../data/RoutesData"
import { PageRoutes } from "../../components/routes/PageRoutes"
import { FinanceNav } from "./FinanceNav"

export function FinanceRoutes() {
  return (<PageRoutes routesData={financeRoutesData} navComponent={<FinanceNav />} />)
}