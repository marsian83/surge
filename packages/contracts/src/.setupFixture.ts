import runtime from "../environment/runtime.ts";

export async function setupFixture() {
  const [owner, acc1, acc2] = runtime.clients;

  return {
    owner,
    acc1,
    acc2,
  };
}
