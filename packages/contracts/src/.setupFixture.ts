import runtime from "../environment/runtime.ts";

// deno-lint-ignore require-await
export async function setupFixture() {
  const [owner, acc1, acc2] = runtime.clients;

  return {
    owner,
    acc1,
    acc2,
  };
}
