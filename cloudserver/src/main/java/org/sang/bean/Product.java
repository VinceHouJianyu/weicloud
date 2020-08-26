package org.sang.bean;

public class Product {
    private Long product_id;
    private String product_name;
    private String description;
    private Long price;
    private Long product_type;


    public Long getProduct_type() {
        return product_type;
    }

    public void setProduct_type(Long product_type) {
        this.product_type = product_type;
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

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Long getPrice() {
        return price;
    }

    public void setPrice(Long price) {
        this.price = price;
    }
}
