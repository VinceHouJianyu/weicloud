package org.sang.controller;

import org.sang.bean.RespBean;
import org.sang.bean.User;
import org.sang.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/sign")
public class SignController
{
    @Autowired
    UserService userService;

    @RequestMapping(value = "/add", method = RequestMethod.POST)
    public RespBean add(User user) {
        int result = userService.sign(user);
        if (result == 0) {
            return new RespBean("success", "注册成功111!");
        } else if (result == 1) {
            return new RespBean("error", "用户名重复，注册失败11!");
        } else {
            return new RespBean("error", "注册失败111!");
        }
    }
}
