import { IRankingResult } from '../shared/model';

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
    rankingResults:IRankingResult[],
    weightedRankingResults:IRankingResult[]
}