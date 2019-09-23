import path from "path";
import getTimestamp from "./getTimestamp";
import { camelCase } from "change-case";
const CWD = process.cwd();

const getZipFileName = () => {
  const cwdDirName = path.basename(CWD) || "build";

  return `${camelCase(cwdDirName)}-${getTimestamp()}.zip`;
};

export default getZipFileName;
