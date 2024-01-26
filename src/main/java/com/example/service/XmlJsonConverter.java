package com.example.service;

import org.json.JSONObject;
import org.json.XML;

public class XmlJsonConverter {
    
    public static String convertXmlToJson(String xmlString) {
        JSONObject JSONObject = XML.toJSONObject(xmlString);
        return JSONObject.toString();
    }
}
