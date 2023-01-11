// They would like you to write a function, `distanceFromHqInBlocks`,
// that takes in a pickup location for a passenger, and returns the _number of
// blocks_ from Scuber headquarters on 42nd Street. For example, if the pickup
// location is `50` (i.e., 50th Street), the return value should be `8`.

function distanceFromHqInBlocks (location) {
    if (location <= 42) {
        return (42 - location)
    } else if (location > 42) {
        return (location - 42)
    }
}
distanceFromHqInBlocks(45);

// The `distanceFromHqInBlocks` function's return value can then be used for
// another function, `distanceFromHqInFeet`, that translates the number of blocks
// from headquarters to the distance in feet. Each block in Manhattan is 264 feet
// long.

function distanceFromHqInFeet(location) {
    let blockValue = distanceFromHqInBlocks(location);
    return (blockValue * 264)
}


// distanceTravelledInFeet: Calculates the number of feet a passenger travels given a 
// starting block and an ending block — it only calculates distance North and South (uptown/downtown). 
// It uses the knowledge that a block is 264 feet long.

function distanceTravelledInFeet(start, destination) {
    if (start < destination) {
        return ((destination - start) * 264)
    } else if (start > destination) {
        return ((start - destination) * 264)
    }
}


// - `calculatesFarePrice`: Given the same starting and ending block as the
//   previous test (_hint hint_), return the fare for the customer. The first four
//   hundred feet are free. For a distance between 400 and 2000 feet, the price is
//   2 cents per foot (not including 400, which are free!). Then Scuber charges a
//   flat fare for a distance over 2000 feet and under 2500 feet.
//   Finally, Scuber does not allow any rides over 2500 feet — the function returns
//   `'cannot travel that far'` if a ride over 2500 feet is requested.

function calculatesFarePrice(start, destination) {
    let feetTravelled = distanceTravelledInFeet(start, destination);
    if (feetTravelled <= 400) {
        return 0
    } else if (feetTravelled > 400 && feetTravelled < 2000) {
        return (feetTravelled - 400) * 0.02
    }  else if (feetTravelled > 2000 && feetTravelled < 2500) {
        return 25
    } else if (feetTravelled > 2500) {
        return "cannot travel that far"
    }
}