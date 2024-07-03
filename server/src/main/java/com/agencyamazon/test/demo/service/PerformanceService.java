package com.agencyamazon.test.demo.service;

import com.agencyamazon.test.demo.entity.PerformanceData;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

@Service
public class PerformanceService {

    public List<PerformanceData> getPerformanceData() {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("d MMM");

        PerformanceData pd1 = new PerformanceData(LocalDate.of(2024, 4, 5).format(formatter), 32, 13.00);
        PerformanceData pd2 = new PerformanceData(LocalDate.of(2024, 4, 12).format(formatter), 65, 11.50);
        PerformanceData pd3 = new PerformanceData(LocalDate.of(2024, 4, 19).format(formatter), 23, 16.40);
        PerformanceData pd4 = new PerformanceData(LocalDate.of(2024, 4, 26).format(formatter), 68, 9.30);
        PerformanceData pd5 = new PerformanceData(LocalDate.of(2024, 5, 4).format(formatter), 76, 8.50);

        ArrayList<PerformanceData> performanceDataList = new ArrayList<>();
        performanceDataList.add(pd1);
        performanceDataList.add(pd2);
        performanceDataList.add(pd3);
        performanceDataList.add(pd4);
        performanceDataList.add(pd5);

        return performanceDataList;
    }

}
