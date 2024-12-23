package com.aabhi.ecard.user;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private final AuthenticationService authenticationService;

    public UserController(AuthenticationService authenticationService) {
        this.authenticationService = authenticationService;
    }

    @GetMapping("/check")
    public ResponseEntity<String> check() {
        return  ResponseEntity.ok("User Controller is working!");
    }

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody RegisterDto user) {
        try {
            authenticationService.signup(user);
            return ResponseEntity.ok("User registered successfully!");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("User registration failed!");
        }
    }

    @PostMapping("/login")
    public String login(@RequestBody LoginDto user) {
        return authenticationService.login(user);
    }
}
