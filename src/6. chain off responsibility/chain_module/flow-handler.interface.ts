import { FlowContext } from "./flow-context";

export interface FlowHandler {
    process(context: FlowContext): Promise<FlowContext>;
  }