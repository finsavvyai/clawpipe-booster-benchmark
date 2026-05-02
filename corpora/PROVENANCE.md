# Corpus Provenance

Each source listed with origin URL, license, sample size pulled, and the
script that pulls it.

## Bucket A — Agent / coding (5,000 requests target)

| Source | URL | License | Sample | Pull script |
|---|---|---|---|---|
| SWE-bench traces | https://huggingface.co/datasets/princeton-nlp/SWE-bench | CC-BY-4.0 | 1,500 | `scripts/pull-swebench.ts` |
| Aider conversation logs | https://github.com/Aider-AI/aider/tree/main/benchmark | Apache-2.0 | 1,000 | `scripts/pull-aider.ts` |
| OpenHands trajectories | https://github.com/All-Hands-AI/OpenHands | MIT | 1,000 | `scripts/pull-openhands.ts` |
| Synthetic Claude Code-style | self-generated against open-source repos | n/a | 1,500 | `scripts/synth-codeagent.ts` |

## Bucket B — SaaS chatbot + RAG (5,000 requests target)

| Source | URL | License | Sample | Pull script |
|---|---|---|---|---|
| LMSYS Chatbot Arena | https://huggingface.co/datasets/lmsys/lmsys-chat-1m | LMSYS-Chat-1M (research-use, signed) | 5,000 | `scripts/pull-lmsys.ts` |

> Note: LMSYS-Chat-1M requires a HuggingFace agreement-to-terms gate. The
> pull script will check for HF_TOKEN and fail clearly if the user has not
> accepted the dataset's terms.

## Bucket C — Structured extraction (5,000 requests target)

| Source | URL | License | Sample | Pull script |
|---|---|---|---|---|
| MMLU subsets | https://huggingface.co/datasets/cais/mmlu | MIT | 2,500 | `scripts/pull-mmlu.ts` |
| Public document-parsing | TBD (PubLayNet / DocBank candidates) | varies | 1,500 | `scripts/pull-docparse.ts` |
| Classification tasks | hand-curated from public datasets | varies | 1,000 | `scripts/pull-classification.ts` |

## License compliance

Each pull script verifies the dataset's license is compatible with public
benchmark redistribution before writing to disk. No corpus content is
committed to this repo — only metadata + per-row hashes — to respect
upstream licensing.

The full corpora can be regenerated from the pull scripts on any machine
with the relevant API tokens.

## Reproducibility seed

Random seed for sampling is fixed and stored in `bench/seed.txt`. Same
seed → same 15,000 requests on any reproduction.
