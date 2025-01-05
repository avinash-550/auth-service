package com.avinash.authservice.auth.example;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
@RequestMapping("/example")
public class ExampleController {

    @GetMapping
    public ResponseEntity<Map<String, String>> getExample() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String username = authentication.getName();

        Map<String, String> response = new HashMap<>();
        response.put("username", username);
        response.put("msg", "Successfully authenticated!");

        return ResponseEntity.ok(response);
    }

}
