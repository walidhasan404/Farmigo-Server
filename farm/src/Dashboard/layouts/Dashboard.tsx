import { useAuth } from "../../Authentication/AuthProvider/AuthContext"
import useGetData from "../../common/Hooks/useGetData"
import ShowChartCard from "../common/Chart/ShowChartCard"
import OrderChart from "../components/Farmer/OrderChart"
import BalanceChart from "../components/User/BalanceChart"
import BuyProducts from "../components/User/BuyProducts"
import ProductsBuyChart from "../components/User/ProductsBuyChart"


const Dashboards = () => {
  const { userAuth } = useAuth()
  const token = userAuth?.token

  const { userRole } = useGetData(token)
  return (
    <div>
      {userRole === 'admin' ? (
        userRole === "admin" && (
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2">
            <ProductsBuyChart
              totalIncome={37802}
              percentageChange={-1.56}
              chartData={[30, 40, 35, 50, 49, 60, 70, 91, 125]}
              title="Total Revenue"
            />
            

          </div>
        )
      ): ( userRole === "farmer" ? (
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2">
          <ProductsBuyChart
            totalIncome={200}
            percentageChange={-1.56}
            chartData={[30, 40, 35, 50, 49, 60, 70, 91, 125]}
            title="Total Income"
          />
          <OrderChart title = 'Sales' color='#CBD5E1' subtitle = '15'/>
          <ShowChartCard title = 'Total Sale'/>
          <OrderChart title = 'Products' color='#4A90E2' subtitle= '5'/>
          {/* <ProductsShow/> */}
        </div>
      ) : (
        <div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-2">
            <BalanceChart />

            <ProductsBuyChart
              totalIncome={32}
              percentageChange={-1.56}
              chartData={[30, 40, 35, 50, 49, 60, 70, 91, 125]}
              title="Buying Products"
            />
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-2">
            <BuyProducts />
          </div>
        </div>
      ))}
      
     




    </div>
  )
}

export default Dashboards