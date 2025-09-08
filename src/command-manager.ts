export type Command<T> = (args: string[], ctx: T) => void | PromiseLike<void>;

export class CommandManager<T> {
  constructor(
    private readonly commands: Record<string, Command<T>> = {},
    private readonly prefix = "!",
  ) {}

  isValidCommand(cmd: string): boolean {
    return cmd.startsWith(this.prefix);
  }

  async handleCommand(cmd: string, ctx: T) {
    const args = cmd.split(" ");

    // remove prefix
    const command = args[0].substring(1);

    const commandInterface = this.commands[command];

    if (!commandInterface) {
      throw new Error("command not found.");
    }

    await commandInterface(args.splice(1), ctx);
  }
}
