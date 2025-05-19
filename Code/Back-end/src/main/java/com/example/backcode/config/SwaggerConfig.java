package com.example.backcode.config;

import io.swagger.v3.oas.models.ExternalDocumentation;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.License;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SwaggerConfig {

    @Bean
    public OpenAPI myOpenAPI() {
        return new OpenAPI()
                .info(new Info()
                        .title("HA1 API 文档")
                        .description("前后端联调用的接口文档")
                        .version("v1.0.0")
                        .contact(new Contact()
                                .name("zihan luo")
                                .email("你的邮箱")
                                .url("https://你的链接.com"))
                        .license(new License().name("Apache 2.0").url("http://springdoc.org")))
                .externalDocs(new ExternalDocumentation()
                        .description("项目文档")
                        .url("https://你的项目地址.com"));
    }
}
