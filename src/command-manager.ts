export type Command<T> = (args: string[], ctx: T) => void;

export class CommandManager {
  constructor(
    private readonly commands: Record<string, Command<unknown>> = {},
    private readonly prefix = "!",
  ) {}

  isValidCommand(cmd: string): boolean {
    return cmd.startsWith(this.prefix);
  }

  handleCommand<T>(cmd: string, ctx: T) {
    const args = cmd.split(" ");

    // remove prefix
    const command = args[0].substring(1);

    const commandInterface = this.commands[command];

    if (!commandInterface) {
      throw new Error("command not found.");
    }

    commandInterface(args.splice(1), ctx);
  }
}
