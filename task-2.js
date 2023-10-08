function getShippingMessage (country, price, deliveryFee ) {
    const totalPrice= price+deliveryFee ;
    return `Shipping to ${country} will cost ${totalPrice} credits`;
}
getShippingMessage("Australia", 120, 50)
