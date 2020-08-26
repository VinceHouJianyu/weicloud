package org.sang.service;

import org.sang.bean.Order;
import org.sang.mapper.OrderMapper;
import org.sang.utils.Util;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderService {

    @Autowired
    OrderMapper orderMapper;
    public List<Order> getUserOrder(){
        String username = Util.getCurrentUser().getUsername();
        return orderMapper.getUserOrder(username);
    }
}
