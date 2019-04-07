package com.kitsunecode.izumi.command;

import java.util.HashMap;
import java.util.Map;

public class ImageResponseCommand {

    private Map<String, String> commandMap = new HashMap<>();

    public ImageResponseCommand() {
        commandMap.put("!hello", "Hi! I am Izumi!");
        commandMap.put("!wah","https://i.imgur.com/ZTwzGUb.png");
        commandMap.put("!kys","https://i.imgur.com/3vqiDoD.jpg");
        commandMap.put("!pout","https://i.imgur.com/QomCkgB.png");
        commandMap.put("!rip","https://i.imgur.com/ZBogXyO.png");
        commandMap.put("!friends","https://i.imgur.com/tEU2Cvc.png");
        commandMap.put("!petpet","https://i.imgur.com/xzhbyUp.png");
        commandMap.put("!fml", "https://i.imgur.com/1lhYUS0.jpg");
        commandMap.put("!tbc","https://i.imgur.com/G7rztN2.png");
        commandMap.put("!hmm","https://i.imgur.com/08Wy4Mi.jpg");
        commandMap.put("!woofus","https://i.imgur.com/mg8J5ZU.png");
        commandMap.put("!ezmodo","https://i.imgur.com/SdKSZq9.png");
        commandMap.put("!drool","https://i.imgur.com/JwHLgZ0.png");
    }

    public String getImage(String command) {
        return commandMap.get(command);
    }
}
