package org.sang.service;

import org.sang.bean.User;
import org.sang.mapper.UserMapper;
import org.sang.utils.Util;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class PersionService {
    @Autowired
    UserMapper userMapper;
    public User getMyProfile(){
        String username = Util.getCurrentUser().getUsername();
        User user = userMapper.loadUserByUsername(username);
        return user;
    }
}
