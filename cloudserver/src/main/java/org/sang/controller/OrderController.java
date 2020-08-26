package org.sang.controller;

import org.sang.bean.Order;
import org.sang.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/order")
public class OrderController {
    @Autowired
    OrderService orderService;
    @RequestMapping(value = "/getUserOrder", method = RequestMethod.GET)
    public List<Order> getUserOrder(){
        return orderService.getUserOrder();
    }
}
