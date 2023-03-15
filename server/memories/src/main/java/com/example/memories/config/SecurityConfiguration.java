package com.example.memories.config;

import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
/*
    @author Anh Dung
 */
@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfiguration {
    private final JwtAuthenticationFilter jwtAuthenticationFilter;
    private final AuthenticationProvider authenticationProvider;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception{
        http.cors().and().csrf().disable()
                .authorizeHttpRequests()
<<<<<<< HEAD
                .requestMatchers("/api/accounts/signup","/api/accounts/signin", "/resources/**", "/css/**", "/js/**", "/images/**", "/vendors/**", "/error/**", "/pages/**")
=======
                .requestMatchers("/api/accounts/signin","/api/accounts/signup", "/resources/**", "/css/**", "/js/**", "/images/**", "/vendors/**", "/error/**","/pages/doLogin", "/pages/login")
>>>>>>> e5fc9ff371b376df9e8eed0a6e24e1cf047ebfb3
                .permitAll()
                .anyRequest()
                .authenticated()
                .and()
                .formLogin()
                .loginPage("/pages/login")
                .permitAll()
                .and()
                .sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .authenticationProvider(authenticationProvider)
                .addFilterBefore(jwtAuthenticationFilter,UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }
}
