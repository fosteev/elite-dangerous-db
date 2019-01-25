const initialState = {
    loopsSettings: {
        hopDistance: 30,
        ignoredCommodities: [],
        implicitCommodities: [],
        minDemand: 10000,
        minProfit: 2000,
        minSupply: 10000,
        priceAge: 30,
        sort: "profit",
        systemId: null
    },
    stationFilter: {
        allegiances: [],
        distance: null,
        economies: [],
        governments: [],
        includePlanetary: false,
        landingPad: null,
        loopDistance: 200,
        singleRouteDistance: 0,
        states: []
    },
    systemFilter: {
        powers: [],
        skipPermit: true

    },
    loups: []
};

export default function loups(state = initialState, action) {
    switch (action.type) {
        case 'LOUPS_RESPONSE':
            return Object.assign({}, state, {
                isRefreshing: false,
                loups: action.loups.map(item => {


                    const oneBuyPrice = item.oneBuyListing.buy_price,
                        oneSellPrice = item.twoSellListing.sell_price,
                        twoBuyPrice = item.twoBuyListing.buy_price,
                        twoSellPrice = item.oneSellListing.sell_price;

                    return {
                        oneSystemName: item.oneSystem.name,
                        oneStationName: item.oneStation.name,
                        oneStationBuy: item.oneCommodity.name,

                        twoSystemName: item.twoSystem.name,
                        twoStationName: item.twoStation.name,
                        twoStationBuy: item.twoCommodity.name,

                        oneBuyPrice: oneBuyPrice,
                        oneSupply: item.oneBuyListing.supply,
                        oneSellPrice: oneSellPrice,
                        oneDemand: item.oneSellListing.demand,
                        twoSupply: twoBuyPrice,
                        twoSellPrice: twoSellPrice,
                        twoDemand: item.twoSellListing.demand,
                        distance: item.distance,

                        profit: (oneSellPrice - oneBuyPrice) + (twoSellPrice - twoBuyPrice),
                    }
                })
            });

        default:
            return state;
    }
}