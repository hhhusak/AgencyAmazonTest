export interface PerformanceData {
    date: string;
    clicks: number;
    pricePerClick: number;
}

export interface PerformanceDataList {
    data: PerformanceData[];
}