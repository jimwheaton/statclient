export const CHANGE_KEYWORD = 'CHANGE_KEYWORD';
export const CHANGE_SITE = 'CHANGE_SITE';
export const CHANGE_DEVICE = 'CHANGE_DEVICE';
export const CHANGE_MARKET = 'CHANGE_MARKET';
export const CHANGE_START_DATE = 'CHANGE_START_DATE';
export const CHANGE_END_DATE = 'CHANGE_END_DATE';

export function changeKeyword(keyword:string) {
    return {
        type: CHANGE_KEYWORD,
        keyword
    };
}

export function changeSite(site:string) {
    return {
        type: CHANGE_SITE,
        site
    };
}

export function changeMarket(market:string) {
    return {
        type: CHANGE_MARKET,
        market
    };
}

export function changeDevice(device:string) {
    return {
        type: CHANGE_DEVICE,
        device
    };
}

export function changeEndDate(endDate:string) {
    return {
        type: CHANGE_END_DATE,
        endDate
    };
}

export function changeStartDate(startDate:string) {
    return {
        type: CHANGE_START_DATE,
        startDate
    };
}