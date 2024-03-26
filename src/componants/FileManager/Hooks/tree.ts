const useTraverse = () => {
  const insertNode = (tree, folderId, item, isFolder) => {
    if (tree.id == folderId && tree.isFolder) {
      tree.items.push({
        id: new Date().getTime().toLocaleString(),
        name: item,
        isFolder: isFolder,
        items: [],
      });
      return tree;
    }

    let values = [];
    values = tree.items.map((element) => {
      return insertNode(element, folderId, item, isFolder);
    });

    return { ...tree, items: values };
  };

  return { insertNode };
};

export default useTraverse;
