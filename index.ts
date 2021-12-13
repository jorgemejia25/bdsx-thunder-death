import { Player } from "bdsx/bds/player";
import { bedrockServer } from "bdsx/launcher";
import { command } from "bdsx/command";
import { events } from "bdsx/event";

console.log("[plugin:ThunderDeath] allocated");

events.serverOpen.on(() => {
  console.log("[plugin:ThunderDeath] launching");
});

events.entityDie.on(({ entity }) => {
  bedrockServer.executeCommand(
    `summon lightning_bolt ${entity.getPosition().x} ${
      entity.getPosition().y
    } ${entity.getPosition().z}`
  );
});

events.serverClose.on(() => {
  console.log("[plugin:ThunderDeath] closed");
});
