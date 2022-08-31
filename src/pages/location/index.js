import {useState, useEffect, useCallback} from "react"
import CardContainer from "../../common/components/Card";
import { getLocation } from "../../services/api/geoApi"
import { useParams } from "react-router-dom"

export default function Location(){
  const [location, setLocation] = useState()
  const { ip } = useParams()
  
  const getInformation = useCallback( async () => {
    const latLon = await getLocation(ip)
    setLocation(latLon.data)
    },[])
  
  useEffect(() => {
    getInformation()
  }, [getInformation])
  return (
    <div className="min-h-full">
      <CardContainer data={location} />
    </div>
  );
}