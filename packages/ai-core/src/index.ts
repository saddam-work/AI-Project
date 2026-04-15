export type GenerateResponseInput = {
  model: string;
  prompt: string;
  context?: string;
  temperature?: number;
};

export type GenerateResponseOutput = {
  provider: 'anthropic' | 'openai';
  text: string;
  tokens: number;
  latencyMs: number;
};

export interface AIProvider {
  supports(model: string): boolean;
  generateResponse(input: GenerateResponseInput): Promise<GenerateResponseOutput>;
}

class AnthropicProvider implements AIProvider {
  supports(model: string) {
    return model.startsWith('claude');
  }

  async generateResponse(input: GenerateResponseInput): Promise<GenerateResponseOutput> {
    return {
      provider: 'anthropic',
      text: `[Claude mocked] ${input.prompt}`,
      tokens: 42,
      latencyMs: 280
    };
  }
}

class OpenAIProvider implements AIProvider {
  supports(model: string) {
    return model.startsWith('gpt');
  }

  async generateResponse(input: GenerateResponseInput): Promise<GenerateResponseOutput> {
    return {
      provider: 'openai',
      text: `[GPT mocked] ${input.prompt}`,
      tokens: 37,
      latencyMs: 240
    };
  }
}

export class AIService {
  constructor(private readonly providers: AIProvider[]) {}

  async generateResponse(input: GenerateResponseInput) {
    const provider = this.providers.find((p) => p.supports(input.model));

    if (!provider) {
      throw new Error(`No provider configured for model: ${input.model}`);
    }

    return provider.generateResponse(input);
  }
}

export function createAIService() {
  return new AIService([new AnthropicProvider(), new OpenAIProvider()]);
}
