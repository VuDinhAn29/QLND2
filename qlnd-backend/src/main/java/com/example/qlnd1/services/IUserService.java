package com.example.qlnd1.services;

import com.example.qlnd1.dtos.UserDTO;
import com.example.qlnd1.exceptions.DataNotFoundException;
import com.example.qlnd1.models.User;

public interface IUserService {
    User createUser(UserDTO userDTO) throws Exception;

    String login(String phoneNumber, String password) throws Exception ;

}
