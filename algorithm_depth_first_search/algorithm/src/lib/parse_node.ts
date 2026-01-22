import {FileSystemNode} from "@/depth_first_search";
import {resolve, join} from "node:path";
import {existsSync, readdirSync} from "node:fs";

export const parseNode = (rootPath: string): FileSystemNode => {
  const absolutePath = resolve(join(process.cwd(), rootPath));
  if (!existsSync(absolutePath)) throw new Error("Path does not exist");
  const rootName = absolutePath.split("/").pop() as string;
  const root = {name: rootName, isDirectory: true, children: []};
  parseNodeInternal(absolutePath, root);
  return root;
};

const parseNodeInternal = (
  dirPath: string,
  parentDirNode: FileSystemNode,
): void => {
  readdirSync(dirPath, {withFileTypes: true}).forEach(file => {
    const node = {
      name: file.name,
      isDirectory: file.isDirectory(),
      children: [],
    };
    if (file.isDirectory()) {
      parseNodeInternal(join(dirPath, file.name), node);
    }
    parentDirNode.children.push(node);
  });
};
