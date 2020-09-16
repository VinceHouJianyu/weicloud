package org.sang.bean;

import java.sql.Timestamp;
import java.util.Date;

public class Order {
    private Long order_id ;
    private Long product_id;
    private String product_name;
    private Long order_number;
    private Long price ;
    private Long payment_status;
    private String username;
    private String ordertime;


    public Long getOrder_id() {
        return order_id;
    }

    public void setOrder_id(Long order_id) {
        this.order_id = order_id;
    }

    public Long getProduct_id() {
        return product_id;
    }

    public void setProduct_id(Long product_id) {
        this.product_id = product_id;
    }

    public String getProduct_name() {
        return product_name;
    }

    public void setProduct_name(String product_name) {
        this.product_name = product_name;
    }

    public Long getOrder_number() {
        return order_number;
    }

    public void setOrder_number (Long order_number) {
        this.order_number = order_number;
    }

    public Long getPrice() {
        return price;
    }

    public void setPrice(Long price) {
        this.price = price;
    }

    public Long getPayment_status() {
        return payment_status;
    }

    public void setPayment_status(Long payment_status) {
        this.payment_status = payment_status;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getOrdertime() {
        return ordertime;
    }

    public void setOrdertime(String ordertime) {
        this.ordertime = ordertime;
    }
}
