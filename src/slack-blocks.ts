export const SLACK_ASK_PROJECT = {
  blocks: [
    {
      type: "section",
      text: {
        type: "plain_text",
        text: "You need to pick a project to start working on.",
        emoji: true,
      },
    },
    {
      type: "divider",
    },
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: "Pick an item:",
      },
      accessory: {
        type: "static_select",
        placeholder: {
          type: "plain_text",
          text: "Select a project",
          emoji: true,
        },
        options: [
          {
            text: {
              type: "plain_text",
              text: "*plain_text option 0*",
              emoji: true,
            },
            value: "value-0",
          },
          {
            text: {
              type: "plain_text",
              text: "*plain_text option 1*",
              emoji: true,
            },
            value: "value-1",
          },
          {
            text: {
              type: "plain_text",
              text: "*plain_text option 2*",
              emoji: true,
            },
            value: "value-2",
          },
        ],
        action_id: "static_select-action",
      },
    },
    {
      type: "divider",
    },
    {
      type: "actions",
      elements: [
        {
          type: "button",
          text: {
            type: "plain_text",
            text: "Save",
            emoji: true,
          },
          value: "click_me_123",
          action_id: "actionId-0",
        },
      ],
    },
  ],
};
