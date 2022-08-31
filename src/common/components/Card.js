import { Card } from "flowbite-react/lib/esm/components"

const CardContainer = ({data}) => {
  console.log(data)
  return (
    <div className="flex flex-column justify-center h-96 p-4 sm:h-104 sm:p-8 xl:h-112 xl:p-12 2xl:h-120 ">
      <div className="sm:w-2/4">
        <Card>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Your current IP is: {data?.ip}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Your current code location is {data?.area?.code} that is named {data?.area?.name}
          </p>
          <h6 className="text-2 font-semibold tracking-tight text-gray-900 dark:text-white">
            Some extra information from your location of your IP:
          </h6>
          <p><span className="font-semibold">City: </span>{data?.city?.name}</p>
          <p><span className="font-semibold">Continent: </span>{data?.continent?.name}</p>
          <p><span className="font-semibold">Country: </span>{data?.country?.name}</p>
          <p>
            <span className="font-semibold">Current currency: </span>{data?.currency?.name}
            <span className="font-semibold"> Code: </span>{data?.currency?.code}
          </p>
          <p><span className="font-semibold">Timezone: </span>{data?.time?.timezone}</p>
        </Card>
      </div>
    </div>
  )
}

export default CardContainer