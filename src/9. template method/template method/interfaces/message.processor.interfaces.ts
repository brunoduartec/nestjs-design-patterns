import { MessageDataDto } from "src/shared/dtos/message-data.dto";
import { MessageSentResponseDto } from "src/shared/dtos/message.sent.dto";

export interface MessageProcessor {
  templateMethod(message: MessageDataDto): Promise<MessageSentResponseDto>;
}
