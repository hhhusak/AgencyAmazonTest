package com.agencyamazon.test.demo.controller;

import com.agencyamazon.test.demo.entity.PerformanceData;
import com.agencyamazon.test.demo.service.PerformanceService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
public class PerformanceController {

    private final PerformanceService performanceService;

    public PerformanceController(final PerformanceService performanceService) {
        this.performanceService = performanceService;
    }

    @GetMapping("/performance")
    @CrossOrigin
    public List<PerformanceData> getPerformanceData() {
        return performanceService.getPerformanceData();
    }

}
