import { Client } from "discord.js";
import chalk from 'chalk'
import interactionHandler from "../../Utilities/interactionHandler.js";

export default {
  event: "ready",
  once: true,
  /**
  * @param {Client} client
  */
  execute(client) {
    console.log(`[${chalk.blue("INFO")}] - Bot is Ready, Logged in as: ${chalk.greenBright(client.user.tag)}`);

    // Start the Interaction Handler after Bot is Ready to have Access to all Guild ID's
    interactionHandler(client)
  },
};

