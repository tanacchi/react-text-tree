"use client";

import Tree from "./lib/components/Tree";
import BulletPoint from "./lib/tree/BulletPoint";

export default function Home() {
  const tree = new BulletPoint("1", "root", true, 0, null, [
    new BulletPoint("1.1", "child1", true, 0, "1", []),
    new BulletPoint("1.2", "child2", true, 0, "1", [
      new BulletPoint("1.2.1", "child2-1", true, 0, "1.2", [
        new BulletPoint("1.2.1.1", "child2-1-1", true, 0, "1.2.1", []),
      ]),
      new BulletPoint("1.2.2", "child2-2", true, 0, "1.2", []),
    ]),
    new BulletPoint("1.3", "child3", true, 0, "1", []),
  ]);

  // @ts-ignore
  window.tree = tree;

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Tree root={tree} onClick={() => {}} onChange={() => {}} />
      </main>
    </div>
  );
}
