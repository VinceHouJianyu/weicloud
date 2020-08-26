package org.sang.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.sang.bean.Order;
import org.sang.bean.Product;

import java.util.List;

@Mapper
public interface ProductMapper {
    List<Product> getAllProduct(@Param("product_type") Long product_type);
    int addOrder(Order order);
}
