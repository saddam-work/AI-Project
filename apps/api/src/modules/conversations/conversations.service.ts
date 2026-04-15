import { createAIService } from '@ai-dashboard/ai-core';

const ai = createAIService();

export async function runConversationTurn(input: {
  model: string;
  prompt: string;
  context?: string;
  temperature?: number;
}) {
  const response = await ai.generateResponse({
    model: input.model,
    prompt: input.prompt,
    context: input.context,
    temperature: input.temperature ?? 0.4
  });

  return {
    output: response.text,
    provider: response.provider,
    tokens: response.tokens,
    latencyMs: response.latencyMs
  };
}
