import { IRanking } from '../shared/model';

export interface IAppState {
    keywords: string[],
    markets: string[],
    devices: string[],
    sites: string[],
    dates: string[],
    keyword:string,
    market: string,
    device: string,
    site: string,
    startDate: string,
    endDate: string,
    rankings:IRanking[],
    weightedRankings:IRanking[]
}