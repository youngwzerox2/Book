package com.example.collection;

import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Data
@Document(collection = "liked_user")
public class LikedUser {

}
