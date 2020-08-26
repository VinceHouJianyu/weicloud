package org.sang.controller;

import org.sang.bean.Product;
import org.sang.bean.RespBean;
import org.sang.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/product")
public class ProductController {
    @Autowired
    ProductService productService;
    @RequestMapping(value = "/getAllProduct", method = RequestMethod.GET)
    public List<Product> getAllProduct(Long product_type){
        List<Product> product = productService.getAllProduct(product_type);
        return product;
    }
    @RequestMapping(value = "/addOrder" , method = RequestMethod.POST)
    public RespBean addOrder(Product product){
        int result = productService.addOrder(product);
        if (result == 1) {
            return new RespBean("success",  "下单成功!");
        }else if(result == 3){
            return new RespBean("warning", "请先登录，再下单!");
        }
        else {
            return new RespBean("error", "下单失败!");
        }
    }
}
