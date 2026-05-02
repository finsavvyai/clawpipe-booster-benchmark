# Corpus Provenance

Each source listed with origin URL, license, sample size pulled, and the
script that pulls it.

## Bucket A — Agent / coding (5,000 requests target)

| Source | URL | License | Target | Status |
|---|---|---|---|---|
| SWE-bench_Lite | https://huggingface.co/datasets/princeton-nlp/SWE-bench_Lite | CC-BY-4.0 | 300 (max in Lite) | Day 2 morning — got rate-limited Day 1 evening |
| Aider exercism | https://github.com/Aider-AI/aider | Apache-2.0 | 1,000 | Day 2 — script stub |
| OpenHands trajectories | https://github.com/All-Hands-AI/OpenHands | MIT | 1,000 | Day 2 — script stub |
| Synthetic Claude Code-style | self-generated, deterministic seed | n/a | 1,500 (got 1500) | **Done Day 1** — `corpora/a/synth-codeagent.jsonl` |
| Synth top-up to 5K | bump synth count if SWE-bench_Lite + Aider + OpenHands < 3500 | n/a | up to 2,200 | Day 2 morning decision |

Bucket A target stays 5,000. Source mix may shift toward synthetic if upstream pulls underdeliver. That trade-off is honest: synthetic is biased toward Booster's strong patterns, so a synth-heavy bucket overstates the skip rate. Day 2 must surface the real-vs-synthetic split in the published results.

## Bucket B — SaaS chatbot + RAG (5,000 requests target)

| Source | URL | License | Sample | Pull script |
|---|---|---|---|---|
| LMSYS Chatbot Arena | https://huggingface.co/datasets/lmsys/lmsys-chat-1m | LMSYS-Chat-1M (research-use, signed) | 5,000 | `scripts/pull-lmsys.ts` |

> Note: LMSYS-Chat-1M requires a HuggingFace agreement-to-terms gate. The
> pull script will check for HF_TOKEN and fail clearly if the user has not
> accepted the dataset's terms.

## Bucket C — Structured extraction (5,000 requests target)

| Source | URL | License | Target | Status |
|---|---|---|---|---|
| MMLU (all 57 subjects) | https://huggingface.co/datasets/cais/mmlu | MIT | 2,500 (got 2500) | **Done Day 1** — `corpora/c/mmlu.jsonl` |
| Public document-parsing | TBD (PubLayNet / DocBank candidates) | varies | 1,500 | Day 2 — source TBD |
| Classification tasks | hand-curated from public datasets | varies | 1,000 | Day 2 |

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
