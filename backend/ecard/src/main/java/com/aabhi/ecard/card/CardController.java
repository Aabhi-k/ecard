package com.aabhi.ecard.card;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/cards")
public class CardController {
    @GetMapping("/check")
    public String check() {
        return "Card Controller is working!";
    }

}
