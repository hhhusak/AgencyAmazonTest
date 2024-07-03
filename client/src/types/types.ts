export interface DashboardProps {
    data: Array<{ clicks: number; pricePerClick: number; date: Date; sourceType: string;  }>;
}