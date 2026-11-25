import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My grandmother's Wi-Fi password is 'JesusSaves123'. She changes it every Easter and forgets it by Christmas.";

if (LINE.length < 1 || LINE.length > 280 || LINE.trim() === "") {
  throw new Error("entry must be 1-280 non-whitespace characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
