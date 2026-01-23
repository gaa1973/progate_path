export interface FileSystemNode {
  name: string;
  isDirectory: boolean;
  children: FileSystemNode[];
}

export const depthFirstSearch = (
  root: FileSystemNode,
  target: string,
): boolean => {
  const stack: FileSystemNode[] = [root];

  while (stack.length > 0) {
    const current = stack.pop() as FileSystemNode;

    if (!current.isDirectory && current.name === target) return true;

    if (current.isDirectory && current.children?.length) {
      for (let i = current.children.length - 1; i >= 0; i -= 1) {
        stack.push(current.children[i]);
      }
    }
  }

  return false;
};
