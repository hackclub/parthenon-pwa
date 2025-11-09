

// slackBot.js
import { WebClient } from '@slack/web-api';

// Put your bot token (xoxb-...) in an environment variable
// e.g. SLACK_BOT_TOKEN="xoxb-123..." node index.js
const slackToken = process.env.SLACK_BOT_TOKEN;

if (!slackToken) {
  throw new Error('Missing SLACK_BOT_TOKEN env variable');
}

// Create a Slack Web API client
const slackClient = new WebClient(slackToken);

/**
 * Send a message to a Slack channel.
 *
 * @param {string} channel - The channel ID or name (e.g. "C0123456789" or "#general")
 * @param {string} text - The message text
 * @returns {Promise<void>}
 */

export async function sendSlackMessage(channel: string, text: string) {
  try {
    await slackClient.chat.postMessage({
      channel,
      text,
    });
    console.log(`Message sent to ${channel}: ${text}`);
  } catch (error) {
    console.error('Error sending Slack message:', error);
  }
}