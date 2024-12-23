package com.aabhi.ecard.user;

public class RegisterDto {
    private String email;
    private String password;
    private String name;

    public RegisterDto(String email, String password, String name) {
        this.email = email;
        this.password = password;
        this.name = name;
    }

    public RegisterDto() {
    }

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }

    public String getName() {
        return name;
    }
}
