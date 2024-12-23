package com.aabhi.ecard.user;

public interface AuthenticationService {


    User signup(RegisterDto user);

    String login(LoginDto user);
}
