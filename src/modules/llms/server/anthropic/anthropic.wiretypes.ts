export namespace AnthropicWire {
  export namespace Complete {
    export interface Request {
      messages: RequestMessage[];
      system: string;
      model: string;
      max_tokens?: number;
      stop_sequences?: string[];
      stream?: boolean;
      temperature?: number;
      top_k?: number;
      top_p?: number;
      metadata?: {
        user_id?: string;
      };
    }
    export interface RequestMessage {
      role: 'assistant' | 'user';
      content: RequestMessageContent[];
    }
    export interface RequestMessageContent {
      type: 'text' | 'image';
      text?: string;
      source?: {
        type: 'base64';
        media_type: 'image/jpeg' | 'image/png' | 'image/gif' | 'image/webp';
        data: string;
      };
    }
    export interface Response {
      id: string;
      type: 'message';
      role: 'assistant';
      content: ResponseMessageContent[];
      model: string;
      stop_reason: 'end_turn' | 'max_tokens' | 'stop_sequence';
      stop_sequence: string | null;
      usage: {
        input_tokens: number;
        output_tokens: number;
      };
    }

    export interface ResponseMessageContent {
      type: 'text';
      text: string;
    }

    export interface ResponseStreamingChunk {
      type: 'message_start' | 'content_block_start' | 'content_block_delta' | 'content_block_stop' | 'message_delta' | 'message_stop' | 'ping' | 'error';
      message?: PartialMessage;
      index?: number;
      content_block?: ContentBlock;
      delta?: MessageDelta;
      error?: {
        type: string;
        message: string;
      };
    }

    export interface PartialMessage {
      id: string;
      type: 'message';
      role: 'assistant';
      content: ResponseMessageContent[];
      model: string;
      stop_reason: 'end_turn' | 'max_tokens' | 'stop_sequence' | null;
      stop_sequence: string | null;
      usage: {
        input_tokens: number;
        output_tokens: number;
      };
    }

    export interface ContentBlock {
      type: 'text';
      text: string;
    }

    export interface MessageDelta {
      stop_reason?: 'end_turn' | 'max_tokens' | 'stop_sequence';
      stop_sequence?: string | null;
      usage?: {
        output_tokens: number;
      };
      type?: 'text_delta';
      text?: string;
    }
  }
}