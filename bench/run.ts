/** run.ts — bench runner entry point. Day 1 scaffold; baselines wired Day 2. */

const args = process.argv.slice(2);
const smoke = args.includes('--smoke');

console.log(`Bench runner — ${smoke ? 'smoke (50 req/bucket)' : 'full (5000 req/bucket × 3 runs × 4 baselines)'}`);
console.log('Day 1: scaffold only. Baselines (A: raw, B: provider+caching, C: CF AI Gateway, D: ClawPipe) wire on Day 2.');
console.log('See METHODOLOGY.md (lands Day 4) for the full procedure.');
process.exit(0);
