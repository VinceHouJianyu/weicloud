package org.sang.service;

import org.sang.bean.Order;
import org.sang.bean.Product;
import org.sang.mapper.ProductMapper;
import org.sang.utils.Util;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.sql.Timestamp;
import java.util.Date;
import java.util.List;

@Service
@Transactional
public class ProductService {
    @Autowired
    ProductMapper productMapper;
    public List<Product> getAllProduct(Long product_type){
        List<Product> product = productMapper.getAllProduct(product_type);
        return product;
    }
    public int addOrder(Product product){
        Order order = new Order();
        try {
            String username = Util.getCurrentUser().getUsername();
            Long status = new Long(1);
            Timestamp createTime = new Timestamp(new Date().getTime());//获取当前时间
            order.setOrder_id(System.currentTimeMillis());
            order.setProduct_id(product.getProduct_id());
            order.setOrdertime(createTime);
            order.setPayment_status(status.longValue());
            order.setOrder_number(status.longValue());
            order.setPrice(product.getPrice());
            order.setProduct_name(product.getProduct_name());
            order.setUsername(username);
        }catch (Exception e){
            return 3;
        }


        int tag = productMapper.addOrder(order);
        return tag;
    }
}
