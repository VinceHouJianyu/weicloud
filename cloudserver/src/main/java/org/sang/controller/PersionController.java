package org.sang.controller;

import org.sang.bean.User;
import org.sang.service.PersionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/persion")
public class PersionController {
    @Autowired
    PersionService persionService;
    @RequestMapping(value = "/getMyProfile",method = RequestMethod.POST)
    public User getMyProfile(){
        User user = persionService.getMyProfile();
        return user;
    }
}
