package com.kitsunecode.izumi.handler;

import discord4j.core.event.domain.message.MessageCreateEvent;
import discord4j.core.object.Embed;
import discord4j.core.object.entity.Message;
import discord4j.core.object.entity.MessageChannel;

import java.util.Optional;
import java.util.function.Consumer;

import com.kitsunecode.izumi.command.ImageResponseCommand;

public class MessageHandler implements Consumer<MessageCreateEvent> {

    public void accept(MessageCreateEvent pEvent) {
        System.out.println("Event registered");
        Message message = pEvent.getMessage();

        Optional<String> msg = message.getContent();
        MessageChannel channel = message.getChannel().block();

        if (msg.isPresent() && msg.get().startsWith("!")) {
            if (msg.get().equals("!help")) {
                channel.createMessage("Available Commands: !kys, !wah, !pout, !rip, !friends, !petpet, !fml, !tbc, !hmm, !woofus, !ezmodo").block();
            }
            String response = new ImageResponseCommand().getImage(msg.get());
            if (response != null) {
                channel.createEmbed(spec -> {
                   spec.setImage(response);
                }).block();
            }
        }
    }
}
