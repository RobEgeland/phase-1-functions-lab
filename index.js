function distanceFromHqInBlocks(location) {
    if(location < 42) {
        return 42 - location
    }
    return location - 42
}

function distanceFromHqInFeet(location) {
    distanceFromHqInBlocks(location);
    return distanceFromHqInBlocks(location) * 264
}

function distanceTravelledInFeet(start, destination) {
    if(start < destination) {
        return (destination - start) * 264
    }
    return (start - destination) * 264
}

function calculatesFarePrice(start, destination) {
    distanceTravelledInFeet(start, destination);
    if(distanceTravelledInFeet(start, destination) <= 400) {
        return 0
    }
    if(distanceTravelledInFeet(start, destination) > 400 && distanceTravelledInFeet(start, destination) <= 2000) {
        return (distanceTravelledInFeet(start, destination) - 400) * 0.02
    }
    if(distanceTravelledInFeet(start, destination) > 2000 && distanceTravelledInFeet(start, destination) <= 2500) {
        return 25
    }
    if(distanceTravelledInFeet(start, destination) > 2500) {
        return 'cannot travel that far'
    }

}