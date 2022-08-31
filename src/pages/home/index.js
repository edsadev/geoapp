import { Carousel } from "flowbite-react"

const home = () => {
  return (
    <>
      <div className="p-3.5">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Your geolocation app</h5>
      </div>
      <div className="h-52 px-4 sm:h-56 sm:px-8 xl:h-60 xl:px-12 2xl:h-64 ">
        <Carousel 
          slideInterval={6000}
          leftControl={" "}
          rightControl={" "}
          indicators={false}
        >
          <img
            src="https://thumbs.dreamstime.com/b/pushpin-marking-location-map-5209434.jpg"
            alt="..."
          />
          <img
            src="https://media.istockphoto.com/photos/road-map-of-blue-location-pin-icon-symbol-or-gps-travel-route-marker-picture-id1345122756?b=1&k=20&m=1345122756&s=170667a&w=0&h=HEfZffNcgM3QOI2gdc7sfDSVPxCtXsR1W_x_WRgO30w="
            alt="..."
          />
          <img
            src="https://i.pcmag.com/imagery/articles/05foMgIxLXGY6ZjVJziC9RX-12..v1626892666.jpg"
            alt="..."
          />
        </Carousel>
      </div>
    </>
  )
}

export default home