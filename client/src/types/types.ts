export interface PerformanceData {
    date: string;
    clicks: number;
    pricePerClick: number;
    sourceType: string;
}

export interface PerformanceDataList {
    data: PerformanceData[];
}