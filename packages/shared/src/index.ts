export enum ChannelType {
  Web = 'web',
  Api = 'api',
  Slack = 'slack',
  WhatsApp = 'whatsapp'
}

export type ModelFamily = 'claude' | 'gpt';

export type AgentConfig = {
  id?: string;
  name: string;
  systemPrompt: string;
  model: string;
  modelFamily: ModelFamily;
  temperature: number;
  memoryEnabled: boolean;
  allowedChannels: ChannelType[];
};
