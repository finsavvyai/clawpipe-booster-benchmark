/** pull-all.ts — orchestrate corpus pulls for all three buckets. */

import { mkdirSync } from 'node:fs';
import { join } from 'node:path';

const CORPORA = join(import.meta.dirname, '..', 'corpora');

mkdirSync(join(CORPORA, 'a'), { recursive: true });
mkdirSync(join(CORPORA, 'b'), { recursive: true });
mkdirSync(join(CORPORA, 'c'), { recursive: true });

console.log('Day 1 scaffold complete. Per-source pull scripts land on Day 2.');
console.log('Targets per bucket:');
console.log('  A (agent/coding): SWE-bench 1500 + Aider 1000 + OpenHands 1000 + synth 1500 = 5000');
console.log('  B (chat/RAG):     LMSYS-Chat-1M sample 5000');
console.log('  C (extraction):   MMLU 2500 + doc-parse 1500 + classification 1000 = 5000');
console.log('Each pull script will verify license + write metadata + per-row hashes only.');
