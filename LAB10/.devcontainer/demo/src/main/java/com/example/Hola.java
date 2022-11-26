package com.example;

import static spark.Spark.*;

public class Hola {
    public static void main(String[] args) {
        get("/hello", (req, res) -> "Hello World");
    }
}
