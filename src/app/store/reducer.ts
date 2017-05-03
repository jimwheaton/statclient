import { IRanking } from '../shared/model';
import { IAppState } from './IAppState';
import { CHANGE_SITE, 
    CHANGE_KEYWORD, 
    CHANGE_DEVICE, 
    CHANGE_END_DATE, 
    CHANGE_MARKET, 
    CHANGE_START_DATE,
    GET_RANKINGS_SUCCESS,
    GET_LOOKUPS_SUCCESS } from './actions';

const courses = [];

const initialState: IAppState = {
    keywords: ["360 seo", "360i conference", "360i contact", "360i digital"], //new Array<string>(),
    markets: ["gb", "en"],//  new Array<string>(),
    devices:["desktop", "phone"],// new Array<string>(),
    sites: ["STAT", "CBC"], ///new Array<string>(),
    dates: ["Jan", "Feb"],// new Array<string>(),
    keyword: "",
    market: "",
    device: "",
    site: "",
    startDate: "",
    endDate: "",
    rankings: new Array<IRanking>(),
    weightedRankings: new Array<IRanking>()
};

function changeSite(state: IAppState, action) {
    return Object.assign({}, state, {
        site: action.site
    });
}

function changeDevice(state: IAppState, action) {
    return Object.assign({}, state, {
        device: action.device
    });
}

function changeMarket(state: IAppState, action) {
    return Object.assign({}, state, {
        market: action.market
    });
}

function changeStartDate(state: IAppState, action) {
    return Object.assign({}, state, {
        startDate: action.startDate
    });
}

function changeEndDate(state: IAppState, action) {
    return Object.assign({}, state, {
        endDate: action.endDate
    });
}

function changeKeyword(state: IAppState, action) {
    return Object.assign({}, state, {
        keyword: action.keyword
    });
}

function storeRankings(state: IAppState, action, weighted:boolean) {
    let rankings = weighted 
        ? { rankingsWeighted: action.rankings }
        : { rankings: action.rankings };
    return Object.assign({}, state, rankings);
}

function storeLookups(state: IAppState, action) {
    let l = action.lookups;
    return Object.assign({}, state, {
        sites: l.sites,
        markets: l.markets,
        devices: l.devices,
        dates: l.dates,
        keywords: l.keywords
    });
}

export function reducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_SITE:
            return changeSite(state, action);
        case CHANGE_DEVICE:
            return changeDevice(state, action);
        case CHANGE_MARKET:
            return changeMarket(state, action);
        case CHANGE_START_DATE:
            return changeStartDate(state, action);
        case CHANGE_END_DATE:
            return changeEndDate(state, action);
        case CHANGE_KEYWORD:
            return changeKeyword(state, action);
        case GET_RANKINGS_SUCCESS:
            return storeRankings(state, action, false);
        case GET_LOOKUPS_SUCCESS:
            return storeLookups(state, action);
        default:
            return state;
    }
}