/*
  Calculate the distance between two coordinates using the haversine formula
  More about: https://pt.wikipedia.org/wiki/F%C3%B3rmula_de_Haversine
  @Param {number} latitude1
  @Param {number} latitude2
  @Param {number} longitude1
  @Param {number} longitude2
 */
  const pi = Math.PI

  const haversineDistance = (latitude1 = 0, longitude1 = 0, latitude2 = 0, longitude2 = 0) => {
    validateAllLatitudeLongitude(latitude1, longitude1, latitude2, longitude2)
  
    const earthRadius = 6371e3 // 6,371km
    const cos1 = calculateCosine(latitude1)
    const cos2 = calculateCosine(latitude2)
    const deltaLatitude = calculateDistanceDelta(latitude2, latitude1)
    const deltaLongitude = calculateDistanceDelta(longitude2, longitude1)
  
    const alpha = Math.sin(deltaLatitude / 2) * Math.sin(deltaLatitude / 2) + Math.cos(cos1) * Math.cos(cos2) * Math.sin(deltaLongitude / 2) * Math.sin(deltaLongitude / 2)
    const constant = 2 * Math.atan2(Math.sqrt(alpha), Math.sqrt(1 - alpha))
    return earthRadius * constant
  }
  
  const validateAllLatitudeLongitude = (latitude1, longitude1, latitude2, longitude2) => {
    validateLatOrLong(latitude1)
    validateLatOrLong(latitude2)
    validateLatOrLong(longitude1)
    validateLatOrLong(longitude2)
  };
  
  const validateLatOrLong = value => {
    if (typeof value !== 'number') {
      throw new TypeError('The value of latitude or longitude should be a number')
    }
  }
  
  const calculateCosine = latitude => {
    return latitude * pi / 180.0
  }
  
  const calculateDistanceDelta = (distancePoint2, distancePoint1) => {
    return (distancePoint2 - distancePoint1) * pi / 180.0
  }
  
  export { haversineDistance }