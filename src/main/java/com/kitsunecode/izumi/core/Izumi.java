package com.kitsunecode.izumi.core;

import discord4j.core.DiscordClient;
import discord4j.core.DiscordClientBuilder;
import discord4j.core.event.domain.lifecycle.ReadyEvent;
import discord4j.core.event.domain.message.MessageCreateEvent;

import com.kitsunecode.izumi.handler.MessageHandler;

import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

public class Izumi {

    public static void main(String[] args) {

        String token = "";
        Properties prop = new Properties();

        try (InputStream in = Izumi.class.getClassLoader().getResourceAsStream("token.properties")) {
            prop.load(in);
            token = prop.getProperty("token");
        } catch (IOException ex) {
            ex.printStackTrace();
        }


        final DiscordClient client = new DiscordClientBuilder(token).build();

        client.getEventDispatcher().on(ReadyEvent.class)
                .subscribe(ready -> System.out.println("Logged in as " + ready.getSelf().getUsername()));

        client.getEventDispatcher().on(MessageCreateEvent.class)
                .subscribe(new MessageHandler());

        client.login().block();
    }
}