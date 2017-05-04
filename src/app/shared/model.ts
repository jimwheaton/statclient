export interface IRanking {
    site:string;
    device:string;
    market:string;
    date:Date;
    keyword:string;
    bing:Number;
    google:Number;
    googleBaseRank:Number;
    yahoo:Number;
}

export interface ISite {
    id:Number;
    name:string;
}

export interface IDevice {
    id:Number;
    name:string;
}

export interface IMarket {
    id:Number;
    name:string;
}

export interface IKeyword {
    id:Number;
    phrase:string;
}

export const searchEngines:string[] = ["bing", "google", "googleBaseRank", "yahoo"];
