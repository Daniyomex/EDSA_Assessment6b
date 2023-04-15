function calculatePrice(month, stays) {
    let studioPrice = 0;
    let apartmentPrice = 0;
    let studioDiscount = 0;
    let apartmentDiscount = 0;

    if (month === "May" || month === "October") {
        studioPrice = 50;
        apartmentPrice = 65;

        if (stays > 14) {
            studioDiscount = 0.3;
        } else if (stays > 7) {
            studioDiscount = 0.05;
        }
    } else if (month === "June" || month === "September") {
        studioPrice = 75.2;
        apartmentPrice = 68.7;

        if (stays > 14) {
            studioDiscount = 0.2;
        }
    } else if (month === "July" || month === "August") {
        studioPrice = 76;
        apartmentPrice = 77;
    }

    if (stays > 14 && apartmentPrice !== 0) {
        apartmentDiscount = 0.1;
    }

    const studioTotalPrice =
        stays * studioPrice * (1 - studioDiscount);
    const apartmentTotalPrice =
        stays * apartmentPrice * (1 - apartmentDiscount);

    console.log(`Apartment: ${apartmentTotalPrice.toFixed(2)} NGN.`);
    console.log(`Studio: ${studioTotalPrice.toFixed(2)} NGN.`);
}

calculatePrice("March", 10);