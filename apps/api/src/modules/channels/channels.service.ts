import { ChannelType } from '@ai-dashboard/shared';

export function listSupportedChannels() {
  return [ChannelType.Web, ChannelType.Api, ChannelType.Slack, ChannelType.WhatsApp];
}
