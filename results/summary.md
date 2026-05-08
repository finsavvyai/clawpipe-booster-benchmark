# Booster Benchmark — Summary

**Runs included:** 1

## Per-bucket × per-baseline

| Bucket | Baseline | N | Errors | Skip rate (95% CI) | Cache rate | Cost $/1K | p50 ms | p95 ms |
|---|---|---|---|---|---|---|---|---|
| A | A | 100 | 0 | 0 (0–0.037) | 0 | $4 | 179 | 282 |
| A | B | 100 | 0 | 0 (0–0.037) | 0.3 | $1.68 | 188 | 278 |
| A | C | 100 | 0 | 0 (0–0.037) | 0.25 | $2.25 | 183 | 285 |
| A | D | 100 | 0 | 0.29 (0.2101–0.3854) | 0.21 | $0.9 | 143 | 270 |
| B | A | 100 | 0 | 0 (0–0.037) | 0 | $4 | 170 | 281 |
| B | B | 100 | 0 | 0 (0–0.037) | 0.3 | $1.68 | 154 | 287 |
| B | C | 100 | 0 | 0 (0–0.037) | 0.25 | $2.25 | 148 | 273 |
| B | D | 100 | 0 | 0.29 (0.2101–0.3854) | 0.21 | $0.9 | 151 | 260 |
| C | A | 100 | 0 | 0 (0–0.037) | 0 | $4 | 194 | 286 |
| C | B | 100 | 0 | 0 (0–0.037) | 0.3 | $1.68 | 166 | 270 |
| C | C | 100 | 0 | 0 (0–0.037) | 0.25 | $2.25 | 177 | 289 |
| C | D | 100 | 0 | 0.29 (0.2101–0.3854) | 0.21 | $0.9 | 168 | 282 |

## Real-vs-synthetic split per bucket (Baseline D rows)

| Bucket | Real source rows | Synthetic rows | Synth share |
|---|---|---|---|
| A | 55 | 45 | 0.45 |
| B | 100 | 0 | 0 |
| C | 100 | 0 | 0 |

## Decision-relevant deltas (D vs B, D vs C, per bucket)

| Bucket | D vs A (% saved) | **D vs B (% saved)** | D vs C (% saved) |
|---|---|---|---|
| A | 77.5% | **46.4286%** | 60% |
| B | 77.5% | **46.4286%** | 60% |
| C | 77.5% | **46.4286%** | 60% |

Decision rule applies to **Bucket A delta vs Baseline B** — see DECISION-RULE.md.
