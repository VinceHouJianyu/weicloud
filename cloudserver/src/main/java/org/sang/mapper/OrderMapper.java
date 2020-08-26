package org.sang.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.sang.bean.Order;

import java.util.List;
@Mapper
public interface OrderMapper {
    List<Order> getUserOrder(String username);
}
