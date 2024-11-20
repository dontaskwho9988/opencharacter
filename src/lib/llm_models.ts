type Model = {
    id: string;
    name: string;
    paid: boolean;
};

type Models = {
    [key: string]: Model;
};

export const models: Models = {
    "DAW API - gpt-4o-mini": {
        id: "DAW API - gpt-4o-mini",
        name: "DAW API - gpt-4o-mini",
        paid: false
    },
    "DAW API - gpt-3.5-turbo": {
        id: "DAW API - gpt-3.5-turbo",
        name: "DAW API - gpt-3.5-turbo",
        paid: false
    },
    "DAW API - gpt-4o-free": {
        id: "DAW API - gpt-4o-free",
        name: "DAW API - gpt-4o-free",
        paid: false
    },
    "DAW API - gemini-pro": {
        id: "DAW API - gemini-pro",
        name: "DAW API - gemini-pro",
        paid: false
    },
    "DAW API - llama-3.1-405b-instruct-free": {
        id: "DAW API - llama-3.1-405b-instruct-free",
        name: "DAW API - llama-3.1-405b-instruct-free",
        paid: false
    },
    "mistralai/ministral-3b": {
        id: "mistralai/ministral-3b",
        name: "mistralai/ministral-3b",
        paid: false,
    },
    "mistralai/ministral-8b": {
        id: "mistralai/ministral-8b",
        name: "mistralai/ministral-8b",
        paid: false,
    },
    "gryphe/mythomax-l2-13b": {
        id: "gryphe/mythomax-l2-13b",
        name: "MythomaxL213B",
        paid: false
    },
    "microsoft/wizardlm-2-7b": {
        id: "microsoft/wizardlm-2-7b",
        name: "microsoft/wizardlm-2-7b",
        paid: false
    },
    "google/gemini-flash-1.5-8b": {
        id: "google/gemini-flash-1.5-8b",
        name: "google/gemini-flash-1.5-8b",
        paid: false
    },
    "mistralai/mistral-7b-instruct": {
        id: "mistralai/mistral-7b-instruct",
        name: "mistralai/mistral-7b-instruct",
        paid: false
    },
    "google/gemma-2-9b-it": {
        id: "google/gemma-2-9b-it",
        name: "google/gemma-2-9b-it",
        paid: false
    },
    "liquid/lfm-40b:free": {
        id: "liquid/lfm-40b:free",
        name: "liquid/lfm-40b:free",
        paid: false,
    },
    "nousresearch/hermes-3-llama-3.1-405b:free": {
        id: "nousresearch/hermes-3-llama-3.1-405b:free",
        name: "nousresearch/hermes-3-llama-3.1-405b:free",
        paid: false,
    },
    "meta-llama/llama-3.1-405b-instruct:free": {
        id: "meta-llama/llama-3.1-405b-instruct:free",
        name: "meta-llama/llama-3.1-405b-instruct:free",
        paid: false,
    },
    "meta-llama/llama-3.1-70b-instruct:free": {
        id: "meta-llama/llama-3.1-70b-instruct:free",
        name: "meta-llama/llama-3.1-70b-instruct:free",
        paid: false,
    },
    "qwen/qwen-2-7b-instruct:free": {
        id: "qwen/qwen-2-7b-instruct:free",
        name: "qwen/qwen-2-7b-instruct:free",
        paid: false,
    },
    "microsoft/phi-3-mini-128k-instruct:free": {
        id: "microsoft/phi-3-mini-128k-instruct:free",
        name: "microsoft/phi-3-mini-128k-instruct:free",
        paid: false
    },
    "gryphe/mythomist-7b:free": {
        id: "gryphe/mythomist-7b:free",
        name: "gryphe/mythomist-7b:free",
        paid: false
    },
    "meta-llama/llama-3.2-3b-instruct": {
        id: "meta-llama/llama-3.2-3b-instruct",
        name: "meta-llama/llama-3.2-3b-instruct",
        paid: false,
    },
    "meta-llama/llama-3.2-1b-instruct": {
        id: "meta-llama/llama-3.2-1b-instruct",
        name: "meta-llama/llama-3.2-1b-instruct",
        paid: false,
    },
    "meta-llama/llama-3.1-8b-instruct": {
        id: "meta-llama/llama-3.1-8b-instruct",
        name: "meta-llama/llama-3.1-8b-instruct",
        paid: false,
    },
    "qwen/qwen-2-7b-instruct": {
        id: "qwen/qwen-2-7b-instruct",
        name: "qwen/qwen-2-7b-instruct",
        paid: false,
    },
    "mistralai/mistral-7b-instruct-v0.3": {
        id: "mistralai/mistral-7b-instruct-v0.3",
        name: "mistralai/mistral-7b-instruct-v0.3",
        paid: false
    },
    "meta-llama/llama-3-8b-instruct": {
        id: "meta-llama/llama-3-8b-instruct",
        name: "meta-llama/llama-3-8b-instruct",
        paid: false
    },
    "mistralai/mistral-nemo": {
        id: "mistralai/mistral-nemo",
        name: "mistralai/mistral-nemo",
        paid: true,
    },
    "meta-llama/llama-3.1-70b-instruct": {
        id: "meta-llama/llama-3.1-70b-instruct",
        name: "meta-llama/llama-3.1-70b-instruct",
        paid: true
    },
    "nousresearch/hermes-3-llama-3.1-70b": {
        id: "nousresearch/hermes-3-llama-3.1-70b",
        name: "nousresearch/hermes-3-llama-3.1-70b",
        paid: true
    },
    "deepseek/deepseek-chat": {
        id: "deepseek/deepseek-chat",
        name: "deepseek/deepseek-chat",
        paid: true
    },
    "microsoft/phi-3.5-mini-128k-instruct": {
        id: "microsoft/phi-3.5-mini-128k-instruct",
        name: "microsoft/phi-3.5-mini-128k-instruct",
        paid: true
    },
    "ai21/jamba-1-5-mini": {
        id: "ai21/jamba-1-5-mini",
        name: "ai21/jamba-1-5-mini",
        paid: true
    },
    "mistralai/codestral-mamba": {
        id: "mistralai/codestral-mamba",
        name: "mistralai/codestral-mamba",
        paid: true
    },
    "openai/gpt-4o-mini": {
        id: "openai/gpt-4o-mini",
        name: "openai/gpt-4o-mini",
        paid: true,
    },
    "anthropic/claude-3-haiku": {
        id: "anthropic/claude-3-haiku",
        name: "anthropic/claude-3-haiku",
        paid: true,
    },
    "cognitivecomputations/dolphin-mixtral-8x22b": {
        id: "cognitivecomputations/dolphin-mixtral-8x22b",
        name: "cognitivecomputations/dolphin-mixtral-8x22b",
        paid: true,
    },
    "google/gemma-2-27b-it": {
        id: "google/gemma-2-27b-it",
        name: "google/gemma-2-27b-it",
        paid: true,
    },
    "mistralai/mixtral-8x7b-instruct": {
        id: "mistralai/mixtral-8x7b-instruct",
        name: "mistralai/mixtral-8x7b-instruct",
        paid: true,
    },
    "gryphe/mythomist-7b": {
        id: "gryphe/mythomist-7b",
        name: "gryphe/mythomist-7b",
        paid: true,
    },
    "anthropic/claude-instant-1:beta": {
        id: "anthropic/claude-instant-1:beta",
        name: "anthropic/claude-instant-1:beta",
        paid: true
    },
    "nvidia/llama-3.1-nemotron-70b-instruct": {
        id: "nvidia/llama-3.1-nemotron-70b-instruct",
        name: "nvidia/llama-3.1-nemotron-70b-instruct",
        paid: true,
    },
    "thedrummer/rocinante-12b": {
        id: "thedrummer/rocinante-12b",
        name: "thedrummer/rocinante-12b",
        paid: true
    },
    "eva-unit-01/eva-qwen-2.5-14b": {
        id: "eva-unit-01/eva-qwen-2.5-14b",
        name: "eva-unit-01/eva-qwen-2.5-14b",
        paid: true
    },
    "mistralai/mistral-tiny": {
        id: "mistralai/mistral-tiny",
        name: "mistralai/mistral-tiny",
        paid: true,
    },
    "mistralai/mistral-small": {
        id: "mistralai/mistral-small",
        name: "mistralai/mistral-small",
        paid: true,
    }
};

export const getModelIds = (): string[] => Object.keys(models);

export const getModelArray = (): Model[] => Object.values(models);

export const isValidModel = (modelName: string): boolean => modelName in models;

export const isPaidModel = (modelName: string): boolean => {
    const model = models[modelName];
    return model ? model.paid : false;
};

export const getPaidModelIds = (): string[] => 
    Object.keys(models).filter(id => models[id].paid);

export const getPaidModelArray = (): Model[] => 
    Object.values(models).filter(model => model.paid);

export const getFreeModelIds = (): string[] => 
    Object.keys(models).filter(id => !models[id].paid);

export const getFreeModelArray = (): Model[] => 
    Object.values(models).filter(model => !model.paid);

export const getModelsByType = (paid: boolean): Model[] => 
    Object.values(models).filter(model => model.paid === paid);

// Add function to check if model is a DAW API model
export const isDAWModel = (modelName: string): boolean => {
    return modelName.startsWith('DAW API -');
};

// Get all DAW API models
export const getDAWModelIds = (): string[] => 
    Object.keys(models).filter(id => isDAWModel(id));

// Get free DAW API models
export const getFreeDAWModelIds = (): string[] =>
    Object.keys(models).filter(id => isDAWModel(id) && !models[id].paid);